# Cyberpunk 2077: Ultimate Edition (Switch 2, Update 2.5), research notes: characters

Researched 2026-10-30. **118 entities.** Notes in English; the guide is bilingual es/en. Scope: everyone with a real role in the main story, Phantom Liberty, the relationship chains (Johnny/Rogue, Kerry, Panam, Judy, River, Delamain, Heroes), the fixers, the ripperdocs/vendors that matter and the named villains/bosses.

Markers: **(UNVERIFIED)** = single weak source or my inference; **(CONFLICT: A vs B)** = sources disagree; **PRE-2.0** = data that no longer applies on 2.x.
Citation short forms: `[FW: Page]` = `https://cyberpunk.fandom.com/wiki/Page`, read as wikitext through `api.php?action=parse&prop=wikitext` (images through `action=query&prop=pageimages&piprop=name`); `[ES: Page]` = `https://cyberpunk.fandom.com/es/wiki/Page` (Spanish wiki, **es-ES**, not es-MX); `[R3 §x]` = `docs/research/cp2077/main-3-act3-endings-pl.md` (endings/PL notes, which cite game8 and PowerPyx); `[J: id]` = the guide's own job page `src/content/games/cp2077/en/chapters/<id>.md`.

---

## Sources actually read

### Cyberpunk Fandom wiki (English, API only)

- Character pages (118): Adam Smasher · Albert Murphy · Alena Xenakis · Altiera Cunningham · Anders Hellman · Anthony Anderson · Anthony Gilchrist · Anthony Harris · Arthur Jenkins · Asher Peterson · Aurore Cassel · Aymeric Cassel · Bes Isis · Blue Moon · Bob Sagan · Brigitte · Bryce Mosley · Carl Robinson · Carol Emeka · Cassidy Righter · Cassius Ryder · Chang-Hoon Nam · Charles Bucks · Chester Bennett · Claire Russell · Crispin Weyland · Dakota Smith · Darius Clarke · Declan Griffin · Delamain (AI) · Denny · Dexter DeShawn · Dino Dinovic · Driss Meriana · Dum Dum · Elizabeth Peralez · Evelyn Parker · Farida Nazeri · Finn Gerstatt · Goro Takemura · Guadalupe Alejandra Welles · Hanako Arasaka · Henry · Herold Lowe · Hiromi Sato · Hutch Spindler · Jackie Welles · Jacob Long · Jago Szabó · Jasper Collins · Jefferson Peralez · Jeremiah Grayson · Johnny Silverhand · Joss Kutcher · Jotaro Shobo · Judy Álvarez · Kerry Eurodyne · Kirk Sawyer · Kurt Hansen · Leon Rinder · Lizzy Wizzy · Lucius Rhyne · Maiko Maeda · Matilda K. Rose · Meredith Stout · Misty Olszewski · Mitch Anderson · Mr. Blue Eyes · Muamar Reyes · Nash · Nibbles · Nina Kraviz (Ripperdoc) · Nix · Octavio Delgado · Oleg Darkevich · Oswald Forrest · Panam Palmer · Patricia Gerville · Pepe Najarro · Placide · Purple Force · Randy Kutcher · Red Menace · Regina Jones · River Ward · Robert Rainwater · Robert Wilson · Rogue Amendiares · Rosalind Myers · Roxanne Sumner · Ruby Collins · Saburo Arasaka · Sachiko Kusama · Sandayu Oda · Sandra Dorsett · Santiago Molina · Saul Bright · Sebastian Ibarra · Shaitan · Simon Randall · Solomon Reed · Song So Mi · Spider Murphy · Steve Sanchez · Susan Abernathy · T-Bug · Taylor Gibbs · Tom Caldera · V (character) · Viktor Vektor · Wade Bleecker · Wakako Okada · Weldon Holt · Wilky LaGuerre · Will Gunner · Yoko Tsuru · Yorinobu Arasaka · Yuri Bychkov
- Redirect checks (`action=query&redirects=1`): Royce → Simon Randall, Brick → Declan Griffin, Woodman → Oswald Forrest, Fingers → Finn Gerstatt, Sasquatch → Matilda K. Rose, Mr. Hands → Wade Bleecker, Scorpion → Driss Meriana, Nancy Hartley → Bes Isis, Peter Pan → Anthony Harris, Padre → Sebastian Ibarra, Songbird → Song So Mi, Alt Cunningham → Altiera Cunningham, Dex → Dexter DeShawn. Missing titles: Mama Welles, Kei Oda, Edgar Hilliard, Cassie, Teddy.
- Also read: Cyberpunk 2077 Romance · Cyberpunk 2077 Endings · Ripperdoc · Tom (Tom's Diner, to tell him apart from Tom Caldera) · Roxanne Colton (to tell her apart from Roxanne Sumner) · Steve Kowalski (wrong Steve; not used).
- Category member lists (`list=categorymembers`): Cyberpunk 2077 Characters (both pages, ~550), Cyberpunk 2077 Fixers, Cyberpunk 2077 Vendors, Cyberpunk 2077 Phantom Liberty images - Characters Database; `list=allcategories` for the character/fixer/vendor category names.

### Cyberpunk Wiki in Spanish (es-ES, API only)

- Pages found: Adam Smasher · Altiera Cunningham · Anthony Gilchrist · Brigitte · Bryce Mosley · Dexter DeShawn · Dino Dinovic · Dum Dum · Evelyn Parker · Goro Takemura · Hanako Arasaka · Jackie Welles · Johnny Silverhand · Judy Álvarez · Kerry Eurodyne · Lizzy Wizzy · Maiko Maeda · Meredith Stout · Misty · Oleg · Oswald Forrest · Placide · Robert Wilson · Rogue Amendiares · Royce · Saburo Arasaka · Sasquatch · Sebastián "Padre" Ibarra · Song So Mi · Susan Abernathy · T-Bug · V · Viktor Vektor · Wakako Okada · Yorinobu Arasaka · Arreglador (fixer list).
- Most characters have **no page** on the Spanish wiki (title, langlink and `list=search` checks all came back empty for Panam, River, Reed, Myers, Hansen, Alex, Mr. Hands, Delamain, etc.).

### Internal

- `docs/research/cp2077/main-3-act3-endings-pl.md` §2-3 (endings, credits calls, PL paths; game8/PowerPyx citations are theirs).
- The 58 job pages in `src/content/games/cp2077/en/chapters/` (grepped per character to build the `jobs` column).
- game8, PowerPyx and IGN were **not fetched directly** in this pass; where their claims appear they come through [R3] or the job pages.

---

## Method and column notes

- `id`: kebab-case slug, the player-facing name (`royce`, not `simon-randall`; `mr-hands`, `songbird`, `alex`, `padre`, `el-capitan`, `fingers`, `woodman`, `brick`, `sasquatch`, `scorpion`, `nancy-hartley`, `slider`).
- `name_en`: the name the game and guides use. `wiki_page`: the exact Fandom title after redirects (often the legal name).
- `name_es_mx`: **left blank for every row.** No source available here shows the Latin-American Spanish text, and the Spanish wiki is es-ES. Personal names are almost certainly not localized, but nicknames may be ("Mamá Welles" in es-ES running text). `name_es_es` gives the Spanish-wiki title where a page exists. Fill es-MX only after checking it in the game.
- `wiki_image`: `pageimages` result for `wiki_page`, with underscores turned into spaces. Blank when the page has no image (Patricia Gerville, Hiromi Sato). Several PL officers only have a "Q304 Photo" database image.
- `jobs`: guide job ids where the character shows up or is acted on, taken from a grep of the 58 job pages and then checked by hand. Passing mentions are removed, such as the romance blurbs in the prologues, toasts and "sold by Herold Lowe" fallbacks. Blank = no job page features them. Ripperdocs and side fixers are mostly vendors or gig-givers outside the job list.
- `romance`: per [FW: Cyberpunk 2077 Romance] plus the chain pages. "encounter only" = one-off scene, not a relationship that counts for the endings.
- `fate`: Devil / Star / Sun / Temperance / Reaper (secret) / Tower (PL) / Least Resistance (suicide), or the quest choice that decides it. "Dependent" = depends on player actions not covered by the guide's jobs.
- `voice_en`: FW infobox `voiced_by`. One actor often covers several roles (Alec Newman is listed for Smasher, Hellman, Jenkins, Dino, El Capitán; Noshir Dalal for Oda and Scorpion; Ako Mitchell for Nix and Bob; Martin McDougall for Mitch and Mr. Blue Eyes). These are as the wiki states.
- `voice_es_mx`: the only Spanish voice data available is the Spanish wiki's `voz` field, under a Spain flag `{{bandera|es}}`. It mixes names (some are known Mexican dubbers, others Spanish), so **the dub region is UNVERIFIED for every name**. Do not publish these as es-MX without checking.

---

## Machine-readable table

| id | group | name_en | name_es_mx | name_es_es | wiki_page | wiki_image | role | affiliation | jobs | romance | fate | voice_en | voice_es_mx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| v | core | V |  | V | V (character) | V Infobox CP2077.png | Player character: a mercenary (Valerie/Vincent) who gets the Relic biochip with Johnny's engram after Konpeki Plaza | Afterlife mercs; lifepath: Nomad (Bakkers), Streetkid or Corpo (Arasaka) | all | n/a (the romancer) | Devil: Arasaka orbital station, signs Secure Your Soul (engram) or returns to Earth with ~6 months; Star: leaves NC with the Aldecaldos; Sun: Afterlife legend, Crystal Palace gig; Temperance: V crosses into cyberspace, Johnny keeps the body; Tower: 2-year coma, Relic removed, can no longer use combat cyberware; Least Resistance: suicide | Cherami Leigh (fem.); Gavin Drea (masc.) | Beatriz Berciano (fem.); Aitor González (masc.) (es wiki, dub region UNVERIFIED) |
| johnny-silverhand | core | Johnny Silverhand |  | Johnny Silverhand | Johnny Silverhand | Johnny Silverhand Infobox CP2077PL.png | Deuteragonist: rockerboy engram living in the Relic, terrorist who nuked Arasaka Tower in 2023 | Samurai (formerly); ex-U.S. Army | love-like-fire, playing-for-time, automatic-love, double-life, transmission, search-and-destroy, tapeworm, nocturne-op55n1, ending-the-devil, ending-the-star, ending-the-sun, ending-temperance, ending-the-reaper, ending-least-resistance, side-johnny, side-kerry, lucretia-my-reflection, somewhat-damaged, who-wants-to-live-forever | no (V experiences Johnny's encounters with Alt, Rogue and Ruby through him) | Devil: engram removed from V; Star and Sun: V keeps the body and Johnny's engram leaves with Alt beyond the Blackwall (UNVERIFIED wording); Temperance: Johnny keeps V's body and leaves NC by bus; Reaper: same split as Sun/Temperance; Tower: removed with the Relic (dies) | Keanu Reeves (singing: Dennis Lyxzén) | Sergio Zamora (es wiki, dub region UNVERIFIED) |
| jackie-welles | core | Jackie Welles |  | Jackie Welles | Jackie Welles | Jackie Welles Infobox CP2077.png | Act 1 deuteragonist: V's partner and best friend; dies after Konpeki Plaza | Valentinos (formerly); Afterlife mercs | the-nomad, the-streetkid, the-corpo-rat, practice-makes-perfect, the-rescue, the-ripperdoc, the-ride, the-pickup, the-heist, side-heroes, nocturne-op55n1, unfinished-sympathy | no | Dies in The Heist (always). His body goes to Mama Welles ("take him home", full Heroes) or to Viktor (short Heroes, and he can be met as an engram on the rooftop in Changes / Totalimmortal)  | Jason Hightower | Alfredo Gabriel Basurto (es wiki, dub region UNVERIFIED) |
| dexter-deshawn | core | Dexter DeShawn |  | Dexter DeShawn | Dexter DeShawn | Char profile dexter.png | Fixer who sets up the Konpeki Plaza heist; shoots V afterwards | Fixer (independent); bodyguard Oleg Darkevich | the-ride, the-pickup, the-information, the-heist, playing-for-time | no | Dies in Playing for Time (always): Takemura shoots him at the landfill | Michael-Leon Wooley |  |
| t-bug | core | T-Bug |  | T-Bug | T-Bug | T-Bug Infobox CP2077.png | Netrunner on V and Jackie's crew in Act 1 | Freelance netrunner (Afterlife circle) | practice-makes-perfect, the-rescue, the-information, the-heist | no | Dies in The Heist (always), flatlined during the Konpeki lockdown | Cynthia Kaye McWilliams |  |
| viktor-vektor | core | Viktor Vektor |  | Viktor Vektor | Viktor Vektor | Char profile victor.png | V's ripperdoc and mentor-figure; first cyberware vendor in Watson | Viktor's Clinic (Little China, Watson); ex-boxer | the-ripperdoc, the-heist, playing-for-time, nocturne-op55n1, ending-the-devil, ending-the-star, ending-the-sun, ending-temperance, ending-the-reaper, ending-least-resistance, who-wants-to-live-forever, side-heroes | no | Alive in every ending. Credits voicemail in all (variants for Devil/Sun/Star/Temperance/death); Tower: clinic absorbed by Zetatech, he works under it (being sent to "Frisco" while it renovates) | Michael Gregory | Antonio Villar (es wiki, dub region UNVERIFIED) |
| misty-olszewski | core | Misty Olszewski |  | Misty | Misty Olszewski | Misty Olszewski Infobox CP2077.png | Esoteric shop owner, Jackie's girlfriend; tarot reader and the Nocturne rooftop host | Misty's Esoterica (Watson) | the-ripperdoc, the-heist, playing-for-time, side-heroes, nocturne-op55n1, ending-the-devil, ending-the-star, ending-the-sun, ending-temperance, ending-the-reaper, ending-least-resistance, who-wants-to-live-forever | no | Alive in all. Credits call in every ending except Tower (tarot reading per ending); Devil: Viktor says she left for Warsaw; Tower: shop bought by Zetatech, she helps V up and is moving to Poland | Erica Lindbeck |  |
| mama-welles | core | Mama Welles |  | Mamá Welles (es wiki running text) | Guadalupe Alejandra Welles | Char Profile Mama Welles.png | Jackie's mother, owner of El Coyote Cojo; gives Heroes | El Coyote Cojo (Heywood) | the-heist, playing-for-time, side-heroes | no | Alive. Credits call only if Heroes was completed (prays for V in death endings; amused by fame in Sun/Devil; horrified in Star) | Krizia Bajos |  |
| evelyn-parker | core | Evelyn Parker |  | Evelyn Parker | Evelyn Parker | Evelyn Parker Infobox CP2077.png | Doll and client of the Konpeki heist; key to the Voodoo Boys and Judy lines in Act 2 | Clouds (formerly); The Mox (formerly) | the-ride, the-information, the-heist, automatic-love, the-space-in-between, disasterpiece, double-life, side-judy | no | Dies in Double Life / start of Judy's chain (always; suicide after Woodman's abuse) | Kari Wahlgren | Laura Pastor (es wiki, dub region UNVERIFIED) |
| judy-alvarez | core | Judy Álvarez |  | Judy Álvarez | Judy Álvarez | Judy Álvarez Infobox CP2077.jpg | Braindance techie (Mox); romanceable; leads the Evelyn line with V | The Mox; Clouds (formerly) | the-information, automatic-love, the-space-in-between, disasterpiece, double-life, map-tann-pelen, side-judy, ending-the-star, ending-the-sun, ending-the-devil, ending-temperance, who-wants-to-live-forever | yes: feminine body + feminine voice. Accept the plan in Ex-Factor, side with Judy (no bribe) in Pisces, kiss in Pyramid Song, don't leave while she sleeps | Star: leaves NC with V (Carol drives her to the camp); Sun: ends it, leaves NC; Devil: leaves NC; Temperance: sorrowful voicemail; Tower: moved to Pittsburgh, married to Bianca; romance ends | Carla Tassara | Jessica Ángeles (es wiki, dub region UNVERIFIED) |
| goro-takemura | core | Goro Takemura |  | Goro Takemura | Goro Takemura | Goro Takemura Infobox CP2077.png | Saburo's bodyguard turned V's reluctant ally; drives the Hanako line of Act 2 | Arasaka (Saburo loyalist) | playing-for-time, down-on-the-street, gimme-danger, play-it-safe, search-and-destroy, life-during-wartime, nocturne-op55n1, ending-the-devil | no | Survives only if V goes back for him in Search and Destroy. Devil: alive, offers the Secure Your Soul deal; Sun/Star/Temperance: "rot in hell" call; Tower: in hiding, accused of Hanako's murder after a failed coup; if left behind: dies in Search and Destroy | Rome Kanda |  |
| hanako-arasaka | core | Hanako Arasaka |  | Hanako Arasaka | Hanako Arasaka | Hanako Arasaka Infobox CP2077.png | Saburo's daughter; Takemura's target; patron of the Devil ending | Arasaka (Kiji faction) | playing-for-time, down-on-the-street, gimme-danger, play-it-safe, search-and-destroy, nocturne-op55n1, ending-the-devil | no | Devil: alive, leads the restoration; credits call offers 6 months working for Arasaka if V refuses; Sun/Star/Temperance/Reaper: killed in Yorinobu's board purge (per Yorinobu); Tower: dies after the failed coup with Takemura | Alpha Takahashi |  |
| yorinobu-arasaka | villain | Yorinobu Arasaka |  | Yorinobu Arasaka | Yorinobu Arasaka | Yorinobu Arasaka 2077 Profile.png | Saburo's son who murders him at Konpeki Plaza; Arasaka CEO and the story's corporate antagonist | Arasaka (Taka faction); Steel Dragons (formerly) | the-information, the-heist, playing-for-time, nocturne-op55n1, ending-the-devil | no | Devil: body overwritten by Saburo's engram; Star/Sun/Temperance/Reaper: purges the board, sabotages Arasaka; Tower: ousted by the board, flees with nomads (radio) | Hideo Kimura |  |
| saburo-arasaka | core | Saburo Arasaka |  | Saburo Arasaka | Saburo Arasaka | Infobox Saburo Arasaka2077.png | Arasaka patriarch, killed by Yorinobu in The Heist; his engram is in Mikoshi | Arasaka (CEO) | the-heist, love-like-fire, play-it-safe, ending-the-devil | no | Dies in The Heist (always). Devil: his engram is put into Yorinobu's body | Masane Tsukayama |  |
| adam-smasher | villain | Adam Smasher |  | Adam Smasher | Adam Smasher | Char profile adamsmash2077.png | Arasaka head of security, full-body borg; final boss of every tower ending | Arasaka | the-heist, love-like-fire, search-and-destroy, play-it-safe, nocturne-op55n1, ending-the-devil, ending-the-star, ending-the-sun, ending-the-reaper, ending-temperance, side-johnny | no | Fought in Devil (Totalimmortal), Star (Belly of the Beast), Sun (Knockin' on Heaven's Door) and Reaper; V decides his fate after the fight (kill or spare; consequence UNVERIFIED). Kills Saul (Star) and Rogue (Sun). Not met in the Tower | Alec Newman |  |
| sandayu-oda | villain | Sandayu Oda |  |  | Sandayu Oda | Oda Sandayu Infobox CP2077.png | Hanako's cyberninja bodyguard; boss of Play It Safe | Arasaka | down-on-the-street, play-it-safe, search-and-destroy, ending-the-devil | no | Killed or spared by V after the Play It Safe fight; if spared and Takemura alive, fights for Hanako in Totalimmortal (Devil) | Noshir Dalal |  |
| anders-hellman | core | Anders Hellman |  |  | Anders Hellman | Hellman pfp.png | Relic project bioengineer; Act 2 Hellman line | Arasaka; Kang Tao (briefly) | ghost-town, lightning-breaks, life-during-wartime, nocturne-op55n1, ending-the-devil | no | Alive. Devil: escorts V to the estate; makes the final offer instead of Takemura if Takemura died. Life During Wartime choices decide whether he stays with Arasaka | Alec Newman |  |
| panam-palmer | core | Panam Palmer |  |  | Panam Palmer | Panam Palmer Infobox CP2077.png | Ex-Aldecaldo merc; romanceable; leads the Hellman line and the Star ending | Aldecaldos (Bright family) | ghost-town, lightning-breaks, life-during-wartime, side-panam, nocturne-op55n1, ending-the-star, ending-the-sun, ending-the-devil, ending-temperance, who-wants-to-live-forever | yes: masculine body (any voice). Saul must survive Riders on the Storm; side with Panam and touch her thigh; avoid "Not doing it for free"; say the Basilisk is "cozy" in Queen of the Highway; help kill Nash in Ghost Town to be safe (CONFLICT FW vs game8) | Star: with V across the border; Sun: ends it but hopeful in voicemail; Devil: leaves NC; Temperance: furious, vows to rip V out of Johnny's head; Tower: won't answer, Mitch asks V to stop calling | Emily Woo Zeller |  |
| saul-bright | core | Saul Bright |  |  | Saul Bright | Char profile Saul.png | Leader of the Aldecaldos | Aldecaldos (Bright family) | side-panam, ghost-town, nocturne-op55n1, ending-the-star | no | Can die in Riders on the Storm if V delays (chain fails). Star: crushed by Smasher in Belly of the Beast. Credits voicemail otherwise depends on Panam's chain | Diarmaid Murtagh |  |
| mitch-anderson | core | Mitch Anderson |  |  | Mitch Anderson | Mitch Anderson Infobox CP2077.png | Aldecaldo veteran, Panam and Scorpion's friend; drives the Basilisk in the Star | Aldecaldos (Bright family) | life-during-wartime, ghost-town, side-panam, ending-the-star, ending-temperance | no | Star: survives heavily wounded and crosses the border; credits call varies; Tower: asks V to stop calling Panam | Martin McDougall |  |
| carol-emeka | minor | Carol Emeka |  |  | Carol Emeka | Carol Emeka Infobox CP2077.png | Aldecaldo techie/netrunner; Star ending ally; optional netrunner in Black Steel | Aldecaldos (Bright family) | ending-the-star, black-steel-in-the-hour-of-chaos | no | Star: alive, decoy in the sandstorm; drives Judy to the camp if Judy is the called romance | Fryda Wolff |  |
| scorpion | minor | Scorpion |  |  | Driss Meriana | Driss Meriana Infobox CP2077.png | Aldecaldo veteran, Mitch's friend; dies during Panam's chain | Aldecaldos (Bright family) | life-during-wartime, ghost-town, side-panam | no | Dies in Life During Wartime (always): killed defending the crashed Kang Tao AV; Mitch later sends him off in his Thorton Galena "Gecko" over a cliff, with V's help | Noshir Dalal |  |
| bob-sagan | minor | Bob Sagan |  |  | Bob Sagan | Infobox Bob Sagan2077.png | Aldecaldo techie at the camp | Aldecaldos (Bright family) | ending-the-star | no | Star: dies in the assault on Arasaka Tower | Ako Mitchell |  |
| nash | villain | Nash |  |  | Nash | Nash Infobox CP2077.png | Wraith leader who ambushed Panam's crew; optional revenge target | Wraiths | ghost-town, side-panam | no | Killed in Ghost Town if V helps Panam; otherwise dies when he returns in Queen of the Highway |  |  |
| river-ward | core | River Ward |  |  | River Ward | River Ward Infobox CP2077.png | NCPD detective; romanceable | NCPD (formerly, dependent) | side-river, ending-the-sun, ending-the-devil, ending-the-star, who-wants-to-live-forever | yes: feminine body (any voice; CONFLICT: FW Following the River page says voice too). Pick Edgewood Farm in The Hunt, don't say "count me out", choose romance at the water tower in Following the River | Star: comes to the watchtower but stays in NC (ends); Sun: waits for V (invites to Randy's birthday); Devil: waits; Temperance: voicemail; Tower: sold NCPD intel to Trauma Team, wanted, too ashamed to see V; Poppy Farm in The Hunt: Randy dies, River jailed | Robbie Daymond |  |
| joss-kutcher | minor | Joss Kutcher |  |  | Joss Kutcher | JossKutcher Infobox CP2077.png | River's sister, single mother in the Red Peaks trailer park | — | side-river | no | Alive | Tonantzin Carmelo |  |
| randy-kutcher | minor | Randy Kutcher |  |  | Randy Kutcher | Randy guitar Picture CP2077.png | River's kidnapped nephew in The Hunt | — | side-river | no | Alive if V picks Edgewood Farm; dies if Poppy Farm. Tower: River funded Randy's treatment |  |  |
| anthony-harris | villain | Anthony Harris |  |  | Anthony Harris | Anthony Harris Infobox CP2077.png | Serial killer "Peter Pan" behind Randy's kidnapping | — | side-river | no | Alive (comatose) per FW; River kills him alone on the Poppy Farm branch (guide) |  |  |
| kerry-eurodyne | core | Kerry Eurodyne |  | Kerry Eurodyne | Kerry Eurodyne | Kerry Eurodyne Infobox CP2077.png | Ex-Samurai guitarist and rock star; romanceable | Samurai (formerly); MSM Records | love-like-fire, side-johnny, side-kerry, ending-the-sun, ending-the-devil, ending-the-star, who-wants-to-live-forever | yes: masculine body + masculine voice. Get in his car in Rebel! Rebel! (leaving him ends the chain), kiss in Off the Leash, Boat Drinks completes it | Star: comes to the watchtower but stays (ends); Sun: waits for V; Devil: waits; Temperance: voicemail; Tower: on tour at the Crystal Palace, happy to resume in a few months | Matthew Yang King (singing: Damian Ukeje) |  |
| denny | minor | Denny |  |  | Denny | Denny Infobox CP2077.png | Samurai's ex-drummer, part of the reunion in Kerry's chain | Samurai | side-kerry | no | Alive | Victoire Charles |  |
| henry | minor | Henry |  |  | Henry | Henry 2077 Infobox CP2077.png | Samurai's ex-bassist; can be picked for the reunion gig (Second Conflict) | Samurai (formerly); Blazetech (formerly) | side-kerry | no | Alive | Graham Vick |  |
| steve-sanchez | minor | Steve Sanchez |  |  | Steve Sanchez | Steve Sanchez Infobox CP2077.png | Kid from the West Wind Apartments who drives Johnny in Temperance | — | ending-temperance | no | Alive; Johnny leaves him the guitar |  |  |
| nancy-hartley | minor | Nancy Hartley |  |  | Bes Isis | Bes Isis 2077 Infobox CP2077.png | Samurai's ex-keyboardist, now N54 journalist "Bes Isis"; Kerry's reunion line-up | Network News 54; Samurai (formerly) | side-kerry | no | Alive | Kosha Engler |  |
| blue-moon | minor | Blue Moon |  |  | Blue Moon | Char Profile Blue.png | Us Cracks member; friendliest of the trio in Kerry's chain | Us Cracks | side-kerry | no (a romance was discussed post-launch but dropped for PL) | Dependent on side job Every Breath You Take | Hiromi Dames |  |
| purple-force | minor | Purple Force |  |  | Purple Force | Char Profile PurpleForce.png | Us Cracks member | Us Cracks | side-kerry | no | Alive | Stephanie Sheh |  |
| red-menace | minor | Red Menace |  |  | Red Menace | Red Menace Infobox CP2077.png | Us Cracks leader | Us Cracks | side-kerry | no | Dependent |  |  |
| rogue-amendiares | fixer | Rogue Amendiares |  | Rogue Amendiares | Rogue Amendiares | Rogue Amendiares 01 CP2077.png | Afterlife owner, Night City's top fixer; Johnny's ex; leads the Sun ending | Afterlife | ghost-town, transmission, love-like-fire, tapeworm, side-johnny, nocturne-op55n1, ending-the-sun, ending-the-reaper, ending-temperance | encounter only: Johnny romances her (Blistering Love; briefly in For Whom the Bell Tolls) | Sun: killed by Smasher at Mikoshi; Reaper (secret): alive and greets V at the Afterlife; Devil/Star: alive, message for Johnny; Temperance: furious; Tower: welcomes V, Nibbles/iguana beside her if adopted | Jane Perry |  |
| alt-cunningham | core | Alt Cunningham |  | Altiera Cunningham | Altiera Cunningham | AltCunningham Infobox CP2077.png | Legendary netrunner, Soulkiller author; now an AI beyond the Blackwall; Johnny's ex | ITS (formerly); beyond the Blackwall | love-like-fire, i-walk-the-line, transmission, ending-the-star, ending-the-sun, ending-the-reaper, ending-temperance | encounter only, via Johnny's memories (Never Fade Away) | AI in all endings. Takes control of Mikoshi in Star/Sun/Temperance/Reaper; Sun: takes Johnny (or V) beyond the Blackwall. Not involved in Devil or Tower | Alix Wilton Regan | Gema Carballedo (es wiki, dub region UNVERIFIED) |
| spider-murphy | minor | Spider Murphy |  |  | Spider Murphy | Spider Murphy 2023 Infobox CP2077.png | 2023 netrunner on Johnny's Arasaka Tower raid | — | love-like-fire | no | Alive as of 2023 | Erica Lindbeck |  |
| shaitan | minor | Shaitan |  |  | Shaitan | Shaitan 2023 Infobox CP2077.png | 2023 solo on Johnny's Arasaka Tower raid | — | love-like-fire | no | Alive (2045) | Shai Matheson |  |
| jeremiah-grayson | villain | Jeremiah Grayson |  |  | Jeremiah Grayson | JeremiahGrayson Infobox CP2077.png | Arasaka-linked Wraith boss holding Johnny's Porsche lead in Chippin' In | Arasaka; Wraiths | side-johnny | no | Killed or spared by V in Chippin' In; if spared, Ruby Collins is killed later | Stephen Oyoung |  |
| crispin-weyland | minor | Crispin Weyland |  |  | Crispin Weyland | Crispin Weyland Infobox CP2077.png | Rogue's bodyguard "Squama"; joins the Sun assault | Afterlife mercs | ending-the-sun, ending-temperance | no | Sun: can die fighting Arasaka troops (dependent) or survive to Mikoshi | Mark Ebulué |  |
| placide | villain | Placide |  | Placide | Placide | Char profile placide.png | Voodoo Boys enforcer; V's contact in the Alt line; possible boss | Voodoo Boys | map-tann-pelen, i-walk-the-line, transmission, the-damned | no | If V took Mosley's deal: mandatory fight in Transmission (killed or spared). Otherwise survives (killed only if V "settles the score") | Lovensky Jean-Baptiste |  |
| brigitte | villain | Brigitte |  | Brigitte | Brigitte | Brigitte Infobox CP2077.png | Maman Brigitte, Voodoo Boys leader and netrunner who contacts Alt | Voodoo Boys | i-walk-the-line, transmission, the-damned | no | Mosley deal: Alt flatlines the Voodoo Boys and Brigitte dies; no deal: alive (V can leave or kill her in Transmission) |  |  |
| bryce-mosley | minor | Bryce Mosley |  | Bryce Mosley | Bryce Mosley | Bryce Mosley Infobox CP2077.png | NetWatch agent who offers V a deal against the Voodoo Boys | NetWatch | i-walk-the-line, transmission | no | Dies if V follows Placide's plan; survives if V takes his deal | Shane Taylor |  |
| nix | minor | Nix |  |  | Nix | Nix cp77.png | Rogue's Afterlife netrunner; optional data source in Black Steel | Afterlife mercs; Arasaka (formerly) | black-steel-in-the-hour-of-chaos | no | Alive unless killed in his own side jobs (dependent) | Ako Mitchell |  |
| delamain | core | Delamain |  |  | Delamain (AI) | Delamain Infobox CP2077.png | Taxi AI; rescues V after the heist; his divergent cabs are a side chain | Delamain Corp | the-heist, playing-for-time, side-delamain, ending-the-sun, who-wants-to-live-forever | no | Side-chain ending: reset (memories wiped), merge (evolves and leaves) or destroy the core (successor AI). Sun: pilots the AV (if not reset); Tower: drives V to Viktor | Samuel Barnett (divergents: Ellen McLain, Zach Villa) |  |
| meredith-stout | core | Meredith Stout |  | Meredith Stout | Meredith Stout | Meredith Stout Infobox CP2077.png | Militech senior operations manager in The Pickup; romantic encounter | Militech | the-ride, the-pickup | encounter only: any body/voice. Meet her in The Pickup without insulting her; any violent outcome with Maelstrom; reply nicely to her Act 2 text → Venus in Furs | Survives if V follows her plan (she has Gilchrist killed); killed by Gilchrist if V refuses her chip or warns Royce |  |  |
| anthony-gilchrist | villain | Anthony Gilchrist |  | Anthony Gilchrist | Anthony Gilchrist | Char profile gilchrist.png | Militech mole behind the Flathead theft; end of The Pickup | Militech | the-pickup | no | Killed by Meredith if V follows her plan; otherwise kills Meredith and survives (dependent) | Akie Kotabe |  |
| royce | villain | Royce |  | Royce | Simon Randall | Royce Infobox CP2077.png | Maelstrom leader; boss of The Pickup in a Centaur exoskeleton | Maelstrom | the-pickup, the-ride | no | Killed by V (talks or exosuit fight), by Militech off-screen if V sneaks out, or survives a peaceful deal |  |  |
| dum-dum | minor | Dum Dum |  | Dum Dum | Dum Dum | Dum Dum Infobox CP2077.png | Royce's Maelstrom spokesman; recurs in Kerry's chain | Maelstrom | the-pickup, side-kerry | no | Survives or dies depending on The Pickup (columbarium niche if killed) |  |  |
| brick | minor | Brick |  |  | Declan Griffin | Char Profile brick.png | Former Maelstrom leader imprisoned in All Foods | Maelstrom (former leader) | the-pickup, side-kerry | no | Freed, killed or left in his cell in The Pickup; if freed he retakes Maelstrom |  |  |
| patricia-gerville | minor | Patricia Gerville |  |  | Patricia Gerville |  | 6th Street member; leads Maelstrom-territory events after The Pickup | 6th Street | the-pickup, side-kerry | no | Dependent |  |  |
| sasquatch | villain | Sasquatch |  | Sasquatch | Matilda K. Rose | Char Profile Sasquatch.png | Animals pack leader; boss of I Walk the Line | Animals | i-walk-the-line | no | Killed or spared after the boss fight | Krizia Bajos |  |
| woodman | villain | Woodman |  | Oswald Forrest | Oswald Forrest | Char profile woodman.png | Clouds caretaker who sold Evelyn out; Automatic Love | Clouds; Tyger Claws | automatic-love, side-judy | no | Killed or spared in Automatic Love; if alive, Judy and V kill him in Ex-Factor | Joe Corrigall |  |
| fingers | vendor | Fingers |  |  | Finn Gerstatt | Char Profile Fingers.png | Jig-Jig Street ripperdoc who sold Evelyn to the Scavengers; The Space in Between | Fingers M.D. (Japantown) | the-space-in-between, automatic-love, side-judy | no | Can be killed by V after The Space in Between (optional) | Alex Ivanovici |  |
| jotaro-shobo | villain | Jotaro Shobo |  |  | Jotaro Shobo | Char Profile Jotaro.png | Tyger Claws "Devil of Kabuki", XBD scroller; Regina's gig target (Monster Hunt) | Tyger Claws | automatic-love | no | Killed or abducted in Gig: Monster Hunt | Yoshi Ando |  |
| sandra-dorsett | minor | Sandra Dorsett |  |  | Sandra Dorsett | Sandra Dorsett Infobox CP2077.png | Night Corp netrunner rescued in The Rescue; optional Black Steel netrunner | Night Corp | the-rescue, down-on-the-street, black-steel-in-the-hour-of-chaos | no | Alive if rescued in time (Viktor/Trauma Team); Black Steel needs Full Disclosure resolved favourably |  |  |
| maiko-maeda | core | Maiko Maeda |  | Maiko Maeda | Maiko Maeda | Char Profile Maiko.png | Judy's ex, Clouds manager; the Pisces choice | Tyger Claws (dependent); Clouds | automatic-love, side-judy | no | Pisces: becomes owner of Clouds (bribe), killed, or left alive with the dolls running Clouds | Arina Ii | Blanca Hualde (es wiki, dub region UNVERIFIED) |
| tom-caldera | minor | Tom Caldera |  |  | Tom Caldera | Cyberpunk 2077 Character Tom.jpg | Clouds VIP doll who helps V find Evelyn and joins Judy's revolt | Clouds | automatic-love, side-judy | no | Killed by the Tyger Claws in retaliation if the Claws lose Clouds in Pisces | Shai Matheson |  |
| roxanne-sumner | minor | Roxanne Sumner |  |  | Roxanne Sumner | Roxanne Sumner Infobox CP2077.png | Clouds doll in Judy's revolt (Talkin' 'bout a Revolution) | Clouds | side-judy | no | Alive (flees or hides after Pisces depending on the outcome) | Alana Maria |  |
| hiromi-sato | villain | Hiromi Sato |  |  | Hiromi Sato |  | Tyger Claws manager of Clouds, target in Pisces | Tyger Claws | side-judy | no | Dies in Pisces (killed by his bosses with Tsumetogi, or in the fight) |  |  |
| claire-russell | minor | Claire Russell |  |  | Claire Russell | Claire Russell Infobox CP2077.png | Afterlife bartender and street racer | Afterlife; Militech (formerly) | the-heist, ending-the-sun | no | Alive; serves a special drink in Path of Glory (Sun) | Maddie Taylor |  |
| lizzy-wizzy | minor | Lizzy Wizzy |  | Lizzy Wizzy | Lizzy Wizzy | Char Profile lizzywizzy.png | Chrome pop star; base-game side job and PL Black Sapphire performer | Celebrity | you-know-my-name, get-it-together | no | Alive | Grimes |  |
| jefferson-peralez | core | Jefferson Peralez |  |  | Jefferson Peralez | Char profile JPeralez.png | Mayoral candidate under a mind-control conspiracy (Dream On) | Federalist Party of NC; Night City Council | side-river | no | Wins the election in every ending; whether he learns the truth (Dream On) changes his credits call | Joseph May |  |
| elizabeth-peralez | core | Elizabeth Peralez |  |  | Elizabeth Peralez | Char profile EPeralez.png | Jefferson's wife and campaign organiser; gives I Fought the Law | Federalist Party of NC | side-river | no | Alive; depends on Dream On | Kosha Engler |  |
| mr-blue-eyes | villain | Mr. Blue Eyes |  |  | Mr. Blue Eyes | Mr.BlueEyes001.png | Mysterious power broker behind the Peralez conspiracy; appears in the Sun epilogue and in PL | Undisclosed | side-river, the-killing-moon, ending-the-sun, ending-the-reaper | no | Alive; offers the Crystal Palace job in Path of Glory (Sun/Reaper) | Martin McDougall |  |
| lucius-rhyne | minor | Lucius Rhyne |  |  | Lucius Rhyne | Lucius Rhyne Infobox CP2077.png | Late mayor of Night City, murdered by braindance before the game | Night City Mayor's Office |  | no | Dead before the story (killed by a virus-spiked BD at the Red Queen's Race) | Paul Jerome |  |
| kirk-sawyer | villain | Kirk Sawyer |  |  | Kirk Sawyer | Kirk Sawyer Infobox CP2077.png | Small-time fixer who sets up the Streetkid prologue job | — | the-streetkid | no | Dependent | Derek Hagen |  |
| pepe-najarro | minor | Pepe Najarro |  |  | Pepe Najarro | Char Profile Pepe.png | El Coyote Cojo bartender; owes Kirk money (Streetkid) | El Coyote Cojo | the-streetkid, side-heroes | no | Alive | Ronan Summers |  |
| arthur-jenkins | villain | Arthur Jenkins |  |  | Arthur Jenkins | Char profile jenkins.png | V's Arasaka boss in the Corpo prologue | Arasaka Counterintelligence | the-corpo-rat | no | Deceased (FW status) | Alec Newman |  |
| susan-abernathy | villain | Susan Abernathy |  | Susan Abernathy | Susan Abernathy | SusanAbernathy Infobox CP2077.png | Arasaka Director of Special Operations; Jenkins' target | Arasaka | the-corpo-rat | no | Deceased (FW status) |  |  |
| oleg-darkevich | minor | Oleg Darkevich |  | Oleg | Oleg Darkevich | Char profile oleg.png | Dex's bodyguard | Dexter DeShawn | the-heist | no | Unknown |  |  |
| wakako-okada | fixer | Wakako Okada |  | Wakako Okada | Wakako Okada | Wakako Okada Infobox CP2077.png | Westbrook fixer (Japantown/Jig-Jig Street); paid The Rescue | Tyger Claws; Kiroshi (formerly) | the-rescue, disasterpiece, down-on-the-street, playing-for-time | no | Alive | Ren Hanami |  |
| regina-jones | fixer | Regina Jones |  |  | Regina Jones | Char Profile regina.png | Watson fixer; cyberpsycho sightings and Watson gigs | Independent (ex-WNS journalist) | the-ripperdoc, the-ride | no | Alive | Alana Maria |  |
| padre | fixer | Padre |  | Sebastián "Padre" Ibarra | Sebastian Ibarra | Sebastian Ibarra Infobox CP2077.png | Heywood fixer, ex-priest; Streetkid prologue and Heroes | Valentinos (formerly) | the-streetkid, side-heroes | no | Alive | Al Rodrigo | Rubén Moya (es wiki, dub region UNVERIFIED) |
| dino-dinovic | fixer | Dino Dinovic |  | Dino Dinovic | Dino Dinovic | Char Profile Dino.png | City Center fixer (Electric Orgasm bar); employed Reed as a bouncer | Dino's crew |  | no | Alive | Alec Newman | Eduardo Gutiérrez (es wiki, dub region UNVERIFIED) |
| el-capitan | fixer | El Capitán |  | Muamar Reyes, "el Capitán" (es wiki fixer list) | Muamar Reyes | Char Profile Reyes.png | Santo Domingo fixer | — |  | no | Alive | Alec Newman |  |
| dakota-smith | fixer | Dakota Smith |  |  | Dakota Smith | Char Profile Dakota.png | Badlands fixer ("Mad Coyote") | Aldecaldos; Pomo | ending-the-star | no | Alive; hands out weapons at the camp in the Star | Sabra May |  |
| mr-hands | fixer | Mr. Hands |  |  | Wade Bleecker | Wade Bleecker Infobox CP2077PL.png | Pacifica and Dogtown fixer; Voodoo Boys go-between and Phantom Liberty power broker | Independent (ex-Petrochem) | map-tann-pelen, the-damned, get-it-together, you-know-my-name, lucretia-my-reflection, firestarter, black-steel-in-the-hour-of-chaos, leave-in-silence | no | Alive; after Hansen dies he installs Chester Bennett (or Jago Szabó becomes colonel) via Run This Town | Alex Jordan (Sean Power before Patch 2.0: PRE-2.0) |  |
| cassius-ryder | vendor | Cassius Ryder |  |  | Cassius Ryder | Char Profile cassisus.png | Northside ripperdoc (Ryder's Clinic); does the Chippin' In tattoo | — | the-rescue, side-johnny | no | Alive |  |  |
| robert-rainwater | vendor | Robert Rainwater |  |  | Robert Rainwater | Robert Rainwater.png | Ripperdoc at Dr. Chrome, Kabuki Market | — |  | no | Alive |  |  |
| charles-bucks | vendor | Charles Bucks |  |  | Charles Bucks | Charles bucks cp77.png | Ripperdoc at Bucks' Clinic, northern Kabuki | — |  | no | Dependent (Gig: Last Login bribe) | Akie Kotabe |  |
| nina-kraviz | vendor | Nina Kraviz |  |  | Nina Kraviz (Ripperdoc) | Nina Kraviz.png | Ripperdoc at Kraviz's Clinic, Charter Hill (cameo by DJ Nina Kraviz) | — |  | no | Alive | Nina Kraviz |  |
| darius-clarke | vendor | Darius Clarke |  |  | Darius Clarke | Ripperdoc (Downtown) Infobox CP2077.png | Ripperdoc at Doc Ryder (Downtown) | — |  | no | — |  |  |
| santiago-molina | vendor | Santiago Molina |  |  | Santiago Molina | Ripperdoc Wellsprings.png | Ripperdoc at Molina's Clinic, Wellsprings | — |  | no | — |  |  |
| octavio-delgado | vendor | Octavio Delgado |  |  | Octavio Delgado | Ripperdoc RanchoCoronado.png | Ripperdoc at Octavio's Clinic, Rancho Coronado | — |  | no | Alive |  |  |
| farida-nazeri | vendor | Farida Nazeri |  |  | Farida Nazeri | Farida Nazeri Infobox CP2077PL.png | Dogtown ripperdoc (Farida's Clinic); PL story contact | Militech (formerly) | birds-with-broken-wings, ive-seen-that-face-before, firestarter | no | Alive | Shala Nyx |  |
| anthony-anderson | vendor | Anthony Anderson |  |  | Anthony Anderson | Anthony Anderson Database CP2077PL.png | Dogtown ripperdoc (Haven Clinic) | — |  | no | — |  |  |
| hutch-spindler | vendor | Hutch Spindler |  |  | Hutch Spindler | Char Profile Ripperdoc Badlands.png | Aldecaldos camp ripperdoc (Badlands) | Aldecaldos |  | no | — |  |  |
| robert-wilson | vendor | Robert Wilson |  | Robert Wilson | Robert Wilson | Char Profile Wilson.png | 2nd Amendment gunsmith in Megabuilding H10; gives The Gun | 2nd Amendment | the-ripperdoc, the-rescue | no | Alive |  |  |
| herold-lowe | vendor | Herold Lowe |  |  | Herold Lowe | Herold Lowe Infobox CP2077PL.png | Black-market weapon vendor at the EBM Petrochem Stadium, Dogtown; sells missed iconics | — | firestarter | no | Alive |  |  |
| songbird | core | Songbird |  | Song So Mi | Song So Mi | Song So Mi Infobox 02 CP2077PL.png | FIA netrunner So Mi who recruits V into Phantom Liberty; the Firestarter split | FIA (NUSA) | dog-eat-dog, hole-in-the-sky, spider-and-the-fly, lucretia-my-reflection, the-damned, get-it-together, you-know-my-name, birds-with-broken-wings, ive-seen-that-face-before, firestarter, the-killing-moon, unfinished-sympathy, through-pain-to-heaven, black-steel-in-the-hour-of-chaos, somewhat-damaged, leave-in-silence, who-wants-to-live-forever, nocturne-op55n1 | no | King of Wands: escapes to the Moon, cured, leaves V a message (Quantum Tuner); Swords: handed to Reed/NUSA (alive, no updates); Cups: V kills her at Cynosure at her request; Pentacles: spared, returned to NUSA (Myers' puppet). Tower possible after Swords/Pentacles | Minji Chang | Inés Blázquez (es wiki, dub region UNVERIFIED) |
| solomon-reed | core | Solomon Reed |  |  | Solomon Reed | Solomon Reed Infobox CP2077PL.png | FIA sleeper agent, Myers' man in Dogtown; partner on the Reed path | FIA (NUSA); ex-NUSA SpecOps | dog-eat-dog, hole-in-the-sky, spider-and-the-fly, lucretia-my-reflection, the-damned, get-it-together, you-know-my-name, birds-with-broken-wings, ive-seen-that-face-before, firestarter, the-killing-moon, through-pain-to-heaven, black-steel-in-the-hour-of-chaos, somewhat-damaged, leave-in-silence, who-wants-to-live-forever, nocturne-op55n1, unfinished-sympathy | no | Wands: killed by V at the NCX shuttle (drops Pariah); Swords: alive, offers the cure (Tower), credits doubts; Cups: alive, drifter calling from Dayton; Pentacles: alive, offers the cure, checks in. Berates V if the cure is refused |  |  |
| alex | core | Alex |  |  | Alena Xenakis | Alena Xenakis Infobox CP2077PL.png | FIA agent Alena Xenakis, Reed's partner; runs The Moth bar | FIA (NUSA) | the-damned, get-it-together, you-know-my-name, birds-with-broken-wings, ive-seen-that-face-before, firestarter, unfinished-sympathy | no | Songbird path: kills Hansen; Wands: alive, meets V in Unfinished Sympathy and leaves a Monte Carlo postcard. Reed path (Cups/Pentacles): executed by Hansen in Firestarter | Yvonne Senat Jones |  |
| kurt-hansen | villain | Kurt Hansen |  |  | Kurt Hansen | Screenshot 029 CP2077PL.jpeg | BARGHEST colonel ruling Dogtown; PL antagonist and Reed-path boss | BARGHEST; Militech (formerly) | dog-eat-dog, spider-and-the-fly, you-know-my-name, birds-with-broken-wings, firestarter | no | Dies in Firestarter on both paths: killed by Alex (Songbird path, no fight) or fought by V at the market exit (Reed path; drops Fang) | Eliah Mountjoy |  |
| rosalind-myers | core | Rosalind Myers |  |  | Rosalind Myers | Rosalind Myers Infobox CP2077.png | NUSA President; her shot-down plane starts Phantom Liberty | NUSA (Federalist Party); Militech (former CEO) | dog-eat-dog, hole-in-the-sky, spider-and-the-fly, lucretia-my-reflection, leave-in-silence, somewhat-damaged | no | Alive if V rescues her (fails the DLC if V ignores Songbird in Dog Eat Dog). Leave in Silence: thanks V with the NUSA distinction (+€$30,000) if So Mi spared, a token €$5,000 if killed. Devil: denounces Saburo's return | Kay Bess |  |
| aurore-cassel | minor | Aurore Cassel |  |  | Aurore Cassel | Aurore Cassel Infobox CP2077PL.jpg | Collective netrunner twin; a feminine V impersonates her at the Black Sapphire | The Collective (formerly); EuroBank | you-know-my-name, birds-with-broken-wings, ive-seen-that-face-before, firestarter | no | Dies (killed by Alex and Reed) | Leonie Schliesing |  |
| aymeric-cassel | minor | Aymeric Cassel |  |  | Aymeric Cassel | Aymeric Cassel Infobox CP2077PL.png | Collective netrunner twin; a masculine V impersonates him | The Collective (formerly); Petrochem (formerly) | you-know-my-name, birds-with-broken-wings, ive-seen-that-face-before, firestarter | no | Dies (killed by Alex and Reed) | André Refig |  |
| jago-szabo | villain | Jago Szabó |  |  | Jago Szabó | Jago Szabó Infobox CP2077PL.png | BARGHEST chief accountant; Dogtown succession candidate (Run This Town) | BARGHEST | birds-with-broken-wings | no | Killed by Bennett's men at Hansen's funeral unless V supports him and handles Bennett (then he becomes colonel) or forces peace |  |  |
| slider | minor | Slider |  |  | Wilky LaGuerre | Wilky "Slider" Laguerre Database CP2077PL.png | Voodoo Boys netrunner whose hideout The Damned searches | Voodoo Boys | the-damned, get-it-together, ive-seen-that-face-before | no | Dead when V arrives (his death is discussed in the trunk scene) |  |  |
| taylor-gibbs | minor | Taylor Gibbs |  |  | Taylor Gibbs | Taylor Gibbs Infobox CP2077PL.png | Squatter at the Kress Street hideout in Lucretia My Reflection | — | lucretia-my-reflection | no | Negotiate: fate ambiguous ("taken care of" per Reed); follow Myers' advice: killed by BARGHEST |  |  |
| jacob-long | minor | Jacob Long |  |  | Jacob Long | Jacob Long Infobox CP2077PL.png | Squatter at the Kress Street hideout; points out the first airdrop | — | lucretia-my-reflection | no | As Taylor Gibbs |  |  |
| yuri-bychkov | villain | Yuri Bychkov |  |  | Yuri Bychkov | Q304 Photo Yuri Bychkov CP2077PL.png | BARGHEST officer; frame target in Balls to the Wall | BARGHEST | birds-with-broken-wings | no | Killed or incapacitated if V frames him in Balls to the Wall |  |  |
| carl-robinson | villain | Carl Robinson |  |  | Carl Robinson | Q304 Photo Carl Robinson CP2077PL.png | BARGHEST officer "Dodger" | BARGHEST | birds-with-broken-wings | no | Dependent |  |  |
| leon-rinder | villain | Leon Rinder |  |  | Leon Rinder | Leon Rinder Infobox CP2077PL.png | BARGHEST soldier on the brass board | BARGHEST | birds-with-broken-wings | no | Dependent |  |  |
| albert-murphy | villain | Albert Murphy |  |  | Albert Murphy | Q304 Photo Albert Murphy CP2077PL.png | BARGHEST officer who blocks the Songbird-path escape in Firestarter | BARGHEST | birds-with-broken-wings, firestarter | no | Songbird path: fought or sneaked past (drops Murphy's Law); Reed path: unseen, fate uncertain |  |  |
| yoko-tsuru | vendor | Yoko Tsuru |  |  | Yoko Tsuru | Yoko Tsuru Infobox CP2077.png | Netrunning vendor at Kabuki Market (The Gift); Mr. Hands' netrunner option in Black Steel; This Corrosion | — | the-ride, black-steel-in-the-hour-of-chaos, leave-in-silence | no | Alive | Ren Hanami |  |
| jasper-collins | villain | Jasper Collins |  |  | Jasper Collins | Jasper Collins Infobox CP2077PL.jpg | Elite MaxTac netrunner in the Black Steel convoy fight | MaxTac | black-steel-in-the-hour-of-chaos | no | Dependent (killed in the fight) |  |  |
| will-gunner | minor | Will Gunner |  |  | Will Gunner | Will Gunner Infobox CP2077PL.png | 6th Street general allied with Reed in Black Steel | 6th Street | black-steel-in-the-hour-of-chaos | no | Alive |  |  |
| sachiko-kusama | minor | Sachiko Kusama |  |  | Sachiko Kusama | Char profile sachiko.jpg | Arasaka orbital station doctor in the Devil epilogue | Arasaka | ending-the-devil | no | Alive | Cristina Valenzuela |  |
| cassidy-righter | minor | Cassidy Righter |  |  | Cassidy Righter | Infobox Cassidy Righter2077.png | Aldecaldo marksman; gives the Amnesty revolver in the Star | Aldecaldos (Bright family) | ending-the-star | no | Star: survives, decoy in the sandstorm | Mikey O'Connor |  |
| weldon-holt | minor | Weldon Holt |  |  | Weldon Holt | Char profile mayorholt.png | Acting mayor, Peralez's rival; covered up Rhyne's death | Devolutionist Party of NC | side-river | no | Alive; loses the election | Dave B. Mitchell |  |
| nibbles | minor | Nibbles |  |  | Nibbles | Nibbles Infobox CP2077.png | Stray cat at Megabuilding H10 that V can adopt | V / Rogue (dependent) | who-wants-to-live-forever | no | Tower: appears with Rogue in her credits message if adopted |  |  |
| chester-bennett | villain | Chester Bennett |  |  | Chester Bennett | Q304 Photo Chester Bennett CP2077PL.png | BARGHEST officer, Mr. Hands' puppet candidate for Dogtown | BARGHEST | birds-with-broken-wings | no | Dependent on Run This Town (leader, or backed down) |  |  |
| chang-hoon-nam | minor | Chang-Hoon Nam |  |  | Chang-Hoon Nam | Chang-HoonNam Infobox CP2077.png | Netrunner from Gig: Wakako's Favorite; Black Steel option | Wakako Okada | black-steel-in-the-hour-of-chaos | no | Black Steel: delivers data in 12 h, then suffers aphasia and leaves NC | Josh Han |  |
| ruby-collins | minor | Ruby Collins |  |  | Ruby Collins | RubyCollins Infobox CP2077.png | Empathy club dancer Johnny seduces in Chippin' In | — | side-johnny | encounter only, as Johnny (Chippin' In) | Killed later if Grayson is spared |  |  |
| asher-peterson | villain | Asher Peterson |  |  | Asher Peterson | Asher Peterson Infobox CP2077PL.jpg | Elite MaxTac officer with Mantis Blades in Black Steel | MaxTac | black-steel-in-the-hour-of-chaos | no | Dependent (killed in the fight) |  |  |


---

## Flags: conflicts, pre-2.0 data, identity traps

- **PRE-2.0:** Mr. Hands was voiced by Sean Power before Patch 2.0; Alex Jordan now [FW: Wade Bleecker]. Adam Smasher boss guides written before 2.1 are outdated: he gained a Sandevistan and build-adaptive behaviour in 2.1 [R3 §2.8].
- **Identity traps:** Judy's chain "Tom" is **Tom Caldera** (Clouds VIP doll), not Tom of Tom's Diner [FW: Tom Caldera] [FW: Tom]. Judy's "Roxanne" is **Roxanne Sumner** (doll), not Roxanne Colton/"Roxxi" [FW]. Temperance's "Steve" is **Steve Sanchez**, not Steve Kowalski (a dead Wraith) [FW]. Samurai's keyboardist Nancy Hartley's page is **Bes Isis** [FW]. "El Capitán" and "Muamar" are the same fixer, **Muamar Reyes** [FW]; the "Capitán Caliente" in Lucretia My Reflection and Rebel! Rebel! is a restaurant. Rogue and Mr. Hands are both fixers and story characters: one row each.
- **CONFLICT, Nash's gang:** FW infobox says Wraiths; the guide's Ghost Town page calls the ambushers Raffen Shiv [FW: Nash] vs [J: ghost-town].
- **CONFLICT, Anthony Harris' fate:** FW status "Alive (comatose)" vs the guide's Poppy Farm branch "River kills Harris alone" [FW: Anthony Harris] vs [J: side-river]. Probably branch-dependent; check before writing.
- **CONFLICT, River's romance voice:** FW Romance page and game8 say feminine body, any voice; the FW Following the River page says feminine voice and body [J: side-river].
- **CONFLICT, Panam and Nash:** FW says refusing to help kill Nash in Ghost Town doesn't change Panam's story; game8 says it locks the romance. Advise helping [J: side-panam].
- **CONFLICT, Hansen boss:** melee switch at 75% (game8) vs 50% (FW) [R3 §3.4].
- **UNVERIFIED:** the exact words for Johnny's engram leaving with Alt in the Star and the Sun; what sparing Smasher does; which job holds Scorpion's cliff funeral.
- **Not found on the wiki:** Kei Oda, Edgar Hilliard, Cassie and Teddy have no page; Teddy only appears in the Star deaths list [R3 §2.9].
- **Not covered as jobs in the guide** (rows have empty `jobs`): Dino Dinovic, El Capitán, Lucius Rhyne, and the ripperdocs Rainwater, Bucks, Kraviz, Clarke, Molina, Delgado, Spindler and Anderson.

---

## Per-character notes

### Main story, Phantom Liberty and relationship chains

**V** (`v`). Player character: a mercenary (Valerie/Vincent) who gets the Relic biochip with Johnny's engram after Konpeki Plaza. Alias of Valerie (feminine) or Vincent (masculine) [FW: V (character)]. English voices Cherami Leigh (fem.) and Gavin Drea (masc.) [FW]; es wiki lists Beatriz Berciano / Aitor González under the Spain flag [ES: V]. Romance options depend on body type and voice, not lifepath [FW: Cyberpunk 2077 Romance]. Endings: [R3 §2], [FW: Cyberpunk 2077 Endings].

**Johnny Silverhand** (`johnny-silverhand`). Deuteragonist: rockerboy engram living in the Relic, terrorist who nuked Arasaka Tower in 2023. Born Robert John Linder, 16 Nov 1988; killed by Adam Smasher at Arasaka Tower on 20 Aug 2023 and his mind soulkilled [FW: Johnny Silverhand]. English voice Keanu Reeves (singing: Dennis Lyxzén); es wiki: Sergio Zamora [ES: Johnny Silverhand]. Played directly in Love Like Fire and For Whom the Bell Tolls / Knockin' on Heaven's Door [J: love-like-fire] [R3 §2.3]. Chippin' In grave answers unlock Blistering Love and the secret ending [R3 §2.5].

**Jackie Welles** (`jackie-welles`). Act 1 deuteragonist: V's partner and best friend; dies after Konpeki Plaza. Son of Mama Welles, boyfriend of Misty [FW: Jackie Welles]. English voice Jason Hightower; es wiki lists Alfredo Gabriel Basurto [ES: Jackie Welles]. The body choice in The Heist decides the Heroes ofrenda and the Jackie engram talk [J: the-heist] [R3 §2.1]. Gives the La Chingona Dorada pistols and his ARCH bike via Heroes [J: side-heroes].

**Dexter DeShawn** (`dexter-deshawn`). Fixer who sets up the Konpeki Plaza heist; shoots V afterwards. "Dex", a Night City fixer back from years off the grid [FW: Dexter DeShawn]. English voice Michael-Leon Wooley [FW]. Kills V after the heist and dumps the body in the Municipal Landfill; Takemura then kills him [FW] [J: playing-for-time]. A Corpo V can ask him for a bigger cut [J: the-corpo-rat].

**T-Bug** (`t-bug`). Netrunner on V and Jackie's crew in Act 1. Also "Bug" [FW: T-Bug]. English voice Cynthia Kaye McWilliams [FW]. Killed during the Konpeki Plaza heist after Yorinobu locks down the hotel [FW]. Can be toasted in Unfinished Sympathy [J: unfinished-sympathy].

**Viktor Vektor** (`viktor-vektor`). V's ripperdoc and mentor-figure; first cyberware vendor in Watson. "Vik", clinic behind Misty's Esoterica [FW: Viktor Vektor]. English voice Michael Gregory; es wiki: Antonio Villar [ES: Viktor Vektor]. Ripperdoc vendor from The Ripperdoc onward [J: the-ripperdoc]. Credits calls [R3 §2.10] [FW: Cyberpunk 2077 Endings].

**Misty Olszewski** (`misty-olszewski`). Esoteric shop owner, Jackie's girlfriend; tarot reader and the Nocturne rooftop host. Misty's Esoterica is on Urmland Street, Watson [FW: Misty Olszewski]. English voice Erica Lindbeck [FW]. Gives V the bullet necklace; its fate differs per ending [R3 §2.9]. Can be reconciled with Mama Welles in Heroes [FW] [J: side-heroes].

**Mama Welles** (`mama-welles`). Jackie's mother, owner of El Coyote Cojo; gives Heroes. Guadalupe Alejandra Welles [FW: Guadalupe Alejandra Welles]; es wiki calls her "Mamá Welles" in running text [ES: V]. English voice Krizia Bajos [FW]. Heroes needs Jackie's body sent home for the full ofrenda [J: side-heroes] [R3 §2.10].

**Evelyn Parker** (`evelyn-parker`). Doll and client of the Konpeki heist; key to the Voodoo Boys and Judy lines in Act 2. Ex-lover of Yorinobu Arasaka [FW: Evelyn Parker]. English voice Kari Wahlgren; es wiki: Laura Pastor [ES: Evelyn Parker]. "Evelyn always dies: no earlier choice prevents it" [J: side-judy]. Found at the Scavenger den in The Space in Between [J: the-space-in-between].

**Judy Álvarez** (`judy-alvarez`). Braindance techie (Mox); romanceable; leads the Evelyn line with V. Kabuki apartment [FW: Judy Álvarez]. English voice Carla Tassara; es wiki: Jessica Ángeles [ES: Judy Álvarez] (actor region UNVERIFIED). Requirements and endings: [FW: Cyberpunk 2077 Romance] [J: side-judy]. Pisces bribe up to €$37,200 locks the romance [J: side-judy].

**Goro Takemura** (`goro-takemura`). Saburo's bodyguard turned V's reluctant ally; drives the Hanako line of Act 2. Japanese 竹村 五郎 [FW: Goro Takemura]. English voice Rome Kanda [FW]. Saving him is needed for the Devil achievement and for Oda's support in Totalimmortal; without him Hellman makes the final offer [FW: Cyberpunk 2077 Endings] [R3 §2.1] [J: search-and-destroy].

**Hanako Arasaka** (`hanako-arasaka`). Saburo's daughter; Takemura's target; patron of the Devil ending. Self-taught netrunner, head of the Kiji faction [FW: Hanako Arasaka]. English voice Alpha Takahashi [FW]. Fates [FW: Hanako Arasaka] conditions; [R3 §2.9-2.10].

**Saburo Arasaka** (`saburo-arasaka`). Arasaka patriarch, killed by Yorinobu in The Heist; his engram is in Mikoshi. Japanese 荒坂 三郎, "the Emperor" [FW: Saburo Arasaka]. English voice Masane Tsukayama [FW]. Appears in 2023 as Johnny's interrogator in Love Like Fire [J: love-like-fire].

**Anders Hellman** (`anders-hellman`). Relic project bioengineer; Act 2 Hellman line. Creator of the Relic program [FW: Anders Hellman]. English voice Alec Newman [FW]. Captured at the Badlands gas station and interrogated at the Sunset Motel [J: life-during-wartime]. New dialogue option if Phantom Liberty is finished [J: life-during-wartime].

**Panam Palmer** (`panam-palmer`). Ex-Aldecaldo merc; romanceable; leads the Hellman line and the Star ending. Former Aldecaldo turned merc [FW: Panam Palmer]. English voice Emily Woo Zeller [FW]. Completing Queen of the Highway unlocks The Star [FW: Cyberpunk 2077 Endings] [J: side-panam]. Romance outcomes [FW: Cyberpunk 2077 Romance].

**Saul Bright** (`saul-bright`). Leader of the Aldecaldos. English voice Diarmaid Murtagh [FW: Saul Bright]. Telling him Panam's plan in With a Little Help from My Friends pays €$42,940 but ends Panam's chain [J: side-panam]. Death in the Star [FW: Adam Smasher] [R3 §2.2].

**Mitch Anderson** (`mitch-anderson`). Aldecaldo veteran, Panam and Scorpion's friend; drives the Basilisk in the Star. Unification War veteran [FW: Mitch Anderson]. English voice Martin McDougall [FW]. Credits messages [FW: Cyberpunk 2077 Endings].

**River Ward** (`river-ward`). NCPD detective; romanceable. English voice Robbie Daymond [FW: River Ward]. Chain from I Fought the Law (given by Elizabeth Peralez) [J: side-river]. Romance requirements and endings [FW: Cyberpunk 2077 Romance].

**Kerry Eurodyne** (`kerry-eurodyne`). Ex-Samurai guitarist and rock star; romanceable. English voice Matthew Yang King (singing Damian Ukeje) [FW: Kerry Eurodyne]. Chain reached through Johnny after Chippin' In [J: side-kerry]. Romance [FW: Cyberpunk 2077 Romance].

**Alt Cunningham** (`alt-cunningham`). Legendary netrunner, Soulkiller author; now an AI beyond the Blackwall; Johnny's ex. Wiki page "Altiera Cunningham" [FW]. English voice Alix Wilton Regan; es wiki: Gema Carballedo [ES: Altiera Cunningham]. Contacted through the Voodoo Boys in Transmission [J: transmission].

**Delamain** (`delamain`). Taxi AI; rescues V after the heist; his divergent cabs are a side chain. Wiki page "Delamain (AI)" [FW]. English voice Samuel Barnett (divergents: Ellen McLain, Zach Villa) [FW]. Core at the HQ in Vista del Rey, Heywood [FW]. 2.5 fixed the stuck cab in Things Done Changed [R3 §3.7].

**Meredith Stout** (`meredith-stout`). Militech senior operations manager in The Pickup; romantic encounter. [FW: Meredith Stout] (no English VA on infobox). Encounter rules [FW: Cyberpunk 2077 Romance].

**Maiko Maeda** (`maiko-maeda`). Judy's ex, Clouds manager; the Pisces choice. Japanese 前田 舞子 [FW: Maiko Maeda]. English voice Arina Ii; es wiki: Blanca Hualde [ES: Maiko Maeda]. Choices [J: side-judy].

**Jefferson Peralez** (`jefferson-peralez`). Mayoral candidate under a mind-control conspiracy (Dream On). English voice Joseph May [FW: Jefferson Peralez]. Telling or hiding the truth changes his margin and mental state [FW].

**Elizabeth Peralez** (`elizabeth-peralez`). Jefferson's wife and campaign organiser; gives I Fought the Law. English voice Kosha Engler [FW: Elizabeth Peralez]. Opens River's chain after Life During Wartime [J: side-river].

**Songbird** (`songbird`). FIA netrunner So Mi who recruits V into Phantom Liberty; the Firestarter split. Song So Mi [FW: Song So Mi]. English voice Minji Chang; es wiki: Inés Blázquez [ES: Song So Mi]. Never fought as a boss; Cerberus stands in [R3 §3.9]. Endings table [R3 §3.8].

**Solomon Reed** (`solomon-reed`). FIA sleeper agent, Myers' man in Dogtown; partner on the Reed path. English VA not on the infobox [FW: Solomon Reed]. Calling him from the Nocturne rooftop or Who Wants to Live Forever starts the Tower [FW: Cyberpunk 2077 Endings] [R3 §3.7]. Cannot be taken down non-lethally [R3 §3.5].

**Alex** (`alex`). FIA agent Alena Xenakis, Reed's partner; runs The Moth bar. Alena "Alex" Xenakis [FW: Alena Xenakis]. English voice Yvonne Senat Jones [FW]. Optional non-romantic night at The Moth in Birds with Broken Wings [J: birds-with-broken-wings].

**Rosalind Myers** (`rosalind-myers`). NUSA President; her shot-down plane starts Phantom Liberty. English voice Kay Bess [FW: Rosalind Myers]. Hawk is her iconic rifle (missable) [J: lucretia-my-reflection].


### Named villains and bosses

**Yorinobu Arasaka** (`yorinobu-arasaka`). Saburo's son who murders him at Konpeki Plaza; Arasaka CEO and the story's corporate antagonist. Japanese 荒坂 頼宣 [FW: Yorinobu Arasaka]. English voice Hideo Kimura [FW]. Not fought; dialogue confrontation in Totalimmortal [R3 §2.8].

**Adam Smasher** (`adam-smasher`). Arasaka head of security, full-body borg; final boss of every tower ending. Killed Johnny in 2023 [FW: Adam Smasher]. English voice Alec Newman [FW]. Since 2.1 he can Sandevistan and adapts to the build (pre-2.1 boss guides are outdated) [R3 §2.8]. Drops the Access Token [R3 §2.8].

**Sandayu Oda** (`sandayu-oda`). Hanako's cyberninja bodyguard; boss of Play It Safe. Japanese 小田 三太夫, uses Mantis Blades [FW: Sandayu Oda]. English voice Noshir Dalal [FW]. Drops Jinchu-Maru [R3 §2.8]. Takemura resents V if Oda is executed [FW].

**Nash** (`nash`). Wraith leader who ambushed Panam's crew; optional revenge target. FW calls him a Wraith; the guide places him with the Raffen Shiv in Ghost Town (CONFLICT, gang naming) [FW: Nash] [J: ghost-town]. Helping gives the Widow Maker; refusing gives Rogue's Archer Quartz "Bandit" [J: side-panam].

**Anthony Harris** (`anthony-harris`). Serial killer "Peter Pan" behind Randy's kidnapping. Called "Meatman" by the public [FW: Anthony Harris]. Fate wording differs: FW status "Alive (comatose)" vs guide "River kills Harris alone" on the failure branch (CONFLICT/branch-dependent) [J: side-river].

**Jeremiah Grayson** (`jeremiah-grayson`). Arasaka-linked Wraith boss holding Johnny's Porsche lead in Chippin' In. English voice Stephen Oyoung [FW: Jeremiah Grayson]. Columbarium plaque if killed [FW].

**Placide** (`placide`). Voodoo Boys enforcer; V's contact in the Alt line; possible boss. English voice Lovensky Jean-Baptiste [FW: Placide]. Plants the virus that kills Mosley if V doesn't take the deal [FW] [J: i-walk-the-line] [J: transmission].

**Brigitte** (`brigitte`). Maman Brigitte, Voodoo Boys leader and netrunner who contacts Alt. [FW: Brigitte] (no English VA on the infobox). Fates from FW conditions.

**Anthony Gilchrist** (`anthony-gilchrist`). Militech mole behind the Flathead theft; end of The Pickup. English voice Akie Kotabe [FW: Anthony Gilchrist]. A Nomad V can earn Militech gear via his "Transports - LOA" message [J: the-pickup].

**Royce** (`royce`). Maelstrom leader; boss of The Pickup in a Centaur exoskeleton. Real name Simon Randall [FW: Simon Randall]. es wiki title "Royce" [ES: Royce]. Fate conditions [FW].

**Sasquatch** (`sasquatch`). Animals pack leader; boss of I Walk the Line. Real name Matilda K. Rose [FW: Matilda K. Rose]. English voice Krizia Bajos [FW]. es wiki title "Sasquatch" [ES: Sasquatch].

**Woodman** (`woodman`). Clouds caretaker who sold Evelyn out; Automatic Love. Real name Oswald Forrest [FW: Oswald Forrest]. English voice Joe Corrigall [FW].

**Jotaro Shobo** (`jotaro-shobo`). Tyger Claws "Devil of Kabuki", XBD scroller; Regina's gig target (Monster Hunt). English voice Yoshi Ando [FW: Jotaro Shobo]. Doing Monster Hunt first lets V threaten Woodman [FW] [J: automatic-love].

**Hiromi Sato** (`hiromi-sato`). Tyger Claws manager of Clouds, target in Pisces. [FW: Hiromi Sato] (stub; no image). Drops/relates to the Tsumetogi katana [FW] [J: side-judy].

**Mr. Blue Eyes** (`mr-blue-eyes`). Mysterious power broker behind the Peralez conspiracy; appears in the Sun epilogue and in PL. English voice Martin McDougall [FW: Mr. Blue Eyes]. Seen twice in The Killing Moon [R3 §3.5]. Viktor can find nothing on him [FW: Viktor Vektor].

**Kirk Sawyer** (`kirk-sawyer`). Small-time fixer who sets up the Streetkid prologue job. English voice Derek Hagen [FW: Kirk Sawyer]. Only in the Streetkid lifepath [FW].

**Arthur Jenkins** (`arthur-jenkins`). V's Arasaka boss in the Corpo prologue. English voice Alec Newman [FW: Arthur Jenkins]. Orders the hit on Abernathy [J: the-corpo-rat].

**Susan Abernathy** (`susan-abernathy`). Arasaka Director of Special Operations; Jenkins' target. [FW: Susan Abernathy]; es wiki has a page [ES: Susan Abernathy].

**Kurt Hansen** (`kurt-hansen`). BARGHEST colonel ruling Dogtown; PL antagonist and Reed-path boss. English voice Eliah Mountjoy [FW: Kurt Hansen]. Boss: melee switch at 75% (game8) vs 50% (FW) (CONFLICT) [R3 §3.4].

**Jago Szabó** (`jago-szabo`). BARGHEST chief accountant; Dogtown succession candidate (Run This Town). [FW: Jago Szabó]. Shown on the BARGHEST board in Birds with Broken Wings [J: birds-with-broken-wings].

**Yuri Bychkov** (`yuri-bychkov`). BARGHEST officer; frame target in Balls to the Wall. [FW: Yuri Bychkov]. Balls to the Wall becomes unavailable after Firestarter [R3 §3.4].

**Carl Robinson** (`carl-robinson`). BARGHEST officer "Dodger". [FW: Carl Robinson].

**Leon Rinder** (`leon-rinder`). BARGHEST soldier on the brass board. [FW: Leon Rinder].

**Albert Murphy** (`albert-murphy`). BARGHEST officer who blocks the Songbird-path escape in Firestarter. [FW: Albert Murphy] [R3 §3.4].

**Jasper Collins** (`jasper-collins`). Elite MaxTac netrunner in the Black Steel convoy fight. [FW: Jasper Collins]. Squad: Faye Russo, Asher Peterson, Dallas Foster, Jasper Collins [R3 §3.6].

**Chester Bennett** (`chester-bennett`). BARGHEST officer, Mr. Hands' puppet candidate for Dogtown. [FW: Chester Bennett] [FW: Wade Bleecker].

**Asher Peterson** (`asher-peterson`). Elite MaxTac officer with Mantis Blades in Black Steel. [FW: Asher Peterson] [R3 §3.6].


### Fixers

**Rogue Amendiares** (`rogue-amendiares`). Afterlife owner, Night City's top fixer; Johnny's ex; leads the Sun ending. English voice Jane Perry [FW: Rogue Amendiares]. Her chain is Chippin' In and Blistering Love [J: side-johnny]. Ghost Town costs €$15,000 [J: ghost-town]. Credits [FW: Cyberpunk 2077 Endings].

**Wakako Okada** (`wakako-okada`). Westbrook fixer (Japantown/Jig-Jig Street); paid The Rescue. Japanese 岡田 和歌子 [FW: Wakako Okada]. English voice Ren Hanami [FW]. Pays €$3,380 for The Rescue and gives a Tyger Claws tattoo at Cassius Ryder's [J: the-rescue]; an XBD lead in Disasterpiece [J: disasterpiece].

**Regina Jones** (`regina-jones`). Watson fixer; cyberpsycho sightings and Watson gigs. English voice Alana Maria [FW: Regina Jones]. Calls V as V leaves the H10 apartment [J: the-ripperdoc].

**Padre** (`padre`). Heywood fixer, ex-priest; Streetkid prologue and Heroes. Sebastian Ibarra [FW: Sebastian Ibarra]; es wiki: Sebastián "Padre" Ibarra, voz es: Rubén Moya [ES]. English voice Al Rodrigo [FW].

**Dino Dinovic** (`dino-dinovic`). City Center fixer (Electric Orgasm bar); employed Reed as a bouncer. English voice Alec Newman; es wiki: Eduardo Gutiérrez [FW: Dino Dinovic] [ES: Dino Dinovic]. Reed was his bouncer (temporarily) [FW: Solomon Reed]. No guide job page features him.

**El Capitán** (`el-capitan`). Santo Domingo fixer. Muamar "El Capitán" Reyes [FW: Muamar Reyes]; es wiki fixer list: "Muamar Reyes, 'el Capitán'" [ES: Arreglador]. English voice Alec Newman [FW]. The guide's "Capitán Caliente" is a restaurant, not him.

**Dakota Smith** (`dakota-smith`). Badlands fixer ("Mad Coyote"). Garage in Rocky Ridge [FW: Dakota Smith]. English voice Sabra May [FW]. Badlands gigs (not covered as jobs in the guide).

**Mr. Hands** (`mr-hands`). Pacifica and Dogtown fixer; Voodoo Boys go-between and Phantom Liberty power broker. Real name Wade Bleecker [FW: Wade Bleecker]. English voice Alex Jordan since Patch 2.0 (Sean Power pre-2.0: PRE-2.0 DATA) [FW]. Tier 4 gigs unlock after Firestarter [R3 §3.4].


### Ripperdocs and vendors

**Fingers** (`fingers`). Jig-Jig Street ripperdoc who sold Evelyn to the Scavengers; The Space in Between. Finn "Fingers" Gerstatt [FW: Finn Gerstatt]. English voice Alex Ivanovici [FW]. Listed as a Westbrook ripperdoc [FW: Ripperdoc].

**Cassius Ryder** (`cassius-ryder`). Northside ripperdoc (Ryder's Clinic); does the Chippin' In tattoo. [FW: Cassius Ryder] [FW: Ripperdoc]. Tattoo "Johnny's Special"/"Together Forever" is cosmetic [J: side-johnny].

**Robert Rainwater** (`robert-rainwater`). Ripperdoc at Dr. Chrome, Kabuki Market. [FW: Robert Rainwater] [FW: Ripperdoc].

**Charles Bucks** (`charles-bucks`). Ripperdoc at Bucks' Clinic, northern Kabuki. English voice Akie Kotabe [FW: Charles Bucks].

**Nina Kraviz** (`nina-kraviz`). Ripperdoc at Kraviz's Clinic, Charter Hill (cameo by DJ Nina Kraviz). Wiki page "Nina Kraviz (Ripperdoc)"; voiced by Nina Kraviz [FW].

**Darius Clarke** (`darius-clarke`). Ripperdoc at Doc Ryder (Downtown). [FW: Darius Clarke] [FW: Ripperdoc].

**Santiago Molina** (`santiago-molina`). Ripperdoc at Molina's Clinic, Wellsprings. [FW: Santiago Molina] [FW: Ripperdoc].

**Octavio Delgado** (`octavio-delgado`). Ripperdoc at Octavio's Clinic, Rancho Coronado. [FW: Octavio Delgado].

**Farida Nazeri** (`farida-nazeri`). Dogtown ripperdoc (Farida's Clinic); PL story contact. Iranian-American ripperdoc [FW: Farida Nazeri]. English voice Shala Nyx [FW].

**Anthony Anderson** (`anthony-anderson`). Dogtown ripperdoc (Haven Clinic). [FW: Anthony Anderson] [FW: Ripperdoc].

**Hutch Spindler** (`hutch-spindler`). Aldecaldos camp ripperdoc (Badlands). [FW: Hutch Spindler] [FW: Ripperdoc].

**Robert Wilson** (`robert-wilson`). 2nd Amendment gunsmith in Megabuilding H10; gives The Gun. [FW: Robert Wilson]; es wiki title identical [ES: Robert Wilson]. Gives the iconic Dying Night via The Gun [J: the-rescue].

**Herold Lowe** (`herold-lowe`). Black-market weapon vendor at the EBM Petrochem Stadium, Dogtown; sells missed iconics. [FW: Herold Lowe]. The guide repeatedly names him as the fallback seller for missable iconics (e.g. Errata) [J: the-heist] [J: side-heroes].

**Yoko Tsuru** (`yoko-tsuru`). Netrunning vendor at Kabuki Market (The Gift); Mr. Hands' netrunner option in Black Steel; This Corrosion. English voice Ren Hanami [FW: Yoko Tsuru]. Black Steel: €$15,000, data in 10 h, MaxTac Mantis Blades via her proposal [R3 §3.6].


### Supporting characters

**Carol Emeka** (`carol-emeka`). Aldecaldo techie/netrunner; Star ending ally; optional netrunner in Black Steel. Nomad techie [FW: Carol Emeka]. English voice Fryda Wolff [FW]. In Black Steel she refuses the data but sends a weapon or quickhack (requirements carry a "Verify" tag on FW) [R3 §3.6].

**Scorpion** (`scorpion`). Aldecaldo veteran, Mitch's friend; dies during Panam's chain. Real name Driss Meriana [FW: Driss Meriana]. English voice Noshir Dalal [FW]. Panam lets V take Scorpion's Apollo bike after Life During Wartime [J: life-during-wartime]. Toastable at the With a Little Help campfire [J: side-panam] and in Unfinished Sympathy [J: unfinished-sympathy]. Which job holds the cliff funeral is not stated in the sources read (UNVERIFIED).

**Bob Sagan** (`bob-sagan`). Aldecaldo techie at the camp. Unification War veteran [FW: Bob Sagan]. English voice Ako Mitchell [FW]. Star deaths: Bob, Teddy, Saul [FW: Cassidy Righter] [R3 §2.9].

**Joss Kutcher** (`joss-kutcher`). River's sister, single mother in the Red Peaks trailer park. English voice Tonantzin Carmelo [FW: Joss Kutcher]. Her trailer is a clue site in The Hunt [J: side-river].

**Randy Kutcher** (`randy-kutcher`). River's kidnapped nephew in The Hunt. [FW: Randy Kutcher]. Choice: [J: side-river].

**Denny** (`denny`). Samurai's ex-drummer, part of the reunion in Kerry's chain. English voice Victoire Charles [FW: Denny]. Henry's ex [FW].

**Henry** (`henry`). Samurai's ex-bassist; can be picked for the reunion gig (Second Conflict). English voice Graham Vick [FW: Henry]. Choice to bring him to the reunion in Second Conflict [FW] [J: side-kerry].

**Steve Sanchez** (`steve-sanchez`). Kid from the West Wind Apartments who drives Johnny in Temperance. [FW: Steve Sanchez] (stub). His father Henry Sanchez attacks him (dialogue only) [J: ending-temperance]. Known 2.31 PC bug: he may drive in circles [J: ending-temperance].

**Nancy Hartley** (`nancy-hartley`). Samurai's ex-keyboardist, now N54 journalist "Bes Isis"; Kerry's reunion line-up. Wiki page is "Bes Isis" (born Nancy Hartley) [FW: Bes Isis]. English voice Kosha Engler [FW].

**Blue Moon** (`blue-moon`). Us Cracks member; friendliest of the trio in Kerry's chain. Aoi Tsuki [FW: Blue Moon]. English voice Hiromi Dames [FW]. Romance note [FW: Cyberpunk 2077 Romance §Notes].

**Purple Force** (`purple-force`). Us Cracks member. English voice Stephanie Sheh [FW: Purple Force].

**Red Menace** (`red-menace`). Us Cracks leader. Akai Kyōi [FW: Red Menace].

**Spider Murphy** (`spider-murphy`). 2023 netrunner on Johnny's Arasaka Tower raid. Arabella "Spider" Murphy [FW: Spider Murphy]. English voice Erica Lindbeck [FW].

**Shaitan** (`shaitan`). 2023 solo on Johnny's Arasaka Tower raid. English voice Shai Matheson [FW: Shaitan].

**Crispin Weyland** (`crispin-weyland`). Rogue's bodyguard "Squama"; joins the Sun assault. English voice Mark Ebulué [FW: Crispin Weyland]. "Follow Weyland" objectives [J: ending-the-sun].

**Bryce Mosley** (`bryce-mosley`). NetWatch agent who offers V a deal against the Voodoo Boys. English voice Shane Taylor [FW: Bryce Mosley].

**Nix** (`nix`). Rogue's Afterlife netrunner; optional data source in Black Steel. English voice Ako Mitchell [FW: Nix]. Needs KOLD MIRAGE + Spellbound and Nix alive; gives the Self-ICE implant [R3 §3.6].

**Dum Dum** (`dum-dum`). Royce's Maelstrom spokesman; recurs in Kerry's chain. [FW: Dum Dum]. Gives the Doom Doom iconic if alive [J: side-kerry] [J: the-pickup].

**Brick** (`brick`). Former Maelstrom leader imprisoned in All Foods. Real name Declan Griffin [FW: Declan Griffin]. Cell code 9691 [FW].

**Patricia Gerville** (`patricia-gerville`). 6th Street member; leads Maelstrom-territory events after The Pickup. [FW: Patricia Gerville] (stub; no image on the page).

**Sandra Dorsett** (`sandra-dorsett`). Night Corp netrunner rescued in The Rescue; optional Black Steel netrunner. English VA not given on infobox [FW: Sandra Dorsett]. Black Steel option: data after 8 h at Reconciliation Park, asks V to plant a trojan in MaxTac [R3 §3.6].

**Tom Caldera** (`tom-caldera`). Clouds VIP doll who helps V find Evelyn and joins Judy's revolt. English voice Shai Matheson [FW: Tom Caldera]. Not to be confused with Tom of Tom's Diner [FW: Tom].

**Roxanne Sumner** (`roxanne-sumner`). Clouds doll in Judy's revolt (Talkin' 'bout a Revolution). English voice Alana Maria [FW: Roxanne Sumner]. Not Roxanne Colton ("Roxxi"), a 2020 merc [FW: Roxanne Colton].

**Claire Russell** (`claire-russell`). Afterlife bartender and street racer. English voice Maddie Taylor [FW: Claire Russell]. Her racing chain is outside the guide's job list. Put Jackie's drink on the menu after his death [FW].

**Lizzy Wizzy** (`lizzy-wizzy`). Chrome pop star; base-game side job and PL Black Sapphire performer. Elisabeth Wissenfurth [FW: Lizzy Wizzy]. English voice Grimes [FW].

**Lucius Rhyne** (`lucius-rhyne`). Late mayor of Night City, murdered by braindance before the game. English voice Paul Jerome [FW: Lucius Rhyne]. Background to Dream On; not named in the guide's job pages.

**Pepe Najarro** (`pepe-najarro`). El Coyote Cojo bartender; owes Kirk money (Streetkid). English voice Ronan Summers [FW: Pepe Najarro].

**Oleg Darkevich** (`oleg-darkevich`). Dex's bodyguard. es wiki title "Oleg" [ES: Oleg]. [FW: Oleg Darkevich].

**Aurore Cassel** (`aurore-cassel`). Collective netrunner twin; a feminine V impersonates her at the Black Sapphire. English voice Leonie Schliesing [FW: Aurore Cassel]. Interview answers for Hansen differ by twin [R3 §3.4].

**Aymeric Cassel** (`aymeric-cassel`). Collective netrunner twin; a masculine V impersonates him. English voice André Refig [FW: Aymeric Cassel].

**Slider** (`slider`). Voodoo Boys netrunner whose hideout The Damned searches. Wilky LaGuerre [FW: Wilky LaGuerre]. Treating Symptoms gives the key to his locked room (Gris-Gris revolver) [J: get-it-together].

**Taylor Gibbs** (`taylor-gibbs`). Squatter at the Kress Street hideout in Lucretia My Reflection. [FW: Taylor Gibbs]. Save before talking to them; a deal avoids an ambush [J: lucretia-my-reflection].

**Jacob Long** (`jacob-long`). Squatter at the Kress Street hideout; points out the first airdrop. [FW: Jacob Long] [J: lucretia-my-reflection].

**Will Gunner** (`will-gunner`). 6th Street general allied with Reed in Black Steel. [FW: Will Gunner]. Remembers how V handled Stadium Love [J: black-steel-in-the-hour-of-chaos].

**Sachiko Kusama** (`sachiko-kusama`). Arasaka orbital station doctor in the Devil epilogue. English voice Cristina Valenzuela [FW: Sachiko Kusama]. Runs V's tests in Where is My Mind? [J: ending-the-devil].

**Cassidy Righter** (`cassidy-righter`). Aldecaldo marksman; gives the Amnesty revolver in the Star. English voice Mikey O'Connor [FW: Cassidy Righter]. Hit 12 of 16 bottles in 15 s for Amnesty (missable) [J: ending-the-star] [R3 §2.2].

**Weldon Holt** (`weldon-holt`). Acting mayor, Peralez's rival; covered up Rhyne's death. English voice Dave B. Mitchell [FW: Weldon Holt]. Named in Dream On [J: side-river].

**Nibbles** (`nibbles`). Stray cat at Megabuilding H10 that V can adopt. [FW: Nibbles] [FW: Cyberpunk 2077 Endings].

**Chang-Hoon Nam** (`chang-hoon-nam`). Netrunner from Gig: Wakako's Favorite; Black Steel option. English voice Josh Han [FW: Chang-Hoon Nam]. [R3 §3.6].

**Ruby Collins** (`ruby-collins`). Empathy club dancer Johnny seduces in Chippin' In. [FW: Ruby Collins] [FW: Cyberpunk 2077 Romance]. Writes "Ebunike", the clue to the Porsche [J: side-johnny].

