# Uncommon Japanese Grammar Guide — Spoiler-Free Example

> All lines and characters below are invented for this guide. They do not come from a published visual novel. In a real project, use short examples from the private canonical script and cite stable line IDs.

This file demonstrates what a title-specific grammar guide should look like. Recommended translations illustrate structure; they are not the only valid line edits.

## Core procedure

For each difficult line:

1. Find the main predicate and the head noun of every long modifier.
2. Recover omitted subjects from speaker, topic, agency, and viewpoint.
3. Mark negation scope, conditions, contrast, and evidence level.
4. Decide which idea deserves to be the English main clause.
5. Restructure freely while preserving voice, ambiguity, and reveal timing.
6. Check approved names and terms.
7. Confirm that tags and placeholders remain balanced.

## 1. Long prenominal modifiers

Japanese can place an entire proposition before the noun it modifies. English usually needs a relative clause, apposition, finite verb, or new sentence.

### Example 1 — name the device first

- Line: `DEMO:0001`
- Source: `霧が濃くなると青く点滅して危険を知らせる古い携帯端末`
- Head noun: `古い携帯端末`
- Awkward: “The old portable terminal that flashes blue and informs of danger when the fog becomes thick…”
- Better: “The old handheld flashed blue whenever the fog thickened, warning its owner of danger.”

The Japanese explains the full behavior before naming the object. English is clearer when the device becomes the subject immediately.

### Example 2 — unpack a biography

- Line: `DEMO:0002`
- Source shape: `幼い頃に島を離れ、十年ぶりに灯台へ戻ってきた少女`
- Better: “She had left the island as a child. Now, ten years later, she had returned to the lighthouse.”

Do not force two life stages into “the girl who left…and returned….” Separate sentences can preserve the temporal turn.

## 2. Omitted subjects and viewpoint

Japanese may omit a subject for several consecutive lines. The missing actor is not automatically the most recently named person.

### Example 3 — keep one subject through a verb chain

- Line: `DEMO:0003`
- Context: first-person narration
- Source: `鍵を返し、廊下に出たところで、ようやく異変に気づいた。`
- Better: “I returned the key and stepped into the hall. Only then did I notice something was wrong.”

All three actions belong to the narrator. A model may incorrectly assign the final perception to another active character.

### Example 4 — conditional subject

- Line: `DEMO:0004`
- Source: `本当のことを話せば、先生は止めるだろう。`
- Better: “If I told the doctor the truth, she would try to stop me.”

The subject of `話せば` comes from viewpoint context. `先生` is the subject of `止める`, and its role translation must come from the terminology authority.

## 3. Partial negation and the `わけ` family

### Example 5 — `すべて…わけではない`

- Line: `DEMO:0005`
- Source: `記録のすべてが失われたわけではない。`
- Correct: “Not all of the records were lost.”
- Wrong: “None of the records survived.”

The source denies total loss; it does not assert that everything disappeared.

### Example 6 — `ないわけではない`

- Line: `DEMO:0006`
- Source: `方法がないわけではないが、今夜は使えない。`
- Better: “It wasn't that we had no way to do it; we just couldn't use it tonight.”

The double negative concedes that a method exists before introducing the real limitation.

| Form | Frequent value | Natural options |
|---|---|---|
| `わけだ` | logical conclusion | “so that explains it,” “which meant…” |
| `わけではない` | rejected inference | “that doesn't mean…,” “not necessarily…” |
| `わけがない` | logical impossibility | “there's no way…,” “can't possibly…” |
| `わけにもいかない` | social or moral constraint | “could hardly…,” “wasn't in a position to…” |

## 4. `という`, `こと`, and delayed definitions

These forms quote, label, nominalize, explain, or infer. Repeating “the fact that” usually produces wooden English.

### Example 7 — inferred consequence

- Line: `DEMO:0007`
- Source: `ここに足跡があるということは、誰かが先に入ったということになる。`
- Better: “These footprints meant someone had entered before us.”

Translate the conclusion directly. The paired nominalizers express reasoning, not two literal “facts.”

### Example 8 — `というより`

- Line: `DEMO:0008`
- Source: `静かというより、音が吸い込まれているようだった。`
- Better: “It wasn't so much quiet as though the room were swallowing every sound.”

This corrects the first category with a more precise one.

## 5. Concession and hypothetical distance

### Example 9 — disappointed `ものの`

- Line: `DEMO:0009`
- Source: `ようやく扉を開けたものの、その先には壁しかなかった。`
- Better: “At last she forced the door open, only to find a wall behind it.”

“Only to find” preserves the frustrated expectation more naturally than a mechanical “although.”

### Example 10 — futile `たところで`

- Line: `DEMO:0010`
- Source: `今から港へ走ったところで、最終便には間に合わない。`
- Better: “Even if we ran to the harbor now, we'd never make the last ferry.”

The conditional is explicitly futile, not a neutral future sequence.

### Example 11 — reluctant concession

- Line: `DEMO:0011`
- Source: `百歩譲って彼の話を信じるとしても、時計の説明がつかない。`
- Better: “Even if I granted his story, it still wouldn't explain the clock.”

`百歩譲って` marks argumentative reluctance. Do not translate its literal image.

## 6. Passive, causative, and result chains

### Example 12 — restore the true agent

- Line: `DEMO:0012`
- Source: `姉に説得されるかたちで調査に参加することになった。`
- Better: “My sister talked me into joining the investigation.”

The Japanese uses passive persuasion plus a formal result construction. English can make the persuader the active cause.

### Example 13 — formal compulsion

- Line: `DEMO:0013`
- Source: `濃霧のため、船は引き返すことを余儀なくされた。`
- Neutral narration: “The fog forced the boat to turn back.”
- Formal report: “The vessel was forced to turn back because of heavy fog.”

Choose voice according to register. Do not preserve bureaucratic syntax in casual narration merely because the Japanese is passive.

## 7. Change, completion, regret, and loss of control

`ことになる`, `ようになる`, and `てしまう` do not all mean “ended up.”

### Example 14 — change over time

- Line: `DEMO:0014`
- Source: `その日から、彼女も無線に答えるようになった。`
- Better: “After that day, she began answering the radio.”

`ようになる` describes a change in behavior or capability.

### Example 15 — involuntary emotional result

- Line: `DEMO:0015`
- Source: `あの歌を聞くと、どうしても昔のことを思い出してしまう。`
- Better: “Whenever I heard that song, memories of the past came flooding back.”

The lack of control is carried by the English verb. Adding “unfortunately” would overstate the source.

## 8. Evidentiality and narrator certainty

This distinction is essential in mystery stories. Do not flatten inference or hearsay into fact.

### Example 16 — appearance

- Line: `DEMO:0016`
- Source: `窓は内側から割られたらしい。`
- Better: “The window appeared to have been broken from the inside.”

The narrator is inferring from evidence.

### Example 17 — hearsay

- Line: `DEMO:0017`
- Source: `昔、この島には観測所があったそうだ。`
- Better: “They say there used to be an observatory on the island.”

Plain-form `そうだ` reports hearsay. It is not proof that the observatory existed.

| Japanese | Preserve as |
|---|---|
| `と思われる` | “is believed/thought to,” “appears to” |
| `とされる` | “is regarded as,” “is officially said to” |
| `ようだ` | contextual appearance or inference |
| plain form + `そうだ` | hearsay: “reportedly,” “I hear…” |
| verb stem + `そうだ` | appearance: “looks about to…” |
| `に違いない` | strong inference: “must” |
| `かもしれない` | live possibility: “may/might” |

## 9. Clefts, delayed focus, and list rhythm

### Example 18 — delayed subject

- Line: `DEMO:0018`
- Source shape: `霧笛が一度だけ鳴る夜に姿を現すのが、あの白い船だ。`
- Better: “The white ship appeared only on nights when the foghorn sounded once.”

English need not imitate the delayed `のが…だ` cleft when a direct subject is stronger.

### Example 19 — intentional catalogue fragments

- Line: `DEMO:0019`
- Source: `錆びた鎖。濡れた切符。誰もいない待合室。`
- Better: “A rusted chain. A waterlogged ticket. An empty waiting room.”

The fragments create a visual sequence. Joining them into a complete sentence would flatten the rhythm.

List markers such as `や`, `たり`, `とか`, and `など` are often nonexhaustive. Do not imply that examples form a complete inventory unless context says so.

## 10. Register, roles, and social address

Japanese role terms do not have one global English equivalent.

| Source term | Context questions |
|---|---|
| `先生` | doctor, teacher, specialist, or polite address? |
| `主任` | department chief, head nurse, supervisor, or direct title? |
| `兄貴` | older brother, sworn-brother address, or rough respect? |
| `旦那` | husband, patron, boss, or informal “sir”? |

Use contractions, sentence length, hedging, titles, and vocabulary to convey register. Avoid phonetic eye dialect unless the project has a deliberate, reviewed policy.

## 11. Reveal-sensitive ambiguity

### Example 20 — conditional identity

- Line: `DEMO:0020`
- Source: `もし岬で見た人物が彼女だったのなら、日記の時刻と矛盾する。`
- Correct: “If the person I saw at the cape was her, the time in the diary couldn't be right.”
- Wrong: “I saw her at the cape, which contradicted the diary.”

The source proposes an identity conditionally. Later knowledge must not turn the earlier line into a fact.

### Example 21 — vague referent

- Line: `DEMO:0021`
- Source: `あの人も、同じことを知っていたのだろうか。`
- Better: “Had that person known the same thing?”

If the viewpoint intentionally avoids a name or gender, English should not reveal either. Awkwardness can be preferable to a spoiler.

## 12. Markup inside grammar

Treat tags as protected structure, not punctuation.

### Example 22 — paired tag

- Line: `DEMO:0022`
- Source: `<term=004>白い船</term>を見たのは、あの夜が初めてだった。`
- Target: “That night was the first time I saw the <term=004>White Ship</term>.”

Translate visible text inside the tag while preserving the tag name, ID, and pair. If tags are replaced before generation, the protected form might be `That night was the first time I saw [[TAG_0001]]White Ship[[TAG_0002]].`

Do not move only one half of a pair across a line, page, or textbox split.

## 13. Line splitting and joining

Split when:

- a long modifier becomes clearer as a new sentence;
- Japanese chains several independent claims;
- a punch line or reveal deserves its own beat;
- the English line would exceed comfortable textbox width.

Do not split when:

- a voice clip or presentation tag requires continuity;
- suspense depends on a withheld subject;
- page-control behavior would display the pieces incorrectly;
- a paired tag or variable would become unbalanced.

Join only when Japanese fragments are grammatical supports that would sound accidental in English. Preserve deliberate catalogue fragments, interruptions, and emotional beats.

## Batch checklist

Before translation:

- identify narrator, speaker, time period, and active scene;
- load relevant terminology and identity rules;
- inspect neighboring rows;
- note aliases or facts the viewpoint does not yet know.

For each difficult line:

- bracket long modifiers and name their head nouns;
- label omitted subjects in scratch work;
- mark negative scope;
- mark evidence level;
- choose the English main clause;
- check pronouns against every active character;
- preserve tags, IDs, and variables.

After translation:

- search for approved and deprecated terms;
- check partial negatives and competing alternatives;
- check that hypotheses did not become facts;
- check that production labels did not leak into names;
- read English alone for clarity;
- compare against Japanese again for lost qualifications.

## Quick reference

| Construction | Main danger | Default repair |
|---|---|---|
| long clause + noun | unreadable noun pile | name noun early; relative clause or new sentence |
| omitted subject | wrong character acts | recover from topic, agency, and viewpoint |
| `すべて…ない` | partial/total negative reversal | “not all” / “not every” |
| `ないわけではない` | concession lost | “not that…couldn't,” “did have some…” |
| `ということになる` | wooden nominalization | state the inferred consequence directly |
| `ものの` / `とはいえ` | lost expectation contrast | “although,” “even so,” “only to…” |
| `たところで` | futility neutralized | “even if…, it would not…” |
| passive/causative chain | real agent disappears | restore actor; use active English where suitable |
| `てしまう` | automatic “unfortunately” | encode completion, accident, regret, or irreversibility contextually |
| `らしい` / `ようだ` / `そうだ` | rumor becomes fact | preserve evidence level |
| `や` / `たり` / `とか` | false exhaustiveness | use representative, parallel examples |
| alias or vague pronoun | premature reveal | use only what the viewpoint knows |
