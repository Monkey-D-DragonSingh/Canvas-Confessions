/**
 * fetch-paintings.js
 *
 * Run this on YOUR machine (needs real internet access to Wikimedia Commons).
 *
 * What it does:
 *  1. Parses raw-list.txt ("Title — Artist — "quote"" lines, section headers ignored)
 *  2. Dedupes exact title+artist repeats
 *  3. For each painting, searches Wikimedia Commons for a matching image
 *  4. Downloads the image into ./output/images/<slug>.jpg
 *  5. Writes ./output/paintings.ts ready to drop into app/lib/paintings.ts
 *
 * Usage:
 *   npm install node-fetch@2
 *   node fetch-paintings.js
 *
 * After it finishes:
 *   - copy ./output/images/*  ->  your project's public/paintings/
 *   - copy ./output/paintings.ts -> your project's app/lib/paintings.ts
 *   - check the printed "FAILED / NEEDS REVIEW" list at the end and fix those by hand
 */

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const RAW_LIST_PATH = path.join(__dirname, "raw-list.txt");
const OUTPUT_DIR = path.join(__dirname, "output");
const IMAGES_DIR = path.join(OUTPUT_DIR, "images");
const DELAY_MS = 400; // be polite to the Wikimedia API

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseRawList(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const entries = [];
  const seen = new Set();

  for (const line of lines) {
    // Skip section headers like "I. The Infernal / Supernatural"
    if (/^[IVXLCDM]+\.\s/.test(line)) continue;

    // Match: Title — Artist — "quote"
    const match = line.match(/^(.+?)\s+—\s+(.+?)\s+—\s+[""](.+)[""]$/);
    if (!match) {
      console.warn("Could not parse line, skipping:", line);
      continue;
    }
    const [, title, artist, quote] = match;
    const key = `${title.trim().toLowerCase()}|${artist.trim().toLowerCase()}`;
    if (seen.has(key)) continue; // dedupe exact repeats
    seen.add(key);

    const slug = slugify(`${title}-${artist}`);
    entries.push({ title: title.trim(), artist: artist.trim(), excerpt: quote.trim(), slug });
  }

  return entries;
}

async function searchCommonsImage(title, artist) {
  const query = `${title} ${artist} painting`;
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
    query
  )}&srnamespace=6&format=json&srlimit=5`;

  const res = await fetch(searchUrl, {
    headers: { "User-Agent": "canvas-confessions-fetcher/1.0 (personal project)" },
  });
  const data = await res.json();
  const results = data?.query?.search || [];

  // Prefer results that look like image files
  const fileResult = results.find((r) => /\.(jpe?g|png|tiff?)$/i.test(r.title));
  if (!fileResult) return null;

  const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    fileResult.title
  )}&prop=imageinfo&iiprop=url&iiurlwidth=1600&format=json`;

  const infoRes = await fetch(infoUrl, {
    headers: { "User-Agent": "canvas-confessions-fetcher/1.0 (personal project)" },
  });
  const infoData = await infoRes.json();
  const pages = infoData?.query?.pages || {};
  const page = Object.values(pages)[0];
  const imageinfo = page?.imageinfo?.[0];

  return imageinfo?.thumburl || imageinfo?.url || null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, {
    headers: { "User-Agent": "canvas-confessions-fetcher/1.0 (personal project)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.buffer();
  fs.writeFileSync(destPath, buffer);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!fs.existsSync(RAW_LIST_PATH)) {
    console.error("raw-list.txt not found next to this script.");
    process.exit(1);
  }

  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const rawText = fs.readFileSync(RAW_LIST_PATH, "utf-8");
  const entries = parseRawList(rawText);
  console.log(`Parsed ${entries.length} unique paintings.\n`);

  const successful = [];
  const failed = [];

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const label = `[${i + 1}/${entries.length}] ${entry.title} — ${entry.artist}`;
    try {
      const imageUrl = await searchCommonsImage(entry.title, entry.artist);
      if (!imageUrl) {
        console.log(`${label}  -> NO MATCH FOUND`);
        failed.push(entry);
        await sleep(DELAY_MS);
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
      failed.push(entry);
    }

    await sleep(DELAY_MS);
  }

  // Write paintings.ts
  const tsContent = `export type Painting = {
  slug: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  excerpt: string;
  fullConfession?: string[];
  details?: {
    medium?: string;
    location?: string;
    description?: string;
  };
};

export const paintings: Painting[] = [
${successful
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
  .join("\n")}
];
`;

  fs.writeFileSync(path.join(OUTPUT_DIR, "paintings.ts"), tsContent);

  console.log("\n----------------------------------------");
  console.log(`Done. ${successful.length} succeeded, ${failed.length} failed/need review.`);
  console.log(`Images:     ${IMAGES_DIR}`);
  console.log(`paintings.ts: ${path.join(OUTPUT_DIR, "paintings.ts")}`);

  if (failed.length) {
    console.log("\nFAILED / NEEDS MANUAL REVIEW:");
    failed.forEach((f) => console.log(`  - ${f.title} — ${f.artist}`));
    fs.writeFileSync(
      path.join(OUTPUT_DIR, "failed.json"),
      JSON.stringify(failed, null, 2)
    );
    console.log(`\n(also saved to ${path.join(OUTPUT_DIR, "failed.json")})`);
  }
}

main();
