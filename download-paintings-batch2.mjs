// download-paintings-batch2.mjs
// Batch 2: new list of paintings. Same rate-limit retry logic as before.
// Run with: node download-paintings-batch2.mjs

import fs from "fs";
import path from "path";

const OUTPUT_DIR = "./downloads-batch2";
const RETRY_DELAY_MS = 20000;
const MAX_RETRIES = 3;
const REQUEST_DELAY_MS = 1500;

// NOTE: Some wikiTitle guesses may not match exactly — if a painting fails,
// search Wikipedia manually, copy the exact page title from the URL, and edit it here.
const paintings = [
  { slug: "christs-entry-into-brussels-james-ensor", wikiTitle: "Christ's Entry into Brussels in 1889" },
  { slug: "masks-confronting-death-james-ensor", wikiTitle: "Masks Confronting Death" },
  { slug: "the-sleep-of-reason-produces-monsters-francisco-goya", wikiTitle: "The Sleep of Reason Produces Monsters" },
  { slug: "yard-with-lunatics-francisco-goya", wikiTitle: "Yard with Lunatics" },
  { slug: "the-bewitched-man-francisco-goya", wikiTitle: "The Bewitched Man" },
  { slug: "the-incantation-francisco-goya", wikiTitle: "The Incantation (Goya)" },
  { slug: "the-demon-seated-mikhail-vrubel", wikiTitle: "The Demon Seated" },
  { slug: "the-demon-downcast-mikhail-vrubel", wikiTitle: "The Demon Downcast" },
  { slug: "tamara-and-the-demon-mikhail-vrubel", wikiTitle: "Tamara and the Demon" },
  { slug: "jealousy-edvard-munch", wikiTitle: "Jealousy (Munch)" },
  { slug: "the-death-of-the-gravedigger-carlos-schwabe", wikiTitle: "The Death of the Gravedigger" },
  { slug: "the-bad-mothers-giovanni-segantini", wikiTitle: "The Bad Mothers" },
  { slug: "the-punishment-of-lust-giovanni-segantini", wikiTitle: "The Punishment of Luxury" },
  { slug: "die-schachspieler-friedrich-moritz-august-retzsch", wikiTitle: "Moritz Retzsch" }, // may need manual fix — no dedicated article likely
  { slug: "satan-watching-the-sleep-of-christ-joseph-noel-paton", wikiTitle: "Satan Watching the Sleep of Christ" },
  { slug: "the-favorite-omar-rayyan", wikiTitle: "Omar Rayyan" }, // likely no dedicated painting article — manual source needed
  { slug: "the-laughing-fool-jacob-cornelisz-van-oostsanen", wikiTitle: "Jacob Cornelisz van Oostsanen" }, // manual fix likely needed
];

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "CanvasConfessionsBot/1.0 (personal project)" },
      });
      if (res.status === 429 || res.status === 503) {
        console.log(`   Rate limited (${res.status}). Waiting ${RETRY_DELAY_MS / 1000}s before retry ${attempt}/${retries}...`);
        await sleep(RETRY_DELAY_MS);
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (err) {
      console.log(`   Attempt ${attempt} failed: ${err.message}`);
      if (attempt < retries) await sleep(RETRY_DELAY_MS);
    }
  }
  return null;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getImageUrl(wikiTitle) {
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    wikiTitle
  )}&prop=pageimages&format=json&pithumbsize=1600&redirects=1`;

  const res = await fetchWithRetry(apiUrl);
  if (!res) return null;

  const data = await res.json();
  const pages = data.query?.pages;
  if (!pages) return null;

  const page = Object.values(pages)[0];
  return page?.thumbnail?.source || null;
}

async function downloadImage(url, destPath) {
  const res = await fetchWithRetry(url);
  if (!res) return false;
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  return true;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const succeeded = [];
  const failed = [];

  for (const { slug, wikiTitle } of paintings) {
    console.log(`\nFetching: ${wikiTitle} (${slug})`);

    const imageUrl = await getImageUrl(wikiTitle);
    if (!imageUrl) {
      console.log(`   ❌ Could not find image for "${wikiTitle}"`);
      failed.push({ slug, wikiTitle, reason: "no image found" });
      await sleep(REQUEST_DELAY_MS);
      continue;
    }

    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const destPath = path.join(OUTPUT_DIR, `${slug}${ext}`);

    const ok = await downloadImage(imageUrl, destPath);
    if (ok) {
      console.log(`   ✅ Saved: ${destPath}`);
      succeeded.push(slug);
    } else {
      console.log(`   ❌ Failed to download image for "${wikiTitle}"`);
      failed.push({ slug, wikiTitle, reason: "download failed" });
    }

    await sleep(REQUEST_DELAY_MS);
  }

  console.log(`\n\n=== SUMMARY ===`);
  console.log(`✅ Downloaded: ${succeeded.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  if (failed.length > 0) {
    console.log(`\nFailed items (search Wikipedia manually, fix wikiTitle, re-run):`);
    failed.forEach((f) => console.log(`   - ${f.slug} ("${f.wikiTitle}") — ${f.reason}`));
  }
}

main();
