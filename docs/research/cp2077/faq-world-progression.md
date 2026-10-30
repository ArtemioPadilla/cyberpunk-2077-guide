# FAQ research: open world, quest flow, progression, missables, Phantom Liberty timing

Researched 2026-10-30 for Cyberpunk 2077: Ultimate Edition on Switch 2, Update 2.5 ("Edgerunners 2").

The target player is in Act 1 (Watson), at about level 5. They have just finished The Pickup and spared Brick. They play a netrunner with gyro aim and the game in es-MX.

This note builds on `main-1-prologue-act1.md` [M1], `00-overview.md` [OV], `systems-early-game-builds.md` [SYS], `main-2-act2.md` [M2] and `main-3-act3-endings-pl.md` [M3], plus `glossary-es-mx.md` [GL]. Facts that were already high-confidence there are only summarized, with their tag.

**Source tags:**

- **[W:Page]**: Cyberpunk Fandom wiki, read through `https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`. Every wiki page was read on 2026-10-30. The wiki shows no revision date, so the version is "current wiki as of 2026-10-30".
- **[CDPR 52120]**: `https://www.cyberpunk.net/en/news/52120/check-out-whats-coming-to-night-city-in-the-edgerunners-2-update-for-cyberpunk-2077`, dated 2026-10-21. The official 2.5 patch notes. The raw HTML was checked with curl.
- **[CDPR 52125]**: `https://www.cyberpunk.net/en/news/52125`, dated 2026-10-22. The launch announcement.
- **[CDPR-MX 2.5]**: `https://www.cyberpunk.net/us/es-mx/edgerunners-2-update`. The es-MX landing page for 2.5.
- **[CDPR 48766]**: `https://www.cyberpunk.net/en/news/48766`, dated 2023-08-31: "What's coming in Update 2.0: Revamped Police".
- **[STEAM-MX]**: Steam achievements for app 1091500 with `?l=latam`. Fetched with the cookie `Steam_Language=latam`; the official es-MX strings are in the page JSON.
- **[Steam #id]**: Steam Community threads at `https://steamcommunity.com/app/1091500/discussions/0/<id>/`. Post dates are given inline.

---

## Questions

### Q: Ya terminé La recolección. ¿Qué sigue? No me aparece la siguiente misión.

- **Short answer:** after The Pickup the only thing left before The Heist is The Information. You can only start it at Lizzie's Bar between 6:00 PM and 6:00 AM. Once both jobs are done, "Call Dex" starts The Heist.
- **Details:**
  - The Pickup and The Information can be done in either order. The Heist unlocks only when both are complete [W:The Pickup] (infobox `next_quest`: The Information, The Heist) [W:The Ride] [M1 §0].
  - The Pickup ends with "Call Dex", then "Talk to Dex" [W:The Pickup].
    - If The Information isn't done yet, Dex sends you to Lizzie's.
    - If it is done, he sends you to the Afterlife for The Heist [M1 §8.1].
    - If nothing new shows up, check that you made that call. Open the journal and track the job.
  - **The Information has a time window:** "Go to Lizzie's Bar between 6:00 PM and 6:00 AM" [W:The Information]. During the day the bouncers don't let the job continue. Skip time (see the next question).
  - The Information also ends with "Call Dex" → "Talk to Dex" [W:The Information].
  - IGN gives The Information a recommended level of 3, so being level 5 is fine [IGN The_Information_Walkthrough, "Recommended Level: Level 3"].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=The_Pickup&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=The_Information&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=The_Ride&prop=wikitext&format=json
  - https://www.ign.com/wikis/cyberpunk-2077/The_Information_Walkthrough (fetched 2026-10-30)
- **Confidence:** high.
- **es-MX names:** La recolección, La información, El golpe [GL]. The HUD text for "Call Dex" was not verified.

### Q: Me dice "espera la llamada" o "espera a que termine el bloqueo" y no pasa nada. ¿Cómo adelanto el tiempo?

- **Short answer:** open the in-game menu (START/+ on a controller) and use **Skip Time**, bottom left. Many "wait" steps need real or skipped in-game hours, often away from the quest area. Some can't complete in Act 1 at all.
- **Details:**
  - **How to skip time:**
    - Open the game menu. On consoles the default is START. "Skip Time" sits at the bottom left, next to the clock.
    - A dial appears. Move the blue dot to the target hour (whole hours only). The top half is 6 AM–6 PM.
    - Going all the way round skips a full day [Gfinity, 2023-10-06, written for 2.0].
  - Since 1.5 the Skip Time screen shows the predicted time [W:Patch 1.5].
  - Sleeping in a bed also skips time and gives Rested. The wiki adds that skipping "can be done in most places of the open world via the character menu" [W:Cyberpunk 2077 Apartments, note].
  - **Waits that can't finish in Act 1:**
    - The Gig (Wakako's payout for The Rescue). Its first objective is "Wait for the lockdown to end".
    - The lockdown only lifts after The Heist, once V recovers from Konpeki [W:The Gig].
    - It is normal for it to sit in the journal all of Act 1.
  - **Typical "wait for a call" steps later (Act 2):**
    - Down on the Street: about a day for Takemura's call [M2].
    - Chippin' In: about a day for Rogue's call [W:Chippin' In (quest)].
    - Panam's follow-up job: you **must leave the camp and skip 24 h** [M2, PowerPyx].
    - Kerry: about 24 h after Off the Leash [M2].
    - The usual fix: drive or fast-travel away from the quest area, then skip 24 h.
  - **Careful:** some jobs fail if you leave or skip time. Riders on the Storm (Panam) fails if you leave or wait too long, because Saul dies [OV §5] [M2]. Clampdown (2.5) fails if more than 24 h pass before you enter the prison [W:Clampdown].
- **Sources:**
  - https://www.gfinityesports.com/guides/cyberpunk-2077-how-to-wait (2023-10-06)
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_1.5&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=The_Gig&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Apartments&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Chippin'_In_(quest)&prop=wikitext&format=json
- **Confidence:**
  - How to skip time: medium. One 2.0-era guide, consistent with the wiki. The Switch 2 button for the menu (+ or START) was not verified.
  - The Gig wait: high.
- **es-MX names:** the menu label ("Saltar tiempo"?) was not found in any official es-MX source (UNVERIFIED).

### Q: No me aparecen los chanchullos del NCPD en el mapa. ¿Dónde están?

- **Short answer:** NCPD hustles start by proximity. Their icon appears on the minimap and map only when you are fairly close. On the world map, choose the **custom filter** and enable **NCPD Scanner** to see every location at once.
- **Details:**
  - The wiki says minor activities "are automatically started by approaching their location" [W:NCPD Scanner Hustles].
  - Patch 1.5 added map filters, including "a custom filter which can be configured by the player" [W:Patch 1.5].
  - Steam guide thread (2022-10-11, confirmed by a 2024-02-17 reply):
    - Hustles "flash on your minimap" when you approach, and disappear again if you move away.
    - Map → "custom filter" → "NCPD Scanner" "will highlight every possible NCPD location" [Steam #3394050367670355155].
  - Hustle types: Assault in Progress, Reported Crime, Suspected Organized Crime Activity, Cyberpsycho Sighting, and Increased Criminal Activity (PL) [W:NCPD Scanner Hustles].
    - Some Reported Crimes start from a shard or NCPD message you must read [Steam #3394050367670355155].
  - **They don't respawn** once done [Steam #4033600999069312032, 2023-12-20].
  - **Act 1:** Watson's hustles are available now. Since 2.0, difficulty scales to your level, not to the district [SYS §1.1].
  - Some hustles reportedly spawn only at night (UNVERIFIED: search snippets of older guides).
  - Players also report some district hustles appearing only after later story progress (UNVERIFIED: Steam #4361143473106464787, 2021).
  - The Watson achievement needs **all gigs and all NCPD hustles in Watson** [STEAM-MX].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=NCPD_Scanner_Hustles&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_1.5&prop=wikitext&format=json
  - https://steamcommunity.com/app/1091500/discussions/0/3394050367670355155/ (2022-10-11 and 2024)
  - https://steamcommunity.com/app/1091500/discussions/0/4033600999069312032/ (2023-12-20)
- **Confidence:**
  - Proximity start: high.
  - Custom filter: medium. Community sources from after 1.5; not re-checked on the 2.5 Switch 2 UI.
  - Night-only spawns: (UNVERIFIED).
- **es-MX names:**
  - "chanchullo del escáner del NCPD" [GL, STEAM-MX].
  - Watson achievement "Elemental": "Completa todos los encargos y chanchullos del escáner del NCPD en Watson" [STEAM-MX].
  - The map filter label was not verified.

### Q: ¿Qué encargos de Regina puedo hacer antes de El golpe? ¿Por qué ya no me da más?

- **Short answer:** all 23 of Regina's Watson gigs appear to be doable in Act 1. They are not handed out all at once: she offers them in sets (tiers 1–8), and the next set comes only after you finish the current one.
- **Details:**
  - Patch 1.5: "New fixer gigs will appear gradually in sets as your standing increases, and a fixer will offer you another set of gigs only after the previous set is completed in a given district." Hover over the fixer's icon on the map to see progress [W:Patch 1.5].
  - Regina's tiers per the wiki [W:Regina Jones]:
    - T1: Hippocratic Oath, Many Ways to Skin a Cat, Monster Hunt, Playing for Keeps, Rite of Passage.
    - T2: Dirty Biz, Troublesome Neighbors, Welcome to America, Comrade.
    - T3: Backs Against the Wall, Catch a Tyger's Toe, Woman of La Mancha.
    - T4: Flight of the Cheetah, Shark in the Water.
    - T5: Last Login, Small Man, Big Evil.
    - T6: Bloodsport, Scrolls before Swine.
    - T7: Freedom of the Press, Lousy Kleppers.
    - T8: Fixer, Merc, Soldier, Spy; The Heisenberg Principle; Occupational Hazard; Concrete Cage Trap.
  - **Before The Heist:** no wiki gig page has an Act gate (I checked all 23 infoboxes).
    - Players report finishing all of them in Act 1: "I did all 21 Regina gig missions before doing the heist and leaving Watson … They just unlock in 2-3 gig batches" [Steam #4997318143959695414, 2022-05-15].
    - Another: "Scrolls before Swine … You can do it before the Heist" [Steam #3370404731635021857, 2022-09-25].
    - Another did "everything in Watson … over lvl20 before the heist" [Steam #3824158683369827502, 2024-01-03].
    - (The "21" may be a miscount or an older total; the wiki and Regina's page list 23.)
  - **If the next set doesn't arrive:** finish every gig in the current tier. One gig's completion call can hang if you skip its optional stealth bonus, per a 2023 report [Steam #4477106086845724965]. Reply to texts, read shards, and skip time.
    - (CONFLICT) The same 2022 poster says you also need "a certain level of street cred". Since 1.5 the wiki and the patch notes tie sets to completing the previous set, not to Street Cred [W:Patch 1.5] [SYS §1.7].
  - **Why you might leave a few for Act 2:**
    - Finishing all of Regina's gigs triggers Last Call, which leaves the Axolotl in your stash. It scales to your level, and T5 needs level 33 [SYS §1.7].
    - Johnny comments in "one or two" Watson gigs if you do them after Act 1 (UNVERIFIED: Steam #3824158683369827502, 2023-03-20).
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Regina_Jones&prop=wikitext&format=json
  - The 23 `Gig:_<name>` pages, same URL pattern
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_1.5&prop=wikitext&format=json
  - https://steamcommunity.com/app/1091500/discussions/0/4997318143959695414/ (2022-05-15)
  - https://steamcommunity.com/app/1091500/discussions/0/3370404731635021857/ (2022-09-25)
  - https://steamcommunity.com/app/1091500/discussions/0/3824158683369827502/ (2023-03 and 2024-01)
- **Confidence:**
  - Tier sets: high.
  - "All doable before The Heist": medium. Several post-1.5 community reports agree and no source says otherwise, but no official statement exists.
  - Johnny comments: (UNVERIFIED).
- **es-MX names:**
  - gig = "encargo" [GL, STEAM-MX].
  - Individual Watson gig titles in es-MX: not found.

### Q: ¿Hasta cuándo estoy encerrado en Watson? ¿Se cierra Watson después?

- **Short answer:** you are locked inside Watson until The Heist. The rest of Night City and the Badlands open in Act 2, right after you leave your apartment in Playing for Time. Watson stays open afterwards.
- **Details:**
  - The lore reason is the district closure for Saburo Arasaka's visit to Konpeki Plaza [W:Watson (2077)].
  - The Heist's point of no return: once V gets into the Delamain, V can't go back to Night City or finish other missions until Act 2 [M1 §0] [W:The Heist].
  - The map, gigs and hustles unlock when you leave V's apartment in Playing for Time. Some content waits until you've talked to Takemura [M1 §12].
- **Sources:** https://cyberpunk.fandom.com/api.php?action=parse&page=Watson_(2077)&prop=wikitext&format=json; M1.
- **Confidence:** high.
- **es-MX names:** El golpe, Lagunas mentales (Playing for Time) [GL].

### Q: ¿Qué me pierdo si hago El golpe ya?

- **Short answer:** almost nothing in Watson. Everything you leave there can still be done in Act 2. What you can lose is **inside The Heist itself**: Kongou, Satori, Nehan, the Iguana Egg, Yorinobu's clothes and the Kotetsu no Ryu coat. Before entering, also decide where Jackie's body goes.
- **Details:**
  - **Missables inside The Heist:**
    - Kongou is by Yorinobu's bed.
    - Satori is in Saburo's AV on the roof pad. Take the optional detour.
    - Nehan is on Saburo's body.
    - The Iguana Egg is behind the tree trunk.
    - Herold Lowe (PL) later sells the missed iconics, if their conditions were met [M1 §10.4].
  - **Choices made there:**
    - Jackie's body: home or "wait here" gives the full Heroes job, with the ARCH and La Chingona Dorada. Viktor gives the short version.
    - Neither choice locks the ARCH [M1 §10.6].
    - The pay cut argument has no consequence [M1 §10.2].
  - **Not lost, just postponed:**
    - Cyberpsychos: the 5 in Watson stay. They are only due before the final point of no return [W:Psycho Killer].
    - Regina's gigs and Watson hustles.
    - Paid in Full has no deadline [SYS §1.6].
    - The Gun and The Gift [M1].
    - Plan B can be looted from Dex's body at the landfill at any time after Act 1 [M1 §12].
  - **Things that only happen later anyway:** tarot cards (Act 2; see the tarot question), apartments (Act 2), Bloody Ritual (Act 2, 8 PM–5 AM) [W:Psycho Killer].
  - **A reason to wait:** after The Heist the story runs through The Heist, Love Like Fire and Playing for Time with no shop stop [SYS §1.9]. Shop first (see the level question).
  - **Leave The Heist safely:** at the Afterlife briefing, "Something I gotta take care of first" lets you walk away. "Let's go" commits [M1 §10.2].
- **Sources:**
  - M1 §10 and §14 (wiki The_Heist, item pages)
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Psycho_Killer&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Tarot_Cards&prop=wikitext&format=json
- **Confidence:**
  - Heist missables: high.
  - "Nothing in Watson is lost": medium. No source lists a Watson activity that expires at the end of Act 1, and the gig, hustle and cyberpsycho pages show none. That is an absence of evidence.
- **es-MX names:** El golpe; armas emblemáticas (iconic) [GL, medium].

### Q: ¿Con qué nivel debería entrar a El golpe?

- **Short answer:** no source gives a recommended level. IGN's table for The Heist literally shows "-", and the wiki and game8 give none. Enemies scale to you since 2.0. The site's own advice of about level 10 is an inference, and it stays reasonable.
- **Details:**
  - IGN "The Heist - Main Job Details": "Recommended Level: -" (checked in the raw HTML, 2026-10-30) [IGN].
  - For comparison, IGN gives The Information "Level 3" and Love Like Fire "None" [IGN].
  - game8 (updated 2025-05-16): unlock condition "Complete both The Pickup and The Information". No level [G8].
  - Since 2.0 "everything scales to player level" [W:Patch 2.0] [OV §1.3].
  - Why about 10 is still useful (inference): T2 cyberware such as Reinforced Tendons and Optical Camo unlocks at level 10, and T2 weapons at 9 [SYS §1.3, §1.9].
- **Sources:**
  - https://www.ign.com/wikis/cyberpunk-2077/The_Heist_Walkthrough (raw HTML via curl, 2026-10-30)
  - https://game8.co/games/Cyberpunk-2077/archives/Quests-The-Heist (2025-05-16)
- **Confidence:** high that no sourced recommended level exists. The level-10 advice is an inference.
- **es-MX names:** none needed.

### Q: Ya hice La recolección y salvé a Brick. ¿Me convenía hablar con Militech? ¿Qué cambia ahora?

- **Short answer:** Brick can only be freed on path 3 (side with Maelstrom against Militech) or path 4 (fight Maelstrom). So you either met Meredith, or Maelstrom turned hostile. Who waited at the gate tells you what you'll get later:
  - **Meredith:** Venus in Furs is possible.
  - **Gilchrist:** Meredith dies and Venus in Furs is closed.
- **Details:**
  - **Brick freed:** pays off in Second Conflict, a Kerry side job in Act 2 [M1 §8.6].
    - Royce dead and Brick freed: Brick lets V leave peacefully with Bes Isis.
    - On path 3, Brick is freed but "you never see him again" [M1 §8.4, §8.6].
  - **Chaos:** you have it only if Royce died [M1 §8.4].
  - **Doom Doom:** only if Dum Dum survived (path 2, or path 3 with Royce alive) [M1 addendum].
  - **Path 4:** Maelstrom ambushes you while driving in Watson afterwards [M1 §8.4].
  - **The chip:**
    - Copying it gave the Synapse Burnout quickhack (10 RAM at T3, more than a T1 Paraline has) [SYS §1.8].
    - Neutralizing it gives €$10,000 via the "Hacked Militech Datashard" in the backpack. The conflicts on order and timing are in M1 §8.2 (UNVERIFIED for 2.5).
  - **Nomad V:** if you found and reported Gilchrist's "Transports - LOA" message, a Militech gear crate waits in your apartment in Act 2 [M1 §8.4].
  - "Was it worth it?": the only thing the Militech contact closes is the peaceful path 2. Path 2 is the only way to get the Maelstrom weapon vendor [M1 §8.4].
- **Sources:** M1 §8 (wiki The_Pickup, Brick, Doom_Doom, Meredith_Stout, Anthony_Gilchrist); https://cyberpunk.fandom.com/api.php?action=parse&page=Meredith_Stout&prop=wikitext&format=json
- **Confidence:** high for the path logic. The €$10k mechanics are (CONFLICT), see M1.
- **es-MX names:** La recolección [GL]. Synapse Burnout: not verified in es-MX [GL §2d].

### Q: ¿Puedo tener un romance con Meredith Stout? ¿Cuándo me escribe?

- **Short answer:** it is a one-time encounter (Venus in Furs), not a full romance, and any body type or voice works. It is only possible if Meredith, not Gilchrist, met you at the All Foods gate. She texts some time after you meet Takemura in Act 2. Reply nicely.
- **Details:**
  - Venus in Furs requirements [W:Venus in Furs]: you met Meredith in The Pickup, **accepted her deal**, and resolved the job by fighting Maelstrom.
  - (CONFLICT) The Romance page: you must meet her and "not insult her directly"; "it doesn't matter if you take the chip or not, as long as there is a violent outcome with the Maelstromers" [W:Cyberpunk 2077 Romance]. M1 and the site follow the stricter Venus in Furs and The Pickup wording (deal accepted, hostility after meeting Dum Dum).
  - Bug note: the Body takedown on Royce makes Gilchrist appear and Meredith die [M1 §8.5].
  - Timing: "Some time after meeting Takemura, Meredith will message V". V's flirtatious reply leads to the No-Tell Motel in Kabuki [W:Venus in Furs].
  - Which replies count: "starting to like her" or "look closer at her ink" [W:Meredith Stout].
  - Reward: Sir John Phallustiff. With nudity censorship it becomes an Electric Baton Alpha [W:Venus in Furs].
  - If Gilchrist won, her body is off a north Watson pier after Act 1 [W:Meredith Stout].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Venus_in_Furs&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Romance&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Meredith_Stout&prop=wikitext&format=json
- **Confidence:** high for timing and type of encounter. (CONFLICT) on whether accepting the chip is required.
- **es-MX names:** Venus in Furs (es-MX title not found).

### Q: ¿Qué decisiones del acto 1 cambian el resto del juego?

- **Short answer:**
  - The Pickup outcome: vendor, Chaos or Doom Doom, Brick, Meredith.
  - Where Jackie's body goes: the length of Heroes, plus an extra scene in some endings.
  - The Ripperdoc payment: Viktor's services are locked until you pay.
  - Lifepath extras.
  - Everything else is flavor (Evelyn, the pay cut, Dex dialogue).
- **Details:**
  - **The Pickup:** see the Brick question and M1 §8.4–8.6. Royce alive or dead, and Brick freed or not, change how Second Conflict plays out [M1 §8.6].
  - **Jackie's body:** [M1 §10.6].
    - Mama Welles (or "wait here") gives the full Heroes, with the ofrenda, Jackie's garage, La Chingona Dorada and the ARCH.
    - Viktor's clinic gives a short Heroes (ARCH key by mail), and Arasaka makes Jackie's engram, seen in some endings.
  - **Viktor's debt (Paid in Full):** €$21,000, no deadline. His services stay locked until paid [SYS §1.6].
  - **Evelyn's "cut Dex out" offer:** same outcome either way. What you tell Dex only changes the cut, and the cut is never paid [M1 §9, §10.2].
  - **Lifepath:** Corpo can warn Royce, Nomad gets the Militech crate, Streetkid gets an extra Black Lace [M1 §13].
  - **Not decided in Act 1:** romances, endings (Chippin' In, Panam's and Rogue's chains), PL paths [OV §5].
- **Sources:** M1 §8–§14 (wiki); OV §5.
- **Confidence:** high.
- **es-MX names:** El rey (Heroes) [GL, medium]; La recolección, El golpe [GL].

### Q: ¿Se pueden perder los romances? ¿Puedo cambiar el cuerpo o la voz de V?

- **Short answer:** yes. Each romance needs a specific body type and/or voice, and **body type and voice tone cannot be changed after character creation**. Each chain also has fail points in Act 2.
- **Details:**
  - Character creator: "All appearance aspects except Body Type and Voice Tone can be changed after the character creation process through either a mirror … or a Ripperdoc" [W:Character Customization].
  - Requirements [W:Cyberpunk 2077 Romance]:
    - Judy: feminine body and feminine voice.
    - River: feminine body.
    - Panam: masculine body.
    - Kerry: masculine body and masculine voice.
  - Lifepath and genitals don't matter. Two romances at once are possible "with no consequences" (Panam + Kerry, or River + Judy) [W:Cyberpunk 2077 Romance].
  - Fail points [OV §5]:
    - Judy: refusing in Ex-Factor; siding with Maiko in Pisces.
    - River: the wrong farm in The Hunt.
    - Panam: leaving during Riders on the Storm.
    - Kerry: leaving without him in Rebel! Rebel!.
  - Encounters (not full romances): Meredith (any V), Rogue and Ruby through Johnny, and 4 joytoys [W:Cyberpunk 2077 Romance].
  - Since 2.1: apartment hangouts with your partner [W:Cyberpunk 2077 Romance].
  - Nothing romance-related happens in Act 1 except the Meredith setup.
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Character_Customization&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Romance&prop=wikitext&format=json
  - OV §3.15, §5
- **Confidence:** high.
- **es-MX names (STEAM-MX):**
  - Achievements: "Judy contra Night City" ("Completa el arco argumental de Judy Álvarez"), "Proteger y servir" (River), "Un camino para dos" (Panam), "Quemando cromo" (Kerry).
  - Quest names: [GL §1c].

### Q: ¿Cuándo empiezo Phantom Liberty? ¿Necesito nivel 15?

- **Short answer:** after the Voodoo Boys chain in Act 2. When Transmission (with Never Fade Away) is done, Songbird calls and Dog Eat Dog starts. There is no level gate. No official recommended level was found. You can't start it from Act 1.
- **Details:**
  - **Tracker quest "Phantom Liberty".** It completes when all of these are done [W:Phantom Liberty (quest)]:
    - The Heist, Playing for Time.
    - Automatic Love, The Space in Between, Disasterpiece, Double Life.
    - M'ap Tann Pèlen, I Walk the Line, Transmission (with Never Fade Away).
    - Songbird then calls.
    - Journal objectives: "Make a name for yourself", "Find out more about Evelyn Parker", "Find Evelyn's employer in Pacifica", "Conclude your business with the Voodoo Boys".
  - rpgsite (2023-09-20): "Following Transmission, you'll be contacted by Songbird".
  - **Skip-ahead start:** a new game can start at the end of Transmission, at **level 20** with uncommon (green) gear. You lose the Act 1–2 choices and the iconics [rpgsite 2023-09-20].
    - (CONFLICT) OV and M3 found "15" in older coverage. Only one allowed source (rpgsite) gives a number: 20.
  - Skip-ahead also auto-completes Delamain's jobs through Don't Lose Your Mind (core reset). Down on the Street and Ghost Town stay open [W:Dog Eat Dog note].
  - **Level:** no level requirement. Third-party guides suggest 20, 20–25 or 30 (UNVERIFIED, search snippets only). Enemies scale since 2.0 [W:Patch 2.0].
  - **Recommendation for the player (inference):** play normally. PL slots into Act 2, before the final point of no return [M3 §3.1]. Refusing Songbird's first call ("Nah, not convinced") doesn't lock you out [M3 §3.1, game8].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Phantom_Liberty_(quest)&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Dog_Eat_Dog&prop=wikitext&format=json
  - https://www.rpgsite.net/feature/14848-cyberpunk-2077-phantom-liberty-access-guide-3-ways-to-get-into-dogtown (2023-09-20, post-2.0)
- **Confidence:**
  - Requirement: high.
  - Skip-ahead level 20: medium. A single source, but dated at PL launch.
  - Recommended level: none found.
- **es-MX names:** Un millón de años luz (Transmission) [GL]. PL jobs: only Punto sin retorno and Para no ver el final are confirmed [GL §1d].

### Q: ¿Phantom Liberty tiene un punto sin retorno? ¿Qué pasa con el final de La Torre?

- **Short answer:**
  - Inside PL, **Firestarter** is the big lock: Songbird's path or Reed's path.
  - Hole in the Sky and Lucretia My Reflection can fail and block all of PL.
  - **The Tower** is a full ending of the base game. It is only offered if you surrendered Songbird. Accepting Reed's call ends V's story there.
- **Details:**
  - **Fail states** [M3 §3.10]:
    - Hole in the Sky: straying fails it.
    - Lucretia: walking away from the deal fails PL.
    - Firestarter: two wrong interview answers is a game over. Finishing it closes Balls to the Wall.
    - Run This Town: refusing twice fails it.
  - **The Tower:**
    - "As long as you surrendered Songbird … during The Killing Moon or Somewhat Damaged, V will have the option of a cure". Reed calls or texts; you can decline. The call option also appears in Nocturne Op55N1 [W:Who Wants to Live Forever].
    - The ending is Things Done Changed: a 2-year coma, V can no longer use combat cyberware, and the romances end [M3 §3.7].
  - **After the credits:** for the base endings, the game returns you to the save before the point of no return, with the rewards added [OV §2.4]. Whether the Tower route does the same is (UNVERIFIED) [M3 §3.7].
  - 2.5 fixed a stuck Delamain cab in Things Done Changed [W:Update 2.5] [CDPR 52120].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Who_Wants_to_Live_Forever&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Things_Done_Changed&prop=wikitext&format=json
  - M3 §3.4–3.10
- **Confidence:** high, except the post-Tower reload (UNVERIFIED).
- **es-MX names (STEAM-MX):** "La Torre" ("Completa «Punto sin retorno»"); King endings "Rey de copas", "Rey de oros", "Rey de bastos", "Rey de espadas".

### Q: ¿Cuál es el nivel máximo? ¿Cuántos puntos de ventaja hay?

- **Short answer:**
  - Level cap **60** with Phantom Liberty (50 without it). The Ultimate Edition includes PL.
  - Each level gives +1 attribute point and +1 perk point. Each of the 5 skills gives +1 perk point at skill levels 15 and 35.
  - There are **14 Perk Shards** in total: 11 base and 3 PL. Update 2.5 seems to add one more in Clampdown.
  - Attributes cap at 20, Street Cred at 50, skills at 60, and the Relic tree has 15 points.
- **Details:**
  - "One additional Attribute point and Perk point is gained on each level up. The level cap for the base game is set to 50, with Phantom Liberty increasing this level cap to 60." Attributes: max 6 at creation, 20 afterwards [W:Character Customization].
  - Skills: bonus perk points at levels 15 and 35 [W:Character Customization].
  - Perk Shards: "a total of 14 … 11 in the base game and 3 in the Phantom Liberty expansion". A footnote adds "One additional Perk Shard was added in Update 2.5, in … Clampdown" [W:Perk Shard].
    - It's unclear whether the 14 includes the Clampdown shard (CONFLICT, minor).
    - One base shard is in Watson: a cache in an open warehouse with 3 Militech Wyverns, on Industrial Street, Northside, in front of the Biotechnica building [W:Perk Shard].
  - **Rough total (inference):** 59 level-ups + 10 from skills + 14–15 shards. That is about 83–84 perk points, plus 15 Relic points. No source states a grand total, and none says how many perk points V has at level 1.
  - Street Cred max 50 [OV §3.6]. Relic: 15 points [M3 §3.2].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Character_Customization&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Perk_Shard&prop=wikitext&format=json
- **Confidence:** high for the per-level and per-skill figures; medium for the shard count. The total is an inference.
- **es-MX names:**
  - "ventaja / puntos de ventaja", "atributos", "habilidad" [GL, CDPR-PLANNER].
  - "Leyenda del Afterlife": "Alcanza el máximo nivel de reputación" [STEAM-MX].
  - "Diez de diez": "Consigue el máximo nivel de una habilidad cualquiera" [STEAM-MX].
  - Perk Shard in es-MX: not verified.

### Q: ¿Cómo funciona el viaje rápido? ¿Puedo pedir un Delamain o usar el metro?

- **Short answer:**
  - **Dataterms:** usable from The Ride on. You "discover" each one by passing near it. There are 166, and 37 are in Watson.
  - **NCART metro:** since 2.1, after the NCART text.
  - **Delamain cab on demand:** since 2.3, but only after the Delamain job Don't Lose Your Mind in Act 2.
- **Details:**
  - "There are 166 fast travel dataterms … added to the map when V gets close … they cannot be used until after completing The Ride" [W:Fast Travel].
  - Watson has 37: Arasaka Waterfront 3, Kabuki 11, Little China 12, Northside 11 [W:Fast Travel].
  - The Frequent Flyer achievement only needs about 120. It is based on the release-version count [W:Fast Travel, note].
  - NCART (2.1): 5 lines and 19 stations. Usable after V gets the NCART text, either as fast travel or by riding [OV §1.3].
  - Delamain (2.3): "Simply open the menu to call vehicles, then select 'Delamain Cab' … unlocks after completing the job Don't Lose Your Mind (regardless of outcome) and receiving a message from Delamain" [W:Patch 2.3].
  - Don't Lose Your Mind also rewards the Delamain No. 21 car [W:Delamain Cab].
  - AutoDrive (2.3): hold the left stick on consoles [OV §1.3].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Fast_Travel&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_2.3&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Delamain_Cab&prop=wikitext&format=json
- **Confidence:** high.
- **es-MX names:** "dataterms de viaje rápido" — "Viajero frecuente": "Encuentra todos los dataterms de viaje rápido" [STEAM-MX].

### Q: ¿Puedo comprarme un auto o una moto ya? ¿Dónde quedó mi auto?

- **Short answer:**
  - In Act 1, AUTOFIXER (a netpage on V's computer or roadside terminals) sells only a few cheap cars with no Street Cred requirement: Galena G240 €$13,000, Supron FS3 €$16,000, Colby C125 €$18,000 and Columbus V340-F Freight €$19,000.
  - The cheapest motorcycle, the Brennan Apollo (€$30,000), needs Street Cred 12 and appears to be Act 2 only.
  - Your Archer Hella from The Ripperdoc is **removed at the start of Act 2** and comes back after the Delamain job Human Nature.
- **Details:**
  - Since 2.0, cars are bought only through the AUTOFIXER netpage, from V's computer or terminals at gas stations and repair shops. Enable the Autofixer map filter to find them [W:Patch 2.0] [W:Autofixer].
  - Vehicles unlock as Street Cred rises. PL vehicles unlock through El Capitán's Just Another Story jobs [W:Autofixer].
  - rpgsite (2.3 edition): "While the AutoFixer website will be available in Act 1, before the completion of the main job The Heist, only certain vehicles will be made available to purchase, regardless of how high you manage to push your Street Cred."
    - It lists exactly the 4 cars above. The wiki marks those 4 as "No requirements" [W:Cyberpunk 2077 Vehicles].
  - Apollo: €$30,000, "Requires 12 Street Cred" [W:Cyberpunk 2077 Vehicles]. rpgsite doesn't list it for Act 1.
    - Jackie's ARCH comes free from Heroes after The Heist [M1 §10.6].
  - Archer Hella EC-D i360: from The Ripperdoc. "Removed at the start of Act 2; Reacquired after Human Nature" [W:Cyberpunk 2077 Vehicles].
    - Human Nature starts in the H10 garage when you get into V's car [M1 §12].
  - **Summoning:** owned vehicles can be called from almost anywhere. A destroyed one is replaced for €$100 (marked [citation needed] on the wiki) [W:Cyberpunk 2077 Vehicles].
    - Stolen cars despawn.
    - Vehicles and apartments share the main stash, except the Archer "Bandit" [W:Stash].
  - Autojock achievement: buy all base-game purchasable vehicles [STEAM-MX] [OV §3.7].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Autofixer&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Vehicles&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_2.0&prop=wikitext&format=json
  - https://www.rpgsite.net/feature/10587-cyberpunk-2077-23-phantom-liberty-cars-bikes-all-vehicles-how-to-get-them (2.3-era)
- **Confidence:**
  - The 4 Act 1 cars: medium-high. Two sources agree.
  - "No motorcycle in Act 1": medium. Inferred from rpgsite's list.
- **es-MX names:** "Motorexia" (Autojock): "Compra todos los vehículos a la venta" [STEAM-MX]. The es-MX UI name of AUTOFIXER was not verified (probably kept as-is).

### Q: ¿Puedo comprar otro departamento? ¿Dónde me cambio de ropa o guardo cosas?

- **Short answer:**
  - In Act 1 you only have your H10 apartment. It has a bed, shower, stash, wardrobe and iconic racks.
  - The 4 extra apartments go on sale in Act 2, after Tom's Diner in Playing for Time, through El Capitán's EZEstates message.
  - Costs: Northside €$10,000 (or free by hacking the keypad with Intelligence 20), Japantown €$30,000, The Glen €$80,000, Corpo Plaza €$110,000.
- **Details:**
  - "After talking with Takemura at Tom's Diner … you receive a text message from El Capitán that his choom Bob from EZEstates has some new digs". Rent online or in person [W:Welcome Home: Northside].
  - Prices [OV §3.8] [W:Cyberpunk 2077 Apartments]. The Int 20 keypad note is from [W:Cyberpunk 2077 Apartments].
  - Partner homes unlock by finishing those romance chains [W:Cyberpunk 2077 Romance].
  - Amenities, each lasting 60 min: bed = Rested (skill XP bonus), shower = Refreshed (Health regen), coffee = Energized [W:Cyberpunk 2077 Apartments].
  - Memorabilia and pets show only in the H10 apartment [W:Cyberpunk 2077 Apartments].
  - Stash: one shared stash across apartments and owned vehicles (except the Archer "Bandit") [W:Stash]. 2.5 added item filters to apartment and vehicle stashes [W:Update 2.5] [CDPR 52120].
  - Wardrobe: also at clothing vendors since 2.0. Up to 6 outfits [OV §3.13].
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Welcome_Home:_Northside&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Apartments&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Stash&prop=wikitext&format=json
- **Confidence:** high.
- **es-MX names:** "departamento" is the LatAm HUD word in quest objectives [GL, YT-GS]. Apartment names: not verified.

### Q: La policía me persigue. ¿Cómo me la quito?

- **Short answer:**
  - Heat is shown as **stars, up to 5**. At 5 stars MaxTac comes as a mini-boss team.
  - The police don't accept bribes or surrender.
  - To escape, get out of the search zone on foot or by car and **stay out of their sight**. Since 1.5 you can also hide inside the search area, which takes longer.
  - Repainting your car with CrystalCoat lowers the wanted level (2.2).
- **Details:**
  - 2.0: "The NCPD will chase you when you commit a crime, whether on foot or in a vehicle. The types of units in pursuit … depend on your NCPD Wanted Level … roadblocks and MaxTac swooping in with AVs." You can quickhack NCPD officers [W:Patch 2.0].
  - CDPR's preview: max Heat is 5 stars, with a "surprise Max Tac mini-boss experience". Lose them by running or driving away; "Make sure to stay out of their sight!"; no bribes, no surrender [CDPR 48766, 2023-08-31].
  - 1.5: "V can opt to hide within the search area, although it will take longer for the police to stop looking" [W:Patch 1.5].
  - 2.2: "Use CrystalCoat™ to fool the cops and lower your NCPD wanted level!" [W:Patch 2.2]. CrystalCoat works only on certain car brands.
  - Shooting enemies who are already hostile doesn't draw police. Hitting civilians or property while driving can [OV §3.9] [M1 §6, game8].
  - Act 1 practical tip (inference): the Hella can't be repainted (Archer isn't listed among the 2.2 CrystalCoat brands), so break line of sight and drive out of the zone.
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_2.0&prop=wikitext&format=json
  - https://www.cyberpunk.net/en/news/48766 (2023-08-31)
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_1.5&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Patch_2.2&prop=wikitext&format=json
- **Confidence:**
  - Stars, MaxTac and escape: high.
  - Whether the 1.5 "hide in the area" still applies in the 2.0 system: medium.
- **es-MX names:** PL achievement "Ni con las órdenes de búsqueda": "Conviértete el enemigo público n.º 1 de Dogtown" [STEAM-MX]. The HUD name for the wanted level was not verified.

### Q: ¿Importa mi afinidad con Johnny? ¿Necesito 70 % para el final secreto?

- **Short answer:** no. Affinity "does not seem to have any major impact". The secret ending depends only on specific dialogue answers at the end of **Chippin' In**, then waiting on Misty's rooftop in Nocturne Op55N1. The wiki explicitly says 70 % affinity is not needed.
- **Details:**
  - "V's affinity with Johnny does not seem to have any major impact in the game. However, the secret ending can only be unlocked via specific dialogue choices during Chippin' In, which also increases affinity" [W:Johnny Silverhand §Affinity].
  - Chippin' In: "It is not necessary to have an affinity of 70 or higher with Johnny to unlock the secret ending" [W:Chippin' In (quest), note].
  - The key lines at the oil fields:
    - "Nah, fucked that up too."
    - "What do you want from me?"
    - "Ok. But as second chances go, this is your last."
    - Done right, this starts Blistering Love, Rogue's chain needed for The Sun. Otherwise you get Holdin' On (Kerry).
  - On the rooftop in Nocturne Op55N1, leave the call choice open for about 5 minutes (exactly 5:08) [W:(Don't Fear) The Reaper].
  - Affinity milestones (1 % at Love Like Fire … 90 % in The Sun) mainly track story progress [W:Johnny Silverhand].
  - Nothing in Act 1 affects it. Johnny only arrives after The Heist.
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Johnny_Silverhand&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Chippin'_In_(quest)&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=(Don't_Fear)_The_Reaper&prop=wikitext&format=json
- **Confidence:** high. The OV §5 CONFLICT on whether Blistering Love itself must be finished is still open in M3.
- **es-MX names:** Chippin' In; Mi buen amor (Blistering Love); No temas a la muerte (secret ending, UNVERIFIED) [GL].

### Q: ¿Dónde están las cartas del tarot? ¿Me puedo perder La Luna (Fool on the Hill)?

- **Short answer:** the tarot graffiti doesn't appear until Act 2, so there is nothing to collect yet. The job (es-MX "La Luna") starts after Playing for Time and isn't missable before the end. It needs 20 Major Arcana. Update 2.5 added 12 Minor Arcana with their own follow-up quest.
- **Details:**
  - "They first appear in Act 2 after V's mind becomes entangled with Johnny Silverhand's engram" [W:Cyberpunk 2077 Tarot Cards].
  - Fool on the Hill: giver Johnny, previous quest Playing for Time. "V must scan or interact with the 20 tarot cards". Judgement and The Devil are excluded (ending-only), and so are the 4 PL Kings [W:Fool on the Hill].
  - Many cards are in Watson: The Fool outside V's apartment, The Magician outside Lizzie's, The Empress in the Afterlife, The Emperor at the Konpeki gate [W:Fool on the Hill].
  - Some are inside later story locations, for example Takemura's hideout in Search and Destroy [W:Fool on the Hill].
  - Reward: Misty's Dreamcatcher in V's apartment [W:Fool on the Hill].
  - **2.5:** "12 new Minor Arcana Tarot Cards … The new tarot cards are part of a new side quest, an extension of Fool on the Hill, which activates after scanning any of the new cards. Collect them all to get a special reward" [CDPR 52120] [W:Update 2.5].
    - The wiki Tarot page links them (Queen, Knight and Page of each suit) to a quest "You Tell Me" "related to V's romances". That page doesn't exist yet [W:Cyberpunk 2077 Tarot Cards].
    - Most locations are still blank on the wiki. The Queen of Cups is on the back wall of Kutcher's Home.
- **Sources:**
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Cyberpunk_2077_Tarot_Cards&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Fool_on_the_Hill&prop=wikitext&format=json
  - CDPR 52120
- **Confidence:**
  - Act 2 start: high.
  - The Minor Arcana quest name and locations: low (wiki stub).
- **es-MX names (STEAM-MX):** job "La Luna"; achievement "Demente errante": "Encuentra todos los murales del tarot para el trabajo La Luna". Card names are in [GL §1b] (CDPR-TAROT).

### Q: ¿Cuándo me llama Regina por los ciberpsicópatas? ¿Se pueden perder?

- **Short answer:** Regina calls after The Ripperdoc, and the job activates after Jackie's talk in The Ride. Five sightings are available in Watson now; Demons of War needs The Pickup done, which you have. None is missable before the final point of no return. Bloody Ritual (Watson) needs Act 2 and a night window of 8 PM–5 AM.
- **Details:**
  - Psycho Killer table [W:Psycho Killer]:
    - Act 1 Watson: Demons of War (needs The Pickup), Lt. Mower, Six Feet Under, Ticket to the Major Leagues, Where the Bodies Hit the Floor.
    - Bloody Ritual: Playing for Time plus the night window.
    - The Wasteland: Life During Wartime.
    - The rest: Act 2.
  - The reward comes even if some are killed. Regina is happier if they're kept alive [W:Psycho Killer].
  - Known bug: the Chrome Compressor may not be given (2.3, PC) [W:Psycho Killer].
- **Sources:** https://cyberpunk.fandom.com/api.php?action=parse&page=Psycho_Killer&prop=wikitext&format=json
- **Confidence:** high.
- **es-MX names (STEAM-MX):** "detección de ciberpsicópata"; achievement "Soy la ley": "Completa todas las detecciones de ciberpsicópatas".

### Q: ¿Qué cambió con la actualización 2.5 "Edgerunners 2"? ¿Ya está en mi Switch 2?

- **Short answer:**
  - It is free and works on existing saves.
  - New: two side quests (Clampdown, Welcome to Paradise), the King gear set, the HKGN 102.0 FM radio station, the Double Trouble dual-wield perk, Glamdocs, 12 Minor Arcana tarot cards, new outfits and NPC hairstyles.
  - Quality of life: saves grouped by playthrough, stash filters, an FOV slider on consoles.
  - It fixes the Switch 2 "Save failed - insufficient space" error.
  - Switch 2 got it a few days after 22 October. Whether mods work on Switch 2 is disputed.
- **Details (official patch notes, CDPR 52120, 2026-10-21; mirrored by W:Update 2.5):**
  - **Clampdown:** "complete The Heist and two gigs for Wakako, then wait for a message from her". It includes the 5-piece King gear set.
    - The wiki adds that it is timed: entering the prison more than 24 h later fails it, and declining King twice fails it.
    - Rewards include Coronation, Disjunctor and a Perk Shard [W:Clampdown] [W:Perk Shard].
    - Wakako's gigs are in Westbrook, so this is Act 2 content.
  - **Welcome to Paradise:** a tour narrated by Richard Night. "Unlocks after completing The Heist and reaching level 15 Street Cred".
    - Giver Aera; starts at Creek Loop, Kabuki.
    - Rewards: 950 XP, 2,200 Street Cred, €$1,050, Yasha (dependent) [W:Welcome to Paradise].
  - **Tarot:** 12 Minor Arcana, with a separate Major and Minor Arcana menu. The new quest extends Fool on the Hill.
  - **Double Trouble:** a Cool perk plus 4 auxiliary perks. Dual-wield **Power** pistols and revolvers.
  - **Glamdocs:** 5 shops (spray-paint map icon) with skins for Mantis Blades, Gorilla Arms, Monowire and the Projectile Launch System.
  - **Clothing:** 5 new sets (Maxiwear, Jinguji, NetWatch, IconAmerica, and one "a little later"). The NUS Infiltrator set is now sold in Kabuki and Japantown. Some NPC-only hairstyles are now available.
  - **Photo mode:** TCG frames and dual-wield poses.
  - **Quality of life:** saves grouped by playthrough, stash item filters, a modded-save icon (no trophies or achievements on modded console saves), FOV slider on consoles.
  - **Fixes:** the Switch 2 insufficient-space save error; Things Done Changed Delamain stuck.
  - **mod.io cross-platform mods:**
    - (CONFLICT) The official notes say: "The feature is available on PC, Mac, PlayStation 5, PlayStation 5 Pro, Xbox Series X|S, and Nintendo Switch 2" (verified in the raw HTML of 52120).
    - The wiki's copy of the notes (W:Update 2.5) omits Switch 2, and so do M1 §15 and OV.
    - Press is split. powerupgaming (2026-10-25) says mods install on "PS5, Xbox X|S, or Switch 2". Earlier reports (for example frvr.com) said Switch 2 was skipped.
    - Prefer the official notes, but tell the player to check for a Mods tab in the main menu. It needs a CDPR account and a mod.io link.
  - **Switch 2 date:**
    - (CONFLICT) The official notes say only that Switch 2 receives it "in the days to follow" after 22 October.
    - The wiki infobox says October 26; the wiki body says October 27.
    - CDPR 52125 (2026-10-22) lists Switch 2 among the platforms the update "is available on".
    - The es-MX landing page still says "próximamente en Nintendo Switch 2" (stale).
    - Either way, by 2026-10-30 the player has it.
  - **New Game+:** not in 2.5 [OV §1.3].
- **Sources:**
  - https://www.cyberpunk.net/en/news/52120/check-out-whats-coming-to-night-city-in-the-edgerunners-2-update-for-cyberpunk-2077 (2026-10-21)
  - https://www.cyberpunk.net/en/news/52125 (2026-10-22)
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Update_2.5&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Clampdown&prop=wikitext&format=json
  - https://cyberpunk.fandom.com/api.php?action=parse&page=Welcome_to_Paradise&prop=wikitext&format=json
  - https://powerupgaming.co.uk/2026/10/25/cyberpunk-2077-console-mods-setup-guide-update-2-5/ (2026-10-25)
  - https://www.cyberpunk.net/us/es-mx/edgerunners-2-update
- **Confidence:**
  - Content list: high.
  - Switch 2 mods: (CONFLICT); official notes say yes.
  - Exact Switch 2 date: (CONFLICT); it doesn't matter now.
- **es-MX names (CDPR-MX 2.5, marketing copy):**
  - "Actualización Edgerunners 2 (2.5)".
  - "glamdocs".
  - "Empuñadura doble" for dual wield (the feature, not the perk name).
  - "Mods multiplataforma".
  - The es-MX names of Clampdown, Welcome to Paradise and the Double Trouble perk were not found.

### Q: ¿Hay Nueva partida+? ¿Qué pasa cuando acabo el juego?

- **Short answer:**
  - There is no New Game+ (not in 2.5 either).
  - The real point of no return is entering Embers in Nocturne Op55N1. After an ending, the game takes you back to the save before that point, with the ending rewards added, so you can keep playing the open world.
- **Details:** see [OV §2.4] (FW Nocturne and Endings; PowerPyx "Sure, Just One More Gig") and [M3 §1]. Keep a manual save before Embers [OV §3.11].
- **Sources:** OV §1.3, §2.4; M3 §1.
- **Confidence:** high for the point of no return and the reload. "No NG+" rests on its absence from the 2.5 notes.
- **es-MX names:** Nocturno Op. 55 N.° 1 [GL].

---

## Open questions (not resolved)

- The menu label for Skip Time in es-MX, and the Switch 2 button that opens that menu (+ vs "START" wording).
- Whether NCPD hustles that only appear at night exist in 2.x, and whether any Watson hustle needs Act 2 to spawn.
- Whether mod.io is actually live on Switch 2 in-game (official notes yes; wiki and early press no).
- The exact Switch 2 release day of 2.5 (26 vs 27 October).
- Whether accepting Meredith's chip is required for Venus in Furs (Venus in Furs page yes, Romance page no).
- Whether the 14 Perk Shards include the Clampdown one; how many perk points V has at level 1.
- Whether the Tower ending returns you to the pre-point-of-no-return save.
- The es-MX titles of Clampdown, Welcome to Paradise, Venus in Furs and Psycho Killer, and the 2.5 tarot quest name ("You Tell Me" is per the wiki Tarot page only).
- A sourced recommended level for The Heist: **resolved as "none exists"** (IGN "-", wiki and game8 none).
- Which Watson gigs are offered before The Heist: **resolved, medium**. All 23 appear doable in Act 1, in tier sets (Patch 1.5 plus several Steam reports from 2022–2024).

## Errors or gaps in the current site

1. **`src/content/games/cp2077/es/cards.json`, id `survival-psychos-gigs`.** It says "No está confirmado cuáles salen antes de El golpe (The Heist): algunos podrían esperar al acto 2."
   - It can now say: Regina's gigs come in sets (each tier unlocks when you finish the previous one, Patch 1.5), and players report finishing all of them before The Heist.
   - Add the optional reason to leave the last ones for Act 2: Axolotl tier scaling, plus possible Johnny comments (UNVERIFIED).
   - Sources: W:Patch 1.5; Steam #4997318143959695414 (2022-05-15); Steam #3370404731635021857 (2022-09-25).
2. **`cards.json`, id `survival-level-before-heist`.** It is correct that no source gives a level, and it can be strengthened: IGN's Heist table literally shows "Recommended Level: -" (raw HTML, 2026-10-30), and game8 (2025-05-16) gives none. No change is needed beyond an optional mention.
3. **`src/content/games/cp2077/es/chapters/dog-eat-dog.md`, line 41.** "Las fuentes no coinciden en el nivel inicial de ese atajo." rpgsite (2023-09-20) says the skip-ahead V starts at **level 20** with green gear. It is still a single source, so "about level 20 according to rpgsite" would be an improvement.
4. **`src/content/games/cp2077/es/chapters/the-pickup.md`, line 46 and the "Aceptar el chip → necesario para Venus in Furs" bullet (line 210), and `characters.json` Meredith.** These state that accepting the chip is required. W:Cyberpunk 2077 Romance says "it doesn't matter if you take the chip or not, as long as there is a violent outcome" (CONFLICT). Add a short "las fuentes no coinciden" note.
5. **Research notes, not the site: `00-overview.md` §1.3 and `main-1-prologue-act1.md` §15.** Both say console mod support is not listed for Switch 2. The official CDPR patch notes (52120) **do** list Nintendo Switch 2. Mark it CONFLICT before any page says "no mods on Switch 2". No site page mentions mods yet.
6. **Missing on the site (no card or page covers these; candidates for the FAQ section):**
   - How to skip time (game menu → Skip Time, bottom left).
   - "Wait for the lockdown to end" in The Gig is normal in Act 1.
   - The NCPD custom map filter.
   - AUTOFIXER in Act 1: only 4 cars with no Street Cred requirement. The Hella disappears at the start of Act 2 until Human Nature.
   - Apartments go on sale only after Tom's Diner.
   - Body type and voice can't be changed later, which locks romances.
   - Johnny affinity doesn't matter; 70 % isn't needed.
   - Tarot cards don't exist until Act 2.
   - Delamain cab on demand only after Don't Lose Your Mind.
   - Police: hide or break line of sight, no bribes, CrystalCoat lowers wanted level.
   - The Watson Perk Shard location (Northside, Industrial St, in front of Biotechnica).
7. **`chapters/the-ride.md`, line 45** ("los dataterms … solo se pueden usar a partir de El paseo"): correct per W:Fast Travel. Optional addition: Watson has 37 dataterms, and the Frequent Flyer achievement ("Viajero frecuente") only needs about 120 of the 166.
8. **No contradictions found** in `survival-watson-lockdown`, `the-heist.md` (point of no return at the Delamain) or `playing-for-time.md` (Clampdown, Venus in Furs, Phantom Liberty after Un millón de años luz). They match these findings.
