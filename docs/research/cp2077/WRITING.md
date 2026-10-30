# Writing the Cyberpunk 2077 jobs (src/content/games/cp2077/<es|en>/chapters/)

Each main job (and each relationship chain) is one "chapter" page of the
engine: the same file name in `es/` and `en/`, Spanish first, English a
faithful translation. The player reads it on a phone with the game running
(Switch 2, Update 2.5), so it must say what to do, in order, and what each
choice costs.

## Front matter

```yaml
---
number: '1.5' # see the table: 0·N / 1.x / 2.x / 3.x / PL x / S x
title: 'The Pickup'
part: 'act1' # prologue | act1 | act2 | act3 | pl | side
order: 14 # global order, from the table
summary: 'One line: what happens and the big choice'
pills:
  - { type: boss, label: 'Royce (exotraje Centaur)' }
  - { type: missable, label: 'Brick (solo rutas 3 y 4)' }
  - { type: info, label: 'Decisión: pagar a Royce, usar el chip o pelear' }
  - { type: shop, label: '...' } # vendors / ripperdocs met here
  - { type: save, label: 'Guarda antes de entrar en All Foods' }
  - { type: collectible, label: '...' }
---
```

Pill types are exactly `boss | shop | save | collectible | info | missable`.
`number`, `part`, `order` must match the table below and be identical in
es/en.

## Body (Markdown)

1. One intro paragraph: who gives the job, where, what it's about, how it
   unlocks, level/Street Cred if relevant.
2. `> **Orden:** step → step → step` (the objectives in order, short).
3. `> **Prepárate:** …` what to bring/build/save before starting.
4. `## …` sections following the job, in play order: where to go, what to
   pick up, how to approach (stealth/hack/fight, attribute checks with the
   2.x attribute needed when the research gives it).
5. `## Decisiones` — every meaningful choice as a bullet: **the option** →
   immediate result → later consequence (name the later job). Mark what is
   permanent.
6. `## Jefe — <name>` when there is a boss: phases, weak points, tactics.
7. `> **No te vayas sin:** …` missable loot, iconics, shards, people to talk
   to before leaving.
8. Optional `## Recompensas` (XP, eddies, Street Cred, items).

Use bullets and **bold**; no tables, no HTML, no images. Write `>` lines as
blockquotes (the engine styles them as margin notes).

## Names (Latin-American Spanish — the player's game language)

- **Use `docs/research/cp2077/glossary-es-mx.md`** for every in-game name and
  term (quests, attributes, perks, gangs, districts, items, UI terms). Never
  take a name from the Spanish Fandom wiki or a Spain-based source: es-ES and
  es-MX differ (e.g. Playing for Time = «Lagunas mentales» in es-MX).
- Spanish pages show the **es-MX name, with the English name in parentheses
  on its first mention on the page**: «El golpe (The Heist)», then «El golpe».
  The es `title:` is `El golpe (The Heist)`; the en title stays English.
- A name the glossary does not verify (marked UNVERIFIED or missing) stays
  **in English** (no invented translation); proper names of weapons and
  people stay as in the game.
- Fixed terms: matasanos (ripperdoc), encargo (gig), chanchullo del escáner
  del NCPD (NCPD Scanner Hustle), detección de ciberpsicópata (Cyberpsycho
  Sighting), hackeo rápido (quickhack), ciberterminal (cyberdeck), ventaja /
  árbol de ventajas (perk / perk tree), nivel (Tier), Reputación (Street
  Cred), netrunner (same), and the attributes **Constitución** (Body),
  Reflejos, Habilidad técnica, Inteligencia, Temple. No English filler words
  in Spanish prose (boss → jefe, drop → botín/suelta, loot → botín, gig →
  encargo, perk → ventaja, iconic → emblemática).
- Eddies: «eddies» (as the game says) or €$.

## Facts

Write only what `docs/research/cp2077/*.md` supports. Where a note marks
(CONFLICT), give the safer advice and say the sources disagree in one
clause (e.g. "save before: sources disagree on whether…"). Where it marks
(UNVERIFIED), hedge or leave it out. Pre-2.0 numbers (old perks, old skill
checks) must not appear as current. If you need a fact the notes lack, you
may check the Cyberpunk Fandom wiki via its API
(`https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json`)
and add the URL + fact to the relevant research note.

## Style

Neutral Latin-American Spanish ("tú"), plain and concrete, short paragraphs,
imperative for steps. English mirrors it. No spoilers beyond the job itself
except in `## Decisiones`, where consequences are the point.

## The job list

| file | number | part | order | covers |
|---|---|---|---|---|
| the-nomad | 0·N | prologue | 1 | Nomad lifepath prologue |
| the-streetkid | 0·S | prologue | 2 | Streetkid lifepath prologue |
| the-corpo-rat | 0·C | prologue | 3 | Corpo lifepath prologue |
| practice-makes-perfect | 1.1 | act1 | 10 | optional tutorial |
| the-rescue | 1.2 | act1 | 11 | |
| the-ripperdoc | 1.3 | act1 | 12 | |
| the-ride | 1.4 | act1 | 13 | |
| the-pickup | 1.5 | act1 | 14 | |
| the-information | 1.6 | act1 | 15 | |
| the-heist | 1.7 | act1 | 16 | |
| love-like-fire | 1.8 | act1 | 17 | interlude as Johnny |
| playing-for-time | 2.1 | act2 | 20 | |
| automatic-love | 2.2 | act2 | 21 | |
| the-space-in-between | 2.3 | act2 | 22 | |
| disasterpiece | 2.4 | act2 | 23 | |
| double-life | 2.5 | act2 | 24 | |
| map-tann-pelen | 2.6 | act2 | 25 | M'ap Tann Pèlen |
| i-walk-the-line | 2.7 | act2 | 26 | |
| transmission | 2.8 | act2 | 27 | + Never Fade Away |
| down-on-the-street | 2.9 | act2 | 28 | |
| gimme-danger | 2.10 | act2 | 29 | |
| play-it-safe | 2.11 | act2 | 30 | |
| search-and-destroy | 2.12 | act2 | 31 | |
| ghost-town | 2.13 | act2 | 32 | |
| lightning-breaks | 2.14 | act2 | 33 | |
| life-during-wartime | 2.15 | act2 | 34 | |
| tapeworm | 2.16 | act2 | 35 | + Johnny affinity |
| nocturne-op55n1 | 3.1 | act3 | 40 | point of no return, rooftop choices |
| ending-the-devil | 3.2 | act3 | 41 | Last Caress → Where is My Mind? |
| ending-the-star | 3.3 | act3 | 42 | We Gotta Live Together → … |
| ending-the-sun | 3.4 | act3 | 43 | For Whom the Bell Tolls → … |
| ending-temperance | 3.5 | act3 | 44 | New Dawn Fades |
| ending-the-reaper | 3.6 | act3 | 45 | (Don't Fear) The Reaper |
| ending-least-resistance | 3.7 | act3 | 46 | Path of Least Resistance |
| dog-eat-dog | PL 1 | pl | 50 | |
| hole-in-the-sky | PL 2 | pl | 51 | |
| spider-and-the-fly | PL 3 | pl | 52 | |
| lucretia-my-reflection | PL 4 | pl | 53 | |
| the-damned | PL 5 | pl | 54 | |
| get-it-together | PL 6 | pl | 55 | |
| you-know-my-name | PL 7 | pl | 56 | |
| birds-with-broken-wings | PL 8 | pl | 57 | |
| ive-seen-that-face-before | PL 9 | pl | 58 | |
| firestarter | PL 10 | pl | 59 | the Songbird / Reed split |
| the-killing-moon | PL 11 | pl | 60 | Songbird path |
| unfinished-sympathy | PL 12 | pl | 61 | + From Her to Eternity (King of Wands) |
| through-pain-to-heaven | PL 13 | pl | 62 | King of Swords route |
| black-steel-in-the-hour-of-chaos | PL 14 | pl | 63 | Reed path |
| somewhat-damaged | PL 15 | pl | 64 | |
| leave-in-silence | PL 16 | pl | 65 | + Four Score and Seven (Cups / Pentacles) |
| who-wants-to-live-forever | PL 17 | pl | 66 | + Things Done Changed: The Tower |
| side-johnny | S 1 | side | 80 | Chippin' In + Blistering Love |
| side-kerry | S 2 | side | 81 | the 7 Kerry jobs |
| side-panam | S 3 | side | 82 | Riders on the Storm → Queen of the Highway, I'll Fly Away |
| side-judy | S 4 | side | 83 | Both Sides, Now → Pyramid Song |
| side-river | S 5 | side | 84 | I Fought the Law → Following the River |
| side-delamain | S 6 | side | 85 | the Delamain cabs |
| side-heroes | S 7 | side | 86 | Heroes (Mama Welles) |
