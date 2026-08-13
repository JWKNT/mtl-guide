# Extraction, Round Trip, and Release Build

Prove the entire path from original game to installed patch before bulk translation. Engine-specific tools will vary; the evidence and invariants should not.

## Map the runtime before editing

Identify the executable, engine and scripting backend, asset containers, script tables, localization tables, fonts, images, video subtitles, configuration files, save location, and any version or integrity checks.

Trace one distinctive visible line from runtime screen to extracted row and back to its loaded asset. Repeat for dialogue, narration, choices, tips, menus, and one image-baked string. Record duplicates and prove which copy the runtime reads.

## Run a canary round trip

Before translating a chapter:

1. Hash and archive a clean installation.
2. Export the complete relevant container without modifying source fields.
3. Change one harmless visible target string through a stable ID.
4. Rebuild into a separate disposable copy.
5. Launch it and confirm that the expected screen—not merely an extracted file—shows the canary.
6. Re-extract the rebuilt data and verify that unrelated rows, events, and assets did not change unexpectedly.
7. Restore from the clean base and reproduce the result with one documented command.

A decoded script is not proven canonical until the running game displays a controlled change.

## Inventory fields by behavior

Classify every field as **translate**, **copy exactly**, **recalculate**, or **unknown/protected**. Typical protected data includes commands, event opcodes, asset IDs, internal speakers, portrait keys, voice IDs, formatting tags, variables, lookup keys, timing, page controls, and checksums.

Keep internal keys separate from visible names. Build explicit mappings when the game connects:

- internal speaker -> displayed speaker -> voice profile;
- speaker or event -> portrait asset and position;
- scene event -> background, effect, music, voice, and page state;
- glossary key -> linked surface form -> glossary title and body;
- original texture -> translated overlay or replacement asset.

Do not infer these mappings from the translated script if the runtime event stream can supply them.

## Preserve a lossless master model

Stable IDs must survive reordering and must not depend on translated text. Store source text and control data immutably. Record source fingerprints to locate repeated lines without using the fingerprint as the only identity.

When a line is split for display, distinguish among:

- one source row with renderer wrapping;
- intentional author page or line controls;
- translator-added display segmentation;
- separate engine rows that happen to form one sentence.

Never solve visual overflow by corrupting row correspondence. Store display controls separately and validate them.

## Plan for English presentation

English expansion is a build constraint, not a late cosmetic issue. Determine the actual text rectangle, font metrics, maximum lines, portrait-safe area, ruby/helper behavior, backlog behavior, and page-advance rules at each supported resolution.

Prefer word-boundary wrapping. Apostrophes, abbreviations, decimals, initials, ellipses, and inline tags are not reliable sentence boundaries. Keep tags attached to the words or grammatical spans they modify, even when their exact character offset differs from Japanese.

For overflow, choose deliberately among rephrasing, a documented page break, a text-box adjustment, font or spacing changes, or a renderer fix. Check the result in the engine; character counts alone are insufficient.

## Treat support text and images as first-class content

Extract tips, glossary entries, speaker labels, choices, settings, popups, galleries, credits, chapter titles, and texture text early enough to share terminology decisions with the scenario script.

For raster text, create a contact sheet and OCR inventory, then inspect every candidate manually. Preserve source image dimensions, pivots, transparency, import settings, and overlay order. Avoid placing translated text over already-English art or leaving both languages visible unintentionally.

## Build deterministically from a clean base

The build should consume immutable originals plus canonical reviewed targets. It should not depend on whatever compiled files happen to be in a tester's folder.

Every build should emit a report containing:

- clean-base hashes and supported versions;
- source and target table hashes;
- authority and prompt versions;
- tools and exact commands used;
- row, tag, asset, and support-text counts;
- files added, replaced, or removed;
- output hashes and validator results;
- known warnings and unsupported variants.

Never recursively patch a previous compiled output. Rebuild it or explicitly migrate it after validating the installed state.

## Design an idempotent patcher

A release patcher should detect fresh, already-patched, partially patched, and unsupported installs. It should verify exact targets before mutation, retain or reconstruct rollback data, and either complete safely or leave the installation unchanged.

Test:

- fresh install -> current release;
- previous release -> current release;
- current release -> current release again;
- interrupted or partial install -> recovery;
- uninstall or language restoration;
- paths containing spaces and non-ASCII characters;
- every supported storefront, executable version, platform layer, and architecture.

If runtime switching or restart behavior is part of the patch, test it independently from translation correctness. A button that changes a file but fails to restart the game is still a release defect.

## Release gate

Release only when a clean machine or clean prefix can install the patch, launch the game, reach every critical text surface, preserve saves, update and uninstall safely, and reproduce the published hashes. Keep the distributable minimal and within the project's legal permissions.
