import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const context = { exports: {} };
const source = await readFile(new URL('app/lib/paintings.ts', root), 'utf8');
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
const { paintings } = context.exports;
const loaderContext = { exports: {} };
vm.runInNewContext(ts.transpileModule(await readFile(new URL('app/lib/cloudinary-loader.ts', root), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, loaderContext);
const cloudinaryLoader = loaderContext.exports.default;
const roomContext = { exports: {}, require: () => ({ paintings }) };
vm.runInNewContext(ts.transpileModule(await readFile(new URL('app/lib/rooms.ts', root), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, roomContext);
const { rooms, getRoomPaintings } = roomContext.exports;
assert.equal(paintings.length, 295);
assert.equal(new Set(paintings.map((painting) => painting.slug)).size, 295);
const themeSlugs = rooms.map((room) => room.slug);
const hashes = new Set();
const localImages = new Map();
const remoteImages = [];
for (const painting of paintings) {
  assert(painting.rooms?.length && painting.rooms.every((room) => themeSlugs.includes(room)), painting.slug);
  assert(painting.title && painting.artist && painting.year && painting.image && painting.excerpt);
  let bytes;
  if (painting.image.startsWith('/') && !painting.image.startsWith('//')) {
    bytes = await readFile(new URL(`public${painting.image}`, root));
    const metadata = await sharp(bytes).metadata();
    assert(metadata.width > 100 && metadata.height > 100, `Invalid dimensions: ${painting.slug}`);
    assert(Math.max(metadata.width, metadata.height) <= 2560, `Image exceeds 2560px: ${painting.slug}`);
    assert(bytes.length <= 1_500_000, `Image exceeds 1.5MB: ${painting.slug}`);
    localImages.set(painting.image, { bytes: bytes.length, width: metadata.width, height: metadata.height });
  } else {
    remoteImages.push(painting);
  }
  if (!painting.collection) continue;
  assert(bytes, `Collection image must be local: ${painting.slug}`);
  hashes.add(createHash('sha256').update(bytes).digest('hex'));
  assert(painting.sourceUrl.startsWith('https://') && painting.imageCredit && painting.license);
  assert(painting.excerpt.includes('\n\n'), `Missing multiline confession: ${painting.slug}`);
}
assert.equal(hashes.size, 150);
for (const collection of ['norse', 'indian', 'classical']) {
  assert.equal(paintings.filter((painting) => painting.collection === collection).length, 50);
}
for (const room of rooms) assert(getRoomPaintings(room.slug).length > 0, room.slug);
assert.equal(getRoomPaintings('not-a-room').length, 0);
assert(getRoomPaintings('sins').every((painting) => painting.rooms.includes('sins')));
for (const painting of remoteImages) {
  assert.match(painting.image, /^https:\/\/res\.cloudinary\.com\/daldbatl\/image\/upload\/(?:[^\s/?#]+\/)*[^\s/?#]+$/, `Invalid Cloudinary upload URL: ${painting.slug}`);
  for (const width of [320, 640, 1920]) {
    const optimized = cloudinaryLoader({ src: painting.image, width });
    assert(optimized.includes(`/f_auto,q_75,c_limit,w_${width}/`), painting.slug);
    assert(!optimized.includes('q_auto'), 'Do not chain a second quality transformation');
    assert.equal(new URL(optimized).pathname.split('/').at(-1), new URL(painting.image).pathname.split('/').at(-1));
  }
}
console.log(JSON.stringify({ artworks: paintings.length, localImages: localImages.size, localBytes: [...localImages.values()].reduce((sum, image) => sum + image.bytes, 0), remoteImages: remoteImages.length, uniqueNewImages: hashes.size, rooms: Object.fromEntries(rooms.map((room) => [room.slug, getRoomPaintings(room.slug).length])) }, null, 2));

if (process.argv.includes('--http')) {
  const base = 'http://127.0.0.1:3197';
  const server = spawn(process.execPath, [fileURLToPath(new URL('node_modules/next/dist/bin/next', root)), 'start', '-p', '3197'], { cwd: fileURLToPath(root), stdio: 'inherit' });
  try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      try { ready = (await fetch(base)).ok; } catch { /* Wait for this test server. */ }
      if (ready) break;
      if (server.exitCode !== null) throw new Error('Test server exited early');
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    assert(ready, 'Test server did not become ready');
    const home = await (await fetch(base)).text();
    assert(home.includes('Open gallery menu') && home.includes('295'));
    const cloudinaryImages = [...home.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => tag).filter((tag) => tag.includes('res.cloudinary.com'));
    assert(cloudinaryImages.length > 0, 'Home must render Cloudinary images');
    for (const tag of cloudinaryImages) {
      const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
      const srcset = tag.match(/\bsrcset="([^"]+)"/i)?.[1];
      assert(src && srcset, 'Cloudinary image must have src and responsive srcset');
      const candidates = srcset.split(/,\s+/).map((candidate) => candidate.trim().split(/\s+/));
      assert(candidates.length > 1, 'Cloudinary srcset must offer multiple sizes');
      for (const [url, descriptor] of candidates) assert(/^\d+(?:w|x)$/.test(descriptor), `Missing responsive descriptor: ${url}`);
      for (const url of [src, ...candidates.map(([url]) => url)]) {
        assert.match(url, /^https:\/\/res\.cloudinary\.com\/[\w-]+\/image\/upload\//, 'Cloudinary images must bypass the Next optimizer');
        const transforms = new URL(url).pathname.split('/').slice(4, -1).flatMap((segment) => segment.split(','));
        assert(['c_limit', 'f_auto', 'q_75'].every((transform) => transforms.includes(transform)) && transforms.some((transform) => /^w_[1-9]\d*$/.test(transform)), `Missing responsive Cloudinary transforms: ${url}`);
      }
    }
    for (const room of rooms) {
      const response = await fetch(`${base}/rooms/${room.slug}`);
      assert.equal(response.status, 200, room.slug);
      assert((await response.text()).includes(room.title), room.slug);
    }
    const imageChecks = ['norse', 'indian', 'classical'].map((collection) => paintings.find((entry) => entry.collection === collection));
    imageChecks.push(paintings.find((entry) => entry.slug === 'the-lamentation-giotto'));
    for (const painting of imageChecks) {
      assert(painting, 'Missing image regression fixture');
      assert.equal((await fetch(`${base}/paintings/${painting.slug}`)).status, 200);
      const image = await fetch(`${base}${painting.image}`);
      assert.equal(image.status, 200);
      assert(image.headers.get('content-type')?.includes('image/jpeg'));
      const optimized = await fetch(`${base}/_next/image?url=${encodeURIComponent(painting.image)}&w=640&q=75`);
      assert.equal(optimized.status, 200);
      assert(optimized.headers.get('content-type')?.startsWith('image/'));
    }
    assert.equal((await fetch(`${base}/rooms/not-a-room`)).status, 404);
    assert.equal((await fetch(`${base}/paintings/not-a-painting`)).status, 404);
    console.log(`HTTP smoke checks passed: home responsive Cloudinary URLs, ${rooms.length} rooms, 4 details, local/optimized images including Giotto, and 404 routes.`);
  } finally {
    server.kill();
  }
}
