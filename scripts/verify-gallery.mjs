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
const roomContext = { exports: {}, require: () => ({ paintings }) };
vm.runInNewContext(ts.transpileModule(await readFile(new URL('app/lib/rooms.ts', root), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, roomContext);
const { rooms, getRoomPaintings } = roomContext.exports;
assert.equal(paintings.length, 295);
assert.equal(new Set(paintings.map((painting) => painting.slug)).size, 295);
const themeSlugs = rooms.map((room) => room.slug);
const hashes = new Set();
for (const painting of paintings) {
  assert(painting.rooms?.length && painting.rooms.every((room) => themeSlugs.includes(room)), painting.slug);
  assert(painting.title && painting.artist && painting.year && painting.image && painting.excerpt);
  if (!painting.collection) continue;
  const bytes = await readFile(new URL(`public${painting.image}`, root));
  const metadata = await sharp(bytes).metadata();
  assert(metadata.width > 100 && metadata.height > 100);
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
console.log(JSON.stringify({ artworks: paintings.length, uniqueNewImages: hashes.size, rooms: Object.fromEntries(rooms.map((room) => [room.slug, getRoomPaintings(room.slug).length])) }, null, 2));

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
    for (const room of rooms) {
      const response = await fetch(`${base}/rooms/${room.slug}`);
      assert.equal(response.status, 200, room.slug);
      assert((await response.text()).includes(room.title), room.slug);
    }
    for (const collection of ['norse', 'indian', 'classical']) {
      const painting = paintings.find((entry) => entry.collection === collection);
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
    console.log('HTTP smoke checks passed: home, 10 rooms, 3 new details, local/optimized images, and 404 routes.');
  } finally {
    server.kill();
  }
}
