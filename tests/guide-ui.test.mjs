import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const pages = readdirSync(root).filter(name => name.endsWith('.html') && name !== 'index.html');
test('generated contents targets exist and the region remains visible without the optional script', () => {
  assert.equal(pages.length, 14);
  for (const name of pages) {
    const html = readFileSync(new URL(name, root), 'utf8');
    const contents = html.match(/<aside[^>]*id="doc-toc"[^>]*>([\s\S]*?)<\/aside>/);
    assert.ok(contents, name);
    assert.doesNotMatch(contents[0].split('>')[0], /\bhidden\b/);
    for (const [, id] of contents[1].matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${id}"`), name);
    assert.match(html, /aria-controls="doc-toc" data-disclosure="\(max-width: 650px\)" hidden/);
  }
});
test('generated enhancements preserve native tables, code, and stylesheet order', () => {
  for (const name of pages) {
    const html = readFileSync(new URL(name, root), 'utf8');
    assert.equal((html.match(/<table>/g) || []).length, (html.match(/data-scroll-region aria-label="Reference table"/g) || []).length, name);
    assert.equal((html.match(/<pre\b/g) || []).length, (html.match(/<pre data-copy-code><code/g) || []).length, name);
    assert.ok(html.indexOf('/v2/base.css') < html.indexOf('/v2/components.css'));
    assert.ok(html.indexOf('/v2/components.css') < html.indexOf('assets/styles.css'));
  }
});
