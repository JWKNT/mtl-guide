# Visual Novel MTL Workflow

A reusable process for machine-assisted visual novel translation. The goal is not one-click output; it is a translation that can be resumed, reviewed, validated, and rebuilt.

All public examples in this repository are fictional. Keep extracted scripts, game assets, keys, and spoiler-bearing project notes private.

## Files

- [`PROJECT-SETUP.md`](PROJECT-SETUP.md): project contract, private workspace, manifest, story model, authority index, and context-free agent startup protocol.
- [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md): canonical-source proof, canary import, presentation constraints, deterministic builds, patching, and release gates.
- [`REVIEW-QA.md`](REVIEW-QA.md): editorial pass ladder, repeated-text reconciliation, tag/layout audits, stateful runtime testing, and clean-pass closure.
- [`templates/project-manifest-template.md`](templates/project-manifest-template.md): reusable manifest for build identity, canonical paths, commands, counts, phase state, and handoff.
- [`templates/qa-matrix-template.md`](templates/qa-matrix-template.md): reusable chapter, platform, installation, and interaction regression matrix.
- [`grammar-guide-example.md`](grammar-guide-example.md): a filled, spoiler-free example of a VN-specific grammar guide.
- [`templates/terminology-authority.md`](templates/terminology-authority.md): template for names, aliases, reading/reveal order, identity, voice, wordplay, and usage rules.
- [`templates/grammar-guide-template.md`](templates/grammar-guide-template.md): blank grammar-guide structure.
- [`examples/reading-order-example.md`](examples/reading-order-example.md): fictional route, narrator, chronology, and reveal-order authority.
- [`examples/identity-pronoun-example.md`](examples/identity-pronoun-example.md): fictional identity, English pronoun, Japanese self-reference, and speech-axis ledger.
- [`examples/voice-guide-example.md`](examples/voice-guide-example.md): fictional evidence-backed character and narrator voice guide.
- [`examples/wordplay-guide-example.md`](examples/wordplay-guide-example.md): fictional writing-system and wordplay decision guide.
- [`PROMPTS.md`](PROMPTS.md): prompts for discovery, translation, review, and consistency checks.
- [`examples/sample-batch.tsv`](examples/sample-batch.tsv): minimal translation-batch format.

## Workflow

### 1. Establish the project contract

Create the private workspace, project manifest, authority index, review statuses, and definition of done described in [`PROJECT-SETUP.md`](PROJECT-SETUP.md). Separate immutable evidence, canonical working data, authorities, and build/QA receipts. Give every artifact one authoritative location and say how derived copies are regenerated.

Before bulk work, require a new agent to verify hashes and validator counts, read the authorities for its current phase, acknowledge the exact next action, and edit only through stable IDs. Project state belongs in manifests and reports, not only in chat history.

### 2. Verify the canonical source and round trip

Games may ship duplicate, obsolete, or development scripts. Extract likely sources without modifying the originals, then compare distinctive lines, chapter order, speakers, choices, and UI text with a clean runtime session. Document which source the executable actually uses.

Record the game version, hashes, extraction method, exact runtime evidence, and why every alternate source was accepted or rejected. Do not assume the easiest file to decode is the file the executable displays.

Before translating a chapter, run the clean export/import canary in [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md): change one harmless target through a stable ID, rebuild a disposable copy, confirm the running game displays it, re-extract to detect collateral changes, and reproduce the result from the immutable base. This proves both the source and the import path.

### 3. Export losslessly

Keep one row per engine row, including command rows. Preserve source order and every control field. Give each row a stable ID such as `chapter:source-row`; never use translated text or current row position as the key.

A useful master schema is:

```text
line_id, chapter, row_index, row_type, speaker, source_text,
target_text, command, args, voice_id, page_control, status, notes
```

Source and control fields remain immutable. Translation targets may be smaller:

```text
line_id, speaker_source, speaker_target, source_text,
target_text, status, model, notes
```

Regenerating targets must preserve existing translations and review state unless an explicit reset is requested.

Define review statuses before work begins. A useful progression is `draft` → `accuracy-reviewed` → `prose-reviewed` → `engine-verified`; advance a row or chapter only after that gate is actually complete.

Inventory the complete text surface before calling the export complete: scenario prose, speaker/name boxes, choices, tips/glossary, menus and settings, chapter select, galleries, sound room, credits, and text baked into textures. Keep internal lookup keys separate from visible text; translating an engine identifier can break the game.

Retain command-only and apparently blank rows. Background, portrait, name-box, timing, and page-state changes often occur there and affect the next visible line. Any reader, preview, or patch builder must replay the engine's real event stream; never infer visual state from the translated speaker or prose.

### 4. Write the terminology authority

Do this before bulk translation. Mine speaker tables, character definitions, profiles, tips, ruby/readings, UI strings, and the script itself.

Record:

- names, aliases, nicknames, inherited titles, and timeline-dependent identities;
- organizations, locations, items, abilities, drugs, equipment, ranks, and recurring concepts;
- typography and romanization rules;
- terms that look similar but must remain distinct;
- production-only speaker qualifiers that must not enter displayed names;
- evidence, usage notes, and unresolved decisions.

Use `locked`, `working`, `review`, and `deprecated` states. A glossary is not only a word list: it must explain when each form is valid.

### 5. Build the context authorities

Before bulk translation, read the script in the order a player can encounter it and create four compact private references:

- a chapter unlock/reading-order map with narrator, viewpoint, time period, and reveal boundaries;
- an identity and pronoun ledger that keeps a character's gender, English pronouns, Japanese self-reference, and gendered speech style as separate facts;
- a voice guide based on observable language—syntax, contraction level, directness, address terms, code-switching, verbal habits, and progression—not personality adjectives alone;
- a writing-system guide for ruby mismatches, kanji readings, homophones, script switches, name formation, glyph contrasts, and recurring lexical networks.

Also maintain mappings from internal speakers and engine events to displayed names, voice profiles, portraits, and backgrounds. Build a report of repeated and near-repeated source passages so quotations, flashbacks, retellings, and parallel viewpoints can be reconciled deliberately rather than translated independently.

Read enough of the complete work to create a spoiler-complete private story model before locking early English. Revisit the opening after later identities, narrators, relationships, and recurring language are understood; preserve only what the player is meant to know at each reveal boundary.

For wordplay, choose deliberately among **preserve directly**, **explain once**, **rebuild locally**, **accept a controlled loss**, and **do not force**. Record the source line, function, recommended treatment, and sacrifice. A tempting sound resemblance is not automatically an intentional pun.

Write an authority order. A useful default is: current source line and scene; reading/reveal chronology; identity/pronoun ledger; voice guide; name and terminology authority; writing-system decisions; grammar guide; current draft. The draft is evidence, never authority over the source.

### 6. Write the VN-specific grammar guide

Sample narration, dialogue, exposition, choices, tips, and late-game scenes. Add constructions that repeatedly cause incorrect, wooden, or reveal-breaking output.

Each entry should include a stable line ID, short source excerpt, plausible bad English output, corrected good English output, named failure type, and a brief explanation. The bad output must show a realistic error rather than a caricature, so future translators and models can see exactly what must be avoided. Common subjects include long prenominal modifiers, omitted subjects, partial negatives, `という` and `わけ`, concession, passive chains, evidentiality, register, deliberate ambiguity, and markup inside grammatical units.

Use real examples in the private project guide. Use [`grammar-guide-example.md`](grammar-guide-example.md) as the public format reference.

### 7. Translate context-sized batches

Batch by scene or chapter boundary, not an arbitrary character count. Include neighboring read-only rows, the scene and speaker context, relevant terminology entries, relevant grammar notes, and an exact output schema.

Large batches are efficient when they remain a coherent chapter or scene and the agent can retain the relevant authorities. Size alone is not a quality control; stable boundaries and sufficient context are.

For each batch:

1. Save the immutable input.
2. Record the model, prompt version, date, and settings.
3. Generate only target fields.
4. Reject missing, duplicate, reordered, or unknown IDs.
5. Reject tag and placeholder mismatches.
6. Merge by `line_id` only.
7. Mark output `mt-draft` until reviewed.

Never silently overwrite an existing translation. Protect complicated engine tags with unique placeholders before generation when possible, then restore and compare them mechanically.

### 8. Edit through explicit gates

Treat a complete first draft as a milestone, not a finished translation. Review chapters in the documented player reading order, not filename or extraction order.

- **Structural QA** checks IDs, row counts, empty targets, tags, variables, placeholders, remaining source-language text, length limits, and changed control fields.
- **Bilingual accuracy and continuity** checks every row against the source and local scene: meaning, omissions, invented information, subjects, pronouns, narrator number, negation, causality, certainty, terminology, identity, and reveal timing.
- **Voice and prose** rereads every row with the speaker/narrator dossier, then reads the chapter straight through in English. It repairs cadence, diction, contraction level, dialogue rhythm, exposition, and narrator texture without undoing accuracy.
- **Corpus audits** search globally for deprecated names, inconsistent terms, source-language remnants, unsupported I/we shifts, identity leaks, stale batch archives, and unequal target/source coverage.
- **Support/UI QA** reviews glossary, speaker labels, choices, menus, galleries, sound titles, and embedded texture text under the same terminology rules. Check sentence spacing, word-boundary wrapping and pagination, duplicated title forms, ruby/helper alignment, and overlays where translated text may sit on top of original text or art.
- **In-engine QA** checks overflow, fonts, line and page breaks, choices, voice timing, tags, backlog, save/load, menus, galleries, patch installation, and removal.

Do not collapse these gates. A robust order is complete draft → bilingual accuracy → voice/prose → technical and row-correspondence QA → support/UI QA → in-engine QA. The later mechanical pass should fix only demonstrated spelling, grammar, typography, locked-term, tag, newline, or alignment defects; it should not quietly reopen prose style.

Use [`REVIEW-QA.md`](REVIEW-QA.md) for the complete editorial and runtime test ladder. It separates repeated-text, narrator/identity, tag-function, presentation, stateful interaction, platform, and release-installation audits so a clean script cannot mask a broken game.

For each pass, maintain a chapter manifest with pending/in-progress/complete status and a short sign-off. Apply revisions through stable IDs, preserve `line_id | source | old target | new target | reason/pass` in a changelog, synchronize any batch archives, and rerun structural validation after every chapter. Treat automated first-person searches as an inventory, not a verdict: manually adjudicate every suspicious English I/we/my/our form against the actual narrator and scene. If a QA pass changes anything, merge the fixes and run the complete pass again. Finish only after an entire pass returns no changes. Do not trust a passing validator as proof of linguistic quality.

Run the included structural example with:

```sh
python3 tools/validate_batch.py examples/sample-batch.tsv
```

### 9. Resolve, compile, and release

Resolve every `review` terminology entry, search for deprecated forms, rerun validators against the full corpus, and test a clean patch install against the supported game version.

Always compile from immutable originals plus canonical reviewed targets, never recursively from a previously patched build. Emit a build report with input and output hashes, tools, commands, counts, changed files, validator results, supported versions, and warnings. Test fresh install, update, reinstall, interrupted-state recovery, language restoration if applicable, and removal across the supported runtime matrix.

Distribute only the minimum patch data permitted by the project. The release should be rebuildable from the private canonical source and reviewed target tables without repeating model calls. See [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md) for deterministic build and idempotent patcher requirements.

## Handoff packet

A new agent should not have to reconstruct project state from chat history. Hand off:

- the canonical source location, game version, hashes, extraction notes, and rejected alternate sources;
- authoritative target tables, stable-ID schema, status meanings, and exact validator commands with expected counts;
- the reading-order map and an index of every authority file in conflict-priority order;
- per-pass chapter progress, unresolved decisions, and the exact next action;
- a line-level changelog containing source, old target, and revised target;
- synchronized batch/support archives and a report proving coverage, tag integrity, and archive equality;
- compile/import instructions and the current in-engine QA state.

The receiving agent should acknowledge the authorities, treat accumulated English as editable draft, work in player order, and leave the project in an equally resumable state.

## Non-negotiable rules

- Do not translate commands, identifiers, file paths, voice IDs, tag syntax, or engine control fields.
- Do not modify source text in place.
- Do not merge output without stable IDs and structural validation.
- Do not turn rumor, inference, possibility, or a conditional identity into fact.
- Do not normalize all aliases to the final identity when the source changes names over time.
- Do not infer identity or English pronouns from feminine/masculine Japanese speech alone.
- Do not reduce character voice to personality labels or a catchphrase; document repeatable linguistic behavior and progression.
- Do not infer portrait, background, name-box, or pagination state from dialogue text when engine events are available.
- Do not declare translation complete while visible UI, glossary, speaker, or rasterized text remains uninventoried.
- Do not declare QA complete until a full post-fix pass finds nothing to change.
- Do not treat passing a validator as linguistic review.
- Do not commit copyrighted source material or spoiler-bearing private notes to the public guide.

## Completion checklist

- project manifest, authority index, phase state, and definition of done current;
- canonical runtime source documented;
- clean canary export/import/re-extraction round trip reproducible;
- every visible text surface inventoried;
- every translatable row has a stable ID and reviewed target;
- player reading order, narrators, identity axes, voice progression, and writing-system decisions documented;
- terminology review queue resolved;
- bilingual accuracy and English prose passes completed in player order;
- global pronoun, terminology, remnant, tag, coverage, and archive-equality audits pass;
- final spelling, grammar, markup, newline, and one-to-one row-correspondence pass returns no changes;
- support/UI text reviewed under the same authorities;
- routes and auxiliary text tested in-engine;
- repeated overlays, linked terms, input methods, save/load, focus, and progression tested as stateful sequences;
- supported versions, storefronts, platforms, compatibility layers, resolutions, install states, and save states recorded in a QA matrix;
- clean installation, update, and removal tested;
- release reproducible from archived originals and reviewed targets;
- handoff packet names the exact state, unresolved work, and next action.

The extraction and import layers are engine-specific. Stable IDs, terminology, grammar notes, batching, review states, and QA gates are portable between projects.
