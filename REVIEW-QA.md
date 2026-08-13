# Editorial, Presentation, and Runtime QA

Quality assurance is a sequence of different questions. Do not ask one pass, one model, or one validator to answer all of them at once.

## Review ladder

Use this order and record a separate sign-off for each chapter:

1. **Structural alignment:** IDs, row counts, ordering, speakers, tags, variables, controls, and source/target coverage.
2. **Bilingual accuracy:** meaning, subjects, narrator, pronouns, negation, causality, certainty, omissions, additions, identity, and reveal timing.
3. **Continuity and terminology:** names, recurring concepts, chronology, relationships, quotations, and cross-scene facts.
4. **Voice and prose:** diction, contraction level, rhythm, register, narration texture, idioms, and natural English connections between clauses.
5. **Presentation:** wrapping, page breaks, font coverage, ruby/helper text, portrait-safe layout, choices, and backlog readability.
6. **Support/UI:** tips, glossary, speaker labels, menus, settings, popups, galleries, credits, chapter select, and image text.
7. **Runtime behavior:** progression, interaction state, routes, saves, audio, effects, installation, update, and removal.
8. **Clean confirmation pass:** repeat the relevant full pass after fixes and require zero new findings.

The prose pass should read the English continuously without consulting Japanese, then return to the source for every suspicious transition. Natural English is not permission to alter evidence, reveal order, or characterization.

## Audit narrators, speakers, and identity globally

Maintain a scene ledger for viewpoint and narrator, especially where the work hides or changes them. Inventory every first-person English form and adjudicate it against the actual source speaker; search results identify candidates but do not decide them.

Infer missing displayed speaker names only from reliable event, voice, scene, or source evidence. Do not assign dialogue to a nearby portrait merely because the layout suggests it.

Audit gendered nouns, family roles, titles, and plural categories separately from pronouns. A correct pronoun ledger will not catch an incorrect word such as `sons`, `wife`, or `brothers`.

## Reconcile repeated and parallel text

Build a report of normalized identical and near-identical source passages across the corpus. Include quotations, flashbacks, alternate viewpoints, documents, recurring narration, and replayed scenes.

Use the same English when the source wording and dramatic function are the same. When context requires a difference—such as a different referent, reveal state, syntax around an insertion, or deliberate characterization—record the exception. Do not let independent chapter passes create accidental synonyms for a repeated key phrase.

Also search the English for repeated adjacent words, duplicated linked terms, inconsistent capitalization, title variants, and near-identical translations of one locked source term.

## Audit tags by function

Compare the Japanese and English event streams, not only raw tag offsets. Preserve tag identity, nesting, variables, and order. Place emphasis, glossary links, color, waits, voice triggers, and page controls on the corresponding English grammatical unit.

Flag:

- missing, duplicated, reordered, or unclosed tags;
- a tag that splits a contraction, name, number, or linked term;
- glossary links that capture surrounding punctuation or duplicate visible text;
- page controls triggered by an abbreviation rather than an authored boundary;
- portrait, background, or timing commands attached to the wrong visible row.

## Check presentation with adversarial strings

Measure actual rendered bounds at every supported resolution and aspect ratio. Include long names, long unbroken strings, nested tags, quotation marks, apostrophes, em dashes, ellipses, initials, abbreviations, ruby/helper annotations, and lines spoken while the maximum number of portraits is visible.

For each text surface verify:

- wrapping occurs only at valid word or grapheme boundaries;
- no first or last glyph is clipped;
- no line is hidden behind a portrait, icon, or overlay;
- intentional page breaks remain sensible in English;
- the final page is reachable and does not strand a partial word;
- backlog and history show the complete text;
- translated textures are legible at runtime scale.

## Exercise stateful interactions

Static screenshots do not expose input-state bugs. Repeat interactions and combine them in inconvenient orders:

- open and close tips or glossary entries many times;
- click several linked names before closing the overlay;
- switch among keyboard, mouse, controller, wheel, auto, skip, and backlog;
- open settings or save/load from dialogue and return;
- advance during voice, effects, transitions, and portrait changes;
- save before and after a choice, reload, and confirm route state;
- revisit unlocked chapters and prerequisite chains;
- change language or asset packs, restart, and verify every surface;
- lose and regain focus, resize, toggle full screen, and suspend the process.

After every overlay closes, gameplay input focus and progression must return immediately. Check both normal use and repeated clicking.

## Use a version and platform matrix

Copy the [QA matrix template](templates/qa-matrix-template.md). Record exact game version, storefront, operating system or compatibility layer, resolution, install state, patch version, save provenance, and result.

At minimum separate:

- fresh install, previous patch, current patch, and partially patched install;
- native Windows and each supported compatibility layer;
- minimum, common, ultrawide, and high-DPI display modes;
- new save, existing save, chapter select, and completed-game state.

Do not generalize success from one build to a differently packed executable or asset set.

## Close bugs without hiding regressions

Every runtime defect should produce:

1. exact reproduction steps and environment;
2. screenshot, log, line ID, and relevant event state;
3. root cause and affected scope;
4. the smallest justified fix;
5. a regression test or corpus query;
6. results on the originally failing case and adjacent systems;
7. a rebuilt release from the clean base.

After fixing a class of defect, search for all structurally equivalent instances. After fixing individual findings, rerun the complete pass. The project is complete only when a full post-fix pass produces no changes and the release matrix is green.

## Final QA report

The final report should name:

- exact source, target, authority, build, and patch versions;
- chapter sign-offs for every review gate;
- corpus audit commands and finding counts;
- supported and unsupported runtime variants;
- install, update, reinstall, removal, and save-compatibility results;
- remaining controlled losses or accepted limitations;
- release hashes and the command that rebuilds them;
- the date and result of the zero-change confirmation pass.

`No known issues` is a conclusion supported by this evidence, not a substitute for it.
