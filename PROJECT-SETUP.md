# Project Blueprint and Agent Startup

Before extraction or translation, use this page to record project requirements. The records must explain the project without chat history and identify its authoritative files.

## Four project truths

Give each project four clearly named parts:

- **Immutable evidence:** untouched game files, source text, hashes, screenshots, and extraction logs.
- **Canonical working data:** one master table keyed by stable line IDs. This is the source of truth for targets and review state.
- **Authorities:** versioned decisions for reading order, terminology, identity, pronouns, voice, grammar, wordplay, typography, and reveal timing.
- **Verification records:** reproducible build commands, validator output, changelogs, QA reports, and release manifests.

Generated batches, compiled assets, web previews, and patch archives are outputs. Keep translation decisions in the authoritative records, even when an output also contains them.

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

Keep copyrighted assets and notes with spoilers private. Use only fictional examples or generic structures in a public process guide.

## Create the project manifest first

Copy the [project manifest template](templates/project-manifest-template.md). Record at minimum:

- title, language pair, engine, game edition, version, executable hash, and data-file hashes
- supported storefronts, platforms, resolutions, and runtime versions
- exact extraction, validation, build, install, update, and uninstall commands
- canonical source and target locations
- stable-ID schema, row counts, chapter counts, and text-surface inventory
- authority files in conflict-priority order
- review-status meanings and phase completion criteria
- known uncertainties, rejected sources, unsupported builds, and current next action.

When a fact changes, update the manifest. Do not use filenames such as `final2` or `latest-fixed` as the only record of current state.

## Define ownership and status

For each artifact, specify one authoritative location and one producer. For example, the master target table supplies English prose. The glossary generator uses that table and the terminology authority. If the glossary and target disagree, the documented authority order determines which has priority.

Use explicit statuses instead of folder position. A useful line progression is:

```text
untranslated -> mt-draft -> accuracy-reviewed -> prose-reviewed -> engine-verified
```

A chapter manifest also records separate gates for source alignment, authority application, bilingual review, and prose review. Other gates cover support/UI review, layout review, and runtime verification.

## Build a story model before bulk translation

Before approval of English choices, read enough of the complete work to understand its structure. Create a private story model with all spoilers and these records:

- a chapter dependency graph and both runtime and editorial reading orders
- scene-level viewpoint, narrator, time period, location, and reveal state
- a character identity and relationship timeline
- internal speaker label to displayed name, portrait, voice, and voice-profile mappings
- recurring scenes, quotations, documents, flashbacks, and retellings that may repeat source text
- unresolved mysteries where English must preserve ambiguity.

The translation must respect reveal timing. The private authority must include the complete context. After you understand the full work, review early chapters again.

## Authority index and conflict order

Create a one-page authority index. For each file, record its purpose, version or hash, owner, and locked or provisional status. State the authority order for conflicts.

A practical default is:

1. current source line, engine events, and immediate scene
2. chapter chronology, narrator, and reveal map
3. identity and pronoun ledger
4. character and narrator voice guide
5. terminology and proper-noun authority
6. writing-system and wordplay decisions
7. grammar and restructuring guide
8. current English draft.

The English draft does not prove the meaning of the source.

## Context-free agent startup protocol

Before edits, a new agent should complete these steps:

1. Read the project manifest, authority index, and current handoff.
2. Verify the canonical source and target hashes.
3. Run the baseline validators.
4. Read each authority file required for the current phase, including narrator, identity, pronoun, and voice rules.
5. Inspect the chapter dependency and editorial reading orders.
6. Confirm the current phase, completed gates, unresolved decisions, exact next chapter, and permitted files for changes.
7. Before you resolve contradictions, report them.
8. Do not select a lower-priority authority without a record.
9. Make edits through stable IDs.
10. Record old and new targets.
11. Before handoff, run validators again.

Keep this acknowledgement short. It prevents a new agent from starting an unauthorized first pass.

## Readiness gate

Do not begin bulk translation until all of these are true:

- the runtime source has been identified with evidence
- a one-line export/import canary has appeared correctly in a clean runtime build
- visible text surfaces and engine control fields have been inventoried
- stable IDs survive export, merge, rebuild, and re-extraction
- source and target schemas, statuses, and validators exist
- the story, narrator, identity, terminology, voice, grammar, and wordplay authorities are initialized
- the rebuild starts from an immutable clean base
- the project manifest identifies the exact next action and definition of done.

If a gate remains open, investigate it before model translation. Otherwise, the resulting prose can have incorrect context or fail import.
