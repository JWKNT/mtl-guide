# Visual Novel MTL Workflow

A reusable, engine-agnostic process for producing a machine-assisted visual novel translation that is consistent, reviewable, and safe to resume.

This repository is a workflow, not a one-click translator. The model is only one component. The important work happens before and after generation: identifying the real runtime script, defining terminology and character rules, documenting title-specific grammar traps, preserving control syntax, and reviewing the result in context.

All examples in this repository are fictional. Do not commit extracted scripts, game assets, keys, or other copyrighted source material to a public repository.

## What this kit contains

- [`templates/terminology-authority.md`](templates/terminology-authority.md): a living authority for names, aliases, items, organizations, locations, titles, and typography.
- [`grammar-guide-example.md`](grammar-guide-example.md): a filled, spoiler-free example of a VN-specific uncommon-grammar guide.
- [`templates/grammar-guide-template.md`](templates/grammar-guide-template.md): a blank version to fill from the title you are translating.
- [`PROMPTS.md`](PROMPTS.md): prompts for discovery, translation, review, and consistency auditing.
- [`examples/sample-batch.tsv`](examples/sample-batch.tsv): a minimal translation-batch format with stable line IDs.
- [`tools/validate_batch.py`](tools/validate_batch.py): a dependency-free structural check for TSV batches.

## The non-negotiable rules

1. Establish one canonical source before translating. Some games ship duplicate, obsolete, or development versions of a script. Confirm which data the executable actually displays.
2. Never translate command rows, identifiers, tag syntax, file paths, voice IDs, or engine control fields.
3. Give every translatable row a stable ID. Never use row position alone as the key.
4. Keep source text immutable. Write translations into a separate column or table.
5. Approve names and recurring terms before bulk translation. Consistency cannot be repaired reliably at the very end.
6. Build a grammar guide from the actual VN. A generic Japanese grammar reference will not capture the author's repeated constructions, narration habits, reveal mechanics, or engine markup.
7. Preserve uncertainty. Rumors, inference, conditionals, vague referents, and aliases must not be converted into facts merely because the translator knows what happens later.
8. Validate every batch mechanically, then review it linguistically, then test it in-engine.

## Recommended workspace

Keep private extracted material and public workflow material separate.

```text
private-project/
├── source/
│   ├── canonical-script.tsv
│   └── supporting-data/
├── translation/
│   ├── source-by-chapter/
│   ├── targets-by-chapter/
│   └── logs/
├── notes/
│   ├── terminology-authority.md
│   └── uncommon-grammar-guide.md
├── tools/
└── builds/

public-guide/
├── README.md
├── PROMPTS.md
├── grammar-guide-example.md
├── templates/
├── examples/
└── tools/
```

Do not put the private project inside the public repository, even temporarily. Add engine-specific source and build paths to the private project's `.gitignore` before doing any extraction.

## End-to-end process

### Phase 0: define scope and release constraints

Write down:

- source and target language;
- what will be translated: scenario, choices, menus, tips, credits, image text, and so on;
- target platform and game version;
- intended patch format;
- who is allowed to see spoiler-bearing files;
- terminology and style approvers;
- what source material may legally be redistributed.

Make a read-only backup of the unmodified game. Record hashes for the original files and the exact game version. Work on copies.

### Phase 1: locate and verify the canonical text

Inventory every plausible text source: asset bundles, archives, scenario files, localization tables, spreadsheets, JSON, compiled resources, and engine databases. A VN may contain more than one version of a scene.

For each candidate source:

1. Extract without modifying the original.
2. Preserve the complete row structure, including command rows.
3. Compare several distinctive lines with text shown in a clean runtime session.
4. Check chapter order, speaker labels, choices, tips, UI strings, and line counts.
5. Designate one source as canonical and document why.

Do not choose a source merely because it is easier to read. The right source is the one the shipped executable uses.

### Phase 2: create a lossless translation table

Use one row per engine row, not one row per sentence. A useful master schema is:

```text
line_id, chapter, row_index, row_type, speaker, source_text,
target_text, command, args, voice_id, page_control, status, notes
```

The exact fields will differ by engine, but these properties should not:

- `line_id` is unique and stable across reruns;
- all source and control fields are preserved losslessly;
- `target_text` begins empty;
- command rows remain present but are excluded from translation targets;
- source order can always be reconstructed;
- import can address a row by stable ID, not by fuzzy text matching.

A practical ID is `chapter:source-row`, such as `C03:00427`. If the engine already has a trustworthy immutable key, use it.

Create smaller target files by chapter or scene. A translation target normally needs only:

```text
line_id, speaker_source, speaker_target, source_text,
target_text, status, model, notes
```

Regenerating targets must preserve existing `target_text`, `status`, and `notes` unless an explicit reset is requested.

### Phase 3: build the terminology authority

Do this before bulk translation. Mine at least:

- speaker labels and character definitions;
- in-game encyclopedias, tips, codices, and profiles;
- ruby/furigana and explicit Latin spellings;
- recurring capitalized or marked terms;
- organizations, locations, weapons, items, drugs, ranks, and events;
- UI labels and chapter titles;
- aliases, nicknames, inherited titles, and time-dependent names;
- production-only sprite qualifiers such as “young,” “injured,” or costume labels.

Use [`templates/terminology-authority.md`](templates/terminology-authority.md). Every entry should have a source form, required English form, aliases, status, and a usage note. Suggested statuses:

- `locked`: source-backed and approved;
- `working`: use consistently for now;
- `review`: provisional and release-blocking;
- `deprecated`: retained only to catch and replace an old form.

The authority should state rules that a flat glossary cannot express: when two aliases refer to one person, when the source intentionally changes names, which terms must remain distinct, and which speaker-label suffixes are production metadata rather than dialogue names.

### Phase 4: build the VN-specific uncommon-grammar guide

Sample the whole script, not only the opening chapter. Include narration, dialogue, exposition, action, choices, tips, and late-game scenes. The guide should document patterns that repeatedly cause incorrect or wooden output in this title.

For every pattern:

1. Give it a searchable name.
2. Explain what the construction is doing in this VN.
3. Include a short source excerpt and stable line ID.
4. Identify the literal or likely MT failure.
5. Show a better English structure.
6. Explain the decision in one or two sentences.
7. Note any interaction with character voice, ambiguity, line breaks, or engine tags.

Good candidates include long prenominal modifiers, omitted subjects, partial negatives, `という` and `わけ`, concession, stacked hypotheticals, passive/causative chains, evidentiality, list rhythm, role-based address, register shifts, deliberate ambiguity, and markup inside grammatical units.

Use real project examples in the private guide. Use short excerpts only, and keep that guide private if its examples reveal plot or copyrighted script content. The public [`grammar-guide-example.md`](grammar-guide-example.md) uses invented lines to demonstrate the format.

### Phase 5: define style and presentation rules

Decide before translation:

- name order and romanization policy;
- honorific policy;
- quotation marks, ellipses, dashes, and capitalization;
- contractions by character/register;
- profanity and dialect treatment;
- narration tense and person;
- whether technical terms are translated, transliterated, or glossed once;
- textbox width, line count, and font constraints;
- treatment of ruby, tips, speed, color, pause, and interpolation tags.

Prefer character voice rules over vague labels such as “natural English.” For example: “uses short declaratives and no contractions when speaking officially” is testable; “sounds dignified” is not.

### Phase 6: prepare context-sized batches

Batch by scene or chapter boundary whenever possible. Do not cut blindly at a character count. Each batch should include enough surrounding rows to resolve speakers, omitted subjects, pronouns, and scene state.

A useful compromise is 50–150 target lines plus 5–15 lines of read-only context on either side. Dense literary narration may require smaller batches. Simple UI strings may be handled separately.

Before sending a batch to a model, provide:

- the translation brief and style rules;
- relevant terminology entries, not necessarily the entire glossary;
- relevant grammar-guide sections;
- speaker and scene context;
- exact output schema;
- protected-tag rules;
- explicit instructions not to translate or reorder IDs.

Do not rely on a model to preserve complicated tags by attention alone. Replace tags with unique placeholders before generation when possible, then restore them and compare the resulting tag signature with the source.

### Phase 7: translate with an auditable loop

For each batch:

1. Save the immutable input batch.
2. Record the model, prompt version, date, and settings.
3. Generate only the requested target fields.
4. Reject missing, duplicated, reordered, or unknown IDs.
5. Reject tag or placeholder mismatches.
6. Merge by `line_id` only.
7. Mark output `mt-draft`; do not call it reviewed.
8. Run the structural validator immediately.
9. Review difficult or uncertain lines while context is fresh.

Never silently overwrite an existing translation. Replacement should require an explicit flag or review action.

### Phase 8: perform three separate QA passes

#### Structural QA

Automate checks for:

- missing and duplicate IDs;
- empty target cells;
- changed row counts or order;
- tag, placeholder, and variable mismatches;
- untranslated Japanese outside allowed tags;
- broken quoting, escapes, or newlines;
- length limits;
- commands or source fields that changed;
- target rows that do not exist in the canonical source.

Run the included demo validator with:

```sh
python3 tools/validate_batch.py examples/sample-batch.tsv
```

#### Linguistic QA

Review for:

- mistranslation, omission, or invented information;
- incorrect subject or pronoun;
- partial negation reversed into total negation;
- rumor, inference, or conditional turned into fact;
- inconsistent aliases, terminology, titles, or capitalization;
- flattened character voices;
- Japanese-shaped English syntax;
- overlong lines and accidental fragments;
- premature identity or plot reveals.

Read the English once without looking at the source. It should make sense on the first pass. Then compare it with the source to catch lost qualifications and relationships.

#### In-engine QA

Test on a clean copy of the exact supported game version. Check:

- text overflow, clipping, and font coverage;
- line and page breaks;
- nameplate fit;
- choices and branching;
- voice timing and auto mode;
- tips/ruby links and formatting tags;
- save/load, backlog, skip, and chapter select;
- menus, galleries, achievements, and other auxiliary text;
- patch installation and removal.

Screenshots and issue reports should reference stable line IDs.

### Phase 9: resolve the review queue and release

Before release:

- resolve every `review` terminology entry;
- freeze a glossary version and prompt version;
- rerun all validators against the full corpus;
- perform consistency searches for every approved term and deprecated form;
- test a fresh patch install against original file hashes;
- document supported game versions and restoration steps;
- distribute only the minimum patch data permitted for the project.

Keep extraction, translation, editing, validation, and packaging reproducible. A release should be rebuildable from the private canonical source and reviewed target tables without repeating model calls.

## Prompting strategy

Prompts work best as a pipeline rather than one enormous instruction:

1. **Discovery prompt:** finds candidate terms, aliases, voices, and recurring grammar risks.
2. **Authority prompt:** proposes glossary entries with evidence and uncertainty; a human approves them.
3. **Grammar prompt:** turns recurring difficult lines into title-specific translation rules.
4. **Batch prompt:** translates a bounded scene using only approved rules and a strict schema.
5. **Review prompt:** compares source and target without rewriting good lines unnecessarily.
6. **Consistency prompt:** audits approved terminology and reveal-sensitive naming across batches.

Ready-to-edit versions are in [`PROMPTS.md`](PROMPTS.md). Treat model output as a proposal. A prompt must never be the only protection for engine syntax or data integrity.

## Completion criteria

A translation is ready for release when:

- canonical-source verification is documented;
- every translatable row has a stable ID and a target;
- all structural validators pass;
- all terminology review items are resolved;
- linguistic review is complete at the agreed level;
- the full game or an explicitly documented route matrix has been tested;
- a clean install, update, and removal have been tested;
- the patch can be reproduced without modifying the archived originals.

## Adapting this workflow

The extraction and import layer is engine-specific. Everything between them—stable IDs, terminology authority, grammar guide, batching, prompts, review states, and QA gates—is portable. Keep that middle layer boring, explicit, and version-controlled. That is what makes a long VN translation resumable by another person months later.
