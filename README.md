# Visual Novel MTL Workflow

This guide gives a reusable process for machine-assisted visual novel translation. The process includes translation, review, validation, and repeatable builds. It also records the state needed to continue work.

The public workflow examples are fictional. Keep extracted scripts, game assets, keys, and project notes that contain spoilers private.

## Files

- [`PROJECT-SETUP.md`](PROJECT-SETUP.md): project requirements, private workspace, manifest, story model, authority index, and startup procedure for a new agent.
- [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md): canonical-source proof, canary import, presentation constraints, deterministic builds, patching, and release gates.
- [`REVIEW-QA.md`](REVIEW-QA.md): editorial review passes, repeated-text checks, tag and layout audits, stateful runtime tests, and final verification.
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

Create the private workspace, project manifest, authority index, review statuses, and completion criteria described in [`PROJECT-SETUP.md`](PROJECT-SETUP.md). Keep immutable evidence, canonical working data, authority files, and build/QA records separate. Give each artifact one authoritative location. Record the procedure to regenerate derived copies.

Before bulk work, give a new agent these requirements:

- Verify hashes and validator counts.
- Read the authority files for the current phase.
- Confirm the exact next action.
- Make edits only through stable IDs.

Record project state in manifests and reports. Chat history alone is insufficient.

### 2. Verify the canonical source and round trip

Games can include duplicate, obsolete, or development scripts. Extract possible sources without changes to the originals. Compare distinctive lines, chapter order, speakers, choices, and UI text with a clean runtime session. Record the source that the executable uses.

Record the game version, hashes, extraction method, and exact runtime evidence. Record the reason for acceptance or rejection of each alternative source. Do not assume that the easiest file to decode contains the text that the executable displays.

Before chapter translation, run the clean export/import canary test in [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md). Change one harmless target through a stable ID. Rebuild a disposable copy. Confirm that the running game displays the change. Re-extract the copy to find unintended changes. Reproduce the result from the immutable base.

This test verifies the source and the import path.

### 3. Export losslessly

Keep one row per engine row, including command rows. Preserve source order and every control field. Give each row a stable ID such as `chapter:source-row`. Do not use translated text or the current row position as the key.

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

When you regenerate targets, preserve existing translations and review state. Reset them only after an explicit request.

Before work starts, define review statuses. A useful sequence is `draft` → `accuracy-reviewed` → `prose-reviewed` → `engine-verified`. Advance a row or chapter only after completion of the applicable review gate.

Before export sign-off, make an inventory of all visible text:

- scenario prose and speaker/name boxes
- choices and tips/glossary
- menus, settings, and chapter select
- galleries, sound room, and credits
- text in textures

Keep internal lookup keys separate from visible text. Translation of an engine identifier can cause a game failure.

Keep command-only rows and rows that appear blank. These rows often change backgrounds, portraits, name boxes, timing, or page state before the next visible line. Each reader, preview, or patch builder must replay the engine's actual event stream. Do not infer visual state from the translated speaker or prose.

### 4. Write the terminology authority

Before bulk translation, write the terminology authority. Find evidence in speaker tables, character definitions, profiles, tips, ruby/readings, UI strings, and the script.

Record:

- names, aliases, nicknames, inherited titles, and timeline-dependent identities
- organizations, locations, items, abilities, drugs, equipment, ranks, and recurring concepts
- typography and romanization rules
- terms that look similar but must remain distinct
- production-only speaker qualifiers that must not enter displayed names
- evidence, usage notes, and unresolved decisions.

Use `locked`, `working`, `review`, and `deprecated` states. Explain when each glossary form is valid.

### 5. Build the context authorities

Before bulk translation, read the script in player order. Create four short private references:

- a chapter unlock/reading-order map with narrator, viewpoint, time period, and reveal boundaries
- an identity and pronoun ledger that keeps a character's gender, English pronouns, Japanese self-reference, and gendered speech style as separate facts
- a voice guide with syntax, contraction level, directness, address terms, code-switching, verbal habits, and progression, supported by observed language
- a writing-system guide for ruby mismatches, kanji readings, homophones, script switches, name formation, glyph contrasts, and recurring lexical networks.

Keep mappings from internal speakers and engine events to displayed names, voice profiles, portraits, and backgrounds. Report repeated and near-repeated source passages. Use the report to compare quotations, flashbacks, retellings, and parallel viewpoints before translation decisions.

Before approval of early English, read enough of the complete work to create a private story model with all spoilers. After you understand later identities, narrators, relationships, and repeated language, review the opening again. At each reveal boundary, preserve only the information that the player should know.

For wordplay, choose **preserve directly**, **explain once**, **rebuild locally**, **accept a controlled loss**, or **do not force**. Record the source line, function, recommended treatment, and information lost. Similar sounds alone do not prove an intentional pun.

Record the authority order. This default order is useful:

1. Current source line and scene
2. Reading/reveal chronology
3. Identity/pronoun ledger
4. Voice guide
5. Name and terminology authority
6. Writing-system decisions
7. Grammar guide
8. Current draft

The draft is evidence of previous work. It cannot override the source.

### 6. Write the VN-specific grammar guide

Sample narration, dialogue, exposition, choices, tips, and late-game scenes. Add constructions that repeatedly cause incorrect or unnatural output, or premature reveals.

Include these fields in each entry:

- stable line ID and short source excerpt
- realistic bad English output and corrected good English output
- named failure type and short explanation

Use a realistic error to show translators and models what to avoid. Common subjects include long prenominal modifiers, omitted subjects, partial negatives, `という` and `わけ`, concession, and passive chains. Other subjects include evidentiality, register, deliberate ambiguity, and markup inside grammatical units.

Use real examples in the private project guide. Use [`grammar-guide-example.md`](grammar-guide-example.md) as the public format reference.

### 7. Translate context-sized batches

Use scene or chapter boundaries for batches. Do not use an arbitrary character count. Include adjacent read-only rows, scene and speaker context, applicable terminology entries, applicable grammar notes, and an exact output schema.

Large batches can improve efficiency if they keep a chapter or scene together and the agent retains the applicable authority files. Batch quality depends on stable boundaries and sufficient context. Size alone does not control quality.

For each batch:

1. Save the immutable input.
2. Record the model, prompt version, date, and settings.
3. Generate only target fields.
4. Reject missing, duplicate, reordered, or unknown IDs.
5. Reject tag and placeholder mismatches.
6. Merge by `line_id` only.
7. Mark output `mt-draft` until reviewed.

Do not overwrite an existing translation without a record. Where possible, protect complex engine tags with unique placeholders before generation. Then restore the tags. Compare the restored tags with a script.

### 8. Edit through explicit gates

A complete first draft still requires review. Review chapters in the documented player reading order. Do not use filename or extraction order.

- **Structural QA** checks IDs, row counts, empty targets, tags, variables, placeholders, remaining source-language text, length limits, and changed control fields.
- **Bilingual accuracy and continuity** checks each row against the source and local scene. It checks meaning, omissions, invented information, subjects, pronouns, and narrator number. It also checks negation, causality, certainty, terminology, identity, and reveal timing.
- **Voice and prose** checks every row against the speaker/narrator record. This pass then reads the complete chapter in English. It corrects cadence, diction, contraction level, dialogue rhythm, exposition, and narrator texture without loss of accuracy.
- **Corpus audits** search globally for deprecated names, inconsistent terms, source-language remnants, unsupported I/we shifts, premature identity reveals, outdated batch archives, and unequal target/source coverage.
- **Support/UI QA** checks glossary, speaker labels, choices, menus, galleries, sound titles, and texture text against the same terminology rules. It checks sentence spacing, word-boundary wrapping, pagination, duplicate title forms, ruby/helper alignment, and overlays over original text or art.
- **In-engine QA** checks overflow, fonts, line and page breaks, choices, voice timing, tags, backlog, save/load, menus, galleries, patch installation, and removal.

Keep these review gates separate. Use this sequence:

1. Complete draft
2. Bilingual accuracy
3. Voice/prose
4. Technical and row-correspondence QA
5. Support/UI QA
6. In-engine QA

In the later mechanical pass, correct only verified spelling, grammar, typography, locked-term, tag, newline, or alignment defects. Do not change prose style in that pass.

Use [`REVIEW-QA.md`](REVIEW-QA.md) for the complete editorial and runtime test sequence. It separates repeated-text, narrator/identity, tag-function, presentation, stateful interaction, platform, and release-installation audits. A correct script does not prove that the game operates correctly.

For each pass, keep a chapter manifest with pending/in-progress/complete status and a short sign-off. Apply revisions through stable IDs. Keep `line_id | source | old target | new target | reason/pass` in a changelog. Synchronize batch archives. After each chapter, run structural validation again.

Use automated first-person searches to make an inventory. Manually check each suspect English I/we/my/our form against the actual narrator and scene. If a QA pass changes anything, merge the corrections. Then run the complete pass again. Finish only after a complete pass returns no changes. A passing validator does not prove linguistic quality.

Run the included structural example with:

```sh
python3 tools/validate_batch.py examples/sample-batch.tsv
```

### 9. Resolve, compile, and release

Resolve every `review` terminology entry. Search for deprecated forms. Run validators again against the full corpus. Test a clean patch installation against the supported game version.

Compile from immutable originals and canonical reviewed targets. Do not compile from a previously patched build. Generate a build report with input/output hashes, tools, commands, counts, changed files, validator results, supported versions, and warnings. Across the supported runtime matrix, test fresh installation, update, reinstallation, interrupted-state recovery, and removal. If applicable, also test language restoration.

Distribute only the minimum patch data that the project permits. The release should be rebuildable from the private canonical source and reviewed target tables without new model calls. See [`ROUND-TRIP-BUILD.md`](ROUND-TRIP-BUILD.md) for deterministic build and idempotent patcher requirements.

## Handoff packet

Give a new agent the project state outside chat history. Include these items in the handoff:

- the canonical source location, game version, hashes, extraction notes, and rejected alternate sources
- authoritative target tables, stable-ID schema, status meanings, and exact validator commands with expected counts
- the reading-order map and an index of every authority file in conflict-priority order
- per-pass chapter progress, unresolved decisions, and the exact next action
- a line-level changelog containing source, old target, and revised target
- synchronized batch/support archives and a report proving coverage, tag integrity, and archive equality
- compile/import instructions and the current in-engine QA state.

The receiving agent should confirm the authority files and treat the existing English as an editable draft. The agent should work in player order and record sufficient state for the next handoff.

## Non-negotiable rules

- Do not translate commands, identifiers, file paths, voice IDs, tag syntax, or engine control fields.
- Do not modify source text in place.
- Do not merge output without stable IDs and structural validation.
- Do not turn rumor, inference, possibility, or a conditional identity into fact.
- Do not normalize all aliases to the final identity when the source changes names over time.
- Do not infer identity or English pronouns from feminine/masculine Japanese speech alone.
- Record repeatable linguistic behavior and progression. Personality labels or a catchphrase alone do not define character voice.
- Do not infer portrait, background, name-box, or pagination state from dialogue text when engine events are available.
- Do not declare translation complete while visible UI, glossary, speaker, or rasterized text remains uninventoried.
- Do not declare QA complete until a full post-fix pass finds nothing to change.
- Do not treat passing a validator as linguistic review.
- Do not commit copyrighted source material or spoiler-bearing private notes to the public guide.

## Completion checklist

- project manifest, authority index, phase state, and definition of done current
- canonical runtime source documented
- clean canary export/import/re-extraction round trip reproducible
- every visible text surface inventoried
- every translatable row has a stable ID and reviewed target
- player reading order, narrators, identity axes, voice progression, and writing-system decisions documented
- terminology review queue resolved
- bilingual accuracy and English prose passes completed in player order
- global pronoun, terminology, remnant, tag, coverage, and archive-equality audits pass
- final spelling, grammar, markup, newline, and one-to-one row-correspondence pass returns no changes
- support/UI text reviewed under the same authorities
- routes and auxiliary text tested in-engine
- repeated overlays, linked terms, input methods, save/load, focus, and progression tested as stateful sequences
- supported versions, storefronts, platforms, compatibility layers, resolutions, install states, and save states recorded in a QA matrix
- clean installation, update, and removal tested
- release reproducible from archived originals and reviewed targets
- handoff packet names the exact state, unresolved work, and next action.

Extraction and import depend on the engine. Other projects can use the same stable-ID, terminology, grammar-note, batching, review-state, and QA-gate methods.
