// Bulk content import. Runtime content lives inline in app/lib/paintings.ts;
// data/*.json are source snapshots, never imported by the application.
import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import ts from 'typescript';

const file = new URL('../app/lib/paintings.ts', import.meta.url);
const source = await readFile(file, 'utf8');
const context = { exports: {} };
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
const existing = context.exports.paintings;
const incoming = [];
for (const collection of ['norse', 'indian', 'classical']) {
  const entries = JSON.parse(await readFile(new URL(`../app/lib/data/${collection}.json`, import.meta.url), 'utf8'));
  assert.equal(entries.length, 50);
  assert(entries.every((entry) => entry.collection === collection));
  incoming.push(...entries);
}
assert.equal(new Set(incoming.map((entry) => entry.slug)).size, 150);
const added = incoming.filter((entry) => !existing.some((painting) => painting.slug === entry.slug));
if (added.length) {
  assert.equal(added.length, 150, 'Refusing a partial merge');
  assert.equal(existing.length, 145);
  const literals = added.map((entry) => {
    const fields = Object.entries(entry).map(([key, value]) => {
      if (key !== 'excerpt') return `    ${key}: ${JSON.stringify(value)},`;
      // Preserve the gallery's multiline template-literal confession format.
      const paragraphs = value.match(/[^.!?]+[.!?]+(?:["']|$)?|[^.!?]+$/g) ?? [value];
      return `    excerpt: \`${paragraphs.map((paragraph) => paragraph.trim()).join('\n\n').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,`;
    }).join('\n');
    return `  {\n${fields}\n  },`;
  }).join('\n');
  assert(/\];\s*$/.test(source));
  await writeFile(file, source.replace(/\];\s*$/, `${literals}\n];\n`));
}
console.log(`Merged ${added.length} artworks inline; ${existing.length + added.length} total.`);
