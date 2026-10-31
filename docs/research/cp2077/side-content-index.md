# Side content index (inventory for the side-content pages)

Inventory of every Cyberpunk 2077 + Phantom Liberty side job, minor job and gig that the guide
does not cover yet, built from the Cyberpunk Fandom wiki API on 2026-10-31 (game version 2.5,
"Edgerunners 2 Update"). The machine-readable list is `scripts/side-content/manifest.json`
(217 entries, sorted in reading order). This note explains how it was built, what was left out
and what is still uncertain.

## 1. Totals

| part | entries | already covered (`covered_by`) | to write | PL |
|---|---|---|---|---|
| `jobs` (story side jobs) | 47 | 34 | 13 | 2 |
| `minor` (minor jobs) | 89 | 1 | 88 | 19 |
| `gigs` | 81 | 0 | 81 | 9 |
| **total** | **217** | **35** | **182** | **30** |

The 35 covered entries are still in the manifest (so the writer can link to them) but must not
get a page of their own:

| chapter | jobs |
|---|---|
| `side-johnny` | Chippin' In, A Cool Metal Fire, Blistering Love |
| `side-kerry` | Holdin' On, Second Conflict, A Like Supreme, Rebel! Rebel!, I Don't Wanna Hear It, Off the Leash, Boat Drinks |
| `side-panam` | Riders on the Storm, I'll Fly Away (a minor job), With a Little Help from My Friends, Queen of the Highway |
| `side-judy` | Both Sides, Now, Ex-Factor, Talkin' 'bout a Revolution, Pisces, Pyramid Song |
| `side-river` | I Fought the Law, Dream On, The Hunt, Following the River |
| `side-delamain` | Human Nature, Tune Up, Epistrophy (plus its 7 district sub-jobs), Don't Lose Your Mind |
| `side-heroes` | Heroes |

The 17 Phantom Liberty chapters (`dog-eat-dog` … `who-wants-to-live-forever`) cover main jobs
only. They mention side content as things to do (Balls to the Wall, Dazed and Confused, Dirty
Second Hands, Moving Heat, This Corrosion, Voodoo Treasure, Money for Nothing, No Easy Way Out,
Violence, the Dogtown gigs), but none of it has a walkthrough there, so none is marked covered.

### By act (earliest act in which the job can be done)

| act | jobs | minor | gigs | total | of which to write |
|---|---|---|---|---|---|
| `1` (before The Heist; all in Watson) | 2 | 9 | 23 | 34 | 34 |
| `2` (after The Heist) | 43 | 61 | 49 | 153 | 118 |
| `pl` (needs Phantom Liberty progress) | 2 | 19 | 9 | 30 | 30 |
| `3` | 0 | 0 | 0 | 0 | 0 |

Act 1 entries to write, all in Watson: The Gun, The Gift; Psycho Killer, The Prophet's Song,
Beat on the Brat, Beat on the Brat: Kabuki, Burning Desire / Night Moves, Career Opportunities,
Paid in Full, Sacrum Profanum / Losing My Religion, Last Call; and Regina's 23 Watson gigs.

### By district (the district in the infobox; first one when the job spans several)

| district | jobs | minor | gigs | total |
|---|---|---|---|---|
| Watson | 12 | 26 | 23 | 61 |
| Westbrook | 9 | 10 | 9 | 28 |
| City Center | 1 | 3 | 5 | 9 |
| Heywood | 10 | 6 | 12 | 28 |
| Santo Domingo | 7 | 15 | 13 | 35 |
| Pacifica (24 of them in Dogtown) | 1 | 18 | 10 | 29 |
| Badlands | 7 | 8 | 9 | 24 |
| Various | 0 | 3 | 0 | 3 |

Entries to write, by act and district:

| act | Watson | Westbrook | City Center | Heywood | Santo Domingo | Pacifica | Badlands | Various |
|---|---|---|---|---|---|---|---|---|
| 1 | 34 | – | – | – | – | – | – | – |
| 2 | 17 | 22 | 8 | 18 | 31 | 3 | 17 | 2 |
| pl | 1 | – | – | 2 | 1 | 25 | – | 1 |

Gigs per fixer: Regina (Watson) 23, Wakako (Westbrook) 8, Dino (City Center) 5, Padre (Heywood)
11, El Capitán (Santo Domingo) 11, Dakota (Badlands) 9, Mr. Hands 1 base-game (Pacifica) + 9
Dogtown, Rogue 4 (one each after Wakako's and Padre's last sets, two after El Capitán's).

## 2. How the manifest was built

- **Lists.** Category members (`list=categorymembers`, `cmlimit=500`) of *Cyberpunk 2077 Side
  Jobs* (90 pages), *Minor Jobs* (51), *Gigs* (81) and *Main Jobs* (63), plus every title linked
  from the list pages *Cyberpunk 2077 Side Jobs* (same page as "Side Quests") and *Cyberpunk 2077
  Minor Jobs*. There are no separate Phantom Liberty job categories: PL jobs sit in the same
  categories and the list pages put them in a "Phantom Liberty" section or mark them `{{IconPL}}`.
  The Gigs list page is a DPL query over the Gigs category, so the category is the full list.
- **Fields.** Wikitext of all 334 titles in batches of 50 (`prop=revisions&rvprop=content&rvslots=main`),
  then the `{{Infobox Quest}}` fields `type`, `quest_giver`, `district`, `sub_district`,
  `location`, `previous_quest`, `next_quest`, `baseid`, `tier`, rewards, plus the opening of each
  "Walkthrough" section and its notes for unlock conditions. Where the infobox has no `baseid`,
  the list page's BaseID column was used (kept only in the build data, not in the manifest).
- **`part`.** The two list pages decide it, not the categories. They disagree for 38 pages: the
  wiki's *Side Jobs* category also holds 38 jobs that its own list pages file under *Minor Jobs*
  (Space Oddity, Imagine, Spellbound, Balls to the Wall, Voodoo Treasure…). The Side Jobs list page
  is the story-character set (romances, Johnny/Kerry, Peralez, Joshua, Claire, Delamain, Bill
  Mitchel, The Gig/Gun/Gift), so it maps to `jobs`; the Minor Jobs list page maps to `minor`.
  Pages only in a category: This Corrosion (PL, story) → `jobs`; Sex On Wheels (listed via the
  "Sex on Wheels" redirect) → `minor`.
- **`pl`.** True when the page's lead says "in {{CP|2077PL}}", or the BaseID is a PL one
  (`wst_ep1_*`, `sts_ep1_*`, `q30x`, `mq30x`, `courier_*`, `combat_zone_reward`, `mq033_ep1`).
  This catches PL jobs outside Dogtown: The Show Must Go On (Wellsprings), New Person, Same Old
  Mistakes (The Glen), This Corrosion (Kabuki), Waiting for Dodger (Coastview), and El Capitán's
  car-courier jobs (Push It to the Limit → Just Another Story → Baby Let Me Take You).
- **`act`.** Earliest act the job can be *finished* in, from the prerequisites, with two rules:
  Watson is the only district open before The Heist, so a job with no prerequisite outside Watson
  is act 2; a job gated by anything from The Heist / Playing for Time onwards is act 2. The one
  exception is The Prophet's Song, which the wiki says "can be started during Act 1" (full job after
  Playing for Time); it is act 1, as in the brief's example. Regina's Watson gigs are act 1 per
  `faq-world-progression.md` (all 23 doable before The Heist, offered in 8 sets). PL jobs are `pl`.
  Act `3` is unused: nothing here is gated behind the Nocturne Op55N1 point of no return, and the
  guide numbers Tapeworm as 2.16, so Tapeworm-gated jobs (Chippin' In) are act 2.
- **`prereq`.** Short English text written from the infobox `previous_quest` and the
  walkthrough's unlock notes (lifepath locks, Street Cred, missable windows, update that added it).
  For gigs it is the fixer's set number: "Regina's Watson set 3 of 8: finish set 2 first".
- **Order.** By part (jobs, minor, gigs), then act, then district (Watson, Westbrook, City Center,
  Heywood, Santo Domingo, Pacifica, Badlands, Various), then sub-district. Chains stay together:
  each job sorts under the first job of its chain (Zen Master: Imagine → Stairway To Heaven →
  Poem Of The Atoms → Meetings Along The Edge; Brendan; Joshua; Claire's races; Motorbreath →
  Where Eagles Dare; Beat on the Brat fights). Fixer completion rewards (Last Call, Gas Gas Gas…)
  sort last in their district. Gigs sort by act, district, fixer set, sub-district.
- **`id`.** Kebab-case of `title_en`, ASCII, apostrophes dropped; gigs get `gig-`. Checked
  against `src/content/games/cp2077/en/chapters/` (no clash) and unique across the manifest.
  `wiki` is the page title with underscores (`Gig:_Hippocratic_Oath`, `Sex_On_Wheels`); it is
  `null` only for You Tell Me (no page yet).
- **`title_es`.** Only titles marked **high** in `glossary-es-mx.md` (STEAM-MX official strings
  or ≥3 LatAm sources): Fool on the Hill = *La Luna*, Run This Town = *Para no ver el final*, and,
  among covered jobs, Chippin' In, Mi buen amor, Un alma en pena, Fría como el viento, Luché contra
  la ley, Cazador, La tormenta de arena, Reina de la autopista. Everything else is `null`. The
  Spain-side wiki was not used. The Steam LatAm achievements page now serves a script-rendered
  page whose HTML has no achievement strings, so nothing new could be read from it; the
  glossary's earlier extraction of it is the source.

## 3. Exclusions

| what | count | reason |
|---|---|---|
| Main jobs (category *Cyberpunk 2077 Main Jobs*) | 63 | Already covered by the main-story and PL chapters. Includes the ending sub-jobs and the *Phantom Liberty* tracker quest. |
| Cyberpsycho Sightings | 17 | In the enemies wiki, not pages here. Counted from *Cyberpunk 2077 Minor Activities*. Their tracker job, **Psycho Killer**, *is* in the manifest (minor, act 1). |
| NCPD Scanner Hustles | 62 pages | In the enemies wiki. The *Minor Activities* category holds Reported Crime 27, Suspected Organized Crime Activity 17, Assault in Progress 15, Increased Criminal Activity 3. The category is incomplete (only 15 of the many Assault in Progress events have pages), so 62 is a floor, not the in-game total. |
| Welcome Home: Corpo Plaza / Japantown / Northside / The Glen | 4 | Apartment rentals on the EZEstates netpage (Patch 1.5). A purchase, no job content. |
| Houses In Motion: Makeovers | 1 | Opens and completes the moment you open the EZEstates makeover page. |
| Upgrade U | 1 | Legacy: Viktor's call only fires on saves made before Patch 2.0. In a new game the cyberware tutorial is part of The Ripperdoc. |
| Epistrophy district sub-pages | 7 | Not excluded but covered: listed with `covered_by: side-delamain`. |

## 4. Sources

- Category listings: `https://cyberpunk.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Cyberpunk_2077_Side_Jobs&cmlimit=500&format=json` (same for `_Minor_Jobs`, `_Gigs`, `_Main_Jobs`, `_Minor_Activities`, `_Quests`; `allcategories` with prefixes "Cyberpunk 2077" and "Phantom" found no separate PL job category).
- List pages: `Cyberpunk_2077_Side_Jobs` (redirect target of `Cyberpunk_2077_Side_Quests`), `Cyberpunk_2077_Minor_Jobs`, `Cyberpunk_2077_Gigs`, `Phantom_Liberty`.
- Update pages: `Update_2.5` (Clampdown, Welcome to Paradise, the Minor Arcana extension of Fool on the Hill), `Patch_2.3` (Motorbreath, Where Eagles Dare, Freedom, Nitro (Youth Energy)), `Patch_2.2`, `Patch_2.31`, `Cyberpunk_2077_Tarot_Cards` (names the 2.5 quest *You Tell Me*).
- Job pages: `action=query&prop=revisions&rvprop=content&rvslots=main&redirects=1&titles=A|B|…` (50 per call) for every title above.
- Fixer pages for gig sets: `Regina_Jones`, `Wakako_Okada`, `Sebastian_Ibarra`, `Dino_Dinovic`, `Muamar_Reyes`, `Dakota_Smith`, `Mr._Hands` (→ `Wade_Bleecker`; gives when each Dogtown set unlocks). Location check: `Grand_Imperial_Mall` (Coastview).
- Repo: `docs/research/cp2077/faq-world-progression.md` (Act 1 availability of Regina's gigs, Psycho Killer timing, 2.5 notes), `glossary-es-mx.md` (es-MX titles), chapter front matter and lead paragraphs of `side-*.md` and the PL chapters.

## 5. Open questions

1. **You Tell Me** (Update 2.5, Misty, BaseID `mq033_tarot_minor`) has no wiki page yet. The
   Tarot Cards page says its 12 Minor Arcana cards (Queen, Knight, Page) are "related to V's
   romances". Act 2 is a guess; check where the cards are and whether a romance must be active.
2. **Career Opportunities** is marked act 1 because the infobox puts it in Little China with no
   prerequisite. Not confirmed: where the Trauma Drama arcade cabinets are in Act 1, and whether
   MedCenter can be reached before The Heist.
3. **Full Disclosure**: the infobox lists Double Life (plus Flight of the Cheetah / Shark in the
   Water) as previous quests, but the walkthrough says it fires once Gig: Last Login is active,
   which can happen in Act 1. Marked act 2 to be safe.
4. **Rogue's four gigs** (Family Heirloom, Hot Merchandise, Nasty Hangover, The Union Strikes
   Back): the wiki gives only the gig prerequisites. Unverified whether Rogue must have been met
   (Ghost Town) first.
5. **The Gun, The Gift, The Gig** are summarised in the "What unlocks" sections of `the-rescue.md`
   and `the-ripperdoc.md` but have no walkthrough, so they are not marked covered. They are tiny;
   decide whether they get pages or stay as notes.
6. **Sub-job granularity.** Beat on the Brat (root + 5 district fights), The Beast in Me (root + 4
   races) and The Distance (4 races in one job) are separate journal entries and separate manifest
   rows. The writer may prefer one page per chain.
7. **Lifepath-only jobs**: Small Man, Big Mouth (Streetkid), War Pigs (Corpo), These Boots Are
   Made for Walkin' (Nomad). The manifest notes the lock in `prereq` only.
8. **Giver conflicts**: Dazed and Confused (infobox Mr. Hands, list page Shank; manifest uses
   Shank, who hands you the job on site); They Won't Go When I Go (list page Joshua, infobox
   Rachel Casich; manifest uses Rachel). Machine Gun is filed under Kabuki (Regina, where it ends)
   although Skippy is picked up in Vista del Rey.
9. **es-MX titles left `null`** although the glossary has a medium or unverified candidate:
   Sinnerman *El pecador*, The Gift *El regalo*, Psycho Killer *Loco un poco* (medium-high),
   Burning Desire / Night Moves *Night Moves*; covered ones too (Heroes *El rey* vs *Héroes*,
   Rebel! Rebel! *Soy rebelde*, I Don't Wanna Hear It *Revolution Rock*, With a Little Help from My
   Friends *Son mis amigos*). No gig title has a verified es-MX name.
10. **Hustle total.** The wiki category undercounts NCPD Scanner Hustles; if the index needs the
    in-game number, take it from the enemies wiki or another source.
