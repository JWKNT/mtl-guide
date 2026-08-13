# Project Blueprint and Agent Startup

Use this page before extraction or translation. Its purpose is to make the project understandable without chat history and to prevent a new agent from guessing which files are authoritative.

## Four project truths

Every project should have four clearly named layers:

- **Immutable evidence:** untouched game files, source text, hashes, screenshots, and extraction logs.
- **Canonical working data:** one master table keyed by stable line IDs. This is the source of truth for targets and review state.
- **Authorities:** versioned decisions for reading order, terminology, identity, pronouns, voice, grammar, wordplay, typography, and reveal timing.
- **Receipts:** reproducible build commands, validator output, changelogs, QA reports, and release manifests.

Generated batches, compiled assets, web previews, and patch archives are outputs. Never let an output silently become the only copy of a translation decision.

## Suggested private workspace

```text
project/
  original/       untouched inputs and hashes
  extraction/     decoded data and extraction logs
  source/         normalized immutable source tables
  target/         canonical target tables and statuses
  authorities/    terminology, story, identity, voice, grammar, wordplay
  batches/        immutable model inputs and raw outputs
  revisions/      stable-ID patchsets and changelogs
  tools/          extraction, validation, import, build, and audit scripts
  build/          disposable compiled output
  reports/        coverage, QA, layout, and release reports
  release/        versioned distributable patches
```

Keep copyrighted assets and spoiler-bearing notes private. A public process guide should contain only fictional or structurally generic examples.

## Create the project manifest first

Copy the [project manifest template](templates/project-manifest-template.md). Record at minimum:

- title, language pair, engine, game edition, version, executable hash, and data-file hashes;
- supported storefronts, platforms, resolutions, and runtime versions;
- exact extraction, validation, build, install, update, and uninstall commands;
- canonical source and target locations;
- stable-ID schema, row counts, chapter counts, and text-surface inventory;
- authority files in conflict-priority order;
- review-status meanings and phase completion criteria;
- known uncertainties, rejected sources, unsupported builds, and current next action.

Update the manifest when a fact changes. Do not make a new agent infer current state from filenames such as `final2` or `latest-fixed`.

## Define ownership and status

For every artifact, designate one authoritative location and one producer. For example, the master target table owns English prose; the glossary export is regenerated from it and the terminology authority. If the glossary and target disagree, the conflict order must say which wins.

Use explicit statuses instead of folder position. A useful line progression is:

```text
untranslated -> mt-draft -> accuracy-reviewed -> prose-reviewed -> engine-verified
```

A useful chapter manifest also records separate gates for source alignment, authorities applied, bilingual review, prose review, support/UI review, layout review, and runtime verification.

## Build a story model before bulk translation

Read enough of the complete work to understand its actual structure before locking English choices. Create a private, spoiler-complete story model containing:

- a chapter dependency graph and both runtime and editorial reading orders;
- scene-level viewpoint, narrator, time period, location, and reveal state;
- a character identity and relationship timeline;
- internal speaker label to displayed name, portrait, voice, and voice-profile mappings;
- recurring scenes, quotations, documents, flashbacks, and retellings that may repeat source text;
- unresolved mysteries where English must preserve ambiguity.

The player-facing translation may be reveal-safe; the private authority should not be context-poor. Revisit early chapters after the full work is understood.

## Authority index and conflict order

Create a one-page authority index. For each file, record its purpose, version or hash, owner, and whether it is locked or provisional. State the conflict order explicitly.

A practical default is:

1. current source line, engine events, and immediate scene;
2. chapter chronology, narrator, and reveal map;
3. identity and pronoun ledger;
4. character and narrator voice guide;
5. terminology and proper-noun authority;
6. writing-system and wordplay decisions;
7. grammar and restructuring guide;
8. current English draft.

The English draft is never evidence that the source means what the draft says.

## Context-free agent startup protocol

Before editing, a new agent should:

1. Read the project manifest, authority index, and current handoff.
2. Verify the canonical source and target hashes and run the baseline validators.
3. Read every authority required for the current phase, including narrator, identity, pronoun, and voice rules.
4. Inspect the chapter dependency and editorial reading orders.
5. Confirm the current phase, completed gates, unresolved decisions, exact next chapter, and permitted files to modify.
6. State any contradictions before resolving them; never silently choose a lower-priority authority.
7. Make edits through stable IDs, record old and new targets, and rerun validators before handoff.

This acknowledgement should be brief, but it prevents a fresh context from starting an unauthorized new first pass.

## Readiness gate

Do not begin bulk translation until all of these are true:

- the runtime source has been identified with evidence;
- a one-line export/import canary has appeared correctly in a clean runtime build;
- visible text surfaces and engine control fields have been inventoried;
- stable IDs survive export, merge, rebuild, and re-extraction;
- source and target schemas, statuses, and validators exist;
- the story, narrator, identity, terminology, voice, grammar, and wordplay authorities are initialized;
- the rebuild starts from an immutable clean base;
- the project manifest identifies the exact next action and definition of done.

If a gate is unresolved, investigate it before spending model time on prose that may not be importable or correctly contextualized.
