# BLACK SHEEP TOWN — Japanese-to-English grammar and restructuring guide

> Translator-facing companion to `proper_nouns_names_key_items.md`. This guide is based on recurring constructions in the compiled VN script. Examples use short excerpts and stable `line_id` references so the full line and surrounding context can be recovered from `work/compiled_export/master_script.tsv`. Recommended translations demonstrate structure; they are not final line edits.

## Core principle

The prose often puts a long, information-heavy clause before the noun it modifies. Japanese can withhold the head noun until the end while stacking subjects, objects, conditions, and qualifications in front of it. Copying that order produces English that is difficult to parse.

For every long modifier:

1. Find the head noun—the final noun being described.
2. Bracket everything modifying that noun.
3. Identify the modifier's hidden subject, objects, time, and cause.
4. Decide what deserves to become the main English clause.
5. Move background information into a relative clause, participial phrase, apposition, or separate sentence.
6. Restore contrast, uncertainty, and emphasis after restructuring.
7. Check names and terms against `proper_nouns_names_key_items.md`.

Do not preserve Japanese word order merely because every individual phrase can be rendered literally. Preserve the information hierarchy and narrative voice.

## 1. Long prenominal noun modifiers

### Pattern: `[entire proposition] + head noun`

Japanese relative clauses do not use relative pronouns and can be very long. English normally needs **who**, **that**, **whose**, a participle, an apposition, or a new sentence.

### Example 1 — promote the modifier into the main clause

- Line: `A1:0029`
- Source shape: `タイプAが…集中すると周囲に発生する特殊な波長を感知し、ブザー音で報せるその装置`
- Head noun: `その装置` — “the device”
- Awkward: “That device which detects the special wavelengths that occur around a Type A when they concentrate in order to use an ability and reports them with a buzzer…”
- Better: “The device detects the unusual wavelengths emitted when a Type A concentrates to use their power, then sounds a buzzer.”

The Japanese packages the device's whole function before `その装置`. English should name the device first and explain its function afterward. The following partial negative can then stand cleanly as: “It cannot detect every psychic.”

### Example 2 — split a delayed cleft

- Line: `A1:0055`
- Source: `その巨大な穴が汚染する周辺地域は…その自然公園にべたりと張り付くように広がっているのがこの街だ。`
- Better: “The land contaminated by the giant hole has been designated a restricted national park. This city sprawls right up against it.”

The Japanese delays `この街` until the final cleft. English gains force by making “this city” the subject of a second sentence.

### Example 3 — use “less X than Y” outside the noun phrase

- Line: `A3:0481`
- Source shape: `今では裏社会の大物というよりも…三姉妹の父親として知られるこの人物`
- Head noun: `この人物`
- Better: “These days, Fernandez was known less as an underworld heavyweight than as the father of three famously beautiful daughters.”

Do not produce “this person who was now known…” unless the demonstrative itself matters. The person's name is already active context, so English can use it as the grammatical subject.

### Example 4 — turn biographical modifiers into finite verbs

- Line: `X3-3:0414`
- Source shape: `クリス・ツェーが…幹部たちを招集したとき、誰よりも早く…あらわれて…廖志明を出し抜いた人物`
- Better: “He had been the first executive to answer Chris Tse's final summons, inadvertently beating Chimin Liao to Grand Tower.”

The Japanese ends on `人物でもあった`, but “he was also a person who…” is dead weight in English. Make the meaningful action the predicate.

### Example 5 — avoid literal causative birth language

- Line: `A2-1:0185`
- Source: `トミーはその最初の妻であるアメリカ人に生ませた長男だ。`
- Literal trap: “Tommy was the eldest son he made his first American wife bear.”
- Better: “Tommy was his eldest son, born to his first wife, an American.”

Japanese `生ませた` reflects the father's viewpoint and can sound blunt. English usually expresses the relationship with **born to** unless the coercive nuance is narratively important.

### Example 6 — unpack serial life-history clauses

- Line: `B5:0311`
- Source shape: `母親と二人で…暮らし、母親が亡くなってからは…閉じ込められるようにして過ごしていた、筋金入りの箱入り娘`
- Better: “She had spent her early years secluded with her mother under guard. After her mother died, she was shut away in Grand Tower. She had been sheltered all her life.”

English should not force two life stages into one modifier before “sheltered girl.” Repetition of the subject is clearer and preserves the cumulative effect.

### Example 7 — place comparison after the noun

- Line: `X7:0363`
- Source shape: `アサルトライフルよりは小型で…短機関銃よりは威力と射程のある銃器`
- Better: “The guns were smaller and easier to handle than standard infantry assault rifles, but offered more power and range than compact submachine guns such as the Skorpion.”

Name the object first, then run parallel comparisons. Do not build a giant English premodifier such as “smaller-than-assault-rifle but longer-range-than-submachine-gun firearms.”

### Example 8 — retain a rhetorical question after restructuring

- Line: `A5:0091`
- Source shape: `…いたずらをやってのけた高度な能力者を、能力の手がかりもなしにどう対策しろというのだろう？`
- Better: “How were they supposed to prepare for a psychic powerful enough to breach that security and smash the statue when they did not even know what her ability was?”

The emotional center is `どう対策しろというのだろう`—frustrated impossibility—not the long description of the psychic. Keep that as the English main clause.

### Example 9 — use apposition for compact classifications

- Line: `X13:0035`
- Source shape: `姉はタイプA、妹はタイプBの双子は…`
- Better: “The twins—the elder a Type A, the younger a Type B—used their powers for pranks that went far beyond harmless mischief.”

Apposition avoids an ambiguous “Type A older sister and Type B younger sister twins” noun pile.

### Example 10 — do not overuse “a person who”

- Line: `X8:0272`
- Source shape: `そうではない者たちが多くいると知ったのは新しい発見だった。`
- Better: “It was a revelation to learn how many people did not share that view.”

Japanese `者`, `人物`, and `人間` often serve as grammatical supports. English frequently omits them.

## 2. Choosing an English architecture

Use the smallest structure that remains clear:

| Japanese structure | Preferred English architecture |
|---|---|
| Short identifying modifier | Relative clause: “the officer **who handled psychic crimes**” |
| Long action sequence before a person | Name/person first, then finite verbs in one or more sentences |
| Classification before a name | Apposition: “Misa, **a nurse at Makigawara Hospital**, …” |
| Resulting condition before a noun | Participial phrase: “the patients **left without treatment**” |
| Two balanced attributes | Parallel predicate: “smaller than X but stronger than Y” |
| More than two independent facts | Separate sentences |
| Modifier contains a reveal | Preserve suspense until the reveal, but shorten surrounding syntax |

A practical ceiling: if an English noun would carry more than two substantial modifiers before it, move something after the noun or into another sentence.

## 3. Omitted subjects and viewpoint tracking

Japanese repeatedly omits subjects that English requires. The missing subject may be the narrator, the current speaker, the grammatical topic from several sentences earlier, or an implied institution.

### Example 11 — recover the first-person subject

- Line: `A1:0003`
- Source: `まだ吐きたいというほど気持ちが悪いわけではなく…`
- Better: “I did not feel sick enough to vomit yet…”

The line contains no `僕`, but the first-person narrator remains the experiencer. Avoid impersonal “It was not yet nauseating enough…” unless the voice intentionally distances itself.

### Example 12 — the omitted subject of a conditional

- Line: `A3:0155`
- Source: `父の命を救いたい、と言えばおそらく松子は反対しない。`
- Better: “If I told Matsuko I wanted to save my father, she probably would not object.”

The subject of `言えば` is the narrator, not Matsuko and not a generic “one.”

### Example 13 — keep one subject through a verb chain

- Line: `A1:0230`
- Source: `会計を済ませ、路上に戻ったところで馬明に電話をかけた。`
- Better: “After paying and stepping back onto the street, I called Ma Ming.”

All three actions share the narrator as subject. Do not create accidental subject changes between clauses.

### Subject-tracking procedure

1. Check the `speaker` column and the sheet's current narrator.
2. Look back past sentence boundaries until a plausible topic is found.
3. Test agency: who can perform the verb?
4. Test viewpoint: whose perception or judgment is being reported?
5. With several same-gender characters, prefer a repeated name over an ambiguous pronoun.

The VN frequently changes first-person narrator between sheets. Never assume that `僕`, `私`, or `おれ` refers to the same person globally.

## 4. `という`, `こと`, and delayed definitions

These forms can quote, label, nominalize, explain, infer, or frame a concept. Literal “the thing that…” translations are usually wrong.

### Example 14 — inference with `ということになる`

- Line: `A1:0135`
- Source: `これはただの親子の再会ではなく…形式的な意味を持ってしまうということになる。`
- Better: “This would not be seen as a simple reunion between father and son. Inevitably, it would become a formal meeting between the boss of YS and his heir.”

Here `ということになる` marks the social implication reached by reasoning. Translate the implication, not the nominalizer.

### Example 15 — definition and consequence in the same sentence

- Line: `A1:0059`
- Source shape: `懐かしさを感じるということは…何かが…食い込んでいるということだ。`
- Better: “If I felt nostalgic, then something unique to this city had lodged itself firmly in my heart—something more concrete than mere incomprehensibility.”

English can use **if…then**, **the fact that**, or a direct assertion. Avoid repeating “the fact that” twice.

### Example 16 — `というより` corrects the category

- Source pattern: `Aというより（も）むしろB`
- Preferred: “less A than B,” “not so much A as B,” or simply “rather than A, B.”

This is a correction, not a loose comparison. Preserve which label the narrator rejects and which one replaces it.

### Example 17 — `というのは…からだ` explanatory cleft

- Line: `A1:0409`
- Source: `というのは、この建物こそが…ＹＳの根城であったからだ。`
- Better: “That was because this building was the headquarters of YS, the largest criminal organization in the district.”

If the previous English sentence already invites an explanation, “because” may be enough; do not mechanically begin every instance with “The reason is that.”

## 5. Partial negation and the `わけ` family

`わけ` expresses an expected conclusion, explanatory link, or logical impossibility. Its negative forms are especially easy for MT to reverse.

### Example 18 — `すべて…わけではない`

- Line: `A1:0029`
- Source: `すべてのサイキックを感知出来るわけではない。`
- Correct: “It cannot detect every psychic.” / “It does not detect all psychics.”
- Wrong: “It cannot detect any psychics.”

This is **partial negation**, not total negation.

### Example 19 — `すべてが…というわけはなく`

- Line: `A1:0178`
- Source: `彼らのすべてがただの可哀想な被害者というわけはなく…`
- Better: “Not all of them were helpless victims.”

English should put **not all** together to remove scope ambiguity.

### Example 20 — `なかったわけではない`

- Line: `A2-2:0343`
- Source: `発生させられなかったわけではないが、条件がさっぱりわからなかった。`
- Better: “It was not that they could not reproduce the effect; they simply had no idea what conditions triggered it.”

The double negative concedes limited success before introducing the real problem.

### Common `わけ` renderings

| Form | Typical value | Natural English |
|---|---|---|
| `わけだ` | logical conclusion | “so that explains it,” “which meant…” |
| `わけではない` | rejects an inference | “that does not mean…,” “not necessarily…” |
| `わけがない` | logical impossibility | “there is no way…,” “cannot possibly…” |
| `わけにもいかない` | social/moral constraint | “could hardly…,” “was not in a position to…” |
| `というわけで` | summary/transition | “and so,” “that was why…” |
| `どういうわけか` | unexplained reason | “for some reason” |

Do not use “reason” in every English occurrence. `わけ` is often logical structure rather than literal causation.

## 6. Concession and adversative connectors

The prose layers multiple contrasts. Preserve the turn in reasoning, but avoid starting every sentence with **however**.

### Example 21 — `ものの`

- Line: `A1:0446`
- Source: `せっかくやって来たものの…まだ父との面会の時間がとれない`
- Better: “He had come all this way, only to find that the doctor's examination was running long and his father still could not see him.”

`Only to find` often carries the disappointed expectation built into `せっかく…ものの`.

### Example 22 — `にもかかわらず`

- Line: `A1:0018`
- Source: `平日の昼間にもかかわらず滑走路通りは活気で満ちている。`
- Better: “Runway Street was bustling despite it being the middle of a weekday.”

Use **despite**, **although**, or **even though** according to sentence weight.

### Example 23 — `と言っても`

- Line: `A1:0452`
- Source shape: `と言っても、僕の様に親戚の家に預けられていたわけではなく…`
- Better: “That said, she had not been sent to live with relatives as I had.”

This construction narrows or corrects the reader's likely interpretation. “Even if one says” is usually wrong.

### Example 24 — `まだ…からいいものの`

- Line: `A1:0380`
- Source: `まだジョゼさんが元気だからいいものの、急に病気にでもなったらどうなるか。`
- Better: “Things were manageable while Jose was still healthy—but what would happen if he suddenly fell ill?”

This is a warning that the current favorable condition may end, not simple praise that things are good.

### Example 25 — `にもかかわらず` after a known premise

- Line: `A3:0567`
- Source shape: `現実を知っているにもかかわらず、あえて壬生屋を擁護する気になれない程度には…`
- Better: “Even knowing the reality of the situation, I could not bring myself to defend Mibuya. He was simply too selfish and inhuman.”

The Japanese grades the conclusion with `程度には`. English can state the conclusion and then explain its degree.

## 7. Conditions, futility, and hypothetical distance

### Example 26 — futile `〜たところで`

- Line: `A1:0038`
- Source: `やったところでどれほど街が良くなることやら。`
- Better: “And even if they tried, how much better would it make the city?”

`たところで` says the result would remain inadequate. Do not translate it as neutral “when they did it.”

### Example 27 — `百歩譲って`

- Line: `A1:0134`
- Source: `百歩譲って会うのは良いとしても…`
- Better: “Even granting that meeting him was acceptable…” / “Suppose I conceded the meeting itself…”

This is reluctant concession, often argumentative. “Yielding one hundred steps” is not idiomatic English.

### Example 28 — stacked hypotheticals

- Line: `A1:0165`
- Source shape: `治療を受けたとしても…たとえ長生き出来たとしても…`
- Better: “Treatment was unlikely to buy her much time. Even if she lived longer, she would spend most of that life incapacitated.”

Japanese tolerates repeated `としても`; English usually benefits from separating the consequences.

### Example 29 — `〜ないともかぎらない`

- Source value: a possibility cannot be excluded.
- Preferred: “might,” “could still,” “there was no guarantee that…would not…”

Do not translate the double negative word for word. Establish whether the narrator considers the outcome merely possible or genuinely likely.

## 8. Passive, causative, and formal result chains

Japanese often uses passive or impersonal constructions where active English is clearer.

### Example 30 — passive persuasion plus formal outcome

- Line: `A2-2:0015`
- Source: `美美の強引な説得に押し切られるかたちで参加を了承することとなった。`
- Literal trap: “It came to be that I consented to participate in the form of being overcome by Meimei's forceful persuasion.”
- Better: “In the end, Meimei's relentless persuasion wore me down, and I agreed to attend.”

Promote the true agent, Meimei's persuasion, and use an ordinary result verb.

### Example 31 — `余儀なくされた`

- Line: `B6:0667`
- Source: `後退を余儀なくされた。`
- Better: “They had no choice but to fall back.” / “The smoke forced them to retreat.”

Choose the active version when the cause is clear. Reserve formal “were compelled to retreat” for deliberately official prose.

### Example 32 — passive life transition

- Line: `A1:0452`
- Source: `母が死ぬと、父に引き取られて…暮らすこととなった。`
- Better: “After her mother died, her father took her in, and she went to live deep inside Grand Tower.”

English active voice makes the family relation much easier to follow.

### Example 33 — rescued from an imminent passive event

- Source pattern: `殺されるところをトーマスに救われた`
- Better: “Thomas rescued her just as she was about to be beaten to death.”

`ところを` marks the moment or circumstances interrupted by the rescue.

## 9. `ことになる`, `こととなる`, `ようになる`, and `てしまう`

These do not all mean “ended up.” Determine whether the construction expresses a decision, external arrangement, logical consequence, change over time, completion, regret, or loss of control.

### Example 34 — social consequence

- Line: `A1:0135`
- `ことになる` means “would amount to / would be treated as,” not a scheduled event.

### Example 35 — externally shaped decision

- Line: `A2-2:0015`
- `参加を了承することとなった` is a retrospective formal summary: “I ultimately agreed to attend.”

### Example 36 — change in behavior or capability

- Source pattern: `対応するようになった`
- Preferred: “began to respond,” “came to handle,” “now responded,” depending on duration.

### Example 37 — unwanted emotional result

- Line: `A2-1:0103`
- Source: `僕は複雑な気分になってしまう。`
- Better: “It left me with mixed feelings.”

Do not automatically add “unfortunately.” The unwanted or involuntary nuance can often be carried by the verb choice.

### `てしまう` decision rule

- Completed action with no regret: translate simple completion.
- Accidental/uncontrolled action: use “ended up,” “found oneself,” or an accidental verb.
- Regretful consequence: show regret through context or diction.
- Irreversible transformation: “became,” “was left,” or “had already…” may be stronger than “ended up.”

## 10. Evidentiality, rumor, and narrator certainty

This VN carefully distinguishes observed fact, inference, hearsay, rumor, and institutional belief. Flattening all of them into fact can spoil mysteries.

### Example 38 — visual inference with `らしい`

- Line: `A1:0020`
- Source: `学生らしい若い男女`
- Better: “young men and women who looked like students”

This `らしい` is appearance, not hearsay.

### Example 39 — hearsay with sentence-final `らしい`

- Line: `A1:0056`
- Source: `かつては基地があったらしい。`
- Better: “Apparently, there used to be a base here.”

### Example 40 — self-inference with `らしい`

- Line: `A1:0223`
- Source: `いつの間にか僕は目を閉じていたらしい。`
- Better: “I must have closed my eyes without realizing it.”

The narrator infers an action from their current state. “Apparently” is possible but less intimate.

### Dossier and glossary forms

| Japanese | Preserve as |
|---|---|
| `と思われる` | “is believed/thought to,” “appears to” |
| `とされる` | “is regarded as,” “is officially said to” |
| `と言われている` | “is said/reported to,” “is known as” |
| `ようだ` | “seems,” “appears,” or contextual inference |
| `そうだ` after plain form | hearsay: “reportedly,” “I hear that…” |
| verb stem + `そうだ` | appearance: “looks about to…,” “seems likely to…” |
| `に違いない` | strong inference: “must,” not proven fact |
| `かもしれない` | live possibility: “may/might” |

Preserve these levels even when the reader later learns the truth.

## 11. Clefts and delayed focus

Japanese often reserves the important noun for `のは`, `のが`, or `こそ` at the end.

### Example 41 — `…のがこの街だ`

- Line: `A1:0055`
- Better architecture: describe the background, then state “This city…” as a new sentence.

### Example 42 — definition with `というのは`

- Line: `A1:0098`
- Source: `阿亮というのは…「○○ちゃん」とか…というような意味を含む。`
- Better: “Ah Long is a southern Chinese nickname, roughly comparable to calling someone ‘little Long’ or ‘Long-kun.’”

The exact cultural explanation may need line editing, but English should define the term directly rather than reproduce every Japanese nominalizer.

### Example 43 — emphatic `こそ`

- Source value: identifies the uniquely relevant item or reverses expectation.
- Options: stress position, “precisely,” “the very…,” or an English cleft.

Do not automatically translate `こそ` as “indeed.” Often English word order supplies the emphasis.

## 12. Long enumerations and fragment rhythm

The narration uses lists to create density, speed, disgust, or documentary scope. English can retain fragments when they are deliberate, but the grammar of each item should remain parallel.

### Example 44 — image catalogue

- Line: `A1:0050`
- Source begins: `大通りを飾る多国籍なネオン。住民たちの…髪や肌の色。…`
- Recommended architecture: “Multinational neon along the boulevard. Every imaginable shade of hair and skin. Fashions and subcultures celebrated by the young…”

Fragments fit the narrator's accumulating catalogue. Do not force the list into one overlong complete sentence.

### Example 45 — nested hypothetical itinerary

- Line: `x1:0071`
- Source strings together laundry, a restaurant, a casino, and prostitution before revealing that every business has a boss in the room.
- Recommended method: split the itinerary into two sentences, then preserve the punch line: “Every establishment you had used could easily belong to one of the bosses in this room.”

The final revelation is the point. English restructuring should make it land, not bury it.

### Example 46 — institutional workload list

- Line: `X14:0087`
- Source repeatedly uses `たり` for searching, feeding, brushing teeth, bathing, medication, and disability care.
- Preferred: a parallel list with active gerunds or finite verbs. `たり` marks representative activities, so avoid implying the list is exhaustive.

### Nonexhaustive list markers

- `や`, `やら`: examples among others; `やら` may add confusion or emotional overload.
- `たり`: representative repeated actions, not necessarily a complete sequence.
- `だの`: often dismissive or exasperated enumeration.
- `とか`: casual examples, approximation, or reported wording.
- `など`: “such as,” “and the like,” or a downgrading “something like.”

## 13. Contrast stacking and discourse markers

The prose may use `しかし`, `だが`, `けれども`, `もっとも`, `とはいえ`, and `むしろ` close together. English does not need a one-to-one conjunction for each marker.

| Japanese marker | Common function | Possible English treatment |
|---|---|---|
| `しかし／だが` | direct turn | but, however, new sentence with no marker |
| `けれども` | softer contrast/background | although, while, but |
| `もっとも` | correction/qualification | admittedly, to be fair, that said |
| `とはいえ` | concession followed by limit | even so, still, that said |
| `むしろ` | preferred correction | rather, if anything, instead |
| `それどころか` | stronger reversal | far from it, more than that, in fact |
| `どころか` | expectation reversal | far from…, let alone…, instead of… |

Preserve the logical turn, not the count of conjunctions.

## 14. Formal narration versus spoken voice

The VN shifts among literary narration, dossier/glossary prose, clinical hospital language, criminal hierarchy speech, casual youth dialogue, and character-specific idiolects.

### Narration and glossary

- `である` is sober/expository, not automatically archaic.
- `施行された`, `余儀なくされた`, `判明していない`, and similar forms should sound documentary where the source is documentary.
- Do not make every passive active if institutional distance is meaningful.

### Rough dialogue

- Forms such as `じゃねえ`, `やりゃ`, `知らねえ`, and sentence-final `ぞ／ぜ` signal roughness and confidence.
- Use contractions, blunt syntax, and vocabulary before resorting to phonetic eye dialect.
- Do not give every rough male speaker the same generic gangster voice.

### Polite and deferential dialogue

- `です／ます`, honorific titles, hedging, and indirect refusals encode rank.
- English may use full forms, titles, softened requests, and fewer contractions.
- Do not translate every `様` as “Lord.” YS hierarchy may call for **sir**, a title such as **Longtou**, or no overt equivalent depending on the line.

### Hess's marked speech

- His katakana-heavy endings and unusual capitalization mark non-native/stylized Japanese.
- Prefer slightly stilted word order, over-formality, or conspicuously selected vocabulary.
- Avoid offensive “foreign” phonetic spellings and do not replace every `デス` with a gimmick.

### Clinical hospital language

Terms such as `頓服`, `不穏`, `保護室`, `病識`, `拘束`, and `申し送り` require consistent domain translation. Suggested working forms:

| Japanese | Working English |
|---|---|
| `頓服` | PRN medication / as-needed medication |
| `不穏` | agitated / acutely unsettled |
| `保護室` | seclusion room |
| `病識` | insight into one's illness / clinical insight |
| `拘束` | restraint / restraints |
| `申し送り` | shift handover / handoff |

Choose between technical and reader-friendly wording based on speaker expertise. A nurse may say **PRN medication**; a patient may say **something to calm her down**.

## 15. Kinship terms, roles, and social names

Japanese uses kinship and occupational terms where English may use a name or pronoun.

| Source term | Translation question |
|---|---|
| `兄貴` | literal older brother, sworn-brother address, or gang respect? |
| `父さん／お父さん` | direct “Dad,” third-person “your father,” or strategic public wording? |
| `先生` | doctor, teacher, respected specialist, or polite surname suffix? |
| `旦那` | husband, boss/patron, or informal “sir”? |
| `主任` | head nurse/supervisor as a role or direct address? |
| `龍頭` | keep the fixed title Longtou; do not alternate randomly with boss/chairman |

Do not globally substitute one English word for these forms. First identify the relationship in that line.

## 16. Pronouns, repetition, and reference safety

Japanese can repeat surnames and omit pronouns; English tends to do the reverse. This VN's large cast makes aggressive pronoun substitution dangerous.

- Repeat a name when two or more plausible **he**, **she**, or **they** referents are active.
- Keep a title when hierarchy matters: **the Longtou** may be clearer than **he**.
- Do not replace deliberate alias use with a pronoun when the name itself carries identity information.
- `彼女`, `彼`, `その人物`, and `相手` may deliberately avoid revealing identity; do not insert a known proper name early.
- `あれ`, `それ`, `この件`, and `そのこと` require a context check. English may need to restate the actual event, but only if the Japanese referent is unambiguous.

## 17. Reveal-sensitive grammar

Mystery and identity passages often combine vague subjects with evidential forms. Preserve what the viewpoint character knows at that moment.

### Example 47 — identity inference is not identity fact

- Source pattern: `あの女がその変身した姿だとすれば…`
- Better: “If that woman was one of his transformed forms…”

Do not change the conditional to “That woman was his transformed form” merely because later scenes confirm it.

### Example 48 — competing explanations

- Source pattern: `発作の影響か、薬物中毒の影響なのかはわからないが…`
- Better: “Whether it was the episode itself or the drugs, there was no mistaking the severity of her symptoms.”

Retain both possibilities. MT often drops one side of `AかBか` or turns the narrator's uncertainty into a diagnosis.

### Example 49 — inherited identities

- Source sequence: Asahi → Belukha → Ellie White.
- Translate the name actually used by the current viewpoint and timeline. Do not normalize all three names to the final identity.

### Example 50 — reported names

- Source pattern: `本名は…という話さえ信用出来なくなってくる。`
- Better: “Even the claim that his real name was Alexander Yakovlevich Chernykh was becoming difficult to trust.”

The noun `話` can mean a claim/account, not merely a story. Preserve the narrator's doubt.

## 18. Markup inside grammatical constructions

The visible Japanese can be nested inside UTAGE tags. Tags are not punctuation and must not disrupt grammatical analysis.

### Tips tags

- Source: `<tips=20>コシチェイ</tips>`
- English target: `<tips=20>Koschei</tips>`
- Keep the numeric ID unchanged; translate only the visible label.

### Ruby tags

- Source: `<ruby=ツェー・ルォン><tips=1>謝亮</tips></ruby>`
- The ruby supplies pronunciation/identity evidence even if the final English display no longer needs furigana.
- Preserve the source tag during translation staging. Decide at import time whether the English runtime should retain, simplify, or remove ruby markup.

### Speed and presentation tags

- Source: `<speed=0.01>…</speed>`
- Translate the enclosed text and preserve the tag pair and value.
- Do not move only one half of a tag across a sentence split.

If restructuring one Japanese sentence into two English sentences, keep all paired tags balanced and confirm that the page break and voice timing still work.

## 19. Line splitting and joining policy

Japanese and English sentence boundaries need not match, but VN presentation limits matter.

Split when:

- a noun modifier becomes clearer as a separate sentence;
- two independent claims are joined only because Japanese tolerates a long chain;
- a reveal or punch line benefits from its own sentence;
- English would otherwise exceed comfortable textbox width.

Do not split when:

- a voice clip or `<speed>` tag requires one continuous unit;
- the second half depends on a suspenseful withheld subject;
- the page-control field would cause the split to appear on separate screens incorrectly;
- a tips or ruby tag would become unbalanced.

Join when Japanese fragments are grammatical supports that would sound accidental in English, but preserve intentional catalogue fragments and abrupt emotional beats.

## 20. Batch-level translation checklist

Before translating a batch:

- Identify the narrator and time period.
- Load the proper-noun/key-item authority.
- Note any aliases whose reveal timing matters.
- Inspect five to ten lines before and after the target line.

For each difficult sentence:

- Underline the head noun of every long modifier.
- Label omitted subjects explicitly in scratch work.
- Mark the scope of negatives such as `すべて…ない`.
- Mark evidentiality: observed, inferred, rumored, or established.
- Decide which Japanese clause becomes the English main clause.
- Replace support nouns such as `人物`, `者`, `もの`, and `こと` when English does not need them.
- Preserve contrast and causal direction after splitting.
- Check the resulting pronouns against the active cast.
- Preserve all UTAGE tags and IDs.

After translating the batch:

- Search for every proper noun and compare its approved form.
- Search for Type A/Type B, YS, Y District, Great Hole, Grand Tower, Longtou, and drug names.
- Check that partial negatives did not become total negatives.
- Check that rumors and hypotheses did not become facts.
- Check that sprite labels did not leak into displayed character names.
- Read each English line without looking at Japanese; it should parse on the first pass.
- Then compare against Japanese again for lost qualifications or relationships.

## Quick reference: constructions most likely to confuse MT

| Construction | Main danger | Default repair |
|---|---|---|
| Long clause + noun | English noun pile | Name noun early; use relative clause or new sentence |
| `すべて…ない` | total/partial negation reversal | “not all” / “not every” |
| `ないわけではない` | lost concession | “not that…couldn't,” “did have some…” |
| `ということになる` | wooden nominalization | translate inferred consequence directly |
| `ものの／とはいえ` | lost expectation contrast | “although,” “even so,” “only to…” |
| `たところで` | neutralized futility | “even if…, it would not…” |
| `こととなった` | “it became that” | “ultimately,” “was set to,” direct result verb |
| `てしまう` | automatic “unfortunately” | encode completion, accident, regret, or irreversibility contextually |
| `らしい／ようだ／そうだ` | rumor turned into fact | preserve evidence level |
| Passive/causative chain | agent disappears | restore actor and use active English where appropriate |
| Omitted subject | wrong character acts | recover narrator/topic from context |
| `人物／者／もの／こと` | repeated “person/thing/fact” | omit support noun or recast clause |
| `やら／たり／だの` list | false exhaustiveness | use representative parallel list |
| Alias or vague pronoun | premature reveal | use only the identity known in that scene |

## Provenance

- Examples are indexed to the canonical runtime script in `work/compiled_export/master_script.tsv`.
- Speaker and command context is available in the same row and neighboring rows.
- Raw comments, ruby, and tips markup are available in `work/textassets_export/raw/`.
- Proper-noun decisions are maintained in `work/notes/proper_nouns_names_key_items.md`.
- This guide should evolve during translation: add a construction whenever an MT error repeats across batches.

