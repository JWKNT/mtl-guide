# Fictional VN — Reading and Reveal Order Example

> This is a compact, fictional example. A private project version should cite the real scenario IDs, unlock data, and runtime evidence.

## Purpose

Use player-facing order rather than filenames or extraction order. This authority prevents an editor from assigning the wrong narrator, using knowledge from a later reveal, or reviewing a route before its prerequisites are understood.

## Chapter order

| Order | Chapter | Unlock requirement | Narrator / POV | Time | Reader knowledge at entry |
|---:|---|---|---|---|---|
| 1 | P0 — Arrival | none | deliberately unidentified first person | present | The narrator knows the harbor but has no displayed name. |
| 2 | A1 — Fog Signal | P0 | Mina Kurose | present | “The Courier” is only a title; no civilian identity is known. |
| 3 | X1 — Ten Years Earlier | A1 | unidentified witness | past | The witness's later identity must remain hidden. |
| 4 | B1 — Low Tide | A1 + X1 | Ren Saegusa | present | The player may connect two aliases, but Ren has not. |

If routes unlock in parallel, record both the engine's requirement graph and the editorial tie-break order used by the project.

## Narrator ledger

| Chapter / range | Narrator status | English person and number | Evidence | Avoid |
|---|---|---|---|---|
| P0:0001–0068 | unknown by design | singular I | explicit `私`; solitary actions | Adding a gendered self-description. |
| A1 | Mina Kurose | singular I | name box, internal monologue, scene continuity | Treating blank speaker cells as neutral narration. |
| X1 | unresolved witness | preserve local ambiguity | subject omission and hidden face | Importing the identity learned in B1. |
| B1 | Ren Saegusa | singular I; institutional we only when explicit | route header and faction dialogue | Normalizing every `我々` or omitted subject to “we.” |

## Reveal boundaries

| Fact | First suspected | First confirmed | Translation rule before confirmation |
|---|---|---|---|
| The Courier has a civilian name | A1:0210 | B1:0144 | Use the title or source pronoun; never insert the name. |
| The X1 witness survives | X1:0090 | B1:0302 | Preserve uncertainty and evidential language. |
| Two organizations share a founder | A1:0331 | B1:0418 | Keep their names and ranks distinct until the source connects them. |

## Working rules

- Read and review in this order, even when archive names sort differently.
- Identify the narrator from scene evidence, command rows, and route context—not from the current English draft.
- Later knowledge may explain an earlier ambiguity to the editor, but it does not authorize an early reveal.
- Recheck every English I/we/my/our form after the full story map exists.
- Record unresolved narrator spans explicitly; “unknown” is a valid controlled state.

## Sign-off

- Engine unlock graph checked: [date / evidence]
- Editorial order checked: [date / reviewer]
- Narrator spans audited: [count / result]
- Reveal-sensitive terms cross-referenced to terminology authority: [version]
