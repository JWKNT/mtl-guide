# BLACK SHEEP TOWN — Japanese-to-English grammar and restructuring guide

> This guide supplements `proper_nouns_names_key_items.md` for translators. It describes constructions that recur in the compiled VN script. Examples use short excerpts and stable `line_id` references. Use these references to find complete lines and context in `work/compiled_export/master_script.tsv`. The recommended translations show sentence structure. They are not final line edits.

## Core principle

The prose often puts a long clause with much information before the noun it modifies. Japanese can put subjects, objects, conditions, and qualifications before the head noun. The head noun can occur at the end of this sequence. This order can make the English difficult to understand.

For every long modifier:

1. Find the head noun, which is the final noun that the modifier describes.
2. Put brackets around all text that modifies that noun.
3. Identify the modifier's implied subject, objects, time, and cause.
4. Select the information for the main English clause.
5. Move background information into a relative clause, participial phrase, apposition, or separate sentence.
6. Restore contrast, uncertainty, and emphasis after restructuring.
7. Check names and terms against `proper_nouns_names_key_items.md`.

Do not keep Japanese word order only because each phrase has a literal English equivalent. Preserve the information hierarchy and narrative voice.

## 1. Long prenominal noun modifiers

### Pattern: `[entire proposition] + head noun`

Japanese relative clauses do not use relative pronouns and can be very long. English normally needs **who**, **that**, **whose**, a participle, an apposition, or a new sentence.

### Example 1 — promote the modifier into the main clause

- Line: `A1:0029`
- Source shape: `タイプAが…集中すると周囲に発生する特殊な波長を感知し、ブザー音で報せるその装置`
- Head noun: `その装置` — “the device”
- Awkward: “That device which detects the special wavelengths that occur around a Type A when they concentrate in order to use an ability and reports them with a buzzer…”
- Better: “The device detects the unusual wavelengths emitted when a Type A concentrates to use their power, then sounds a buzzer.”

The Japanese describes the device's full function before `その装置`. Name the device first in English. Then explain its function. Use this form for the subsequent partial negative: “It cannot detect every psychic.”

### Example 2 — split a delayed cleft

- Line: `A1:0055`
- Source: `その巨大な穴が汚染する周辺地域は…その自然公園にべたりと張り付くように広がっているのがこの街だ。`
- Better: “The land contaminated by the giant hole has been designated a restricted national park. This city sprawls right up against it.”

The Japanese puts `この街` in the final cleft. Use “this city” as the subject of a second English sentence for emphasis.

### Example 3 — use “less X than Y” outside the noun phrase

- Line: `A3:0481`
- Source shape: `今では裏社会の大物というよりも…三姉妹の父親として知られるこの人物`
- Head noun: `この人物`
- Better: “These days, Fernandez was known less as an underworld heavyweight than as the father of three famously beautiful daughters.”

If the demonstrative is unimportant, do not use “this person who was now known…”. The context already identifies the person by name. English can use that name as the grammatical subject.

### Example 4 — turn biographical modifiers into finite verbs

- Line: `X3-3:0414`
- Source shape: `クリス・ツェーが…幹部たちを招集したとき、誰よりも早く…あらわれて…廖志明を出し抜いた人物`
- Better: “He had been the first executive to answer Chris Tse's final summons, inadvertently beating Chimin Liao to Grand Tower.”

The Japanese ends with `人物でもあった`. The English phrase “he was also a person who…” adds no useful information here. Use the important action as the predicate.

### Example 5 — avoid literal causative birth language

- Line: `A2-1:0185`
- Source: `トミーはその最初の妻であるアメリカ人に生ませた長男だ。`
- Literal trap: “Tommy was the eldest son he made his first American wife bear.”
- Better: “Tommy was his eldest son, born to his first wife, an American.”

Japanese `生ませた` reflects the father's viewpoint and can sound blunt. Usually, English expresses the relationship with **born to**. If coercion is important to the narrative, preserve that meaning.

### Example 6 — unpack serial life-history clauses

- Line: `B5:0311`
- Source shape: `母親と二人で…暮らし、母親が亡くなってからは…閉じ込められるようにして過ごしていた、筋金入りの箱入り娘`
- Better: “She had spent her early years secluded with her mother under guard. After her mother died, she was shut away in Grand Tower. She had been sheltered all her life.”

Do not put both life stages in one modifier before “sheltered girl.” Repeat the subject to make the sequence clear. This repetition preserves the cumulative effect.

### Example 7 — place comparison after the noun

- Line: `X7:0363`
- Source shape: `アサルトライフルよりは小型で…短機関銃よりは威力と射程のある銃器`
- Better: “The guns were smaller and easier to handle than standard infantry assault rifles, but offered more power and range than compact submachine guns such as the Skorpion.”

Name the object first. Then use parallel comparisons. Avoid long premodifiers such as “smaller-than-assault-rifle but longer-range-than-submachine-gun firearms.”

### Example 8 — retain a rhetorical question after restructuring

- Line: `A5:0091`
- Source shape: `…いたずらをやってのけた高度な能力者を、能力の手がかりもなしにどう対策しろというのだろう？`
- Better: “How were they supposed to prepare for a psychic powerful enough to breach that security and smash the statue when they did not even know what her ability was?”

`どう対策しろというのだろう` expresses frustration about an impossible task. This emotion is more important than the long description of the psychic. Keep this expression as the English main clause.

### Example 9 — use apposition for compact classifications

- Line: `X13:0035`
- Source shape: `姉はタイプA、妹はタイプBの双子は…`
- Better: “The twins—the elder a Type A, the younger a Type B—used their powers for pranks that went far beyond harmless mischief.”

Apposition prevents ambiguity in a phrase such as “Type A older sister and Type B younger sister twins”.

### Example 10 — do not overuse “a person who”

- Line: `X8:0272`
- Source shape: `そうではない者たちが多くいると知ったのは新しい発見だった。`
- Better: “It was a revelation to learn how many people did not share that view.”

Japanese `者`, `人物`, and `人間` often function as support nouns. English frequently omits these nouns.

## 2. Choosing an English architecture

Use the simplest clear sentence structure:

| Japanese structure | Preferred English architecture |
|---|---|
| Short identifying modifier | Relative clause: “the officer **who handled psychic crimes**” |
| Long action sequence before a person | Put the name or person first. Use finite verbs in one or more sentences. |
| Classification before a name | Apposition: “Misa, **a nurse at Makigawara Hospital**, …” |
| Resulting condition before a noun | Participial phrase: “the patients **left without treatment**” |
| Two balanced attributes | Parallel predicate: “smaller than X but stronger than Y” |
| More than two independent facts | Separate sentences |
| Modifier contains a reveal | Preserve suspense until the reveal. Simplify the surrounding syntax. |

If more than two substantial modifiers precede an English noun, move some information after the noun or into another sentence.

## 3. Omitted subjects and viewpoint tracking

Japanese often omits subjects that English requires. The missing subject can be the narrator, the current speaker, an earlier grammatical topic, or an implied institution.

### Example 11 — recover the first-person subject

- Line: `A1:0003`
- Source: `まだ吐きたいというほど気持ちが悪いわけではなく…`
- Better: “I did not feel sick enough to vomit yet…”

The line contains no `僕`, but the first-person narrator experiences the nausea. Unless the source deliberately uses an impersonal voice, avoid “It was not yet nauseating enough…”.

### Example 12 — the omitted subject of a conditional

- Line: `A3:0155`
- Source: `父の命を救いたい、と言えばおそらく松子は反対しない。`
- Better: “If I told Matsuko I wanted to save my father, she probably would not object.”

The subject of `言えば` is the narrator. It is neither Matsuko nor a generic “one.”

### Example 13 — keep one subject through a verb chain

- Line: `A1:0230`
- Source: `会計を済ませ、路上に戻ったところで馬明に電話をかけた。`
- Better: “After paying and stepping back onto the street, I called Ma Ming.”

The narrator is the subject of all three actions. Do not accidentally change the subject between clauses.

### Subject-tracking procedure

1. Check the `speaker` column and the sheet's current narrator.
2. Read earlier sentences until you find a plausible topic.
3. Identify the person or entity that can perform the action.
4. Identify the person whose perception or judgment the sentence describes.
5. If several characters have the same gender, repeat a name instead of an ambiguous pronoun.

The VN frequently changes the first-person narrator between sheets. Do not assume that `僕`, `私`, or `おれ` identifies the same person throughout the VN.

## 4. `という`, `こと`, and delayed definitions

These forms can introduce a quotation, label, nominalization, explanation, inference, or concept. Literal “the thing that…” translations are usually incorrect.

### Example 14 — inference with `ということになる`

- Line: `A1:0135`
- Source: `これはただの親子の再会ではなく…形式的な意味を持ってしまうということになる。`
- Better: “This would not be seen as a simple reunion between father and son. Inevitably, it would become a formal meeting between the boss of YS and his heir.”

Here, `ということになる` identifies the social implication that the narrator infers. Translate this implication directly. Do not translate the nominalizer literally.

### Example 15 — definition and consequence in the same sentence

- Line: `A1:0059`
- Source shape: `懐かしさを感じるということは…何かが…食い込んでいるということだ。`
- Better: “If I felt nostalgic, then something unique to this city had lodged itself firmly in my heart—something more concrete than mere incomprehensibility.”

English can use **if…then**, **the fact that**, or a direct statement. Do not use “the fact that” twice.

### Example 16 — `というより` corrects the category

- Source pattern: `Aというより（も）むしろB`
- Preferred: “less A than B,” “not so much A as B,” or simply “rather than A, B.”

This construction corrects a label. It does not make a general comparison. Preserve both the rejected label and its replacement.

### Example 17 — `というのは…からだ` explanatory cleft

- Line: `A1:0409`
- Source: `というのは、この建物こそが…ＹＳの根城であったからだ。`
- Better: “That was because this building was the headquarters of YS, the largest criminal organization in the district.”

If the previous English sentence requires an explanation, “because” can be sufficient. Do not start every instance with “The reason is that.”

## 5. Partial negation and the `わけ` family

`わけ` expresses an expected conclusion, an explanatory connection, or a logical impossibility. MT can easily reverse the meaning of its negative forms.

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

Keep **not all** together to make the scope of the negative clear.

### Example 20 — `なかったわけではない`

- Line: `A2-2:0343`
- Source: `発生させられなかったわけではないが、条件がさっぱりわからなかった。`
- Better: “It was not that they could not reproduce the effect; they simply had no idea what conditions triggered it.”

The double negative acknowledges limited success before it introduces the main problem.

### Common `わけ` renderings

| Form | Typical value | Natural English |
|---|---|---|
| `わけだ` | logical conclusion | “so that explains it,” “which meant…” |
| `わけではない` | rejects an inference | “that does not mean…,” “not necessarily…” |
| `わけがない` | logical impossibility | “there is no way…,” “cannot possibly…” |
| `わけにもいかない` | social/moral constraint | “could hardly…,” “was not in a position to…” |
| `というわけで` | summary/transition | “and so,” “that was why…” |
| `どういうわけか` | unexplained reason | “for some reason” |

Do not translate every occurrence as “reason”. `わけ` often expresses a logical relationship rather than a literal cause.

## 6. Concession and adversative connectors

The prose can include several contrasts. Preserve each change in reasoning. Do not start every sentence with **however**.

### Example 21 — `ものの`

- Line: `A1:0446`
- Source: `せっかくやって来たものの…まだ父との面会の時間がとれない`
- Better: “He had come all this way, only to find that the doctor's examination was running long and his father still could not see him.”

`Only to find` often expresses the disappointed expectation in `せっかく…ものの`.

### Example 22 — `にもかかわらず`

- Line: `A1:0018`
- Source: `平日の昼間にもかかわらず滑走路通りは活気で満ちている。`
- Better: “Runway Street was bustling despite it being the middle of a weekday.”

Select **despite**, **although**, or **even though** to suit the sentence structure and emphasis.

### Example 23 — `と言っても`

- Line: `A1:0452`
- Source shape: `と言っても、僕の様に親戚の家に預けられていたわけではなく…`
- Better: “That said, she had not been sent to live with relatives as I had.”

This construction limits or corrects the reader's likely interpretation. “Even if one says” is usually incorrect.

### Example 24 — `まだ…からいいものの`

- Line: `A1:0380`
- Source: `まだジョゼさんが元気だからいいものの、急に病気にでもなったらどうなるか。`
- Better: “Things were manageable while Jose was still healthy—but what would happen if he suddenly fell ill?”

This construction warns that the current favorable condition can end. It does not only express approval of the current situation.

### Example 25 — `にもかかわらず` after a known premise

- Line: `A3:0567`
- Source shape: `現実を知っているにもかかわらず、あえて壬生屋を擁護する気になれない程度には…`
- Better: “Even knowing the reality of the situation, I could not bring myself to defend Mibuya. He was simply too selfish and inhuman.”

The Japanese uses `程度には` to qualify the conclusion by degree. English can state the conclusion first. A second statement can explain its degree.

## 7. Conditions, futility, and hypothetical distance

### Example 26 — futile `〜たところで`

- Line: `A1:0038`
- Source: `やったところでどれほど街が良くなることやら。`
- Better: “And even if they tried, how much better would it make the city?”

`たところで` indicates that the result would remain insufficient. Do not use the neutral translation “when they did it.”

### Example 27 — `百歩譲って`

- Line: `A1:0134`
- Source: `百歩譲って会うのは良いとしても…`
- Better: “Even granting that meeting him was acceptable…” / “Suppose I conceded the meeting itself…”

This construction expresses reluctant concession, often in an argument. “Yielding one hundred steps” is not idiomatic English.

### Example 28 — stacked hypotheticals

- Line: `A1:0165`
- Source shape: `治療を受けたとしても…たとえ長生き出来たとしても…`
- Better: “Treatment was unlikely to buy her much time. Even if she lived longer, she would spend most of that life incapacitated.”

Japanese permits repeated `としても`. Separate the consequences when this makes the English clearer.

### Example 29 — `〜ないともかぎらない`

- Source value: the construction does not exclude the possibility.
- Preferred: “might,” “could still,” “there was no guarantee that…would not…”

Do not translate the double negative word for word. Identify whether the narrator considers the outcome only possible or genuinely likely.

## 8. Passive, causative, and formal result chains

Japanese often uses passive or impersonal constructions where active English is clearer.

### Example 30 — passive persuasion plus formal outcome

- Line: `A2-2:0015`
- Source: `美美の強引な説得に押し切られるかたちで参加を了承することとなった。`
- Literal trap: “It came to be that I consented to participate in the form of being overcome by Meimei's forceful persuasion.”
- Better: “In the end, Meimei's relentless persuasion wore me down, and I agreed to attend.”

Use Meimei's persuasion as the subject. Use a simple verb to express the result.

### Example 31 — `余儀なくされた`

- Line: `B6:0667`
- Source: `後退を余儀なくされた。`
- Better: “They had no choice but to fall back.” / “The smoke forced them to retreat.”

If the cause is clear, use the active version. Use “were compelled to retreat” only for deliberately official prose.

### Example 32 — passive life transition

- Line: `A1:0452`
- Source: `母が死ぬと、父に引き取られて…暮らすこととなった。`
- Better: “After her mother died, her father took her in, and she went to live deep inside Grand Tower.”

English active voice makes the family relationship clearer.

### Example 33 — rescued from an imminent passive event

- Source pattern: `殺されるところをトーマスに救われた`
- Better: “Thomas rescued her just as she was about to be beaten to death.”

`ところを` identifies the moment or circumstances that the rescue interrupts.

## 9. `ことになる`, `こととなる`, `ようになる`, and `てしまう`

These constructions do not all mean “ended up.” Identify the meaning from the context. Possible meanings include a decision, external arrangement, logical consequence, change over time, completion, regret, or loss of control.

### Example 34 — social consequence

- Line: `A1:0135`
- `ことになる` means “would amount to / would be treated as,” not a scheduled event.

### Example 35 — externally shaped decision

- Line: `A2-2:0015`
- `参加を了承することとなった` formally summarizes a past decision: “I ultimately agreed to attend.”

### Example 36 — change in behavior or capability

- Source pattern: `対応するようになった`
- Preferred: “began to respond,” “came to handle,” “now responded,” depending on duration.

### Example 37 — unwanted emotional result

- Line: `A2-1:0103`
- Source: `僕は複雑な気分になってしまう。`
- Better: “It left me with mixed feelings.”

Do not automatically add “unfortunately.” The verb can express the unwanted or involuntary result.

### `てしまう` decision rule

- For a completed action without regret, translate simple completion.
- For an accidental or uncontrolled action, use “ended up,” “found oneself,” or a verb that expresses an accident.
- For a consequence that causes regret, express that regret through context or word choice.
- For an irreversible transformation, “became,” “was left,” or “had already…” can express more emphasis than “ended up.”

## 10. Evidentiality, rumor, and narrator certainty

This VN distinguishes observed fact, inference, hearsay, rumor, and institutional belief. If a translation states all these as facts, it can reveal information too early.

### Example 38 — visual inference with `らしい`

- Line: `A1:0020`
- Source: `学生らしい若い男女`
- Better: “young men and women who looked like students”

Here, `らしい` expresses appearance, not hearsay.

### Example 39 — hearsay with sentence-final `らしい`

- Line: `A1:0056`
- Source: `かつては基地があったらしい。`
- Better: “Apparently, there used to be a base here.”

### Example 40 — self-inference with `らしい`

- Line: `A1:0223`
- Source: `いつの間にか僕は目を閉じていたらしい。`
- Better: “I must have closed my eyes without realizing it.”

The narrator infers an action from their current state. “Apparently” is possible, but it gives a less personal description.

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

Preserve these evidence levels, including when the reader later learns the truth.

## 11. Clefts and delayed focus

Japanese often reserves the important noun for `のは`, `のが`, or `こそ` at the end.

### Example 41 — `…のがこの街だ`

- Line: `A1:0055`
- Recommended structure: describe the background. Start a new sentence with “This city…”.

### Example 42 — definition with `というのは`

- Line: `A1:0098`
- Source: `阿亮というのは…「○○ちゃん」とか…というような意味を含む。`
- Better: “Ah Long is a southern Chinese nickname, roughly comparable to calling someone ‘little Long’ or ‘Long-kun.’”

The exact cultural explanation can require a line edit. Define the term directly in English. Do not reproduce every Japanese nominalizer.

### Example 43 — emphatic `こそ`

- Source value: the construction identifies the uniquely relevant item or reverses an expectation.
- Options: stress position, “precisely,” “the very…,” or an English cleft.

Do not automatically translate `こそ` as “indeed.” English word order often provides the emphasis.

## 12. Long enumerations and fragment rhythm

The narration uses lists to create density, speed, disgust, or documentary scope. English can retain deliberate fragments. Keep the grammar of list items parallel.

### Example 44 — image catalogue

- Line: `A1:0050`
- Source begins: `大通りを飾る多国籍なネオン。住民たちの…髪や肌の色。…`
- Recommended architecture: “Multinational neon along the boulevard. Every imaginable shade of hair and skin. Fashions and subcultures celebrated by the young…”

Fragments suit the narrator's cumulative list. Do not combine the list into one excessively long sentence.

### Example 45 — nested hypothetical itinerary

- Line: `x1:0071`
- The source lists laundry, a restaurant, a casino, and prostitution. It then reveals that each business has a boss in the room.
- Recommended method: split the itinerary into two sentences. Preserve the final revelation: “Every establishment you had used could easily belong to one of the bosses in this room.”

The final revelation is the main point. Restructure the English to give that revelation emphasis.

### Example 46 — institutional workload list

- Line: `X14:0087`
- The source repeatedly uses `たり` for searching, feeding, brushing teeth, bathing, medication, and disability care.
- Preferred structure: use a parallel list with active gerunds or finite verbs. `たり` identifies representative activities. Do not imply that the list is complete.

### Nonexhaustive list markers

- `や`, `やら` introduce examples from a larger set. `やら` can also express confusion or emotional overload.
- `たり` identifies representative repeated actions. It does not necessarily give a complete sequence.
- `だの` often expresses dismissal or exasperation in a list.
- `とか` introduces casual examples, approximation, or reported wording.
- `など` can mean “such as,” “and the like,” or “something like.” The last form can reduce the importance of the item.

## 13. Contrast stacking and discourse markers

The prose can use `しかし`, `だが`, `けれども`, `もっとも`, `とはいえ`, and `むしろ` close together. English does not need a separate conjunction for each marker.

| Japanese marker | Common function | Possible English treatment |
|---|---|---|
| `しかし／だが` | direct contrast | but, however, new sentence with no marker |
| `けれども` | softer contrast/background | although, while, but |
| `もっとも` | correction/qualification | admittedly, to be fair, that said |
| `とはいえ` | concession followed by limit | even so, still, that said |
| `むしろ` | preferred correction | rather, if anything, instead |
| `それどころか` | stronger reversal | far from it, more than that, in fact |
| `どころか` | expectation reversal | far from…, let alone…, instead of… |

Preserve the change in reasoning. You do not need to preserve the number of conjunctions.

## 14. Formal narration versus spoken voice

The VN uses literary narration, dossier and glossary prose, clinical hospital language, and speech that reflects criminal rank. It also uses casual youth dialogue and individual speech patterns.

### Narration and glossary

- `である` expresses serious or explanatory prose. It does not always require archaic English.
- If the source uses a documentary style, preserve that style for `施行された`, `余儀なくされた`, `判明していない`, and similar forms.
- If the impersonal institutional viewpoint is important, do not change every passive construction to active voice.

### Rough dialogue

- Forms such as `じゃねえ`, `やりゃ`, `知らねえ`, and sentence-final `ぞ／ぜ` express roughness and confidence.
- Use contractions, blunt syntax, and suitable vocabulary before you use nonstandard spellings to represent speech.
- Do not give every rough male speaker the same generic gangster voice.

### Polite and deferential dialogue

- `です／ます`, honorific titles, hedging, and indirect refusals express rank.
- English may use full forms, titles, softened requests, and fewer contractions.
- Do not translate every `様` as “Lord.” YS rank can require **sir**, a title such as **Longtou**, or no explicit equivalent. Select the form for the line.

### Hess's marked speech

- His frequent katakana endings and unusual capitalization indicate non-native or stylized Japanese.
- Prefer slightly unnatural word order, excessive formality, or conspicuously selected vocabulary.
- Avoid offensive “foreign” phonetic spellings. Do not give every `デス` a conspicuous English equivalent.

### Clinical hospital language

Terms such as `頓服`, `不穏`, `保護室`, `病識`, `拘束`, and `申し送り` need consistent clinical translations. The table gives suggested working forms.

| Japanese | Working English |
|---|---|
| `頓服` | PRN medication / as-needed medication |
| `不穏` | agitated / acutely unsettled |
| `保護室` | seclusion room |
| `病識` | insight into one's illness / clinical insight |
| `拘束` | restraint / restraints |
| `申し送り` | shift handover / handoff |

Select technical or general wording for the speaker's level of expertise. A nurse can say **PRN medication**. A patient can say **something to calm her down**.

## 15. Kinship terms, roles, and social names

Japanese uses kinship and occupational terms where English may use a name or pronoun.

| Source term | Translation question |
|---|---|
| `兄貴` | Identify literal older brother, sworn-brother address, or gang respect. |
| `父さん／お父さん` | Identify direct “Dad,” third-person “your father,” or deliberate wording for a public setting. |
| `先生` | Identify doctor, teacher, respected specialist, or polite surname suffix. |
| `旦那` | Identify husband, boss or patron, or informal “sir”. |
| `主任` | Identify head nurse or supervisor as a role or direct address. |
| `龍頭` | Keep the fixed title Longtou. Do not alternate randomly with boss or chairman. |

First, identify the relationship in that line. Do not use one English equivalent for every occurrence of these forms.

## 16. Pronouns, repetition, and reference safety

Japanese can repeat surnames and omit pronouns. English often does the reverse. This VN has many characters. Too many pronouns can make their identities unclear.

- If **he**, **she**, or **they** could identify two or more characters, repeat a name.
- If rank matters, keep the title. The title **the Longtou** can be clearer than **he**.
- If an alias gives identity information, preserve the alias instead of using a pronoun.
- `彼女`, `彼`, `その人物`, and `相手` can deliberately conceal identity. Do not insert a known proper name early.
- Check the context for `あれ`, `それ`, `この件`, and `そのこと`. English can require an explicit description of the event. Restate the event only if the Japanese referent is unambiguous.

## 17. Reveal-sensitive grammar

Mystery and identity passages often combine vague subjects with evidential forms. Preserve the limits of the viewpoint character's knowledge at that moment.

### Example 47 — identity inference is not identity fact

- Source pattern: `あの女がその変身した姿だとすれば…`
- Better: “If that woman was one of his transformed forms…”

Even if later scenes confirm the identity, do not replace the conditional with “That woman was his transformed form”.

### Example 48 — competing explanations

- Source pattern: `発作の影響か、薬物中毒の影響なのかはわからないが…`
- Better: “Whether it was the episode itself or the drugs, there was no mistaking the severity of her symptoms.”

Preserve both possibilities. MT often omits one alternative in `AかBか`. It can also change the narrator's uncertainty into a diagnosis.

### Example 49 — inherited identities

- Source sequence: Asahi → Belukha → Ellie White.
- Translate the name that the current viewpoint and timeline use. Do not replace all three names with the final identity.

### Example 50 — reported names

- Source pattern: `本名は…という話さえ信用出来なくなってくる。`
- Better: “Even the claim that his real name was Alexander Yakovlevich Chernykh was becoming difficult to trust.”

The noun `話` can mean a claim or account, not only a story. Preserve the narrator's doubt.

## 18. Markup inside grammatical constructions

UTAGE tags can contain visible Japanese text and other tags. Tags do not function as punctuation. Analyze the grammar without treating tags as sentence boundaries.

### Tips tags

- Source: `<tips=20>コシチェイ</tips>`
- English target: `<tips=20>Koschei</tips>`
- Keep the numeric ID unchanged. Translate only the visible label.

### Ruby tags

- Source: `<ruby=ツェー・ルォン><tips=1>謝亮</tips></ruby>`
- Ruby provides evidence about pronunciation or identity, including when the final English display does not need furigana.
- Preserve the source tag during translation staging. At import time, decide whether the English runtime should retain, simplify, or remove ruby markup.

### Speed and presentation tags

- Source: `<speed=0.01>…</speed>`
- Translate the enclosed text. Preserve the tag pair and value.
- Do not move only one half of a tag across a sentence split.

If you split one Japanese sentence into two English sentences, keep each tag pair balanced. Check the page break and voice timing.

## 19. Line splitting and joining policy

Japanese and English sentence boundaries can differ. Preserve the VN presentation limits.

Split a sentence in these conditions:

- A separate sentence makes a noun modifier clearer.
- Japanese permits a long chain that connects two otherwise independent claims.
- A separate sentence gives a reveal or punch line the necessary emphasis.
- The English would otherwise exceed a comfortable textbox width.

Do not split a sentence in these conditions:

- A voice clip or `<speed>` tag requires one continuous unit.
- The second half depends on a subject that the source withholds for suspense.
- The page-control field would incorrectly put the two parts on separate screens.
- The split would leave a tips or ruby tag unbalanced.

If Japanese fragments have only a grammatical support function, join them when separate English fragments would seem accidental. Preserve intentional catalogue fragments and abrupt expressions of emotion.

## 20. Batch-level translation checklist

Before you translate a batch:

- Identify the narrator and time period.
- Load the authoritative reference for proper nouns and key items.
- Note any aliases whose reveal timing matters.
- Inspect five to ten lines before and after the target line.

For each difficult sentence:

- Underline the head noun of every long modifier.
- Label omitted subjects explicitly in your working notes.
- Mark the scope of negatives such as `すべて…ない`.
- Mark evidentiality: observed, inferred, rumored, or established.
- Decide which Japanese clause becomes the English main clause.
- If English does not need support nouns such as `人物`, `者`, `もの`, and `こと`, replace them.
- After a split, preserve contrast and the direction of cause and effect.
- Check that pronouns identify the correct characters in the current scene.
- Preserve all UTAGE tags and IDs.

After you translate the batch:

- Find each proper noun. Compare it with the approved form.
- Search for Type A/Type B, YS, Y District, Great Hole, Grand Tower, Longtou, and drug names.
- Check that partial negatives did not become total negatives.
- Check that rumors and hypotheses did not become facts.
- Check that sprite labels do not occur in displayed character names.
- Read each English line without the Japanese. Check that its meaning is clear on the first reading.
- Compare the English with the Japanese again. Check for missing qualifications or relationships.

## Quick reference: constructions most likely to confuse MT

| Construction | Main danger | Default repair |
|---|---|---|
| Long clause + noun | unclear sequence of nouns | Name the noun early. Use a relative clause or a new sentence. |
| `すべて…ない` | total/partial negation reversal | “not all” / “not every” |
| `ないわけではない` | lost concession | “not that…couldn't,” “did have some…” |
| `ということになる` | unnatural nominalization | Translate the inferred consequence directly. |
| `ものの／とはいえ` | lost expectation contrast | “although,” “even so,” “only to…” |
| `たところで` | neutralized futility | “even if…, it would not…” |
| `こととなった` | “it became that” | “ultimately,” “was set to,” direct result verb |
| `てしまう` | automatic “unfortunately” | Express completion, accident, regret, or irreversibility as required by the context. |
| `らしい／ようだ／そうだ` | rumor becomes fact | Preserve the evidence level. |
| Passive/causative chain | missing agent | Identify the actor. Use active English where appropriate. |
| Omitted subject | wrong character acts | Identify the narrator or topic from the context. |
| `人物／者／もの／こと` | repeated “person/thing/fact” | Omit the support noun or restructure the clause. |
| `やら／たり／だの` list | list incorrectly appears complete | Use a parallel list of representative items. |
| Alias or vague pronoun | premature reveal | Use only the identity known in that scene. |

## Provenance

- The example references identify lines in the canonical runtime script at `work/compiled_export/master_script.tsv`.
- The same row and adjacent rows give speaker and command context.
- `work/textassets_export/raw/` contains raw comments, ruby, and tips markup.
- `work/notes/proper_nouns_names_key_items.md` records the proper-noun decisions.
- When an MT error repeats across batches, add the construction to this guide.

