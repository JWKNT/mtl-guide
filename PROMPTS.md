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
- the likely literal/MT failure;
- a natural structural translation or rewrite;
- a short explanation of why it preserves the original;
- notes on register, uncertainty, reveal timing, tags, or line breaks.

Prioritize patterns that recur, reverse logical scope, assign an action to the wrong character, flatten uncertainty, or create unreadable English. Do not add an entry merely because a sentence contains uncommon vocabulary.

If context is insufficient, say what surrounding rows are needed. Do not use knowledge from later scenes to resolve an earlier ambiguity.

[PROJECT BRIEF]
[CURRENT GRAMMAR GUIDE]
[SOURCE ROWS WITH BEFORE/AFTER CONTEXT]
```

## 4. Strict batch translation

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
[RELEVANT GRAMMAR-GUIDE SECTIONS]
[SCENE/SPEAKER SUMMARY]
[CONTEXT ROWS]
[TARGET ROWS]
```

## 5. Bilingual accuracy review

This pass diagnoses first. It should not rewrite every line into the reviewer's preferred style.

```text
Audit each source/target pair as a bilingual visual-novel editor.

Check, in order:
1. meaning, omitted information, and invented information;
2. subject, object, pronoun, tense, and causal direction;
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
[RELEVANT GRAMMAR GUIDE]
[SOURCE/TARGET ROWS WITH CONTEXT]
```

## 6. Consistency and reveal audit

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

[TERMINOLOGY AUTHORITY]
[TIMELINE/REVEAL NOTES]
[TRANSLATED ROWS]
```

## 7. Monolingual polish pass

Run only after bilingual accuracy review.

```text
Read the target-language scene as a visual-novel editor without rewriting its meaning.

Flag:
- sentences that do not parse on first reading;
- Japanese-shaped noun piles or excessive nominalization;
- accidental repetition or unclear pronouns;
- character voices that drift from the supplied voice rules;
- fragments that appear accidental;
- dialogue that is too formal, too casual, or implausibly expository;
- lines likely to overflow the stated textbox limit.

Return line_id, issue, and minimal revision. Preserve approved terms, tags, uncertainty, and reveal timing. Do not smooth intentional fragments, repetition, or awkwardness that defines a character.

[PROJECT BRIEF]
[CHARACTER VOICE RULES]
[TARGET-LANGUAGE SCENE]
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
settings: [temperature, seed, or provider options]
human_reviewer: [name or blank]
```

Reproducibility does not mean a future model call will emit identical prose. It means the exact input, rules, output, and review history are recoverable.
