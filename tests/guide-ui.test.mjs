import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../assets/app.js', import.meta.url), 'utf8');
function guide(mobile) {
  const events = {}, tocEvents = {}, toggleEvents = {}, attrs = {};
  let mediaChange, focus = null, scrolled = false, hash = null;
  const root = { classList: { add() {} } };
  const target = { setAttribute() {}, focus() { focus = 'heading'; }, scrollIntoView() { scrolled = true; } };
  const toc = { hidden: false, addEventListener(k, f) { tocEvents[k] = f; } };
  const toggle = { setAttribute(k, v) { attrs[k] = v; }, addEventListener(k, f) { toggleEvents[k] = f; }, focus() { focus = 'toggle'; } };
  const media = { matches: mobile, addEventListener(k, f) { mediaChange = f; } };
  const document = { documentElement: root, querySelectorAll() { return []; },
    querySelector(q) { return q === '#doc-toc' ? toc : q === '#toc-toggle' ? toggle : null; },
    addEventListener(k, f) { events[k] = f; }, getElementById() { return target; } };
  const window = { matchMedia() { return media; } };
  vm.runInNewContext(source, { document, window, history: { pushState(a, b, value) { hash = value; } } });
  return { toc, attrs, get focus() { return focus; }, get hash() { return hash; }, get scrolled() { return scrolled; },
    click: () => toggleEvents.click(), escape: () => events.keydown({ key: 'Escape' }),
    resize(value) { media.matches = value; mediaChange(); },
    follow() { tocEvents.click({ target: { closest() { return { hash: '#example' }; } }, preventDefault() {} }); }
  };
}
test('mobile contents leaves the tab order when closed and Escape returns to its toggle', () => {
  const g = guide(true); assert.equal(g.toc.hidden, true); assert.equal(g.attrs['aria-expanded'], 'false');
  g.click(); assert.equal(g.toc.hidden, false); assert.equal(g.attrs['aria-expanded'], 'true');
  g.escape(); assert.equal(g.toc.hidden, true); assert.equal(g.focus, 'toggle');
});
test('desktop contents survives mobile-to-desktop transitions without a scroll lock', () => {
  const g = guide(false); assert.equal(g.toc.hidden, false);
  g.resize(true); assert.equal(g.toc.hidden, true);
  g.resize(false); assert.equal(g.toc.hidden, false); assert.equal(g.attrs['aria-expanded'], 'true');
});
test('choosing a mobile heading closes contents and transfers focus and location', () => {
  const g = guide(true); g.click(); g.follow();
  assert.equal(g.toc.hidden, true); assert.equal(g.focus, 'heading');
  assert.equal(g.scrolled, true); assert.equal(g.hash, '#example');
});
