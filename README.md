# Visual Novel MTL Workflow

A reusable process for machine-assisted visual novel translation. The goal is not one-click output; it is a translation that can be resumed, reviewed, validated, and rebuilt.

All public examples in this repository are fictional. Keep extracted scripts, game assets, keys, and spoiler-bearing project notes private.

## Files

- [`grammar-guide-example.md`](grammar-guide-example.md): a filled, spoiler-free example of a VN-specific grammar guide.
- [`templates/terminology-authority.md`](templates/terminology-authority.md): template for names, aliases, items, locations, ranks, and usage rules.
- [`templates/grammar-guide-template.md`](templates/grammar-guide-template.md): blank grammar-guide structure.
- [`PROMPTS.md`](PROMPTS.md): prompts for discovery, translation, review, and consistency checks.
- [`examples/sample-batch.tsv`](examples/sample-batch.tsv): minimal translation-batch format.
- [`tools/validate_batch.py`](tools/validate_batch.py): structural validator for TSV batches.

## Workflow

### 1. Verify the canonical source

Games may ship duplicate, obsolete, or development scripts. Extract likely sources without modifying the originals, then compare distinctive lines, chapter order, speakers, choices, and UI text with a clean runtime session. Document which source the executable actually uses.

### 2. Export losslessly

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

### 3. Write the terminology authority

Do this before bulk translation. Mine speaker tables, character definitions, profiles, tips, ruby/readings, UI strings, and the script itself.

Record:

- names, aliases, nicknames, inherited titles, and timeline-dependent identities;
- organizations, locations, items, abilities, drugs, equipment, ranks, and recurring concepts;
- typography and romanization rules;
- terms that look similar but must remain distinct;
- production-only speaker qualifiers that must not enter displayed names;
- evidence, usage notes, and unresolved decisions.

Use `locked`, `working`, `review`, and `deprecated` states. A glossary is not only a word list: it must explain when each form is valid.

### 4. Write the VN-specific grammar guide

Sample narration, dialogue, exposition, choices, tips, and late-game scenes. Add constructions that repeatedly cause incorrect, wooden, or reveal-breaking output.

Each entry should include a stable line ID, short source excerpt, likely MT failure, better English structure, and a brief explanation. Common subjects include long prenominal modifiers, omitted subjects, partial negatives, `という` and `わけ`, concession, passive chains, evidentiality, register, deliberate ambiguity, and markup inside grammatical units.

Use real examples in the private project guide. Use [`grammar-guide-example.md`](grammar-guide-example.md) as the public format reference.

### 5. Translate context-sized batches

Batch by scene or chapter boundary, not an arbitrary character count. Include neighboring read-only rows, the scene and speaker context, relevant terminology entries, relevant grammar notes, and an exact output schema.

For each batch:

1. Save the immutable input.
2. Record the model, prompt version, date, and settings.
3. Generate only target fields.
4. Reject missing, duplicate, reordered, or unknown IDs.
5. Reject tag and placeholder mismatches.
6. Merge by `line_id` only.
7. Mark output `mt-draft` until reviewed.

Never silently overwrite an existing translation. Protect complicated engine tags with unique placeholders before generation when possible, then restore and compare them mechanically.

### 6. Review in three passes

**Structural QA** checks IDs, row counts, empty targets, tags, variables, placeholders, remaining source-language text, length limits, and changed control fields.

**Linguistic QA** checks meaning, omissions, invented information, subjects, pronouns, negation scope, causality, certainty, terminology, voice, fluency, and reveal timing. Read the English alone first, then compare it with the source.

**In-engine QA** checks overflow, fonts, line and page breaks, choices, voice timing, tags, backlog, save/load, menus, galleries, patch installation, and removal.

Run the included structural example with:

```sh
python3 tools/validate_batch.py examples/sample-batch.tsv
```

### 7. Resolve and release

Resolve every `review` terminology entry, search for deprecated forms, rerun validators against the full corpus, and test a clean patch install against the supported game version.

Distribute only the minimum patch data permitted by the project. The release should be rebuildable from the private canonical source and reviewed target tables without repeating model calls.

## Non-negotiable rules

- Do not translate commands, identifiers, file paths, voice IDs, tag syntax, or engine control fields.
- Do not modify source text in place.
- Do not merge output without stable IDs and structural validation.
- Do not turn rumor, inference, possibility, or a conditional identity into fact.
- Do not normalize all aliases to the final identity when the source changes names over time.
- Do not treat passing a validator as linguistic review.
- Do not commit copyrighted source material or spoiler-bearing private notes to the public guide.

## Completion checklist

- canonical runtime source documented;
- every translatable row has a stable ID and reviewed target;
- terminology review queue resolved;
- structural checks pass across the full corpus;
- linguistic review completed to the project's stated level;
- routes and auxiliary text tested in-engine;
- clean installation, update, and removal tested;
- release reproducible from archived originals and reviewed targets.

The extraction and import layers are engine-specific. Stable IDs, terminology, grammar notes, batching, review states, and QA gates are portable between projects.
