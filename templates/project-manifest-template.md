# Project Manifest Template

## Build identity

| Field | Value |
|---|---|
| Project | |
| Source language -> target language | |
| Engine and scripting backend | |
| Game edition / storefront | |
| Game version | |
| Executable hash | |
| Primary data hashes | |
| Supported platforms / compatibility layers | |
| Supported resolutions | |
| Patch version | |

## Canonical locations

| Artifact | Authoritative path | Hash / version | Producer |
|---|---|---|---|
| Immutable original | | | |
| Canonical source table | | | |
| Canonical target table | | | |
| Authority index | | | |
| Chapter status manifest | | | |
| Revision changelog | | | |
| Build report | | | |
| QA matrix | | | |

## Commands

```text
extract:
validate baseline:
build clean:
validate build:
install:
update:
uninstall / restore:
launch:
```

## Data contract

```text
stable ID schema:
source rows:
translatable rows:
command-only rows:
chapters / scenes:
review statuses:
allowed untranslated values:
protected tag and placeholder rules:
```

## Text-surface inventory

| Surface | Extracted | Stable IDs | Authority applied | Reviewed | Engine-tested |
|---|---:|---:|---:|---:|---:|
| Scenario and narration | | | | | |
| Speaker / name boxes | | | | | |
| Choices | | | | | |
| Tips / glossary | | | | | |
| Menus / settings / popups | | | | | |
| Galleries / chapter select / credits | | | | | |
| Textures / video / special effects | | | | | |

## Authority order

```text
1.
2.
3.
```

## Current phase

```text
phase:
completed gates:
chapter / batch in progress:
exact next action:
files permitted to change:
expected validator counts:
unresolved decisions:
known unsupported variants:
last clean confirmation pass:
```

## Handoff acknowledgement

```text
canonical source and target verified:
baseline validators run:
required authorities read:
current phase and next action understood:
contradictions or blockers:
```
