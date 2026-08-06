# [Project] — Terminology, Names, and Key-Item Authority

> Replace bracketed text and fictional examples. This file is the required translation authority, not a brainstorming list. Use approved forms exactly unless an entry is marked `review`.

## Global rules

- Personal-name order: [given–surname / surname–given / context-dependent].
- Romanization system and exceptions: [rule].
- Explicit in-game Latin spellings and ruby/readings: [precedence rule].
- Honorifics: [retain/remove/contextual policy].
- Organization and rank capitalization: [rule].
- Typography normalization: [ASCII/full-width, hyphens, acronyms, numerals].
- Tag handling: [translate visible text only; preserve tag syntax and IDs].
- Production speaker qualifiers: [which suffixes must be removed from display names].
- Status meanings: `locked`, `working`, `review`, and `deprecated`.

## Highest-risk identity and alias map

Use this section for rules that cannot safely be represented as blind substitutions.

| Entity | Allowed forms | Context rule | Evidence | Status |
|---|---|---|---|---|
| [Character A] | [formal name]; [nickname]; [title] | [who uses each form and when] | [line/profile IDs] | review |
| [Inherited title] | [holder A]; [holder B] | Do not normalize earlier scenes to the later holder. | [IDs] | review |

## Required distinctions

Record source concepts that share a word but must remain separate.

| Concept A | Concept B | Rule |
|---|---|---|
| `白環` — **White Ring** (organization) | `白い輪` — **white ring** (ordinary description) | Capitalize only the named organization. |
| [neutral medical term] | [slur] | Never replace the neutral term with the slur or vice versa. |

## Characters and names

| Source | Required English | Reading / aliases | Status | Usage note | Evidence |
|---|---|---|---|---|---|
| 港くれは | **Kureha Minato** | みなと くれは; Kureha | working | Fictional example. Confirm official name order before locking. | DEMO:0004 |
| [source] | **[English]** | [readings/aliases] | review | [identity, timeline, or usage rule] | [IDs] |

## Organizations and factions

| Source | Required English | Aliases | Status | Usage note | Evidence |
|---|---|---|---|---|---|
| 白環 | **White Ring** | — | working | Fictional organization; never lowercase as an ordinary object. | DEMO:0100 |
| [source] | **[English]** | [aliases] | review | [rule] | [IDs] |

## Places and facilities

| Source | Required English | Aliases | Status | Usage note | Evidence |
|---|---|---|---|---|---|
| 黄昏港 | **Twilight Harbor** | 黄昏の港 | working | Fictional place. Decide whether the descriptive alias is also a proper name. | DEMO:0010 |
| [source] | **[English]** | [aliases] | review | [rule] | [IDs] |

## Items, equipment, abilities, and technical terms

| Source | Required English | Short form | Status | Usage note | Evidence |
|---|---|---|---|---|---|
| 霧信号端末 | **Fog-Signal Handheld** | handheld | working | Fictional device; title case in UI, lowercase short form in prose. | DEMO:0001 |
| [source] | **[English]** | [short form] | review | [rule] | [IDs] |

## Titles, ranks, kinship, and role labels

Do not assign one English equivalent globally when the relationship changes by context.

| Source | Default | Contextual forms | Rule |
|---|---|---|---|
| 先生 | [doctor/teacher/name] | [forms] | Determine role and addressee for each speaker/scene. |
| 主任 | [chief/supervisor/head nurse] | [forms] | Lock the department-specific title, not the dictionary's first result. |
| [source] | [default] | [forms] | [rule] |

## Speaker and asset-label normalization

| Raw label | Display name | Rule | Status |
|---|---|---|---|
| `[Name]（少年）` | `[Name]` | Age is production metadata unless dialogue explicitly says it. | working |
| `[Name]_injured` | `[Name]` | Costume/state suffix must not enter the nameplate. | working |
| [raw label] | [display] | [rule] | review |

## Character voice rules

| Speaker | Register and syntax | Vocabulary/address | Avoid |
|---|---|---|---|
| [Character] | [contractions, sentence length, directness] | [titles, pronouns, recurring diction] | [flattening/gimmicks] |

## Deprecated forms

| Deprecated form | Required form | Reason | Search completed |
|---|---|---|---|
| [old spelling] | [approved spelling] | [why it changed] | no |

## Release-blocking review queue

| Priority | Entry | Question | Needed evidence | Owner | Status |
|---|---|---|---|---|---|
| high | [name/term] | [specific decision] | [credits, ruby, creator material, context] | [person] | open |

## Provenance and versioning

- Canonical script version/hash: [value]
- Game version: [value]
- Sources mined: [speaker table, profiles, tips, script, UI, credits]
- Authority version/commit: [value]
- Last approved by/date: [value]

Whenever a decision changes, add the old form to **Deprecated forms**, update affected translations by stable line ID, and rerun the corpus-wide consistency audit.
