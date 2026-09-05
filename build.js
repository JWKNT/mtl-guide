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
    summary: "The end-to-end process: canonical source, complete text inventory, context authorities, translation, editorial gates, handoff, and release.",
    foldSections: ["files"],
  },
  {
    source: "PROJECT-SETUP.md",
    output: "project-setup.html",
    title: "Project blueprint and agent startup",
    summary: "A context-free project contract: canonical artifacts, manifests, story model, authorities, readiness gates, and safe agent startup.",
  },
  {
    source: "ROUND-TRIP-BUILD.md",
    output: "round-trip-build.html",
    title: "Extraction, round trip, and release build",
    summary: "Prove the runtime source and import path, preserve engine behavior, plan presentation, build deterministically, and patch safely.",
  },
  {
    source: "REVIEW-QA.md",
    output: "review-qa.html",
    title: "Editorial, presentation, and runtime QA",
    summary: "A complete pass ladder for accuracy, prose, repeated text, tags, layout, stateful interactions, platforms, and release closure.",
  },
  {
    source: "examples/reading-order-example.md",
    output: "reading-order.html",
    title: "Reading and reveal order",
    summary: "A fictional example for documenting route order, narrator spans, chronology, and reveal boundaries.",
  },
  {
    source: "examples/identity-pronoun-example.md",
    output: "identity-pronouns.html",
    title: "Identity and pronouns",
    summary: "A fictional ledger that separates identity, English pronouns, Japanese self-reference, speech style, and timeline.",
  },
  {
    source: "examples/voice-guide-example.md",
    output: "voice.html",
    title: "Character voice",
    summary: "A fictional example of evidence-backed, reproducible character and narrator voice rules.",
  },
  {
    source: "examples/wordplay-guide-example.md",
    output: "wordplay.html",
    title: "Writing-system and wordplay",
    summary: "A fictional example for ruby, kanji, homophones, script changes, visual text, and controlled translation loss.",
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
    summary: "Reusable prompts for discovery, authority building, translation, source-aware editing, corpus QA, and handoff.",
  },
  {
    source: "templates/terminology-authority.md",
    output: "terminology-template.html",
    title: "Terminology authority template",
    summary: "A blank authority for names, chronology, identity, voice, writing-system decisions, and terminology.",
  },
  {
    source: "templates/grammar-guide-template.md",
    output: "grammar-template.html",
    title: "Grammar guide template",
    summary: "A blank structure for documenting recurring MT failures with evidence and concrete translation decisions.",
  },
  {
    source: "templates/project-manifest-template.md",
    output: "project-manifest-template.html",
    title: "Project manifest template",
    summary: "A reusable record of build identity, canonical paths, commands, data contracts, text-surface coverage, phase state, and handoff.",
  },
  {
    source: "templates/qa-matrix-template.md",
    output: "qa-matrix-template.html",
    title: "QA matrix template",
    summary: "A reusable matrix for chapter gates, runtime environments, installation states, stateful regressions, and release sign-off.",
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

function renderMarkdown(markdown, foldSections = []) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const used = new Set();
  const toc = [];
  let html = "";
  let preamble = "";
  let inSection = false;
  let inDisclosure = false;
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
      append(`<pre data-copy-code><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const label = heading[2];
      const slug = slugify(label, used);
      if (level === 2) {
        if (inSection) html += `${inDisclosure ? "</details>" : ""}</section>`;
        inSection = true;
        inDisclosure = foldSections.includes(slug);
        toc.push({ slug, label: label.replace(/`/g, "") });
        html += `<section class="doc-section${inDisclosure ? " doc-section--folded" : ""}" id="${slug}">${inDisclosure ? `<details><summary>${inlineMarkdown(label)}</summary>` : `<h2>${inlineMarkdown(label)}</h2>`}`;
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
      append(`<div class="doc-table-scroll" data-scroll-region aria-label="Reference table"><table class="ui-table"><thead><tr>${headers.map((cell) => `<th scope="col">${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${parseCells(row).map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
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

  if (inSection) html += `${inDisclosure ? "</details>" : ""}</section>`;
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
    <link rel="canonical" href="https://jehlp.net/mtl-guide/${document.output}">
    <title>${escapeHtml(document.title)} · jehlp.net</title>
    <link rel="icon" href="https://jehlp.net/site-theme/v2/favicons/mtl-guide.png" type="image/png">
    <script src="https://jehlp.net/site-theme/v2/theme.js"></script>
    <link rel="stylesheet" href="https://jehlp.net/site-theme/v2/base.css">
    <link rel="stylesheet" href="https://jehlp.net/site-theme/v2/components.css">
    <script src="https://jehlp.net/site-theme/v2/components.js" defer></script>
    <link rel="stylesheet" href="assets/styles.css?v=20260905.3">
  </head>
  <body data-site-tone="ochre">
    <a class="skip-link" href="#doc-content">Skip to document</a>
    <header class="site-header site-header--identity">
      <div class="site-brand"><img class="site-mark" src="https://jehlp.net/site-theme/v2/marks/mtl-guide.png" width="32" height="32" alt=""><a class="site-title" href="index.html">MTL Guide</a></div>
      <nav aria-label="Primary navigation">
        ${navLink("workflow.html", "Workflow", current === "workflow.html")}
        <a href="index.html#templates">Templates</a>
        <a href="index.html#references">Reference</a>
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Use dark theme" aria-pressed="false">◐</button>
      </nav>
    </header>
    <main class="doc-shell">
      <header class="doc-hero">
        <h1>${escapeHtml(document.title)}</h1>
        <div class="doc-actions">
          <button class="toc-toggle" id="toc-toggle" type="button" aria-expanded="false" aria-controls="doc-toc" data-disclosure="(max-width: 650px)" hidden>Contents</button>
          <a class="raw-link" href="${document.source}" aria-label="View Markdown source">Markdown ↗</a>
        </div>
      </header>
      <div class="doc-layout">
        <aside class="doc-toc" id="doc-toc" aria-label="On this page"><h2>Contents</h2><ol>${toc}</ol></aside>
        <article class="doc-content" id="doc-content">${rendered.preamble ? `<div class="doc-preamble">${rendered.preamble}</div>` : ""}${rendered.html}</article>
      </div>
    </main>
    <script src="assets/app.js"></script>
  </body>
</html>\n`;
}

function codePageTemplate(document, code) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(document.summary)}">
    <meta name="theme-color" content="#ffffff">
    <link rel="canonical" href="https://jehlp.net/mtl-guide/${document.output}">
    <title>${escapeHtml(document.title)} · jehlp.net</title>
    <link rel="icon" href="https://jehlp.net/site-theme/v2/favicons/mtl-guide.png" type="image/png">
    <script src="https://jehlp.net/site-theme/v2/theme.js"></script>
    <link rel="stylesheet" href="https://jehlp.net/site-theme/v2/base.css">
    <link rel="stylesheet" href="https://jehlp.net/site-theme/v2/components.css">
    <script src="https://jehlp.net/site-theme/v2/components.js" defer></script>
    <link rel="stylesheet" href="assets/styles.css?v=20260905.3">
  </head>
  <body data-site-tone="ochre">
    <a class="skip-link" href="#doc-content">Skip to code</a>
    <header class="site-header site-header--identity">
      <div class="site-brand"><img class="site-mark" src="https://jehlp.net/site-theme/v2/marks/mtl-guide.png" width="32" height="32" alt=""><a class="site-title" href="index.html">MTL Guide</a></div>
      <nav aria-label="Primary navigation">
        <a href="workflow.html">Workflow</a>
        <a href="index.html#templates">Templates</a>
        <a href="index.html#references">Reference</a>
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Use dark theme" aria-pressed="false">◐</button>
      </nav>
    </header>
    <main class="doc-shell code-shell">
      <header class="doc-hero">
        <h1>${escapeHtml(document.title)}</h1>
      </header>
      <article class="doc-content code-document" id="doc-content"><pre data-copy-code><code class="language-${escapeHtml(document.language)}">${escapeHtml(code)}</code></pre></article>
    </main>
    <script src="assets/app.js"></script>
  </body>
</html>\n`;
}

for (const document of documents) {
  const source = fs.readFileSync(path.join(root, document.source), "utf8");
  const output = document.code ? codePageTemplate(document, source) : pageTemplate(document, renderMarkdown(source, document.foldSections));
  fs.writeFileSync(path.join(root, document.output), output);
  process.stdout.write(`built ${document.output}\n`);
}
