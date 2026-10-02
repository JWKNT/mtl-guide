# Editorial, Presentation, and Runtime QA

Quality assurance uses separate checks for different failure types. Do not use one pass, model, or validator for all checks.

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

In the prose pass, read the complete English text without Japanese. Then compare each suspect transition with the source. Natural English does not permit changes to evidence, reveal order, or characterization.

## Audit narrators, speakers, and identity globally

Keep a scene ledger for viewpoint and narrator, especially when the work hides or changes them. Make an inventory of each first-person English form. Check each form against the actual source speaker. Search results identify candidates but cannot determine the correct form.

Infer missing displayed speaker names only from reliable event, voice, scene, or source evidence. Do not use portrait proximity alone to identify a dialogue speaker.

Audit gendered nouns, family roles, titles, and plural categories separately from pronouns. A correct pronoun ledger does not detect every incorrect word, such as `sons`, `wife`, or `brothers`.

## Reconcile repeated and parallel text

Build a report of normalized identical and near-identical source passages across the corpus. Include quotations, flashbacks, alternate viewpoints, documents, recurring narration, and replayed scenes.

Use the same English when the source wording and dramatic function are the same. When context requires a different translation, record the exception. Possible reasons include a different referent, reveal state, surrounding syntax, or deliberate characterization. Keep repeated key phrases consistent across separate chapter passes.

Search the English for repeated adjacent words, duplicate linked terms, inconsistent capitalization, and title variants. Search for near-identical translations of one locked source term.

## Audit tags by function

Compare the Japanese and English event streams. Tag offsets alone are insufficient. Preserve tag identity, nesting, variables, and order. Place emphasis, glossary links, color, waits, voice triggers, and page controls on the corresponding English grammatical unit.

Flag:

- missing, duplicated, reordered, or unclosed tags
- a tag that splits a contraction, name, number, or linked term
- glossary links that capture surrounding punctuation or duplicate visible text
- page controls triggered by an abbreviation rather than an authored boundary
- portrait, background, or timing commands attached to the wrong visible row.

## Check presentation with adversarial strings

Measure actual rendered bounds at every supported resolution and aspect ratio. Include long names, long unbroken strings, nested tags, quotation marks, and apostrophes. Include em dashes, ellipses, initials, abbreviations, and ruby/helper annotations. Test lines with the maximum number of visible portraits.

For each text surface verify:

- wrapping occurs only at valid word or grapheme boundaries
- no first or last glyph is clipped
- no line is hidden behind a portrait, icon, or overlay
- intentional page breaks remain sensible in English
- the final page is reachable and does not strand a partial word
- backlog and history show the complete text
- translated textures are legible at runtime scale.

## Exercise stateful interactions

Static screenshots cannot show all input-state defects. Repeat interactions in different orders:

- open and close tips or glossary entries many times
- click several linked names before closing the overlay
- switch among keyboard, mouse, controller, wheel, auto, skip, and backlog
- open settings or save/load from dialogue and return
- advance during voice, effects, transitions, and portrait changes
- save before and after a choice, reload, and confirm route state
- revisit unlocked chapters and prerequisite chains
- change language or asset packs, restart, and verify every surface
- lose and regain focus, resize, toggle full screen, and suspend the process.

After each overlay closes, gameplay input focus and progression must return immediately. Check normal use and repeated clicks.

## Use a version and platform matrix

Copy the [QA matrix template](templates/qa-matrix-template.md). Record the exact game version, storefront, operating system or compatibility layer, and resolution. Record installation state, patch version, save origin, and result.

At minimum separate:

- fresh install, previous patch, current patch, and partially patched install
- native Windows and each supported compatibility layer
- minimum, common, ultrawide, and high-DPI display modes
- new save, existing save, chapter select, and completed-game state.

Do not assume that a successful test applies to a different executable package or asset set.

## Close bugs without hiding regressions

Every runtime defect should produce:

1. exact reproduction steps and environment
2. screenshot, log, line ID, and relevant event state
3. root cause and affected scope
4. the smallest justified fix
5. a regression test or corpus query
6. results on the originally failing case and adjacent systems
7. a rebuilt release from the clean base.

After you correct a defect type, search for all instances with the same structure. After individual corrections, run the complete pass again. The project is complete only after a full pass requires no changes and all release-matrix cases pass.

## Final QA report

The final report should name:

- exact source, target, authority, build, and patch versions
- chapter sign-offs for every review gate
- corpus audit commands and finding counts
- supported and unsupported runtime variants
- install, update, reinstall, removal, and save-compatibility results
- remaining controlled losses or accepted limitations
- release hashes and the command that rebuilds them
- the date and result of the zero-change confirmation pass.

Use `No known issues` only when this evidence supports the conclusion.
