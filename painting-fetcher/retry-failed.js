/**
 * retry-failed.js
 *
 * Retries only the paintings that failed in the first run (from output/failed.json),
 * with much more conservative rate limiting and automatic retries on 429s.
 *
 * Usage: node retry-failed.js
 *
 * Produces:
 *   output/images/*        (new images added alongside the ones already downloaded)
 *   output/paintings-retry.ts  (entries for everything that succeeded this run)
 *   output/failed.json      (overwritten - only still-failing entries remain)
 */

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const OUTPUT_DIR = path.join(__dirname, "output");
const IMAGES_DIR = path.join(OUTPUT_DIR, "images");
const FAILED_PATH = path.join(OUTPUT_DIR, "failed.json");

const BASE_DELAY_MS = 2000;   // wait between paintings
const INNER_DELAY_MS = 800;   // wait between the search call and the imageinfo call
const MAX_RETRIES = 4;
const RETRY_BASE_BACKOFF_MS = 5000; // doubles each retry: 5s, 10s, 20s, 40s

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJsonSafe(url) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      headers: { "User-Agent": "canvas-confessions-fetcher/1.0 (personal project; contact: none)" },
    });

    if (res.status === 429) {
      const backoff = RETRY_BASE_BACKOFF_MS * Math.pow(2, attempt);
      console.log(`    rate limited, waiting ${backoff / 1000}s before retry ${attempt + 1}/${MAX_RETRIES}...`);
      await sleep(backoff);
      continue;
    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`Non-JSON response (first 80 chars): ${text.slice(0, 80)}`);
    }
  }
  throw new Error("Gave up after repeated 429s");
}

async function searchCommonsImage(title, artist) {
  const query = `${title} ${artist} painting`;
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
    query
  )}&srnamespace=6&format=json&srlimit=5`;

  const data = await fetchJsonSafe(searchUrl);
  const results = data?.query?.search || [];
  const fileResult = results.find((r) => /\.(jpe?g|png|tiff?)$/i.test(r.title));
  if (!fileResult) return null;

  await sleep(INNER_DELAY_MS);

  const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    fileResult.title
  )}&prop=imageinfo&iiprop=url&iiurlwidth=1600&format=json`;

  const infoData = await fetchJsonSafe(infoUrl);
  const pages = infoData?.query?.pages || {};
  const page = Object.values(pages)[0];
  const imageinfo = page?.imageinfo?.[0];

  return imageinfo?.thumburl || imageinfo?.url || null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, {
    headers: { "User-Agent": "canvas-confessions-fetcher/1.0 (personal project; contact: none)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.buffer();
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  if (!fs.existsSync(FAILED_PATH)) {
    console.error("output/failed.json not found. Run fetch-paintings.js first.");
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  const entries = JSON.parse(fs.readFileSync(FAILED_PATH, "utf-8"));
  console.log(`Retrying ${entries.length} paintings with slower, safer rate limiting...\n`);

  const successful = [];
  const stillFailed = [];

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const label = `[${i + 1}/${entries.length}] ${entry.title} — ${entry.artist}`;
    try {
      const imageUrl = await searchCommonsImage(entry.title, entry.artist);
      if (!imageUrl) {
        console.log(`${label}  -> NO MATCH FOUND`);
        stillFailed.push(entry);
        await sleep(BASE_DELAY_MS);
        continue;
      }

      const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
      const filename = `${entry.slug}${ext}`;
      const destPath = path.join(IMAGES_DIR, filename);

      await downloadImage(imageUrl, destPath);
      console.log(`${label}  -> OK (${filename})`);

      successful.push({ ...entry, image: `/paintings/${filename}` });
    } catch (err) {
      console.log(`${label}  -> ERROR: ${err.message}`);
      stillFailed.push(entry);
    }

    await sleep(BASE_DELAY_MS);
  }

  const tsContent = successful
    .map(
      (p) => `  {
    slug: "${p.slug}",
    title: ${JSON.stringify(p.title)},
    artist: ${JSON.stringify(p.artist)},
    year: "", // TODO: fill in
    image: "${p.image}",
    excerpt: ${JSON.stringify(p.excerpt)},
  },`
    )
    .join("\n");

  fs.writeFileSync(path.join(OUTPUT_DIR, "paintings-retry.ts"), tsContent + "\n");
  fs.writeFileSync(FAILED_PATH, JSON.stringify(stillFailed, null, 2));

  console.log("\n----------------------------------------");
  console.log(`Done. ${successful.length} succeeded this run, ${stillFailed.length} still failing.`);
  console.log(`New entries saved to: ${path.join(OUTPUT_DIR, "paintings-retry.ts")}`);
  console.log(`(paste these into your paintings.ts array alongside the originals)`);
  if (stillFailed.length) {
    console.log(`Still-failing list updated in: ${FAILED_PATH}`);
    console.log("You can run this script again to retry those once more.");
  }
}

main();
