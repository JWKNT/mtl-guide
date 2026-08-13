# QA Matrix Template

## Environment matrix

| Case | Game / store version | OS or compatibility layer | Resolution | Install state | Save state | Patch version | Result | Evidence |
|---|---|---|---|---|---|---|---|---|
| Fresh install | | | | Fresh | New | | | |
| Update | | | | Previous patch | Existing | | | |
| Reinstall | | | | Current patch | Existing | | | |
| Recovery | | | | Partial / interrupted | Existing | | | |
| Removal | | | | Current patch | Existing | | | |

## Chapter and surface gates

| Chapter / surface | Alignment | Accuracy | Continuity | Voice / prose | Presentation | Runtime | Clean-pass date |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## Stateful regression cases

| ID | Starting state | Actions | Expected result | Platforms tested | Result | Evidence / issue |
|---|---|---|---|---|---|---|
| INPUT-01 | Dialogue active | Open and close a tip repeatedly, then advance | Tip closes and every input method advances normally | | | |
| INPUT-02 | Dialogue active | Open several linked terms, close all overlays, then advance | Focus returns to gameplay; no invisible overlay intercepts input | | | |
| TEXT-01 | Maximum portraits visible | Advance through the longest line | Text wraps at word boundaries and never overlaps or clips | | | |
| SAVE-01 | Immediately before a choice | Save, choose, reload, choose alternate branch | Save and route state remain correct | | | |
| BUILD-01 | Clean supported install | Install, launch, update, reinstall, remove | Every operation completes or rolls back safely | | | |

## Release sign-off

```text
canonical source hash:
canonical target hash:
build report:
release hashes:
open defects:
accepted limitations:
zero-change confirmation result:
release decision and reviewer:
```
