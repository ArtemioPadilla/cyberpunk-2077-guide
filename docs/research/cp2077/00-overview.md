# Cyberpunk 2077: Ultimate Edition (Switch 2), research notes 00: overview

Researched 2026-10-29 against game version **2.5 "Edgerunners 2 Update"**. Notes are in English; the guide is bilingual es/en.
Markers: **(UNVERIFIED)** means a single weak source, a search snippet only, or my inference. **(CONFLICT: A vs B)** means sources disagree; the preferred reading comes first when there is one.
Wiki citations use the short form `[FW: Page]` = `https://cyberpunk.fandom.com/wiki/Page`. I read every wiki page as wikitext through `api.php?action=parse&prop=wikitext` (DPL list pages were also rendered with `prop=text`).

---

## Sources actually read

### Cyberpunk Fandom wiki (through the API)

- Update_2.5 · Patch_2.31 · Patch_2.3 · Patch_2.21 · Patch_2.2 · Patch_2.13 · Patch_2.12 · Patch_2.1 · Patch_2.0 · Cyberpunk_2077/Patches · Category:Cyberpunk_2077_Patches (member list)
- "Nintendo_Switch_2" and "Cyberpunk_2077:_Ultimate_Edition" → **the API returned `missingtitle`; these pages do not exist on the wiki.** The edition and platform facts come from the "Cyberpunk_2077" and "Phantom_Liberty" infoboxes.
- Cyberpunk_2077 · Phantom_Liberty · Phantom_Liberty_(quest) · Dog_Eat_Dog · Clampdown · Welcome_to_Paradise · Tomorrow_Never_Knows · Fool_on_the_Hill
- Cyberpunk_2077_Main_Jobs · Cyberpunk_2077_Side_Jobs · Cyberpunk_2077_Minor_Jobs · Cyberpunk_2077_Gigs · Cyberpunk_2077_Minor_Activities · Cyberpunk_2077_Endings · Cyberpunk:_Phantom_Liberty_Endings · Nocturne_Op55N1
- Lifepath · Nomad_(Lifepath) · Streetkid_(Lifepath) · Corpo_(Lifepath) · Cyberpunk_2077_Character_Customization
- Cyberpunk_2077_Attributes · Body · Relic_(attribute) · Cyberpunk_2077_Skills · Cyberpunk_2077_Stats · Cyberware_Capacity_Shard · Edgerunner_(perk) · Perk_Shard · Cyberpunk_2077_Cyberware · Cyberpunk_2077_Weapons · Cyberpunk_2077_Iconics · Cyberpunk_2077_Vehicles · Cyberpunk_2077_Apartments · Wardrobe · Street_Cred · Night_City_Police_Department · Cyberpunk_2077_Fast_Travel_Dataterms · Airdrops · Cyberpunk_2077_Romance · Cyberpunk_2077_Tarot_Cards
- Cyberpunk_2077/Achievements · Phantom_Liberty/Achievements (both rendered)
- Quest pages read for missable notes: Gun_Music, I'll_Fly_Away, Love_Rollercoaster, Riders_on_the_Storm, Heroes, Losing_My_Religion, Happy_Together, The_Hunt, Rebel!_Rebel!, Pisces, Ex-Factor, Talkin'_'bout_a_Revolution, Chippin'_In_(quest), Search_and_Destroy, Gig:_Psychofan, The_Heist, Queen_of_the_Highway, Following_the_River, Pyramid_Song, Boat_Drinks, Off_the_Leash_(quest), Holdin'_On, Firestarter, Killing_in_the_Name, Sweet_Dreams, Run_This_Town, The_Killing_Moon, Somewhat_Damaged, Play_It_Safe, Gimme_Danger, Down_on_the_Street, Double_Life, Transmission. ("You_Tell_Me" → `missingtitle`.)
- Category member lists, `list=categorymembers` (ns 0): Cyberpunk_2077_Side_Jobs, _Minor_Jobs, _Gigs, _Main_Jobs, _Minor_Activities, _Achievements, _Phantom_Liberty_achievements, _Apartments, _Fixers, _Radio_Stations. Sizes for all "Cyberpunk 2077 …" categories came from `list=allcategories&acprop=size`.

### Official (cyberpunk.net)

- https://www.cyberpunk.net/en/news/51566/cyberpunk-2077-ultimate-edition-is-out-on-nintendo-switch-2
- https://www.cyberpunk.net/en/news/52120/check-out-whats-coming-to-night-city-in-the-edgerunners-2-update-for-cyberpunk-2077
- https://cyberpunk.net/en/news/48766/whats-coming-in-update-2-0-revamped-police

### Press and guide sites

- https://nintendolife.com/news/2025/04/cyberpunk-2077-switch-2-cross-progression-confirmed-performance-and-resolution-detailed
- https://nintendolife.com/reviews/nintendo-switch-2/cyberpunk-2077-ultimate-edition
- https://gamingtrend.com/reviews/cyberpunk-2077-ultimate-edition-for-nintendo-switch-2-review-night-city-on-the-go/
- https://www.nintenderos.com/2025/04/cyberpunk-2077-ultimate-edition-confirma-cross-progression-y-mas-detalles-tecnicos-en-nintendo-switch-2/ (Spanish-language source; useful for es terminology)
- https://press-start.com.au/news/nintendo/2025/05/31/the-physical-nintendo-switch-2-version-of-cyberpunk-2077-has-some-extra-goodies/amp/
- https://otakukart.com/cyberpunk-2077-update-2-5-brings-cross-platform-mod-support-to-nintendo-switch-2/
- https://www.powerpyx.com/cyberpunk-2077-all-gigs-list-walkthroughs/ (dated 2023-09-26)
- https://www.powerpyx.com/cyberpunk-2077-trophy-guide-roadmap/ (written for 1.x; partly outdated after 2.0, and only the first ~100k characters were read)
- https://game8.co/games/Cyberpunk-2077 (hub page, links only) · https://game8.co/games/Cyberpunk-2077/archives/311652 (Side Quests) · https://game8.co/games/Cyberpunk-2077/archives/393104 (Phantom Liberty)
- https://nightlygamingbinge.com/complete-guide-for-all-cyberpunk-phantom-liberty-side-jobs/

### Tried but failed (not used)

- finalweapon.net (2.5 on Switch 2) → HTTP 403 · progameguides.com (difficulty) → HTTP 403. **IGN wiki was not reached.** I did not try Wikipedia.

### Seen only as search-result snippets (not opened; any fact from these is marked UNVERIFIED)

- thesixthaxis.com Switch 2 review, cgmagonline.com review, gizmodo.com review, gematsu.com (2.3 for Switch 2), ovicio.com.br, shacknews.com (Switch 2 has no achievement system), gamesradar/gfinity (NG+), gamerevolution (quicksave), Steam community threads (timed quests), sirusgaming (gig count), gameriv, gamerguides (NCPD hustles), trueachievements.

---

## 1. Editions and versions

### 1.1 Ultimate Edition

- **Contents:** base game plus the _Phantom Liberty_ (PL) expansion in one package [FW: Cyberpunk 2077] [cyberpunk.net 51566]. First released 2023-12-05 alongside Update 2.1 [FW: Cyberpunk 2077] [FW: Patch 2.1].
- On Switch 2, the base game and PL both released **2025-06-05** [FW: Cyberpunk 2077 and FW: Phantom Liberty infoboxes] [cyberpunk.net 51566 dated 2025-06-05]. The game is developed in-house by CDPR [nintenderos].
- Base game original release: 2020-12-10. PL: 2023-09-26 [FW: Cyberpunk 2077] [FW: Phantom Liberty].
- PL is not available on PS4 or Xbox One [game8 393104]. This does not matter on Switch 2.

### 1.2 Switch 2 version specifics

| Topic                      | Finding                                                                                                                                                                                                                                                                                                                                                                           | Source                                                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Media                      | Physical **64 GB game card** holds the full game **plus PL, with no download required**. Also sold digitally on the eShop.                                                                                                                                                                                                                                                        | cyberpunk.net 51566; nintendolife preview; press-start; nintenderos                                                                   |
| Digital size               | 59.4 GB, PL included                                                                                                                                                                                                                                                                                                                                                              | gamingtrend (UNVERIFIED: one source; patches since 2025 will have changed it)                                                         |
| Language packs             | Extra language packs download from the eShop                                                                                                                                                                                                                                                                                                                                      | (UNVERIFIED: snippet of a German cyberpunk.net page only)                                                                             |
| Box extras                 | Stickers and a message from the dev team                                                                                                                                                                                                                                                                                                                                          | press-start                                                                                                                           |
| Launch price               | $69.99 / €69.99                                                                                                                                                                                                                                                                                                                                                                   | nintendolife preview                                                                                                                  |
| Graphics modes             | **Quality: 30 fps target. Performance: 40 fps target.** Both modes are available handheld. **Docked Performance requires a 120 Hz TV/monitor.** In handheld, the reviewer called 40 fps on the VRR screen "magical".                                                                                                                                                              | nintendolife review                                                                                                                   |
| Resolution target          | 1080p docked / 720p handheld, 30–40 fps depending on mode                                                                                                                                                                                                                                                                                                                         | nintendolife preview; nintenderos. (CONFLICT, minor: gamingtrend describes docked as "1080p … 30 fps locked". Probably Quality mode.) |
| DLSS / VRR                 | DLSS mentioned; VRR handheld only                                                                                                                                                                                                                                                                                                                                                 | (UNVERIFIED: thesixthaxis and cgmagonline snippets only)                                                                              |
| Controls                   | Joy-Con **motion controls** for combat, **gyro aiming**, **mouse controls** (Joy-Con 2 mouse mode), **touch screen** for menus, choosing skills and the Breach Protocol hacking minigame                                                                                                                                                                                          | cyberpunk.net 51566; nintenderos                                                                                                      |
| Gyro options               | Sensitivity, activation condition (for example only while aiming down sights), movement dampening                                                                                                                                                                                                                                                                                 | nintendolife review                                                                                                                   |
| "Motion Patterns"          | Gesture system (reload, use health items, gestures). **Only with two detached Joy-Con 2 (no grip), held Wii Remote/Nunchuk-style.** Introduced in the T-Bug tutorial.                                                                                                                                                                                                             | nintendolife review                                                                                                                   |
| Mouse caveat               | Reviewers reported the Y button not always reloading in mouse mode, and that mouse and gyro cannot be swapped seamlessly mid-game                                                                                                                                                                                                                                                 | nintendolife review; (UNVERIFIED: gizmodo snippet)                                                                                    |
| Cross-progression          | "Fully cross-progression compatible" with other platforms through a **CD PROJEKT RED account**                                                                                                                                                                                                                                                                                    | nintendolife preview; nintenderos; nintendolife review                                                                                |
| Visual cuts vs Series X    | Sparser crowds, weaker character shadows, muddy textures in places. Stutter when streaming while driving, and hitches and geometry glitches in Dogtown.                                                                                                                                                                                                                           | nintendolife review; gamingtrend                                                                                                      |
| Load times                 | About 39 s cold boot, about 30 s to load a save, 10 s or more per fast travel                                                                                                                                                                                                                                                                                                     | gamingtrend (UNVERIFIED: one reviewer, launch build)                                                                                  |
| Mod support (2.5)          | **(CONFLICT: cyberpunk.net 52120 lists Switch 2 among mod.io platforms ("PC, Mac, PS5, PS5 Pro, Xbox Series X\|S, and Nintendo Switch 2"), and otakukart agrees, vs FW: Update 2.5, which lists only PC/Mac/PS5/Xbox.)** Prefer the official page. **Resolved 2026-10-30:** CDPR support page 3034 ("Cross-Platform Mod Support - how to", Switch 2 section) also covers Switch 2, so mods are available there [faq-switch2-settings-names.md]. Linking a CDPR account is required [otakukart]. Modded saves cannot earn achievements or trophies on console [FW: Update 2.5]. |                                                                                                                                       |
| FOV slider (2.5)           | "Added an FOV slider on consoles". Switch 2 is not named explicitly.                                                                                                                                                                                                                                                                                                              | FW: Update 2.5; cyberpunk.net 52120 (UNVERIFIED for Switch 2)                                                                         |
| Achievements               | Nintendo has no system-wide achievement system. **I could not confirm whether CP2077 on Switch 2 has an in-game achievement list** (UNVERIFIED). For the guide, treat the 45+13 achievements as "challenges" in an offline checklist.                                                                                                                                             | (shacknews snippet)                                                                                                                   |
| Ray tracing / path tracing | Not mentioned by any Switch 2 source I read. Assume absent (UNVERIFIED).                                                                                                                                                                                                                                                                                                          |                                                                                                                                       |

**Switch 2 patch history**

- 2.5 on Switch 2: **(CONFLICT: 2026-10-26 per the FW: Update 2.5 infobox vs 2026-10-27 per the same page's body text and the finalweapon URL date.)** CDPR only said "in the days to follow" after the 2026-10-22 release on other platforms [cyberpunk.net 52120].
- 2.5 includes the Switch 2 fix "Save failed – insufficient space" [FW: Update 2.5].
- 2.3 on Switch 2: **(CONFLICT: the Gematsu headline says Switch 2 would get it "later" vs Ovicio saying it came the same day, 2025-07-17. Both are snippets only.)**
- Build number at launch (June 2025) and whether 2.31 shipped on Switch 2: (UNVERIFIED, not found).
- In-game version strings: check the console. I found no Switch 2-specific numbering.

### 1.3 Patch timeline that matters to a player today

Patch list per the category: … 2.0, 2.01, 2.02, 2.1, 2.11, 2.12, 2.13, 2.2, 2.21, 2.3, 2.31, 2.5 [FW: Category:Cyberpunk 2077 Patches]. **There is no 2.4.** 2.5 is the 23rd patch [FW: Update 2.5].

**Update 2.0 (2023-09-21), the systems overhaul** [FW: Patch 2.0]

- **Police:** a new NCPD system with on-foot and vehicle chases. The units sent depend on the Wanted level, up to roadblocks and MaxTac AVs. NCPD officers can be quickhacked.
- **Vehicle combat:** shoot pistols and SMGs or use health items while driving (first or third person). Some vehicles have mounted weapons. Melee on motorcycles. Tires can be shot. New vehicle perks.
- **Perk trees overhauled** (fewer, more impactful perks). Perks are refunded individually for free. The old skills merged into 5: Headhunter, Netrunner, Shinobi, Solo and Engineer (max level 60).
- **Cyberware:** armor now comes primarily from cyberware. Clothing is mostly cosmetic and has no mod slots. Cyberware Capacity replaces the old limits. Cyberware is upgraded at ripperdocs.
- **Netrunning:** Overclock mode (spend Health when RAM runs out), quickhack queueing, and **Breach Protocol can no longer be used on enemies**.
- Health items and grenades now use **recharging charges**. Stamina only drains in combat.
- **Rarity → Tiers 1–5++.** Only iconic weapons and cyberware can be upgraded. Crafting uses one component type. Weapon mods cannot be replaced once installed.
- **Everything scales to player level** (NPCs and loot). Enemy difficulty no longer depends on the district.
- **AUTOFIXER** netpage and terminals replace fixer car-sale texts. Street Cred unlocks more cars.
- Wardrobe is also accessible at clothing vendors. Three new radio stations (89.7 Growl FM, 99.9 Impulse, 107.5 Dark Star). The Trauma Drama arcade game. Tattoos can be changed at ripperdocs.
- "Rebalanced game difficulty to increase the challenge at higher difficulties."

**Update 2.1 (2023-12-05)** [FW: Patch 2.1]

- **NCART metro: 5 lines, 19 stations.** It works after V gets the text from NCART and can be used as fast travel or ridden in real time.
- **Radioport** (radio on foot). **Repeatable car races** after _The Beast in Me_. **Romance hangouts** in apartments ("I Really Want to Stay at Your House"). Better boss fights (Adam Smasher uses a Sandevistan).
- Gang car chases after aggressive gigs. A new highway. Motorbike tricks. Sightseeing binoculars.
- A new **Accessibility tab**: Difficulty moved there, larger fonts, Breach timer can be disabled, HUD options.

**Update 2.2 (2024-12-10)** [FW: Patch 2.2]: CrystalCoat for more brands, plus **TWINTONE** (scan a car and save its paint scheme). Ten new AUTOFIXER cars (two require PL). **Johnny sometimes rides in the passenger seat** after Act 1. A Photo Mode overhaul (free drone camera, NPC spawning, lights). On consoles, screenshots are 16:9 only. More than 100 new character-customization options.

**Update 2.3 (2025-07-17)** [FW: Patch 2.3]

- **4 new vehicles with side jobs.** Yaiba Semimaru from _Motorbreath_ (needs _The Hunt_ plus _The Beast in Me_), with a CrystalCoat follow-up in _Where Eagles Dare_. Rayfield Caliburn "Mordred" from _Freedom_. Yaiba Muramasa from _Nitro (Youth Energy)_. Chevillon Aquila on AUTOFIXER.
- **AutoDrive**: hold **Left Stick** on consoles. The cinematic camera is **D-Pad Right**.
- **Delamain cabs on demand** after _Don't Lose Your Mind_.
- Cracked CrystalCoat for cheaper cars. Photo Mode adds 27 NPCs and time/weather controls. A toggle for aim-down-sights. **Tutorial replay** in Settings → Controls.
- Missed Cyberware Capacity Shards can drop again. **You can tell passenger Johnny to go away.**

**Patch 2.31 (2025-09-11)** [FW: Patch 2.31]: AutoDrive improvements (no stopping at lights). Motorbreath fixes: the quest won't trigger if River died in _The Hunt_, and the Semimaru can still be bought on AUTOFIXER if _The Hunt_ failed. A vignette toggle. 2.31.1 (2026-04-08) is PS5 Pro only.

**Update 2.5 "Edgerunners 2 Update" (PC/PS5/Xbox 2026-10-22; Switch 2 27 Oct)** [FW: Update 2.5] [cyberpunk.net 52120] (Switch 2 date resolved 2026-10-30: 27 Oct per CDPR's official YouTube post, RPG Site and the wiki body; the wiki infobox's 26 Oct is probably a time-zone difference [faq-switch2-settings-names.md].)

- **New side quest _Clampdown_.** The Update 2.5 page says it unlocks after _The Heist_ plus **two gigs for Wakako**, then a message arrives from her. (CONFLICT, minor: FW: Clampdown says "after starting Act 2" plus two Wakako gigs.) It is set before _Cyberpunk: Edgerunners 2_. Giver: Wakako Okada. Location: BuryGer (Arroyo, Santo Domingo), then **Night City Prison**. Rewards: 1,200 XP, 2,500 Street Cred, €$5,000–14,000, _Coronation_ and _Disjunctor_ (rendered in the infobox as `{{R|I|…}}`, which is probably the iconic-quality marker (UNVERIFIED)), and the **5-piece King gear set** (King's glasses, coat, bulletproof vest and pants, plus ICON America Dust Devil boots). **It is timed:** taking more than 24 h to enter the prison fails it, and declining King twice fails it [FW: Clampdown].
- A new radio station, **HKGN 102.0 FM** (Edgerunners tracks).
- **Double Trouble** perk (Cool tree) plus 4 auxiliary perks (Keep 'Em Comin', Triple Tequila, Splash of Love, Two Right Hands). It allows **dual-wielding Power pistols and revolvers**.
- **Glamdocs**: 5 vendors (spray-paint map icon) that sell cyberware skins for Mantis Blades, Gorilla Arms, Monowire and the Projectile Launch System.
- New clothing sets (MaxiWear, Jinguji, NetWatch, IconAmerica, NUS Infiltrator, and one more coming "later"). Former NPC-only hairstyles for V. Trading-card frames and dual-wield poses in Photo Mode.
- **New side quest _Welcome to Paradise_**, a tour narrated by Richard Night. It unlocks after _The Heist_ plus **Street Cred 15** [FW: Update 2.5]. (FW: Welcome to Paradise says "after starting Act 2 and 15 Street Cred", which is effectively the same.)
- **12 new Minor Arcana tarot cards** with a separate Major/Minor Arcana menu. They come with a new quest that is "an extension of Fool on the Hill" and activates on scanning any new card, with a special reward for collecting all of them [FW: Update 2.5]. (CONFLICT, naming: FW: Tarot Cards links these 12 cards (the Queen, Knight and Page of each suit) to a quest called "You Tell Me" tied to V's romances, but that page does not exist yet.)
- Quality of life: **saves are grouped by playthrough** in Load Game. Item filters in apartment and vehicle stashes. Modded saves are flagged. An FOV slider on consoles.
- **mod.io cross-platform mods** (platform conflict above). **Updated 2026-10-30:** CDPR's official 2.5 notes (cyberpunk.net 52120, checked in the raw HTML) and the CDPR support page "Cross-Platform Mod Support - how to" (issue 3034, Switch 2 section, updated 2026-10-28) both list **Nintendo Switch 2**. The wiki's copy of the notes omits it, and RPG Site's 27 Oct platform list does too. Treat mods as **available on Switch 2** per CDPR; they need a CD PROJEKT RED account linked to mod.io and disable achievements on modded console saves [faq-switch2-settings-names.md, faq-world-progression.md].
- **New Game+ is not in 2.5.** The patch notes do not mention it [FW: Update 2.5]. Search-result snippets say NG+ was considered for 2.0 but never shipped (UNVERIFIED: gamesradar/gfinity snippets). Treat it as **no NG+**.

---

## 2. Game structure (guide skeleton)

### 2.1 Character creation

- Difficulty first: **Easy / Normal / Hard / Very Hard**, which **can be changed at any time** in the Gameplay menu [FW: Character Customization]. Since 2.1 it sits in the Accessibility tab [FW: Patch 2.1]. A **"skip ahead to Phantom Liberty"** start is offered when PL is installed [FW: Character Customization]. It auto-completes the prologue and all main jobs through _Transmission_, and the Delamain side jobs through _Don't Lose Your Mind_ [FW: Dog Eat Dog].
- Attributes start at **3 each plus 7 free points** (maximum 6 during creation, 20 afterwards). Each level gives **+1 Attribute point and +1 Perk point**. **Level cap: 50 in the base game, 60 with PL** [FW: Character Customization] [FW: Phantom Liberty] [game8 393104]. The Ultimate Edition therefore caps at 60.

### 2.2 Lifepaths [FW: Lifepath and the three lifepath pages] [FW: Main Jobs]

| Lifepath  | Prologue job    | Start location                                   | Unique side job                    | Starting weapon |
| --------- | --------------- | ------------------------------------------------ | ---------------------------------- | --------------- |
| Nomad     | _The Nomad_     | Badlands (Yucca, Dry Creek, the border crossing) | _These Boots Are Made for Walkin'_ | DR5 Nova        |
| Streetkid | _The Streetkid_ | El Coyote Cojo, Embers (Heywood)                 | _Small Man, Big Mouth_ (Kirk)      | Unity           |
| Corpo     | _The Corpo-Rat_ | Arasaka Tower, Lizzie's Bar                      | _War Pigs_                         | Unity           |

- All three prologues introduce Jackie Welles, then converge on Act 1. Lifepaths also add **lifepath-specific dialogue options throughout the game** (the achievement _Stanislavski's Method_ asks for 10 of them) [FW: Lifepath] [FW: Achievements].
- The Corpo lifepath can talk its way through _Gimme Danger_ [FW: Gimme Danger]. A Nomad V gets extra dialogue in _Clampdown_ [FW: Clampdown]. These are examples only.

### 2.3 Acts [FW: Cyberpunk 2077 Main Jobs]

- **Prologue** (2076): one of the 3 lifepath jobs.
- **Act 1**: _Practice Makes Perfect_ (optional VR tutorial) → _The Rescue_ → _The Ripperdoc_ → _The Ride_ → _The Pickup_ → _The Information_ → _The Heist_. **Exploration is limited to Watson during Act 1.**
- **Interlude**: _Love Like Fire_ (played as Johnny in 2023).
- **Act 2**: _Playing for Time_, then three branches that can be done in any order. _Tapeworm_ runs alongside them and is triggered automatically. **All of Night City and the Badlands open up.**
  - Anders Hellman: _Ghost Town_ → _Lightning Breaks_ → _Life During Wartime_
  - Evelyn Parker: _Automatic Love_ → _The Space in Between_ → _Disasterpiece_ → _Double Life_
  - Alt Cunningham / Voodoo Boys: _M'ap Tann Pèlen_ → _I Walk the Line_ → _Transmission_ (includes the flashback _Never Fade Away_)
  - Goro Takemura: _Down on the Street_ → _Gimme Danger_ → _Play It Safe_ → _Search and Destroy_
  - After all paths are done, _Tapeworm_ completes and **Act 3 starts automatically**.
- **Act 3**: _Nocturne Op55N1_. V meets Hanako at Embers, then picks an ending route.
- **Main-job count:** the wiki list page has 66 rows, including _Changes_ listed 3×. Category:Cyberpunk 2077 Main Jobs has 63 article pages. That covers base plus PL main jobs and every ending branch. A single playthrough sees far fewer.

### 2.4 Point of no return (PONR)

- **Approaching the main entrance of Embers in _Nocturne Op55N1_** shows a point-of-no-return message, and **free roam ends** [FW: Nocturne Op55N1].
- After any ending, **ending rewards are added to your last save before Nocturne Op55N1** (Legendary Gorilla Arms, Militech Berserk, tarot cards, some shards) [FW: Endings → Rewards]. Post-credits, the game offers **"Sure, Just One More Gig"** to return to free roam before the finale [PowerPyx trophy guide].
- **Can you continue after the ending?** Only through that pre-PONR save. There is no post-ending free roam (inferred from the above; UNVERIFIED as an explicit statement).
- **New Game+: none** (see 1.3).

### 2.5 Phantom Liberty

- **When it can start:** after _Transmission_ (the Voodoo Boys/Alt chain). The tracker quest "Phantom Liberty" lists The Heist, Playing for Time, the Evelyn chain (Automatic Love → Double Life), M'ap Tann Pèlen, I Walk the Line, and Transmission/Never Fade Away. Songbird then calls, starting _Dog Eat Dog_ [FW: Phantom Liberty (quest)] [FW: Dog Eat Dog] [FW: Main Jobs]. Recommended level: (UNVERIFIED, not found). Enemies scale to level anyway since 2.0 [FW: Patch 2.0].
- **Dogtown**: a walled sub-district of Pacifica ruled by Kurt Hansen and **BARGHEST**, also home to the Voodoo Boys [FW: Phantom Liberty] [game8 393104].
- **PL main jobs** [FW: Main Jobs]: _Phantom Liberty_ (tracker) → _Dog Eat Dog_ → _Hole in the Sky_ → _Spider and the Fly_ → _Lucretia My Reflection_ → _The Damned_ → _Get It Together_ → _You Know My Name_ → _Birds with Broken Wings_ → _I've Seen That Face Before_ → _Firestarter_. The **branch choice** in _Firestarter_ leads to:
  - **Reed's path**: _Black Steel in the Hour of Chaos_ → _Somewhat Damaged_ → _Leave in Silence_ → _Four Score and Seven_ → _This Corrosion_
  - **Songbird's path**: _The Killing Moon_ → _Through Pain to Heaven_ / _Unfinished Sympathy_ → _From Her to Eternity_
- **What PL adds** [FW: Phantom Liberty] [game8 393104]:
  - **Relic skill tree** (6th attribute), unlocked in _Dog Eat Dog_. **15 Relic points:** 3 from Songbird in _Dog Eat Dog_, 3 in _Birds with Broken Wings_, and **9 from Operational Data Terminals** in Dogtown (EBM Petrochem Stadium, Brave Atlas, Elizabeth Kress St, Montezuma's Throne, Eventide Resort, Luxor High Wellness Spa, ESC Explorer, the Tunnel, George Washington St) [FW: Relic (attribute)].
  - **Airdrops**: Dogtown dynamic events that unlock at _Lucretia My Reflection_. Hack the crate (Breach Protocol) while fighting off rivals. Unique one-time "metaquest" airdrops hold shards and iconic loot **and are missable** [FW: Airdrops].
  - **Vehicle contracts** for **El Capitan (Muamar Reyes)**: repeatable deliveries tied to AUTOFIXER that reward discounts, eddies, weapons and components [game8 393104]. Achievement _Easy Come, Easy Go_: steal the Arasaka medical truck **or** deliver 10 vehicles to El Capitan [FW: PL Achievements].
  - **Increased Criminal Activity** (PL hustles): **3** of them (BARGHEST, Voodoo Boys, SCAVENGERS) [FW: Minor Activities category]. Achievement _Judgement Day_ asks for 3 of these bosses.
  - **Dogtown gigs from Mr. Hands: 9.** The map counter shows 10 because it includes the Pacifica gig "Two Wrongs Makes Us Right" [PowerPyx gigs].
  - **New ending for the base game**: _The Tower_ [FW: Endings].
  - Level cap 60, more than 100 new items, 4 King tarot cards (_Tomorrow Never Knows_), the Kress Street Hideout, and many new vehicles [FW: Phantom Liberty] [FW: Tarot Cards] [FW: Tomorrow Never Knows].

### 2.6 Endings (names only)

Base game [FW: Cyberpunk 2077 Endings]:

1. **The Devil** (Arasaka/Hanako route)
2. **The Star** (Aldecaldos/Panam)
3. **The Sun** (Rogue/Afterlife)
4. **Temperance** (Johnny keeps the body)
5. **Secret ending** (_(Don't Fear) The Reaper_, V and Johnny alone; leads to the Sun or Temperance variant)
6. **Path of Least Resistance** (suicide on Misty's rooftop; no rewards)
7. **The Tower** (PL; reached via _Who Wants to Live Forever_ → _Things Done Changed_)

Phantom Liberty story outcomes (achievement names) [FW: PL Endings] [FW: PL Achievements]: **King of Wands** (take Songbird to the stars), **King of Swords** (take Songbird home), **King of Cups** (fulfill Songbird's request), **King of Pentacles** (refuse Songbird's request).

---

## 3. Systems a beginner needs

### 3.1 Attributes, perks, skills

- **6 attributes:** Body, Reflexes, Technical Ability, Intelligence, Cool, and **Relic (PL)** [FW: Cyberpunk 2077 Attributes]. Each of the 5 classic attributes has a perk tree, and Relic has its own [FW: Relic (attribute)]. For example, Body adds +2 max Health per point and gates forced doors and intimidation dialogue [FW: Body].
- **Attribute points are permanent. Perks can be refunded individually for free** [FW: Patch 2.0]. (CONFLICT: FW: Character Customization still says perk resets cost eurodollars. That is pre-2.0 text; prefer the 2.0 notes.)
- **5 skills**, trained by use up to level 60, with passive bonuses every 5 levels and **+1 Perk point at skill levels 15 and 35** [FW: Skills] [FW: Character Customization]:
  - **Headhunter (Cool):** pistols, revolvers, snipers, throwables, stealth, takedowns
  - **Netrunner (Int):** smart weapons, monowire, quickhacks, access points
  - **Shinobi (Reflexes):** ARs, SMGs, blades, dash/dodge/vault
  - **Solo (Body):** (UNVERIFIED mapping: shotguns, LMGs/HMGs, blunt, per FW: Body)
  - **Engineer (Tech):** tech weapons, grenades
- Progression shards (2.0): Attribute, Carrying Capacity and Cyberware Capacity shards; Perk Shards [FW: Patch 2.0] [FW: Perk Shard].

### 3.2 Cyberware capacity and the Edgerunner perk ("Fury")

- Base capacity is **24 at level 1, +3 per level, 201 at level 60**. **Cyberware Capacity Shards add up to +74.** The Engineer skill at levels 10 and 30 adds +15, **Edgerunner +50**, Renaissance Punk +20, and the Chrome Compressor OS +70. The hard cap is 450 (in practice 430, or 360 without the Compressor) [FW: Stats].
- Shards in the base game add 60 in total (random drops capped per level band, plus _Psycho Killer_). PL adds 13–14 more: one **missable** shard in _Dog Eat Dog_ (stadium garage, sector 6B) and Cyberjunkie drops [FW: Cyberware Capacity Shard] [FW: Dog Eat Dog].
- **Edgerunner perk** (Technical Ability 20, requires _License to Chrome_): lets you exceed capacity by up to 50 at **−0.5% max Health per point over**. Each kill in combat has a **0.1% chance per point over capacity to trigger Fury** (+10% damage, +30% Crit Chance, +50% Crit Damage, 12 s) [FW: Edgerunner (perk)].
- Slots: Frontal Cortex 3, OS 1, Arms 1, Face 1 (a 2nd slot arrives in _Birds with Broken Wings_), Skeleton 2 (+1 with _License to Chrome_), Hands 1 (+1 with _Ambidextrous_), Nervous 3, Circulatory 3, Integumentary 3, Legs 1 [FW: Cyberware]. Cyberware tiers can be bought from levels 1/10/20/30/40 (T1–T5) and upgraded at ripperdocs with components [FW: Cyberware].
- Armor: about 1 DPS reduced per 10 Armor. The bonus caps at 1500 Armor = 50% reduction [FW: Stats].

### 3.3 Quickhacks and RAM

- Quickhacks consume RAM, and RAM regenerates. **Overclock** (Int tree) lets you pay with Health when RAM is short. Quickhacks can be queued. **Breach Protocol now works on access points, not on enemies** [FW: Patch 2.0]. On Switch 2, the Breach minigame can be played by touch [cyberpunk.net 51566]. Since 2.1 the Breach timer can be disabled [FW: Patch 2.1].

### 3.4 Weapons

- Technologies: **Power** (ricochet), **Smart** (guided, needs the Smart Link cyberware), **Tech** (charge shots that penetrate cover). Melee: **Blade**, **Blunt** (non-lethal), **Throwable** (2.0) [FW: Weapons].
- Damage types: Physical, Thermal, Electrical, Chemical [FW: Weapons].
- **Tiers: 11 qualities, T1, T1+, … T5, T5+, T5++.** Minimum levels: T2 at 9, T3 at 17, T4 at 25, T5 at 33, **T5++ at 51 (PL)**. Mod slots start at T2. Iconics can scale to T5 when bought or crafted (level 33), and to T5+ when rewarded or found in the world (level 41) [FW: Weapons].
- **Iconic weapons:** unique, usually obtainable once, with a special effect and normally no mod slots. PL "x-MOD2" iconics have 2 guaranteed mod slots [FW: Weapons]. Since 2.0 the stash wall in V's apartment displays all base-game iconics [FW: Patch 2.0].
- 2.5 adds dual-wielding Power pistols and revolvers with _Double Trouble_ [FW: Update 2.5].

### 3.5 Crafting and upgrading

- One component type per tier since 2.0. Only **iconic weapons and cyberware** can be upgraded. **To craft a weapon mod you need 2 mods of lower quality.** Vendors no longer sell quickhack or crafting components [FW: Patch 2.0].

### 3.6 Money (eddies, €$) and Street Cred

- **Street Cred** max is **50** (achievement _Legend of the Afterlife_). It unlocks gigs, AUTOFIXER cars and vendor discounts (up to 15% in total). Legendary gear becomes more common from Street Cred 40 [FW: Street Cred].
- Vendor stock scales with your level [FW: Patch 2.0].

### 3.7 Vehicles

- Buy from **AUTOFIXER** (V's computer or terminals at gas stations and repair shops; there is an Autofixer map filter). Street Cred gates the stock [FW: Patch 2.0] [FW: Vehicles].
- Owned vehicles can be summoned anywhere and have a stash. A destroyed one can be re-summoned for a fee (€$100; marked [citation needed] on the wiki, so UNVERIFIED). Stolen cars despawn. Stealing an occupied car needs Body 4–10; breaking into a parked one needs Tech 4–10 [FW: Vehicles].
- Weapon use while driving: pistols, revolvers and SMGs in any vehicle, one-handed melee on bikes. Kills with mounted weapons give limited XP and **no skill XP** [FW: Vehicles].
- **Autojock** achievement: own all **23 purchasable cars + 3 motorcycles** from the base game. PL, patch, Nomad-lifepath and quest cars do not count [FW: Vehicles].
- AutoDrive, Delamain-on-call, CrystalCoat/TWINTONE: see 1.3. **CrystalCoat repaint can lower the NCPD wanted level** ("Pro tip") [FW: Patch 2.2].

### 3.8 Apartments [FW: Cyberpunk 2077 Apartments]

| Apartment                                                                 | District             | Cost / unlock                                                                      |
| ------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------- |
| V's Apartment, Megabuilding H10                                           | Little China, Watson | Free (_The Rescue_). Has memorabilia and pets.                                     |
| Northside (Sunset Motel)                                                  | Northside, Watson    | _Welcome Home: Northside_: €$10,000, **or free by hacking the keypad with Int 20** |
| Japantown                                                                 | Westbrook            | €$30,000                                                                           |
| The Glen                                                                  | Heywood              | €$80,000                                                                           |
| Corpo Plaza                                                               | City Center          | €$110,000                                                                          |
| Partner homes (Judy, Kerry's villa, Kutcher's home/River, Aldecaldo camp) | n/a                  | Unlocked by finishing those characters' side quests [FW: Romance]                  |
| Kress Street Hideout (PL)                                                 | Dogtown              | Story                                                                              |
| V's Penthouse                                                             | Watson               | Epilogue (_Path of Glory_)                                                         |

- Amenities: **Rested** (bed: XP bonus), **Refreshed** (shower: Health regen), **Energized** (coffee: Stamina). Each lasts 60 min. Every V apartment has a stash, a wardrobe and iconic racks. Rented apartments host romance hangouts [FW: Apartments] [FW: Patch 2.1].

### 3.9 Police and heat

- **Heat shown as up to 5 stars. At 5 stars, MaxTac arrives as a mini-boss team.** Escape by leaving the scene on foot or by car **and staying out of sight**. No bribes or surrender [cyberpunk.net 48766]. More detail (at 1★ civilians are hurt, at 4★ armored units and bots appear, stars blink while police search) comes from guide snippets (UNVERIFIED).
- NCPD radio chatter plays on the radio. Shooting enemies marked as hostile does not draw police [FW: Patch 2.0] [snippets].
- PL achievement _The APB is Not Enough_: "Become Dogtown's most wanted criminal" [FW: PL Achievements].

### 3.10 Difficulty

- Easy, Normal, Hard and Very Hard, **changeable anytime** [FW: Character Customization]. 2.0 made the higher difficulties tougher [FW: Patch 2.0]. The settings mainly scale damage dealt and taken (UNVERIFIED: guide snippets). Changing difficulty reloads the last checkpoint, so save first (UNVERIFIED: snippet).

### 3.11 Saving (advice for the guide)

- Autosaves, a **single quicksave slot** (UNVERIFIED: snippet), and manual saves. Since 2.5, saves are grouped per playthrough [FW: Update 2.5].
- **Keep a manual save** at: the start of _Search and Destroy_ (Takemura's fate gates The Devil achievement), before _Chippin' In_'s final dialogue, before _Pisces_, before _Firestarter_ (PL path split), before _The Killing Moon_ / _Somewhat Damaged_, and **before entering Embers in _Nocturne Op55N1_** (the PONR) [PowerPyx trophy guide] [FW pages cited in §5].
- 2.5 fixes the Switch 2 "Save failed – insufficient space" error [FW: Update 2.5].

### 3.12 Fast travel

- **166 dataterms**, added to the map when V gets near. They are **usable only after _The Ride_** [FW: Fast Travel Dataterms]. Achievement _Frequent Flyer_ asks for all of them. NCART: 19 stations [FW: Patch 2.1]. Delamain cab on call [FW: Patch 2.3].

### 3.13 Wardrobe (transmog)

- Change appearance without changing stats. **Up to 6 outfits.** Available from _The Rescue_ at V's apartment and at any wardrobe (apartments, camps, partner homes) [FW: Wardrobe], **and through clothing vendors** [FW: Patch 2.0].
- Clothing unlocks its appearance on pickup, so you can sell the item afterwards. **Exclusions:** special outfits (except Roach Whisperer), and **clothing obtained during the epilogues does not carry back to the PONR save** [FW: Wardrobe].
- Saved outfits can be used in Photo Mode [FW: Patch 2.3].

### 3.14 Photo mode

- Free drone camera, NPC spawning (27 more NPCs in 2.3), lights, time and weather, stickers and frames (TCG frames in 2.5). Console output is 16:9 only [FW: Patch 2.2/2.3/Update 2.5].

### 3.15 Romance (requirements) [FW: Romance]

| Partner        | Requirement                          | Questline                                                                        |
| -------------- | ------------------------------------ | -------------------------------------------------------------------------------- |
| Judy Álvarez   | **Feminine body + feminine voice**   | Both Sides, Now → Ex-Factor → Talkin' 'bout a Revolution → Pisces → Pyramid Song |
| River Ward     | **Feminine body**                    | I Fought the Law → The Hunt → Following the River                                |
| Panam Palmer   | **Masculine body**                   | Riders on the Storm → With a Little Help from My Friends → Queen of the Highway  |
| Kerry Eurodyne | **Masculine body + masculine voice** | Rebel! Rebel! → I Don't Wanna Hear It → Off the Leash → Boat Drinks              |

- Lifepath and genitalia do not matter. Masculine V can romance Panam and Kerry together, and feminine V can romance Judy and River together, without consequence [FW: Romance]. Romantic encounters: Meredith Stout (_Venus in Furs_), Rogue (via Johnny). 4 joytoys [FW: Romance].

---

## 4. Content counts (for checklists)

**Warning:** wiki categories and DPL tables are **incomplete or inconsistent**. Several DPL list pages render fewer rows than the game contains. Treat each number as "per source X".

| Item                                 | Count                                                                                                                                                                                                                                                             | Source / notes                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Main jobs                            | 63 article pages (base + PL, all branches)                                                                                                                                                                                                                        | FW category. The list page shows 66 rows (_Changes_ ×3). (CONFLICT: Steamah "33" (snippet), which probably counts one path.)                                                                                                                                                                               |
| Side jobs (wiki "Side Jobs" = major) | 90 pages                                                                                                                                                                                                                                                          | FW category (ns 0)                                                                                                                                                                                                                                                                                         |
| Minor jobs (wiki "Minor Jobs")       | 51 pages                                                                                                                                                                                                                                                          | FW category (ns 0). Includes 2.3/2.5 additions (Clampdown, Welcome to Paradise, Motorbreath, Freedom, Nitro, Where Eagles Dare).                                                                                                                                                                           |
| Side quests excluding gigs/hustles   | **80**                                                                                                                                                                                                                                                            | game8 311652 (base-game list; PL possibly excluded). gameriv agrees on 80 (snippet).                                                                                                                                                                                                                       |
| PL side jobs                         | **14**                                                                                                                                                                                                                                                            | nightlygamingbinge (names listed there)                                                                                                                                                                                                                                                                    |
| Gigs, base game                      | **69 gigs + 17 Cyberpsycho Sightings = 86**                                                                                                                                                                                                                       | PowerPyx gigs (counts sightings as gigs). Per district: Watson 22, Westbrook 9, City Center 6, Heywood 11, Santo Domingo 11, Pacifica 1 (Bob; the rest are in Dogtown), Badlands 9.                                                                                                                        |
| Gigs, Dogtown (PL)                   | **9** (Mr. Hands; map says 10)                                                                                                                                                                                                                                    | PowerPyx gigs; gamerguides (snippet)                                                                                                                                                                                                                                                                       |
| Gigs per wiki                        | 81 article pages. Watson 23, Westbrook 9, Pacifica 10 (probably includes Dogtown), Santo Domingo 13, Badlands 9, Heywood 12, City Center 5                                                                                                                        | FW: Gigs (rendered) and category. **(CONFLICT: PowerPyx 69+9=78 vs wiki 81. Sirus Gaming says 94 base (snippet).)** The Watson intro text on the wiki says "23 gigs … Regina Jones".                                                                                                                       |
| Fixers                               | Regina Jones (Watson), Wakako Okada (Westbrook), Padre/Sebastian Ibarra (Heywood), Muamar "El Capitan" Reyes (Santo Domingo), Mr. Hands (Pacifica + Dogtown), Dino Dinovic (City Center), Dakota Smith (Badlands); Rogue gives a few gigs; Dexter DeShawn (Act 1) | FW: Category Fixers; FW: Gigs. (The category lists Wade Bleecker, Mikhail Akulov and Willie McCoy too; their role is UNVERIFIED.)                                                                                                                                                                          |
| Cyberpsycho Sightings                | **17**, all from Regina Jones, after starting _Psycho Killer_                                                                                                                                                                                                     | FW: Minor Activities; PowerPyx                                                                                                                                                                                                                                                                             |
| NCPD Scanner Hustles                 | **(UNVERIFIED) 156** (112 Assault in Progress, 17 Organized Crime, 27 Reported Crime), from old guides via snippet                                                                                                                                                | snippets. **The wiki DPL renders only ~171 rows including sightings, and its category holds 77 pages: incomplete.** Need a 2.x source. Five types: Assault in Progress, Reported Crime, Suspected Organized Crime Activity, Cyberpsycho Sighting, Increased Criminal Activity (PL) [FW: Minor Activities]. |
| Increased Criminal Activity (PL)     | 3                                                                                                                                                                                                                                                                 | FW category                                                                                                                                                                                                                                                                                                |
| Tarot graffiti                       | **Base: 22 Major Arcana** (20 for _Fool on the Hill_; Judgement and The Devil come from ending quests). **2.5: +12 Minor Arcana** (Queen/Knight/Page of each suit). **PL: 4 Kings** (_Tomorrow Never Knows_). The wiki says "34 in CP2077 + 4 in PL".             | FW: Tarot Cards; FW: Update 2.5; PowerPyx (20 for _The Wandering Fool_)                                                                                                                                                                                                                                    |
| Iconic weapons                       | 115 pages in the category (base + PL, incl. GOG/Twitch bonus items)                                                                                                                                                                                               | FW Category: Cyberpunk 2077 Iconic weapons. game8/IGN not checked (UNVERIFIED).                                                                                                                                                                                                                            |
| Legendary cyberware                  | Not counted (UNVERIFIED). Tiers T1–T5 replace "legendary".                                                                                                                                                                                                        | n/a                                                                                                                                                                                                                                                                                                        |
| Vehicles                             | Wiki categories: Cars 109, Motorcycles 19, Heavy 19, Trucks 6 (these include NPC-only variants). Autojock set: 23 cars + 3 bikes.                                                                                                                                 | FW categories; FW: Vehicles                                                                                                                                                                                                                                                                                |
| Apartments                           | 5 rentable or owned V apartments, plus partner homes, the PL hideout and the epilogue penthouse (wiki category: 11)                                                                                                                                               | FW: Apartments                                                                                                                                                                                                                                                                                             |
| Fast travel dataterms                | 166                                                                                                                                                                                                                                                               | FW: Fast Travel Dataterms                                                                                                                                                                                                                                                                                  |
| Relic data terminals                 | 9 (Relic points 15 in total)                                                                                                                                                                                                                                      | FW: Relic (attribute)                                                                                                                                                                                                                                                                                      |
| Radio stations                       | 16 (incl. 102.0 HKGN and the BARGHEST broadcast)                                                                                                                                                                                                                  | FW category                                                                                                                                                                                                                                                                                                |
| Shards                               | Wiki category sizes: Article 70, Note 87, Leaflet 45, World 43, Cyberpsycho 35, Literature 27, Technology 23, People of NC 15, Religion 14, Encrypted 10, Poetry 7, "Other" 921 (UNRELIABLE for a checklist)                                                      | FW allcategories                                                                                                                                                                                                                                                                                           |
| Achievements                         | **Base 45** (1 Platinum, 1 Gold, 17 Silver, 26 Bronze) **+ PL 13** = 58                                                                                                                                                                                           | FW: Achievements / PL Achievements (rendered); PowerPyx counts 45 for the base game                                                                                                                                                                                                                        |
| Endings                              | 7 base endings incl. Tower and secret; 4 PL outcomes                                                                                                                                                                                                              | §2.6                                                                                                                                                                                                                                                                                                       |

**Achievements list (for the "challenges" checklist).** Base: Autojock, Breathtaking (all Johnny's items), Bushido and Chill, Christmas Tree Attack, City Lights, Daemon in the Shell, Frequent Flyer, Full Body Conversion, Greetings from Pacifica!, Gun Fu, Gunslinger, I Am the Law, It's Elementary, Judy vs Night City, Legend of the Afterlife, Life of the Road, Little Tokyo, Master Crafter (craft 3 Legendary items), Mean Streets, Must Be Rats, Never Fade Away (platinum), Right Back at Ya, Rough Landing, Stanislavski's Method, Temperance, Ten out of Ten (max level in any skill), The Devil, The Fool, The Hermit, The High Priestess, The Jungle, The Lovers, The Quick and the Dead, The Star, The Sun, The Wandering Fool, The Wasteland, The Wheel of Fortune, The World, To Bad Decisions!, To Protect and Serve, True Soldier, True Warrior, Two Heads One Bullet, V for Vendetta. PL: All the President's Men, Arachnophobia, Dirty Deeds (every Dogtown gig), Easy Come Easy Go, Judgement Day, King of Cups, King of Pentacles, King of Swords, King of Wands, Relic Ruler, Spin Doctor (_Run This Town_), The APB is Not Enough, The Tower [FW].

- The district achievements (Watson, Westbrook, Heywood, Santo Domingo, Pacifica, City Center, Badlands) require **all gigs AND all NCPD hustles** there. Some only spawn by day or by night [PowerPyx gigs/trophy guide].

---

## 5. Missables (where they happen)

**Story locks**

- **PONR: Embers, in _Nocturne Op55N1_.** All open-world content must be done before it (or after it, via the "Just One More Gig" reload) [FW: Nocturne] [PowerPyx].
- **_Search and Destroy_ (Act 2, Takemura path):** you must save Takemura. Otherwise he is absent from The Devil ending and **The Devil achievement is lost** [FW: Search and Destroy] [FW: Endings].
- **Ending availability:** **The Star** needs Panam's chain through _Queen of the Highway_. **The Sun** needs Rogue's _Blistering Love_, which depends on befriending Johnny at the end of _**Chippin' In**_. The **secret ending** needs 3 specific dialogue answers at the end of _Chippin' In_ and then **waiting about 5 minutes on Misty's rooftop** [FW: Endings] [FW: Chippin' In]. Answering "Nah, fucked that up too" without giving him a second chance sends you to _Holdin' On_ (Kerry) instead of _Blistering Love_ [FW: Chippin' In].
- **_Firestarter_ (PL):** choosing Reed or Songbird locks the other path. **Finishing Firestarter makes the side job _Balls to the Wall_ unavailable, or fails it if it is active** [FW: Firestarter] [FW: PL Endings]. _Through Pain to Heaven_ / _Who Wants to Live Forever_ leads to The Tower [FW: Endings].

**Romance and companion questlines** (each also gates an achievement)

- **Panam, _Riders on the Storm_:** starting it and then **leaving the area too long kills Saul**. The job fails, and the follow-ups, the Panam romance and **The Star ending** become unavailable [FW: Riders on the Storm]. Panam can also fail if you drive the wrong way and let 24 h pass (UNVERIFIED: PowerPyx, written for 1.x).
- **Judy:** in _**Ex-Factor**_, refusing to help Judy removes all further Judy quests [FW: Ex-Factor]. In _**Pisces**_, **siding with Maiko blocks _Pyramid Song_ and the Judy romance** [FW: Pisces].
- **River, _The Hunt_:** choosing the **wrong farm** (Poppy instead of Edgewood) locks out _Following the River_ and the romance [FW: The Hunt]. Refusing to help Joss in the kitchen also fails it (UNVERIFIED: PowerPyx 1.x).
- **Kerry, _Rebel! Rebel!_:** leaving without Kerry fails the job [FW: Rebel! Rebel!]. PowerPyx specifically says driving away from the diner at the end does this.
- Pre-2.0 trophy notes (PowerPyx): attribute-gated achievements such as _Master Crafter_ and _V for Vendetta_ may need certain attribute investments. Check the 2.x perk requirements (UNVERIFIED for 2.5).

**Timed or expiring jobs**

- **_Clampdown_ (2.5):** fails if you take **more than 24 h** to enter the prison, or if you **decline King twice** [FW: Clampdown].
- **_I'll Fly Away_ (Aldecaldos):** becomes **unavailable after Mitch's text in _Queen of the Highway_** ("the Basilisk is ready") [FW: I'll Fly Away]. _Gun Music_ temporarily disappears while _With a Little Help from My Friends_ is active [FW: Gun Music]. Both are said to expire after 24–48 h (UNVERIFIED: Steam snippet).
- **_Love Rollercoaster_ (Pacifica):** unavailable after _**Double Life**_. The rollercoaster itself can still be repaired and ridden [FW: Love Rollercoaster] [FW: Double Life].
- **_Losing My Religion_:** fails if you take too long after starting it. The Fenrir can still be recovered [FW: Losing My Religion].
- **_Happy Together_ (Barry):** uses "come back in a few hours" timers [FW: Happy Together]. Failure conditions are UNVERIFIED.
- **_Dazed and Confused_ (PL):** fails if you give Lina the wrong answer. _Go Your Own Way_ needs Hasan saved in _Prototype in the Scraper_. _Money for Nothing_ needs Katya spared in _Spy in the Jungle_ [nightlygamingbinge] (UNVERIFIED on the wiki).
- **_Run This Town_ (PL):** declining Mr. Hands' offer fails the job [FW: Run This Town].

**Missable items**

- **_Dog Eat Dog_ stadium garage caches** (Perk Shard, BARGHEST helmet, **Cyberware Capacity Shard**): they cannot be accessed after leaving the area [FW: Dog Eat Dog].
- **PL metaquest airdrops:** if skipped they despawn, and their loot is **permanently lost** [FW: Airdrops].
- **_Gig: Psychofan_ (Heywood): Johnny's pants** are missable and needed for _Breathtaking_ [FW: Gig: Psychofan] [PowerPyx].
- **Ending-route items:** Genjiroh, Amnesty, Prejudice, Caretaker's Spade, Pride, the Access Token, and the Judgement tarot (each is only on its own ending route) [FW: Endings → Rewards].
- **_Heroes_:** Jackie's **La Chingona Dorada** pistols can be looted from the ofrenda **24 h after leaving El Coyote Cojo** (an opportunity, not a lock) [FW: Heroes].
- **_Chippin' In_:** Johnny's Porsche can be obtained whether you spare or kill the target [FW: Chippin' In].
- **Epilogue clothing does not carry over** to the PONR save [FW: Wardrobe].
- **_The Heist_:** several easy-to-miss items, such as the iguana egg (UNVERIFIED: Steam snippet). Needs a walkthrough check.

**Open items for follow-up research**

- An authoritative 2.5 count of NCPD hustles per district (try gamerguides, IGN or the in-game map).
- Switch 2 build numbers, 2.3/2.31 dates, in-game achievements on Switch 2, and FOV slider availability.
- PL recommended level, the Barghest gear checklist, and the vehicle-contract count.
- An iconic weapon checklist (game8/IGN) and a legendary cyberware list.
