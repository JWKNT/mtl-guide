#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = __dirname;

const documents = [
  {
    source: "README.md",
    output: "workflow.html",
    title: "Workflow",
    summary: "The end-to-end process: canonical source, stable IDs, terminology, grammar, batching, validation, QA, and release.",
  },
  {
    source: "grammar-guide-example.md",
    output: "grammar.html",
    title: "Grammar guide example",
    summary: "A spoiler-free example of a title-specific Japanese-to-English grammar and restructuring authority.",
  },
  {
    source: "PROMPTS.md",
    output: "prompts.html",
    title: "Prompt library",
    summary: "Reusable prompts for discovery, authority building, strict translation, bilingual review, and consistency auditing.",
  },
  {
    source: "templates/terminology-authority.md",
    output: "terminology-template.html",
    title: "Terminology authority template",
    summary: "A blank authority for names, aliases, items, organizations, titles, voice rules, and review decisions.",
  },
  {
    source: "templates/grammar-guide-template.md",
    output: "grammar-template.html",
    title: "Grammar guide template",
    summary: "A blank structure for documenting recurring MT failures with evidence and concrete translation decisions.",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  const codes = [];
  let text = escapeHtml(value).replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE${codes.length}@@`;
    codes.push(`<code>${code}</code>`);
    return token;
  });

  text = text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  codes.forEach((code, index) => {
    text = text.replace(`@@CODE${index}@@`, code);
  });
  return text;
}

function slugify(value, used) {
  const base = value
    .replace(/`/g, "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-") || "section";
  let slug = base;
  let suffix = 2;
  while (used.has(slug)) slug = `${base}-${suffix++}`;
  used.add(slug);
  return slug;
}

function isSpecial(lines, index) {
  const line = lines[index] || "";
  const next = lines[index + 1] || "";
  return !line.trim() || /^```/.test(line) || /^#{1,4}\s/.test(line) || /^>\s?/.test(line) || /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line) || /^---+$/.test(line.trim()) || (line.includes("|") && /^\s*\|?\s*:?-+/.test(next));
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const used = new Set();
  const toc = [];
  let html = "";
  let preamble = "";
  let inSection = false;
  let index = 0;

  function append(fragment) {
    if (inSection) html += fragment;
    else preamble += fragment;
  }

  if (/^#\s+/.test(lines[0] || "")) index = 1;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }

    const fence = line.match(/^```(.*)$/);
    if (fence) {
      const language = fence[1].trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index])) code.push(lines[index++]);
      index += 1;
      append(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const label = heading[2];
      const slug = slugify(label, used);
      if (level === 2) {
        if (inSection) html += "</section>";
        inSection = true;
        toc.push({ slug, label: label.replace(/`/g, "") });
        html += `<section class="doc-section" id="${slug}"><h2>${inlineMarkdown(label)}</h2>`;
      } else {
        append(`<h${level} id="${slug}">${inlineMarkdown(label)}</h${level}>`);
      }
      index += 1;
      continue;
    }

    if (line.includes("|") && /^\s*\|?\s*:?-+/.test(lines[index + 1] || "")) {
      const rows = [];
      rows.push(line);
      index += 2;
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) rows.push(lines[index++]);
      const parseCells = (row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
      const headers = parseCells(rows.shift());
      append(`<table><thead><tr>${headers.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${parseCells(row).map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
      append(`<blockquote><p>${inlineMarkdown(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) items.push(lines[index++].replace(/^[-*]\s+/, ""));
      append(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s+/, ""));
      append(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      append("<hr>");
      index += 1;
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length && !isSpecial(lines, index)) paragraph.push(lines[index++].trim());
    append(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  if (inSection) html += "</section>";
  return { preamble, html, toc };
}

function navLink(href, label, current) {
  return `<a href="${href}"${current ? ' aria-current="page"' : ""}>${label}</a>`;
}

function pageTemplate(document, rendered) {
  const toc = rendered.toc.map((item) => `<li><a href="#${item.slug}">${inlineMarkdown(item.label)}</a></li>`).join("");
  const current = document.output;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(document.summary)}">
    <meta name="theme-color" content="#ffffff">
    <title>${escapeHtml(document.title)} · MTL Guide</title>
    <link rel="stylesheet" href="assets/styles.css">
  </head>
  <body>
    <a class="skip-link" href="#doc-content">Skip to document</a>
    <header class="site-header">
      <a class="site-title" href="index.html">MTL Guide</a>
      <nav aria-label="Primary navigation">
        ${navLink("workflow.html", "Workflow", current === "workflow.html")}
        ${navLink("grammar.html", "Grammar", current === "grammar.html")}
        ${navLink("prompts.html", "Prompts", current === "prompts.html")}
        <a href="https://github.com/JWKNT/mtl-guide" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
    <main class="doc-shell">
      <header class="doc-hero">
        <div><h1>${escapeHtml(document.title)}</h1><p class="doc-summary">${escapeHtml(document.summary)}</p></div>
        <a class="raw-link" href="${document.source}">View raw Markdown</a>
      </header>
      <div class="doc-toolbar">
        <button class="toc-toggle" id="toc-toggle" type="button" aria-expanded="false" aria-controls="doc-toc">Contents</button>
        <label class="doc-search" for="doc-search"><span>Search</span><input id="doc-search" type="search" autocomplete="off" placeholder="Filter sections…"><kbd>⌘K</kbd></label>
        <span class="search-status" id="search-status"></span>
      </div>
      <div class="doc-layout">
        <aside class="doc-toc" id="doc-toc" aria-label="On this page"><h2>On this page</h2><ol>${toc}</ol></aside>
        <article class="doc-content" id="doc-content">${rendered.preamble ? `<div class="doc-preamble">${rendered.preamble}</div>` : ""}${rendered.html}<div class="search-empty" id="search-empty" hidden>No sections match that search.</div></article>
      </div>
    </main>
    <div class="toc-backdrop" id="toc-backdrop" hidden></div>
    <script src="assets/app.js"></script>
  </body>
</html>\n`;
}

for (const document of documents) {
  const source = fs.readFileSync(path.join(root, document.source), "utf8");
  const output = pageTemplate(document, renderMarkdown(source));
  fs.writeFileSync(path.join(root, document.output), output);
  process.stdout.write(`built ${document.output}\n`);
}
