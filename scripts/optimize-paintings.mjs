import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';
import sharp from 'sharp';

assert(process.argv.slice(2).every((arg) => arg === '--write'), 'Usage: node scripts/optimize-paintings.mjs [--write]');
const write = process.argv.includes('--write');
const root = new URL('../', import.meta.url);
const directory = new URL('public/paintings/', root);
const context = { exports: {} };
const source = await readFile(new URL('app/lib/paintings.ts', root), 'utf8');
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
const { paintings } = context.exports;
const maxEdge = 2560;
const maxBytes = 1_000_000;
const results = [];
let candidates = 0;
let optimized = 0;

for (const image of new Set(paintings.map((painting) => painting.image))) {
  if (/^https?:\/\//.test(image)) continue;
  const url = new URL(`public${image}`, root);
  assert(image.startsWith('/paintings/') && url.href.startsWith(directory.href) && !url.search && !url.hash, `Invalid local source: ${image}`);
  const path = fileURLToPath(url);
  const input = await readFile(path);
  const beforeBytes = input.length;
  let options = {};
  let metadata;
  try {
    metadata = await sharp(input, options).metadata();
  } catch (error) {
    if (!/pixel limit/i.test(error.message)) throw error;
    // Some archival originals exceed Sharp's default; never disable its pixel limit.
    options = { limitInputPixels: 512_000_000 };
    metadata = await sharp(input, options).metadata();
  }
  assert(/\.jpe?g$/i.test(image), `Expected JPEG filename: ${image}`);
  assert(metadata.width > 0 && metadata.height > 0, `Missing dimensions: ${image}`);
  const before = { bytes: beforeBytes, width: metadata.width, height: metadata.height };
  let after = before;
  if (beforeBytes > maxBytes || Math.max(metadata.width, metadata.height) > maxEdge) {
    candidates++;
    if (write) {
      let edge = Math.min(maxEdge, Math.max(metadata.width, metadata.height));
      let data;
      let info;
      do {
        ({ data, info } = await sharp(input, options)
          .rotate()
          .resize({ width: edge, height: edge, fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 88, mozjpeg: true })
          .toBuffer({ resolveWithObject: true }));
        // Preserve quality for detailed originals by reducing dimensions until under budget.
        if (data.length <= maxBytes || edge === 1) break;
        edge = Math.max(1, Math.floor(edge * Math.sqrt(maxBytes / data.length) * 0.95));
      } while (true);
      if (data.length < beforeBytes) {
        await writeFile(path, data);
        after = { bytes: data.length, width: info.width, height: info.height };
        optimized++;
      }
    }
  }
  results.push({ image, before, after });
}

const beforeBytes = results.reduce((sum, result) => sum + result.before.bytes, 0);
const afterBytes = results.reduce((sum, result) => sum + result.after.bytes, 0);
const largestBefore = [...results].sort((a, b) => b.before.bytes - a.before.bytes);
const largestAfter = [...results].sort((a, b) => b.after.bytes - a.after.bytes);
console.log(JSON.stringify({
  mode: write ? 'write' : 'audit',
  localFiles: results.length,
  candidates,
  optimized,
  unchanged: results.length - optimized,
  remainingOverBudget: results.filter(({ after }) => after.bytes > maxBytes || Math.max(after.width, after.height) > maxEdge).length,
  beforeBytes,
  afterBytes,
  savedBytes: beforeBytes - afterBytes,
  savedPercent: beforeBytes ? Number(((1 - afterBytes / beforeBytes) * 100).toFixed(2)) : 0,
  largestBefore: largestBefore[0],
  largestAfter: largestAfter[0],
  representative: [...new Set([
    ...largestBefore.slice(0, 5),
    ...['norse', 'indian', 'classical'].map((collection) => results.find(({ image }) => image.startsWith(`/paintings/${collection}/`))).filter(Boolean),
  ])],
}, null, 2));
