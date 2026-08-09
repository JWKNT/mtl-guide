# Prompt Library

These prompts are starting points. Replace every bracketed field and remove instructions that do not fit the project. Keep spoiler-bearing inputs and outputs in the private workspace.

Models may ignore formatting rules or damage markup. Validate their output programmatically before merging it.

## Shared project brief

Attach this block to each task, filled with the current approved rules.

```text
PROJECT
- Source language: [Japanese]
- Target language: [English]
- Medium: visual novel
- Narration tense/person: [rule]
- Name order and romanization: [rule]
- Honorific policy: [rule]
- Typography: [rule]
- Rating/tone constraints: [rule]
- Engine tags/placeholders: [syntax and preservation rule]
- Output length constraints: [textbox limits]
- Current phase and completed gates: [discovery / draft / bilingual review / prose / QA]

SOURCE OF TRUTH, IN ORDER
1. Current source line and complete scene context.
2. Player reading order and reveal chronology.
3. Identity, gender, and pronoun ledger.
4. Character and narrator voice guide.
5. Approved names and terminology.
6. Writing-system and wordplay decisions.
7. Title-specific grammar guide.
8. Current target-language draft.

TRANSLATION PRIORITIES, IN ORDER
1. Preserve meaning, agency, logical scope, uncertainty, and reveal timing.
2. Preserve character voice and register.
3. Produce natural target-language prose.
4. Preserve approved terminology exactly.
5. Preserve all IDs, tags, variables, and control syntax exactly.

Never invent context. When a line remains ambiguous, keep it ambiguous and add a short note.
```

## 1. Script discovery and risk scan

Use this on representative excerpts from across the VN, not the entire script in one request.

```text
You are profiling a visual novel before translation. Analyze the supplied source rows; do not translate the full excerpt.

Return four sections:

1. TERM CANDIDATES
A table with: source form, reading evidence, proposed English, category, aliases, line IDs, confidence, and why consistency matters.

2. IDENTITY AND SPEAKER RISKS
Possible aliases, inherited titles, time/costume variants, production-only speaker suffixes, ambiguous same-name characters, and reveal-sensitive naming. Do not assert that two identities are the same unless the excerpt supports it; label hypotheses.

3. RECURRING GRAMMAR RISKS
Constructions likely to produce wrong or wooden MT in this specific prose. For each: line IDs, source shape, likely failure, and the decision a translator must make.

4. STYLE OBSERVATIONS
Narration habits, register shifts, character-specific speech patterns, fragment/list rhythm, punctuation, and domain terminology.

Distinguish observed evidence from inference. Quote only the shortest phrase needed to identify a pattern.

[PROJECT BRIEF]
[SOURCE ROWS WITH STABLE IDS AND CONTEXT]
```

## 2. Terminology-authority proposal

```text
Act as a terminology researcher, not a bulk translator. Using the evidence below, propose additions or changes to the project's terminology authority.

For each entry return:
- canonical source form;
- required English form;
- source aliases/readings;
- category;
- status: locked, working, or review;
- usage rule;
- evidence line IDs;
- conflicts with existing entries.

Rules:
- Explicit in-game Latin text and ruby/readings outrank guesses from the kanji.
- Do not merge aliases or people without evidence.
- Separate neutral and derogatory terms.
- Separate organization, facility, product, rank, and person names even when they share a word.
- Identify sprite/costume/age labels that must not appear in normal dialogue names.
- Put uncertain romanization, segmentation, or diacritics in review.
- Do not silently replace an approved term. Explain any proposed change.

[CURRENT TERMINOLOGY AUTHORITY]
[EVIDENCE ROWS]
```

## 3. VN-specific uncommon-grammar guide builder

```text
Build or extend a translator-facing grammar and restructuring guide for this specific visual novel. This is not a general textbook.

Group repeated problems by construction. Each entry must contain:
- a concise searchable heading;
- stable line ID;
- a short source excerpt or abstracted source shape;
- head noun and omitted subject when relevant;
- a plausible bad English output that a literal translator or model might realistically produce;
- a corrected good English output that demonstrates the required decision;
- the failure type: meaning, agency, scope, certainty, reveal, register, syntax, markup, or another precise category;
- a short explanation of what is wrong with the bad output and why the good output preserves the original;
- notes on register, uncertainty, reveal timing, tags, or line breaks.

Every worked entry must include both `Bad English` and `Good English`; never make the reader infer the failure from commentary alone. The bad output must be plausible, not a deliberately absurd straw man. Prioritize patterns that recur, reverse logical scope, assign an action to the wrong character, flatten uncertainty, or create unreadable English. Do not add an entry merely because a sentence contains uncommon vocabulary.

If context is insufficient, say what surrounding rows are needed. Do not use knowledge from later scenes to resolve an earlier ambiguity.

[PROJECT BRIEF]
[CURRENT GRAMMAR GUIDE]
[SOURCE ROWS WITH BEFORE/AFTER CONTEXT]
```

## 4. Reading-order, identity, voice, and wordplay audit

Run this before bulk translation, then extend it when later scenes add evidence.

```text
Read the supplied visual-novel script in player-facing order. Build four concise, evidence-backed project authorities; do not translate the full script.

1. READING AND REVEAL ORDER
List chapter/route order, unlock prerequisites, narrator/POV, time period, and what the reader currently knows. Flag extraction order that differs from play order.

2. IDENTITY AND SPEECH AXES
For each recurring character, separately record identity/gender and English pronouns; Japanese first- and second-person forms; gendered or nonstandard speech markers; public/private code-switching; and changes over the story. Never infer pronouns from feminine or masculine speech alone.

3. REPRODUCIBLE VOICE
Describe observable English levers: contraction rate, clause length, directness, hedging, question style, address terms, vocabulary, fragments, repetitions, emotional displacement, and narrator noticing habits. Personality adjectives are insufficient. State what remains stable and what develops.

4. WRITING-SYSTEM RISKS
Find ruby/furigana mismatches, kanji readings/components, shared glyphs across identities, homophones, script switches, name formation, visual contrasts, and recurring lexical networks. For each, give line IDs, function, recommendation, and one strategy: preserve directly, explain once, rebuild locally, accept controlled loss, or do not force. Separate explicit wordplay from speculation.

Label observation and inference. Respect reveal timing. State what context is still missing.

[PROJECT BRIEF]
[CHAPTER/UNLOCK DATA]
[SOURCE ROWS IN PLAYER ORDER]
```

## 5. Strict batch translation

Protect complex tags with placeholders before using this prompt whenever possible.

```text
Translate only the rows in TARGET ROWS. CONTEXT ROWS are read-only and must not appear in the output.

Return TSV only, with exactly these columns and no Markdown fence:
line_id<TAB>target_text<TAB>notes

Requirements:
- Output exactly one row for every target line_id, in the same order.
- Copy line_id exactly. Do not add, omit, merge, or split rows.
- Do not translate speaker IDs, commands, filenames, variables, or tag syntax.
- Preserve every [[PLACEHOLDER_...]] token exactly once and in a grammatically appropriate position.
- Use approved terminology exactly.
- Resolve omitted subjects from the supplied scene context. If still ambiguous, preserve ambiguity and note it.
- Preserve the source's certainty level: fact, observation, inference, hearsay, possibility, or condition.
- Preserve identity reveal timing and the name used by the current viewpoint.
- Restructure Japanese syntax freely when needed for clear English, but do not invent or omit information.
- Match each speaker's approved voice and register.
- Keep text within [LIMIT] unless a note explains why that is impossible.
- Leave notes empty unless there is a real ambiguity, terminology conflict, cultural issue, or layout risk.

[PROJECT BRIEF]
[RELEVANT TERMINOLOGY ENTRIES]
[RELEVANT READING-ORDER, IDENTITY, VOICE, AND WORDPLAY ENTRIES]
[RELEVANT GRAMMAR-GUIDE SECTIONS]
[SCENE/SPEAKER SUMMARY]
[CONTEXT ROWS]
[TARGET ROWS]
```

## 6. Bilingual accuracy and continuity review

This pass diagnoses first. It should not rewrite every line into the reviewer's preferred style.

```text
Audit each source/target pair as a bilingual visual-novel editor.

Check, in order:
1. meaning, omitted information, and invented information;
2. narrator/POV, subject, object, pronoun number, tense, and causal direction;
3. negation scope, conditionals, concession, and evidentiality;
4. terminology, aliases, titles, and reveal timing;
5. voice, register, fluency, and textbox constraints;
6. tags, placeholders, variables, and punctuation.

Return a table with:
line_id | verdict | severity | issue | minimal_revision | rationale

Verdicts: pass, revise, or needs-context.
Severity: critical, major, minor, or none.

Use the smallest revision that fixes the issue. Do not flag a faithful line merely because another wording is possible. If the source is genuinely ambiguous, request the specific neighboring context needed instead of guessing.

[PROJECT BRIEF]
[TERMINOLOGY AUTHORITY]
[READING/REVEAL, IDENTITY, VOICE, AND WORDPLAY AUTHORITIES]
[RELEVANT GRAMMAR GUIDE]
[SOURCE/TARGET ROWS WITH CONTEXT]
```

## 7. Character voice and prose pass

Run only after bilingual accuracy review. Read the source and target together first, then the complete target-language chapter alone.

```text
Edit this reviewed visual-novel chapter for character voice and natural target-language prose. Treat the current target as editable draft, but preserve all established meaning and safeguards.

For every line, consult the local exchange, speaker/narrator dossier, and route progression. Check:
- diction, contraction rate, clause length, directness, hedging, and question style;
- terms of address, public/private code-switching, and emotional pressure;
- dialogue timing, meaningful fragments/repetitions, and exposition that sounds translated;
- narrator-specific noticing habits and literary texture;
- idioms or jokes that need functional rather than literal equivalence.

Do not undo approved names, pronouns, reveal boundaries, uncertainty, wordplay decisions, tags, or IDs. Do not give a character a gimmick or invented accent. After source-aware editing, read the English chapter straight through and repair only genuine flow problems.

Return:
1. changed rows as line_id | revised_target | reason;
2. unresolved questions;
3. a chapter sign-off stating rows reviewed, safeguards checked, and validation still required.

[PROJECT BRIEF]
[IDENTITY AND VOICE AUTHORITIES]
[WORDPLAY/GRAMMAR AUTHORITIES]
[SOURCE/TARGET CHAPTER IN PLAYER ORDER]
```

## 8. Consistency and reveal audit

```text
Audit these translated batches against the terminology authority and timeline notes.

Report only actionable findings in these groups:
- non-approved spelling or capitalization;
- deprecated term;
- alias used in the wrong social or timeline context;
- production-only speaker qualifier leaked into displayed text;
- two distinct concepts collapsed into one English term;
- same source concept translated inconsistently without a contextual reason;
- known identity named before the viewpoint/source reveals it;
- title, kinship term, or rank flattened in a way that changes the relationship.

For each finding give line_id, current text, required form or question, authority entry, and confidence. Do not perform blind string replacement when grammar or context changes the correct form.

[TERMINOLOGY AND IDENTITY AUTHORITIES]
[READING-ORDER/TIMELINE NOTES]
[VOICE AND WORDPLAY LEXICAL-NETWORK RULES]
[TRANSLATED ROWS]
```

## 9. Technical and row-correspondence QA

Run this after accuracy and prose editing. It is a mechanical release gate, not another style pass. If it finds anything, apply the fixes, validate, and run it again over the full corpus until the result is `CLEAN`.

```text
Perform a complete final QA of these source/target rows. Do not go looking for optional rewrites.

Verify every row for:
- exactly one matching stable ID, correct order, and English that belongs to that Japanese row rather than a neighbor;
- no missing, duplicated, untranslated, truncated, merged, or displaced text;
- spelling, grammar, punctuation, quotation pairing, capitalization, and locked romanization/terminology;
- exact preservation of tags, variables, placeholders, escaped newlines, and control syntax;
- correct speaker/narrator attribution and first-person singular/plural forms in context;
- allowed versus accidental source-language remnants.

Return only actionable findings as:
line_id | current_target | required_target | category | evidence

If and only if every supplied row passes, return exactly `CLEAN`. Do not treat a previous clean report as evidence; inspect the current files.

[PROJECT BRIEF]
[AUTHORITY FILE INDEX IN CONFLICT-PRIORITY ORDER]
[SOURCE/TARGET ROWS IN PLAYER ORDER]
[CURRENT VALIDATOR OUTPUT]
```

## 10. Handoff and completion audit

Use this before transferring the project or declaring a phase complete.

```text
Audit the project state; do not translate or polish lines.

Verify and report:
- canonical source/version/hash and rejected alternate sources;
- exact source, target, chapter, and support/UI coverage counts;
- unique stable IDs, target/archive equality, and review statuses;
- tag, variable, placeholder, and control-field integrity;
- remaining source-language text, with explicit allowed exceptions;
- unresolved names, terminology, identity, pronoun, reveal, wordplay, and layout issues;
- completed review gates per chapter in player order;
- changelog completeness and validator commands/results;
- compile/import state and in-engine QA state.

Return: COMPLETE, INCOMPLETE, or BLOCKED; actionable findings; authoritative files in conflict-priority order; exact next action; and a short handoff brief. Do not call a first draft reviewed merely because every target is nonblank.

[PROJECT BRIEF]
[PROJECT MANIFESTS AND REPORTS]
[VALIDATOR OUTPUT]
```

## Prompt-version record

Record a small manifest beside generated batches:

```text
prompt_version: [git commit or semantic version]
model: [exact model identifier]
generated_at: [ISO 8601 timestamp]
source_batch_hash: [SHA-256]
terminology_version: [git commit/hash]
grammar_guide_version: [git commit/hash]
reading_order_version: [git commit/hash]
identity_voice_version: [git commit/hash]
wordplay_version: [git commit/hash]
settings: [temperature, seed, or provider options]
human_reviewer: [name or blank]
```

Reproducibility does not mean a future model call will emit identical prose. It means the exact input, rules, output, and review history are recoverable.
