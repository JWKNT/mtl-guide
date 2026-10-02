# Extraction, Round Trip, and Release Build

Before bulk translation, verify the complete process from original game to installed patch. Tools vary with the engine. Evidence requirements and invariants remain the same.

## Map the runtime before editing

Identify the executable, engine, scripting backend, and asset containers. Identify script tables, localization tables, fonts, images, and video subtitles. Identify configuration files, the save location, and version or integrity checks.

Trace one distinctive visible line from the runtime screen to its extracted row and loaded asset. Repeat for dialogue, narration, choices, tips, menus, and one string in an image. Record duplicate copies. Verify which copy the runtime reads.

## Run a canary round trip

Before translating a chapter:

1. Calculate hashes for a clean installation.
2. Archive that installation.
3. Export the complete applicable container without changes to source fields.
4. Change one harmless visible target string through a stable ID.
5. Rebuild into a separate disposable copy.
6. Launch that copy.
7. Confirm that the expected runtime screen shows the canary test string.
8. Re-extract the rebuilt data.
9. Verify that unrelated rows, events, and assets have no unexpected changes.
10. Restore from the clean base.
11. Reproduce the result with one documented command.

Treat a decoded script as canonical only after the running game displays a controlled change from that script.

## Inventory fields by behavior

Classify each field as **translate**, **copy exactly**, **recalculate**, or **unknown/protected**. Protected data usually includes commands, event opcodes, asset IDs, internal speakers, portrait keys, and voice IDs. Other protected data includes formatting tags, variables, lookup keys, timing, page controls, and checksums.

Keep internal keys separate from visible names. Build explicit mappings when the game connects:

- internal speaker -> displayed speaker -> voice profile
- speaker or event -> portrait asset and position
- scene event -> background, effect, music, voice, and page state
- glossary key -> linked surface form -> glossary title and body
- original texture -> translated overlay or replacement asset.

Do not infer these mappings from the translated script if the runtime event stream can supply them.

## Preserve a lossless master model

Stable IDs must survive reordering and must not depend on translated text. Keep source text and control data immutable. Record source fingerprints to find repeated lines. Do not use a fingerprint as the only identity.

When a line is split for display, distinguish among:

- one source row with renderer wrapping
- intentional author page or line controls
- translator-added display segmentation
- separate engine rows that happen to form one sentence.

Do not change row correspondence to correct visual overflow. Store display controls separately. Validate those controls.

## Plan for English presentation

English expansion is a build constraint. Before translation, determine the actual text rectangle, font metrics, maximum lines, and portrait-safe area at each supported resolution. Determine ruby/helper behavior, backlog behavior, and page-advance rules.

Prefer word-boundary wrapping. Apostrophes, abbreviations, decimals, initials, ellipses, and inline tags are not reliable sentence boundaries. Keep tags with the words or grammatical spans they modify. Their character offsets can differ from Japanese.

For overflow, select rephrasing, a documented page break, text-box adjustment, font or spacing changes, or a renderer correction. Check the result in the engine. Character counts alone are insufficient.

## Treat support text and images as first-class content

Extract support text early enough to use the same terminology decisions as the scenario script. Include tips, glossary entries, speaker labels, choices, settings, popups, galleries, credits, chapter titles, and texture text.

For raster text, create a contact sheet and OCR inventory. Inspect each candidate manually. Preserve source image dimensions, pivots, transparency, import settings, and overlay order. Do not put translated text over artwork that already contains English. Do not leave both languages visible unintentionally.

## Build deterministically from a clean base

The build should use immutable originals and canonical reviewed targets. It should not depend on existing compiled files in a test folder.

Every build should emit a report containing:

- clean-base hashes and supported versions
- source and target table hashes
- authority and prompt versions
- tools and exact commands used
- row, tag, asset, and support-text counts
- files added, replaced, or removed
- output hashes and validator results
- known warnings and unsupported variants.

Do not recursively patch a previous compiled output. Rebuild it from the clean base. For an explicit migration instead, validate the installed state first.

## Design an idempotent patcher

A release patcher should detect fresh, already-patched, partially patched, and unsupported installations. It should verify exact targets before changes. It should keep or reconstruct rollback data. It should complete safely or leave the installation unchanged.

Test:

- fresh install -> current release
- previous release -> current release
- current release -> current release again
- interrupted or partial install -> recovery
- uninstall or language restoration
- paths containing spaces and non-ASCII characters
- every supported storefront, executable version, platform layer, and architecture.

If the patch includes runtime switching or restart behavior, test that behavior separately from translation accuracy. A button that changes a file but fails its required game restart is a release defect.

## Release gate

Before release, verify these results on a clean machine or clean prefix:

- The patch installs correctly.
- The game starts.
- Each critical text surface is accessible.
- Saves remain intact.
- Update and removal complete safely.
- The build reproduces the published hashes.

Include only necessary files in the distributable. Keep distribution within the project's legal permissions.
