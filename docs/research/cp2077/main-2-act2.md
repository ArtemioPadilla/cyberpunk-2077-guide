# Research notes — Cyberpunk 2077 Act 2 (after Playing for Time, before Nocturne Op55N1)

Target: Cyberpunk 2077: Ultimate Edition, Nintendo Switch 2, Update 2.5. Notes compiled 2026-10-29.
Status: research notes, not guide copy. Each fact has a source tag. Markers: **(UNVERIFIED)** means one source only, or
the claim may predate 2.0. **(CONFLICT)** means sources disagree, and both readings are given.

## Sources read

Source tags used below:

- `[F:Page]` is the Cyberpunk Fandom wiki, read only through the MediaWiki API:
  `https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`
- `[G8:id]` is `https://game8.co/games/Cyberpunk-2077/archives/<id>`
- `[IGN:slug]` is `https://www.ign.com/wikis/cyberpunk-2077/<slug>`
- `[PPX]` is `https://www.powerpyx.com/cyberpunk-2077-endings-guide-all-endings/`

Fandom pages read through the API:

- Category listings: `action=query&list=categorymembers&cmtitle=Category:Cyberpunk_2077_Main_Jobs` and `...Category:Cyberpunk_2077_Side_Jobs`.
- Main jobs: Playing for Time, Automatic Love, The Space in Between, Disasterpiece, Double Life, Down on the Street, Gimme Danger, Play It Safe, Search and Destroy, Ghost Town, Lightning Breaks, Life During Wartime, M'ap Tann Pèlen, I Walk the Line, Transmission, Never Fade Away (quest), Tapeworm, Nocturne Op55N1, Totalimmortal, (Don't Fear) The Reaper.
- Side jobs: Chippin' In (quest), A Cool Metal Fire, Blistering Love, Holdin' On, Second Conflict (quest), A Like Supreme (quest), Rebel! Rebel!, I Don't Wanna Hear It, Off the Leash (quest), Boat Drinks, Riders on the Storm, With a Little Help from My Friends, Queen of the Highway, I'll Fly Away, Both Sides, Now, Ex-Factor, Talkin' 'bout a Revolution, Pisces, Pyramid Song, I Fought the Law, The Hunt, Following the River, Dream On, Heroes, Love Rollercoaster, Human Nature, Tune Up, Epistrophy, Don't Lose Your Mind.
- Characters and systems: Cyberpunk 2077 Endings, Romance, Johnny Silverhand (Affinity table), Goro Takemura, Sandayu Oda, Sasquatch (Matilda K. Rose), Oswald Forrest, Evelyn Parker, Placide, Update 2.5.
- Iconic weapons and items: Errata, Cottonmouth, Lizzie, Cocktail Stick, Death and Taxes, Tsumetogi, Problem Solver, Overwatch, Genjiroh, Jinchu-Maru, Sasquatch's Hammer, Butcher's Cleaver, Widow Maker, Archangel, Crash, Tinker Bell, Prototype: Shingen Mark V, Stinger, Doom Doom, Gold-plated baseball bat, Mox (weapon), La Chingona Dorada, Scorpion's Apollo, Archer Quartz "Bandit".

game8 pages read:

- Walkthrough hub 309675, Side Quests 311652.
- Main jobs: 313532 Automatic Love, 313552 Space In Between, 313553 Disasterpiece, 313709 Double Life, 313906 Down On The Street, 313946 Gimme Danger, 313948 Play It Safe, 313972 Search And Destroy, 313895 Ghost Town, 313900 Lightning Breaks, 313903 Life During Wartime, 313710 M'ap Tann Pèlen, 313711 I Walk The Line, 313870 Transmission, 313874 Tapeworm.
- Side jobs: 314047 Chippin' In, 314145 Blistering Love, 313991 Riders On The Storm, 314074 With A Little Help, 314079 Queen Of The Highway, 313996 The Hunt, 314242 Pisces, 314253 Pyramid Song.
- Systems: 314736 Secret Ending, 313548 All Endings, 313905 Romance.

IGN pages read: `Play_It_Safe_Walkthrough`, `Disasterpiece_Walkthrough`, `Search_and_Destroy_Walkthrough`, `Tapeworm_Walkthrough`, `Transmission_Walkthrough`, `All_Cyberpunk_2077_2.5_Updates_and_Changes`. These IGN walkthroughs are partly written for 1.x. IGN quotes attribute checks such as "20 Technical", which suggests the old attribute scale. Treat IGN skill-check numbers as UNVERIFIED for 2.x.

PowerPyx page read: the endings guide `[PPX]`.

### Name verification

- The Fandom Main Jobs category confirms these exact titles: "M'ap Tann Pèlen", "Never Fade Away (quest)" (shown as _Never Fade Away_; it is a main job played inside Transmission), "I Walk the Line", "Life During Wartime", "Lightning Breaks", "Transmission", "Ghost Town" `[F:Category Main Jobs]`.
- **"Hunt for a Ghost" does not exist.** Neither the Main Jobs category nor the Side Jobs category contains it. The closest titles are _Ghost Town_ (main) and _The Hunt_ (River side job).
- The Panam ending chain includes _Riders on the Storm_, _With a Little Help from My Friends_ and _Queen of the Highway_ (side jobs), plus _I'll Fly Away_ (a **Minor Job**, not a side job) `[F:I'll Fly Away]`.
- The Kerry chain includes _Second Conflict_, which the brief omitted: Holdin' On → Second Conflict → A Like Supreme `[F:Second Conflict (quest)]`.

### Patch context (Update 2.5 / Switch 2)

- Update 2.5 ("Edgerunners 2 Update") went live October 22, 2026 on PC, PS5 and Xbox `[F:Update 2.5]` `[IGN:All_Cyberpunk_2077_2.5_Updates_and_Changes]`.
  - **(CONFLICT)** The Switch 2 date differs. The Fandom infobox says October 26, 2026; the Fandom body text says October 27, 2026; IGN only says "shortly afterwards".
- No 2.5 patch note changes any Act 2 quest covered here `[F:Update 2.5]`. The new 2.5 quests (_Clampdown_, _Welcome to Paradise_, the Fool on the Hill extension) are out of scope.
- A 2.5 fix that matters for the guide's save advice: "Fixed an issue on Nintendo Switch 2 where saving the game could result in a 'Save failed - insufficient space' error" `[F:Update 2.5]` `[IGN:2.5]`.
- Ultimate Edition includes Phantom Liberty. Many missable iconics below can be bought later from **Herold Lowe** at the EBM Petrochem Stadium in Dogtown if you missed them. Fandom confirms this for Errata, Cocktail Stick, Lizzie, Death and Taxes, Tsumetogi, Problem Solver, Jinchu-Maru, Sasquatch's Hammer, Butcher's Cleaver, Widow Maker, Tinker Bell, Doom Doom and La Chingona Dorada `[F: each weapon page]`. Guide copy can therefore soften "missable" to "missable without Phantom Liberty".

---

## 0. Act 2 structure and order

- Playing for Time opens three parallel main lines. game8 orders them in "tiers" `[G8:309675 table]`:
  1. Ghost Town and Automatic Love.
  2. Lightning Breaks, The Space In Between, Down On The Street.
  3. Life During Wartime, Disasterpiece, Gimme Danger.
  4. Double Life and Play It Safe.
  5. M'ap Tann Pèlen and Search And Destroy.
  6. I Walk The Line.
  7. Transmission (containing Never Fade Away).
  8. Tapeworm.
  - Fandom's infoboxes agree:
    - Ghost Town, Automatic Love and Down on the Street all list "previous: Playing for Time".
    - Play It Safe lists previous = Gimme Danger **and** Life During Wartime.
    - Tapeworm lists previous = Automatic Love, Transmission, Life During Wartime, Search and Destroy `[F: each page]`.
- Play It Safe gating: game8 says "Depending on your progress through the other two quest lines you may need to advance the story before Takemura will give you a call" `[G8:313948]`. **(UNVERIFIED)** The exact gate is only implied by the Fandom infobox (Life During Wartime required).
- Tapeworm triggers a stage after each of Automatic Love, Life During Wartime, Search and Destroy and Transmission. Completing Tapeworm starts Act 3 (Nocturne Op55N1) and starts Chippin' In `[F:Tapeworm]` `[IGN:Tapeworm_Walkthrough]`.
  - **(CONFLICT)** game8 lists only three triggers (after Transmission, Life During Wartime and Search and Destroy) `[G8:313874]`. Fandom and IGN both list four, including Automatic Love.
- Point of no return: the ending is decided on Misty's rooftop in Nocturne Op55N1. All three non-Arasaka endings need the Rogue and/or Panam chains done first. After credits, "One More Gig" returns you to before the point of no return `[PPX]` `[F:Cyberpunk 2077 Endings]`.
- Per PowerPyx, the only Act 2 choices that gate endings are these three `[PPX]`:
  - Takemura alive (needed for The Devil achievement).
  - The Rogue chain not failed.
  - The Panam chain not failed.
  - Everything else only changes epilogue messages and dialogue.

---

## 1. Evelyn / Judy main line

### 1.1 Automatic Love (`q105_dollhouse`) `[F:Automatic Love]` `[G8:313532]`

- **Giver:** Takemura. **Locations:** Lizzie's Bar (Kabuki), then Clouds on the 12th floor of Megabuilding H8.
- **Rewards:** **(CONFLICT)** Fandom says 1609 XP and 552 Street Cred. game8 says 1102 XP, 552 Street Cred and 484 eddies.
- **Missable iconics:**
  - **Lizzie** (M-76e Omaha pistol). It is in the private room next to Judy's workshop at Lizzie's Bar. Patch 1.5 moved it here; it used to sit near the Clouds server room `[F:Lizzie]`.
  - **Cocktail Stick** (katana). It is in the first cubby of the dolls' dressing room in the restricted area of Clouds `[F:Automatic Love]` `[F:Cocktail Stick]`.
  - Both can be bought from Herold Lowe if missed (Phantom Liberty).
- **Objectives flow:**
  1. Call Judy (optional), then meet her at Lizzie's.
  2. Take Evelyn's cigarette case.
  3. Go to Megabuilding H8 and ride up to Clouds in the evening.
     - **(CONFLICT)** Fandom says Clouds opens at 5 pm and you can sit on a bench to wait. game8 says skip to "after 6pm".
  4. Jack in at reception and deposit your weapons. A Liberty pistol sits behind the counter `[F]`.
  5. Pick a doll: Angel (booth 6) or Skye (booth 9). Use the safe word to cut the session short, or let the doll do the "soul-search" `[F]`.
  6. Optionally examine booth 11 (Evelyn's): the missing port, the blood and the security feed. The feed shows Evelyn was remotely hacked, not hurt by the client `[F]`.
  7. Get into the VIP area and find Tom.
     - Take the VIP card from the Tyger Claw who goes to the bathroom, or
     - Take the hallway shutter to the exterior walkway, which leads to a backroom and an elevator, or
     - Force the Body-check door by the bathroom `[F]` `[G8]`.
     - Entering VIP without a card makes the Tyger Claws hostile `[F]`.
  8. Tom tells you about the "Oslo clinic" story and sends you to Woodman `[F]`.
- **Lore pickups:** the server-room computer, the "Schedule changes/incident report" shard, Evelyn's Schedule shard and Evelyn's Handbag in the locker room `[F]`.
- **KEY CHOICE: how to handle Woodman (Oswald Forrest)** `[F:Automatic Love]` `[F:Oswald Forrest]` `[G8]`
  - **Peaceful options:**
    - An Intelligence check: offer him security advice.
    - Corpo lifepath only: talk about the Tyger Claws' real bosses.
    - If _Gig: Monster Hunt_ is done, mention Jotaro Shobo's fate. Woodman gives the information immediately.
    - Otherwise use the chain "You don't understand what's at stake." → "Let's not make this harder than it has to be." → "One way or another, I'll find out..." `[F]`.
  - **If he turns hostile:** defeat him, then read the message on his computer `[F]`.
    - game8: if the whole area is alerted you cannot talk to him, so you must fight him with fists or melee, because your guns are in the locker. There are melee weapons, including iconics, in the restricted area `[G8]`.
    - Woodman's abilities: Break Hold, Combat Stim, Charge Jump. He carries Subdermal Armor and a Malorian Overture `[F:Oswald Forrest]`.
  - **Consequences:**
    - If Woodman survives, he blacklists V from Clouds even after a polite or bribed outcome `[F:Oswald Forrest]`.
    - Killing him here removes the Woodman-revenge branch of Ex-Factor and makes Maiko more hostile in Ex-Factor `[F:Ex-Factor]`.
    - Keeping him alive lets V and Judy kill him later in Ex-Factor `[F:Ex-Factor]`.
- **Next:** The Space in Between. This also triggers a Tapeworm stage `[F]`.

### 1.2 The Space in Between (`q105_02_jigjig`) `[F]` `[G8:313552]`

- **Location:** Fingers' clinic on Jig-Jig Street, Japantown. Judy waits outside whether or not you call her `[F]`.
- **Ways in:** Body 5 to force the clinic door. Inside, sit with the joytoys to cut the queue, or Body 7 to force Fingers' door `[G8]`. game8 also notes a second entrance on the left side of the building that avoids the thugs `[G8]`.
- **Missable iconic: Cottonmouth** (one-handed club).
  - **(CONFLICT)** The location wording varies by source. Fandom's quest page says "on the bed inside Fingers' office". Fandom's weapon page says "on a coffee table in Fingers' clinic". game8 says "in Finger's bedroom".
- **KEY CHOICE:** whether to punch Fingers while he is on the floor.
  - Punching him locks him out as a ripperdoc `[F]` `[G8]`.
  - Fandom adds that since 2.0 he no longer sells unique cyberware `[F]`. game8 still recommends staying friendly for his Sandevistans `[G8]`, which is probably 1.x advice **(UNVERIFIED for 2.x)**.
  - Either way, you get the information.
- **Next:** Disasterpiece.

### 1.3 Disasterpiece (`q105_03_braindance_studio`) `[F]` `[G8:313553]` `[IGN:Disasterpiece_Walkthrough]`

- **Step 1: find the XBD dealer.** Either look up the "Pleasures of NC" domain at a terminal (net route), or call or visit Wakako, or ask at the Jig-Jig sex shop `[F objectives]` `[IGN]`.
- **Step 2: buy _XBD: Deep-Fried Death's-Head Moth_.** "Death's Head" is the keyword with the dealer `[IGN]`. You can also kill the dealer and loot it `[IGN]`.
  - **(CONFLICT)** Price: game8 says €$4,837; IGN says €$1,000 (IGN is likely 1.x; prices may scale with level).
- **Step 3: braindance clues** `[IGN]`.
  - Visual layer:
    - The netrunner and the scav from the start onwards.
    - A pizza box and a scav woman at 00:11.
    - Coveralls and a box at 00:23.
    - A coffee cup at 00:38.
  - Audio layer: the radio at 00:10 and 00:32.
  - The clues point to an EC power plant near a Buck-A-Slice.
- **Step 4: the power plant** (Charter Hill/Arroyo), against Scavengers.
  - Lead Judy through the sub-levels. You can let her distract the scavs or neutralize them yourself `[F]`.
  - A hackable access point can blow up the furnace `[G8]` `[IGN]`.
- **Iconic: Errata** (katana), found "at the forge inside the Electric Corporation Power Plant" `[F:Errata]`.
- **Other loot** (IGN, 1.x-era) `[IGN]` **(UNVERIFIED for 2.x)**:
  - M-179e Achilles in the crate in the weapons room.
  - SPT32 Grad behind the Technical-gated door in the hallway.
  - Mantis Blade mods.
- **Ending:** grab Evelyn's cable, talk to Judy, take the elevator, talk to Johnny.
- **Next:** Double Life.

### 1.4 Double Life (`q105_04_judys`) `[F]` `[G8:313709]`

- **Location:** Judy's apartment. Two braindances `[F]` `[G8]`:
  - **BD1 visual clues:** the red hologram (Voodoo Boys symbol), the flyers on the floor (Pacifica) and the unknown netrunner, who is Brigitte.
  - **BD2 audio clue:** Judy installs a translation chip. Scan the netrunner's phone call, which is with Placide. It reveals that they need to reach Alt through Johnny's engram.
- **Missable:** finishing Double Life makes the side job **Love Rollercoaster** (Eden Beach rollercoaster in Coastview, giver Jean Rochelin) unavailable. The ride itself stays usable `[F:Double Life]` `[F:Love Rollercoaster]`.
- **Shortcuts and quirks** `[F]`:
  - If V has already visited Pacifica Serenity Bible Church, they recognise it in BD1 and only need to scan the netrunner.
  - The in-game clock freezes at 6:20 PM if you wander off before entering the apartment.
- **Rewards:** 1125 XP and 552 Street Cred `[G8]`.
- **Next:** M'ap Tann Pèlen. Both Sides, Now unlocks after you call Mr. Hands `[F:Both Sides, Now]`.
- **Evelyn's fate is fixed:** she always commits suicide in Judy's bathtub. This is revealed in the side job Both Sides, Now. **No choice saves her** `[F:Evelyn Parker]` `[F:Both Sides, Now]`.

### 1.5 M'ap Tann Pèlen (`q110_01_voodooboys`) `[F]` `[G8:313710]`

- Call Mr. Hands, then pursue other leads until he calls back `[F]` `[G8]`.
- Go to the chapel (Pacifica Serenity) and meet the contact at the altar.
- Go to Rolland's Butcher Shop, ask the vendor for Placide, look into the camera, then meet Placide in the back. Follow him and sit down `[F]`.
- **Missable iconic: Butcher's Cleaver.** Placide leaves it behind after butchering the chicken `[F]` `[F:Butcher's Cleaver]`.
- **Rewards:** none listed `[G8]`.
- The name is Haitian Creole for "I am waiting for the trap" `[F]`.
- **Next:** I Walk the Line.

### 1.6 I Walk the Line (`q110_voodoo`) `[F]` `[G8:313711]`

- **Rewards:** 3574 Street Cred, 1135 XP, 16,720 eddies `[G8]`.
- **Route:** meet Placide's sentries at the Grand Imperial Mall (GIM), enter through the garage, reach the van in the lobby and jack in. Jacking in tells you the NetWatch netrunner is in the upstairs cinema, and also alerts him `[F]`.
  - game8 shortcut: going through **Kabayan Foods** on the upper floor skips both the van and Sasquatch `[G8]`.
  - Skill-check doors in the corridor before the fitness centre (Body or Technical) lead to the atrium's upper floor `[G8]`.
- **BOSS: Sasquatch (Matilda K. Rose, Animals)** `[F:I Walk the Line]` `[F:Sasquatch]` `[G8]`
  - **Avoidable:** if you stay undetected through the GIM, the cinema gates stay open and you can sneak past her. Being detected closes the gates and starts the fight `[F]` `[G8]`.
  - **During the fight,** the netrunner (Bryce Mosley) keeps hacking V. Placide slows the hacks but you must kill her quickly `[F]`.
  - **Weak point:** the glowing implant on her back (game8 calls it a purple "Juicer"). Destroying it stops her regeneration and slowly drains her health `[F]` `[G8]`.
    - You can also sneak up and rip it out before the fight for major damage `[G8]`.
  - **Opening:** her hammer swings are powerful but slow, with several seconds between them. She "rests" after a full combo `[F]` `[G8]`.
  - **Quickhacks** `[G8]`:
    - Short Circuit instantly destroys the Juicer.
    - Overheat works well (thermal is her weakness).
    - Cripple Movement and System Reset (stagger) help.
  - **Her abilities:** Berserk, Sandevistan Mk.1, Kerenzikov, Frag Grenades, Juice Tank `[F:Sasquatch]`.
  - **Bounty:** **(CONFLICT)** Fandom says €$15,000; game8 says "16k".
  - game8 describes a repeatable "30,000 eddies" body-hitting money exploit **(UNVERIFIED; probably patched; do not publish)**.
- **Iconic: Sasquatch's Hammer.** Loot it after the fight. If you stay undetected, you can loot it before she picks it up. She can also drop it if she throws it or if her back weak point is destroyed `[F:Sasquatch's Hammer]`.
  - A random drop is the Animals Power-Absorbent Jumpsuit `[G8]`.
- **KEY CHOICE: NetWatch agent Bryce Mosley** `[F]` `[G8]`
  - **Deal with Mosley** (take the shard). This removes Placide's malware from V but installs a NetWatch tracker.
    - In Transmission, Alt flatlines Brigitte and all the connected Voodoo Boys. V must then fight Placide to escape `[F:Transmission]`.
    - The Animals let V leave in peace if Sasquatch was spared `[F:Sasquatch]`.
    - Placide calls V a "normal, filthy ranyon" `[F]`.
  - **Knock Mosley out** (stay with the Voodoo Boys). Placide's virus wipes many NetWatch facilities and nearly kills V too.
    - Back at Batty's Hotel, Brigitte defends V as "no ranyon" `[F]`.
    - game8 says this choice gives "less rewards" but lets you punch Placide `[G8]` **(UNVERIFIED)**.
  - **Sasquatch's fate × deal** `[F:Sasquatch]`:
    - Spared + deal: you get safe passage out.
    - Killed + deal: the Animals hold a grudge.
    - Mosley dead (either way): the remaining Animals fight you on the way out.
- **After the mall:** the sentries outside offer a ride back to Batty's Hotel, which you can decline. Talk to Placide, then Brigitte `[F]`.
- **Next:** Transmission.

### 1.7 Transmission (`q110_03_cyberspace`) and Never Fade Away (`q108_johnny`) `[F]` `[G8:313870]` `[IGN:Transmission_Walkthrough]`

- **Setup:** follow Brigitte to the Maglev tunnel under the church, get in the ice bath, and meet Brigitte in cyberspace. This runs **Never Fade Away**, playing as Johnny in 2013 `[F]`.
- **Never Fade Away beats** `[F:Never Fade Away (quest)]`:
  1. The Samurai gig and an argument with Kerry.
  2. Alt in the dressing room (an automatic intimate scene).
  3. The alley ambush: Johnny is cut down by a Mantis-blade thug and Alt is abducted.
  4. Milt Nauman's clinic, with Lyle Thompson.
  5. The Atlantis: find Rogue (bouncer Engels) and sit with her and Santiago. Arasaka agents attack.
  6. The Porsche escape and the planning scene.
  7. The Arasaka Tower assault: two turrets, then **Akira** guarding the mainframe. Arm explosives, find Alt.
  8. Johnny shoots Toshiro and unplugs Alt, which kills her.
- **Back in Rezo Agwe:** talk to Johnny, touch the Blackwall, talk to Alt.
- **The outcome depends on the I Walk the Line choice** `[F]` `[G8]` `[IGN]`:
  - **Mosley deal:** NetWatch intrudes and Alt kills Brigitte and her netrunners. You must **fight Placide**; he holds the access token/card key to the church door. game8 says the fight happens "regardless of if you stealthed" `[G8]`.
    - Placide's abilities: Combat Stim, Sandevistan Mk.2, Charge Jump, Kerenzikov, EMP Grenades `[F:Placide]`.
    - game8 tip: lower his resistances with Breach Protocol. He "tends to stand in place a lot", so headshots work `[G8]`.
    - Missable legendary: **Timeworn Trench Coat**, from defeating Placide on this branch `[G8]` **(UNVERIFIED)**.
  - **Sided with the Voodoo Boys:** the netrunners breach the Blackwall with Alt's help. Brigitte then makes V leave.
    - **Choice:** leave peacefully, or "settle the score" by violence `[F]` `[IGN]`.
    - **Consequences of violence:**
      - Generic Voodoo Boys stop spawning on the streets, except in Dogtown `[F:Transmission]`.
      - Phantom Liberty's _The Damned_ gets extra dialogue and gameplay options `[F]`.
      - Placide may later text V to watch their back, on the peaceful-exit branch `[F:Placide]`.
- **Reward:** Virtual Jumpsuit `[F infobox]`. Street Cred 303 `[G8]`.
- **Next:** Tapeworm stage. Fandom also lists Send in the Clowns, and Phantom Liberty's Dog Eat Dog, as next quests `[F infobox]` **(UNVERIFIED gating)**.
- IGN notes that how you respond to Johnny after the church exit "can impact your relationship with him" `[IGN]`. This is vague. See the affinity table in §4.

---

## 2. Takemura / Hanako main line

### 2.1 Down on the Street (`q112_01_old_friend`) `[F]` `[G8:313906]`

- Takemura calls after Playing for Time. Meet him at the Japantown docks at **11:30 PM** and lean on the barrier `[F]`.
- Oda arrives, refuses to listen, and hints at problems with the parade. Nothing you say changes this `[F]`.
- Takemura's van takes you to Wakako, who hands over the parade security information "with some persuasion" `[F]`.
- **Tip:** remind Wakako about the Sandra Dorsett gig to get paid for _The Rescue_ `[G8]`.
- **Ending:** wait about a day for Takemura's call `[F]` `[G8]`.
- **Rewards:** 115 Street Cred, 100 XP `[G8]`.

### 2.2 Gimme Danger (`q112_02_industrial_park`) `[F]` `[G8:313946]`

- **Market prep at Redwood Market:**
  1. Take the shard.
  2. Break into the security room (Body 6 forces the door, per game8) and infect the system.
  3. Sit with Takemura.
- **KEY CHOICE: join Takemura's recon, or let him go alone** `[G8]`
  - **Joining:** go to the rooftop at Arasaka Industrial Park and scan the area. This opens extra infiltration and escape routes.
    - If you sent Jackie to Vik at the end of The Heist, Takemura shares details about Jackie here `[G8]` **(UNVERIFIED)**.
    - Takemura tells his backstory `[G8]`.
  - **Not joining:** wait a day. You get fewer routes and miss story beats `[G8]`.
- **Corpo lifepath:** scan the guard at the front talking about an info leak, **immediately on accepting the quest**. You can then persuade him to let you walk in without making the guards hostile `[F notes]`.
- Shooting from the roof while spotted makes the quest permanently loud `[F]`.
- **Goal:** get into the warehouse and hack the float. game8 recommends the side-entrance warehouse door, because a hard robot guards the main door `[G8]`.
- **Missable iconic: Prototype: Shingen Mark V** (SMG)
  - Shipping container/trailer **"667"** at the end of the exterior loading dock (loading dock 4, west of the main warehouse entrance).
  - A mine inside can be disarmed with Intelligence 8.
  - Computers in the warehouse point to it `[F:Gimme Danger]` `[F:Prototype: Shingen Mark V]` `[G8]`.

### 2.3 Play It Safe (`q112_03_dashi_parade`) `[F]` `[G8:313948]` `[IGN:Play_It_Safe_Walkthrough]`

- **Prerequisites:** Gimme Danger and Life During Wartime `[F infobox]`.
- **Route** `[G8]`:
  1. Go to the Japantown bazaar and take Takemura's shard.
  2. Neutralize three snipers.
     - Sniper 1: through a door with a mine just inside.
     - Sniper 2: elevator to floor 21, then the ladder, then jump the gap. Watch for drones.
     - Sniper 3: mine at the door, Arasaka agents on the stairs, cross the bridge only after the burning floats pass, then elevator to floor 24 and more mines.
  3. Reach and disconnect the netrunner.
- **Missable iconic: Genjiroh** (pistol)
  - Behind a door after the floor-21 elevator, before the ladder. **Code 2906**, or a Technical check. IGN gives Technical 11 (1.x scale?) `[F]` `[G8]` `[IGN]`.
  - A second copy can be found at the Arasaka Estate (Last Caress) `[IGN]` `[F:Genjiroh]` `[F:Endings]`.
- **BOSS: Sandayu Oda.** He starts the fight automatically when you disconnect the netrunner `[F]`.
  - **Moves:**
    - Fast Mantis Blade dashes; keep moving and dodge `[IGN]`.
    - A Smart SMG with homing bullets; use corner cover `[IGN]`.
    - Optical camo retreats during which he **heals**, up to all his health per IGN. Track him and keep up damage `[F]` `[G8]` `[IGN]`.
  - **Oni Mask:** it disrupts smart-weapon bullets. Destroy it by attacking it, with **Cyberware Malfunction** (instant), or with a stealth takedown after losing his attention `[G8]` `[IGN]`.
  - **Quickhacks** `[G8]` `[IGN]`:
    - Weapon Glitch stops the homing SMG.
    - Cyberware Malfunction removes the mask.
    - Detonate Grenade (he carries one).
    - Friendly Mode on cameras lets you track him while invisible.
  - **Other tips:** use stun grenades, headshots as he dashes in, and fast melee such as katanas `[G8]` `[IGN]`.
  - **His kit:** Flashbangs, Combat Stim, Optical Camo, Light Subdermal Armor, Mantis Blades, TKI-20 Shingen `[F:Sandayu Oda]`.
- **Iconic: Jinchu-Maru** (katana), looted from Oda `[F]` `[G8]` `[IGN]`.
- **KEY CHOICE: kill or spare Oda** (Takemura asks you to spare him) `[F:Play It Safe]` `[F:Sandayu Oda]` `[IGN]`
  - **Spare:**
    - Oda appears in **Totalimmortal** on the Arasaka/Devil path and fights alongside you, but only if Takemura also survived Search and Destroy `[F:Sandayu Oda]` `[F:Endings]`.
    - Takemura is grateful.
    - Adam Smasher later taunts "You spared Oda... Mercy is disgusting" `[F]`.
  - **Kill:**
    - Takemura is angry and "would remember", but this does not affect the story `[IGN]`.
    - Smasher praises it `[F]`.
- **After Oda:** connect to the access point, deactivate the turret, wait for Takemura's move, and escape the parade grounds `[F]`.
- If you call Judy after the quest, she asks about the parade `[F]`.

### 2.4 Search and Destroy (`q112_04_hideout`) `[F]` `[G8:313972]` `[IGN:Search_and_Destroy_Walkthrough]` `[PPX]`

- **Rewards:** 1580 XP `[G8]`.
- **Knock exactly four times** on apartment 303 of the Vine Street safe house in Vista del Rey. One or three knocks blow up the door and kill V `[F]` `[IGN]`.
- Talk to Takemura, then Hanako. Your dialogue choice with Takemura has no effect `[IGN]`.
- **Ambush:** Adam Smasher takes Hanako and the floor collapses `[F]`.
- Collectible: the High Priestess tarot card on the 4th floor `[F]`.
- **MISSABLE: save Takemura.** There is no objective until you find the hidden stairwell `[PPX]` `[IGN]` `[G8]`.
  1. In the corridor where you wake, find the room with the large blue cross. Turn left and squeeze through the small **hole in the wall** `[IGN]` `[G8]`.
  2. Clear up to five soldiers. IGN recommends a straight gunfight `[IGN]`.
  3. Take the stairwell in the top-right corner by the elevators, back up to 303. The optional objective appears as you climb `[IGN]`.
  4. A large squad ambushes you in the hallway. Their lights are blinding, so use a thermal or night-vision scope `[IGN]`.
  5. Help Takemura in 303 and lead him out. Takemura must appear in the exit cutscene `[PPX]`.
  - Following Johnny's "run" advice still lets you go back, as long as you have not left the building `[F]`.
- **Consequences:**
  - If Takemura dies, he is absent from The Devil ending: no Arasaka troops, no Oda. Hellman offers the final choice instead. **The Devil achievement/trophy cannot be earned** `[F:Search and Destroy]` `[F:Endings]` `[PPX]`.
  - PowerPyx says the trophy pops at the end of Totalimmortal, after Yorinobu and the elevator `[PPX]`.
  - **Make a manual save at the start of Search and Destroy** `[PPX]`.
- **Ending:** wake at the Sunset Motel (Red Peaks). Hanako's proxy arrives and knocks. The game gives an M2038 Tactician for the scene if you don't own one `[F]`.
- **Next:** Tapeworm stage.

---

## 3. Panam / Hellman main line

### 3.1 Ghost Town (`q103_warhead`) `[F]` `[G8:313895]`

- **Rogue at the Afterlife wants €$15,000 for her help** `[F]` `[G8]`.
  1. Pay her and wait for her to be ready.
  2. Take her shard: a Kang Tao AV is carrying Hellman.
  3. Call Panam and meet her at the Rancho Coronado container station.
  4. Go to the Aldecaldo camp, where you meet Mitch and Scorpion, and carry the box to the car.
  5. At Rocky Ridge, set up the trap.
     - Scan three devices, the transformer and the power source.
     - Connect the jumper cables to the battery.
     - Restore power in the switchgear: break the window, or force the door with Body 8 per game8.
  6. Wait on the roof for the Raffen Shiv and turn on the intersection lights.
  7. Get Panam's car key and car, either fighting the seven Raffen or not `[F]` `[G8]`.
- **KEY CHOICE: help Panam kill Nash?** `[F]` `[G8]` `[F:Archer Quartz "Bandit"]` `[F:Queen of the Highway]`
  - **Help:** you raid the Raffen hideout and kill Nash.
    - **Widow Maker** (precision rifle) drops from Nash `[G8]` `[F:Widow Maker]`.
    - Rogue mildly scolds you `[F]`.
    - game8 says this earns romance points for masculine V `[G8]`.
  - **Refuse** ("that wasn't the deal"):
    - Rogue texts approval and gifts the **Archer Quartz "Bandit"** car `[F]`.
    - Nash then shows up in _Queen of the Highway_ and drops the Widowmaker there `[F:Queen of the Highway]`.
  - **(CONFLICT):** Fandom says "not assisting Panam ... will not affect the outcome of the mission and the following Panam/Aldecaldos storyline". game8 says "Not dealing with Nash means you will lock yourself out of Panam's romance".
    - The Fandom Romance and Panam side-job pages list no Nash requirement.
    - Guide recommendation: help Panam if you want the romance, to be safe.
- **Nash fight tips** `[G8]`:
  - Bring a shotgun or strong melee.
  - Kill the **two netrunners** quickly; they use Overheat.
  - Use Nash's Widow Maker against the reinforcements.
- **Ending:** the Sunset Motel. Boz deal, drinks with Panam, and you rent rooms.
  - Lightning Breaks romance step (per game8): when Panam talks about sleeping at the motel, offer to share one room. She declines `[G8:313900]` **(UNVERIFIED which quest this falls in)**.
- **Free car:** a Rayfield Caliburn appears later in the tunnel past where Nash dies. You may need to leave and skip up to three days `[G8]` **(UNVERIFIED)**.
- Phantom Liberty note: if _Black Steel in the Hour of Chaos_ is done, V can mention taking out a MaxTac convoy `[F]`.

### 3.2 Lightning Breaks (`q104_01_sabotage`) `[F]` `[G8:313900]`

1. Meet Panam **at midnight** at the garage near the Sunset Motel `[F]`.
2. Calibrate the truck turret on three targets.
3. At the Satwave Power Plant, take out four security drones.
4. Overheat the terminals.
5. Drive to the hill and fire the detonator. The EMP is late, so Panam fires an Uragan launcher and the AV loses altitude `[F]`.

- **Rewards:** none `[G8]`.
- **Leads directly into:** Life During Wartime `[F]`.

### 3.3 Life During Wartime (`q104_02_av_chase`) `[F]` `[G8:313903]`

- **Rewards:**
  - Fandom: 1994 XP, 2658 Street Cred, **Scorpion's Apollo** (motorcycle), which is given regardless of whether you rode the bikes `[F:Scorpion's Apollo]`.
  - game8: 1530 Street Cred.
- **Opening:** shoot down three Griffin drones from the truck turret. Panam is hit by a ricochet `[F]`.
- **KEY CHOICE: help at the crash site, or abandon Panam and go straight for Hellman** `[F]`
  - **Abandon** (head straight to the gas station):
    - Panam later arrives with reinforcements, saying she rescued Mitch herself and "unlike V, she does not bail". Her later texts are bitter.
    - Mitch gives Scorpion a funeral alone.
    - **Locks out the minor job _I'll Fly Away_** `[F]`.
  - **Help:**
    1. Use the surveillance drone to scan the AV, Mitch, the Aldecaldos, the Kang Tao operatives and the drones.
    2. Clear the site and take out the turret. Panam gives overwatch.
    3. A Kang Tao operative takes Mitch hostage inside the AV.
    - **Intimidate** him with "only looking for Hellman" → "I'm losing my patience" to learn Hellman's location immediately `[F]` `[G8:313900]`.
    - **Or shoot him** (or Panam shoots if you wait). Mitch reports Scorpion is dead. You then track the tyre tracks by bike, and **more Kang Tao reinforcements are at the gas station** `[F]`.
- **Gas station** `[G8]` `[F]`:
  - Mines around the perimeter.
  - Best stealth route: the roof, via a Technical check. Or force the front garage doors with Body.
  - The owner is locked behind the counter and says Hellman is upstairs.
  - Hellman is upstairs with a Kang Tao medic. Knock him out, call Takemura and carry Hellman out.
- **Kang Tao robots are weak to electrical damage** `[G8:313900]`.
- **Panam romance steps** `[G8:313903]` `[G8:313905]`:
  - Defend her when Saul berates her.
  - Afterwards, reply to her text with the long reply, not "OK", or she snaps at you.
- **Motel interrogation:** Hellman scans the chip and offers a Swedish clinic and pain management, or coming with him to Kang Tao, which V refuses. Takemura takes Hellman over and Hellman gives V a chip with the brain and biochip blueprint `[F]`.
  - Phantom Liberty adds a new Hellman dialogue option if Phantom Liberty is finished first `[F]`.
- **Unlocks** `[F infobox]`:
  - Tapeworm stage.
  - Play It Safe.
  - **I Fought the Law** (River / Peralez).
  - **Riders on the Storm** (Panam chain).

---

## 4. Tapeworm (`sq032_tapeworm`) and the Johnny affinity system

- **Stages** `[F]` `[IGN]`:
  - Stage 1: talk.
  - Stage 2: talk, with the option to take pseudoendotrizine (pills).
  - Stage 3: sit and rest. The location is outside the Voodoo Boys' chapel, the Sunset Motel, or the Megabuilding, depending on order `[IGN]`.
  - Stage 4: talk.
  - Final stage: you wake in Pacifica at the **Hotel Pistis Sophia**. Enter through the window, open the cache (the vent under the counter, which holds the dog tags), talk to Johnny, and leave through the window `[F]` `[G8]` `[IGN]`.
- **Reward:** Johnny's tank top `[F]` `[G8]`.
- **Choices:**
  - IGN: blocking Johnny with pills or listening "will have no effect on the story" `[IGN]`.
  - Fandom: not taking the pills and talking more lets you learn his motives `[F]`.
  - Pacifist runs (you killed no one yourself) get unique Johnny dialogue `[F]`.
- **Unlocks:** Nocturne Op55N1 (Act 3) and **Chippin' In** `[F]`.

**Johnny affinity milestones** `[F:Johnny Silverhand#Affinity]`:

| Affinity | Entry                 | How you reach it                                                                 |
| -------- | --------------------- | -------------------------------------------------------------------------------- |
| 1%       | "Play it Again"       | Love Like Fire                                                                   |
| 10%      | "Breaking the Ice"    | Tapeworm phase 1                                                                 |
| 15%      | "Metamorphosis"       | Tapeworm phase 2                                                                 |
| 20%      | "Mikoshi"             | Tapeworm phase 3                                                                 |
| 25%      | "Fucking entropy"     | last phase of Tapeworm                                                           |
| 30%      | "Double Life"         | A Cool Metal Fire (during Chippin' In)                                           |
| 40%      | "Synergy"             | a specific dialogue in Chippin' In; otherwise Blistering Love or Holdin' On      |
| 50%      | "Shadows of the Past" | Blistering Love; otherwise Holdin' On or A Like Supreme                          |
| 60–70%   | "You Only Live Once"  | Holdin' On (60%) and A Like Supreme (70%); otherwise only 60% via A Like Supreme |

- Phantom Liberty entries: "Fuck the System" (85%) and others `[F]`.
- Fandom: "V's affinity with Johnny does not seem to have any major impact in the game" `[F]`.
- **The "70% affinity for the secret ending" claim is a myth.** Fandom (Chippin' In note), game8 and the Fandom Johnny page all say the secret ending depends only on the Chippin' In dialogue, not on affinity `[F:Chippin' In (quest)]` `[G8:314736]`.
- PowerPyx's comment section shows players still asking about it `[PPX comments]`. The guide should debunk it explicitly.

---

## 5. Johnny / Rogue side chain (decides the Sun, Temperance and secret endings)

### 5.1 Chippin' In (`sq031_rogue`) `[F]` `[G8:314047]` `[PPX]`

- **Unlock:** after Tapeworm. game8 places it in Act 3; it is still before the point of no return `[F]` `[G8:314736]`.
- **Rewards:**
  - Replica of Johnny's Samurai jacket (from Rogue's car trunk).
  - Malorian Arms 3516, Johnny's gun (take it back from Grayson).
  - **Porsche 911 Turbo (930), missable** `[F]` `[G8]`.
- **Flow:**
  1. At the Afterlife, take pseudoendotrizine. _A Cool Metal Fire_ plays:
     - Johnny drinks.
     - At Cassius Ryder's, **choose a tattoo**: "Johnny's Special" or "Together Forever". Reward: Johnny's aviators.
     - Empathy club and Ruby.
     - Car crash; Ruby writes "Ebunike".
     - Northside motel `[F:A Cool Metal Fire]`.
  2. Wait a day for Rogue's call, then meet her at the Afterlife (Weyland chat). Take the jacket from the trunk.
  3. Go to the Ebunike Docks (Maelstrom) and find the dataterm.
     - game8 short route: Technical 9 opens the east gate. Also Technical 9 for the storehouse side door, or Body 6 for its back window `[G8]`.
  4. Board the ship. Optional scans `[F]`:
     - Kang Tao crates (Smasher was behind the Kang Tao raid).
     - The female body (Smasher's signature).
     - Audio recordings (the Gilchrist blackmail).
     - "Tri-phet" packages. **Bug as of Patch 2.2:** combat triggers before you can scan these `[F]`.
  5. Grayson fight: he is defeated, not killed. Interrogate him: Smasher is in Japan.
- **KEY CHOICE: spare or kill Grayson.** No consequence for the Porsche either way: loot the access key or receive it `[F]` `[G8]`.
  - To get the Porsche: climb the crane ladder on the ship's right side and press the button to lower the container. Go back down, open it with the key and remove the canvas `[F]` `[G8]`.
  - If Grayson dies, the game routes you away. **Easy to miss** `[G8]`.
- **KEY CHOICE: the grave conversation** at the Northern Oil Fields (decides the next quest and the secret ending) `[F]` `[F:Blistering Love]` `[G8]` `[PPX]`
  - **Secret-ending set, which also unlocks Blistering Love** (Fandom and game8 agree on these three lines):
    1. Johnny: "Not to fuck this up, what we have." → **"Nah, fucked that up too."**
    2. Johnny: "Is it too late to ask for a second chance?" → **"What do you want from me?"**
    3. Johnny: "At least, so it seemed... till now." → **"OK. But as second chances go, this is your last."**
  - **PowerPyx's full recommended sequence** (a superset of the above), "for best results":
    1. "[Inscribe Johnny's Initials] Let's do something about that."
    2. **"The Guy who Saved My Life"**, which PowerPyx calls "the first actual trigger".
    3. "Nah, fucked that up too"
    4. "What do you want from me?"
    5. "OK. But as second chances go, this is your last."
    6. "You were a real dick in the beginning"
    7. "When you said you let down your friends…"
    8. "Smasher biz really got to her."
    9. "Yeah, I'll call Rogue." `[PPX]`
    - A PowerPyx commenter reports picking "The Guy who Saved My Life" and not getting the secret ending `[PPX comments]`. Recommend the full PowerPyx line as the safe path.
  - **Alternative that unlocks Blistering Love without the secret ending:** "A hard road, but looks like we made it." → "Johnny, no need to bare your soul to me." `[F:Blistering Love]` **(UNVERIFIED; Fandom only)**.
  - **Wrong answers:** if V says "Nah, fucked that up too" but then refuses the second chance, or picks other options, Johnny sends V to Kerry (**Holdin' On**). **Blistering Love is skipped, which locks the Rogue/Sun path (the regular route)** `[F:Chippin' In]` `[F:Blistering Love]`.
  - **Save before the grave.**

### 5.2 Blistering Love (`sq031_rogue`) `[F]` `[G8:314145]`

- **Rewards:** 290 XP, 433 Street Cred `[F]`.

1. Call Rogue and ask her out. She picks the **Silver Pixel Cloud** drive-in in North Oak.
2. Pick her up at the Afterlife **in the evening**. Emmerick Bronson is there. If you own the Porsche, it is called automatically and gets extra dialogue `[F]`.
3. At the drive-in, the door code is **0000**. Climb to the projection booth, start the film (_Bushidō X: Fade to Black_) and take the pills `[F]`.
4. As Johnny, either **kiss Rogue** (she stops it) or **say he has little to offer**. Both end with Rogue leaving and Johnny taking an Omega blocker `[F]`.

- Johnny romances Rogue here; V's body type and voice do not matter `[F:Romance]`. The romance briefly continues in For Whom the Bell Tolls `[F:Romance]`.
- **Required for The Sun via Rogue** `[F:Endings]` `[PPX]`.
- Then Johnny asks you to meet Kerry (Holdin' On) `[F]`.
- **(CONFLICT) Does the secret ending also need Blistering Love?** PowerPyx's secret-ending steps include "Complete Rogue's next Side Job Blistering Love". game8 says "You do not actually need to complete Blistering Love or Queen of the Highway to get the secret ending". The Fandom Endings table lists only the Chippin' In dialogue.
  - Guide: do Blistering Love anyway; it is needed for The Sun via Rogue and costs little.

### 5.3 Kerry chain: Holdin' On → Second Conflict → A Like Supreme → Rebel! Rebel! → I Don't Wanna Hear It → Off the Leash → Boat Drinks

**Holdin' On** (`sq011_kerry`) `[F]`

- **Rewards:** 773 XP, 1158 Street Cred.
- Meet Johnny at the North Oak sign, enter Villa Eurodyne, and take pills near the guitars.
- Johnny plays, and Kerry comes out with his revolver. They agree to reunite Samurai.
- Call Nancy. Her assistant Steven says she went missing at the Totentanz `[F]`.

**Second Conflict** (`sq011_johnny`) `[F]`

- At the Totentanz, the outcome depends on _The Pickup_:
  - Royce alive: Dum Dum takes you to Nancy.
  - Royce dead and Brick freed: you meet Patricia and Brick.
  - Royce dead and Brick not freed: you fight to free Nancy.
- Drive with Nancy and convince her.
- At Denny's mansion, Henry has filled the pool with cement.
- **KEY CHOICE: Denny or Henry for the gig.** Johnny has no preference `[F]`.
- **Missables:**
  - **Gold-plated baseball bat**: looted from Denny's pool after she tosses it in.
  - **Doom Doom**: dropped by Dum Dum. It needs Royce alive from The Pickup; siding with Militech prevents it `[F:Doom Doom]`.

**A Like Supreme** (`sq011_concert`) `[F]`

- **Rewards:** 773 XP, 1158 Street Cred, **Archangel** (Kerry's iconic Overture revolver).

1. Wait a day for Nancy's call.
2. Go to the Red Dirt bar in the evening and open the guitar case (Johnny's old guitar).
3. Take the pills in the bathroom and perform. There are timed extra actions during the song, and Johnny's outfit pieces auto-equip if owned.
4. Johnny gives Kerry the guitar; Kerry gives V Archangel `[F]`.

- Affinity reaches 70% if Holdin' On and A Like Supreme are both done `[F:Johnny Silverhand]`.

**Rebel! Rebel!** (`sq017_kerry`) `[F]`

- **Rewards:** 587 XP, 1321 Street Cred. Kerry texts €$21,470 if you have coffee with him **(dependent)**.

1. Meet Kerry at the Rancho Coronado Foodscape between **12:30 and 3:30 AM**.
2. Lay the stinger trap in Red Peaks, free the Us Cracks crew and grenade the van.
3. Escape the NCPD.

- **MISSABLE / FAIL:** if V leaves without getting in Kerry's car (or drives into water), Kerry ends contact and the **chain stops**. This kills the Kerry romance. Getting caught by the NCPD means death `[F]`.

**I Don't Wanna Hear It** (`sq017_01_riot_club`) `[F]`

- **Rewards:** 587 XP, 1321 Street Cred.
- Meet Kerry at Riot in Little China at 7 pm.
- **Ways in:**
  - Buy tickets from a fanboy for €$45,000, or €$23,000 with the Streetkid intimidation.
  - Scan two VIPs for tickets.
  - Hack the VIP door (Intelligence).
  - Use the west door and ladder to get the Employee Badge.
  - A Technical check passes the huscle `[F]`.
- **KEY CHOICE: hear Us Cracks out, or force them to drop the deal** `[F]`.
  - Hearing them out: they become friends with Kerry and you take the photo (a Cool check allows a selfie).
  - Forcing them: they reach no agreement. In Off the Leash they sue and the club is empty.

**Off the Leash** (`sq017_02_lounge`) `[F]` `[G8:313905]`

- At Dark Matter, the scene depends on the previous choice (a promo event or an empty club).
- **Kerry romance requires a masculine body _and_ masculine voice.** He declines feminine V `[F]` `[F:Romance]` `[G8]`.
- **Rooftop lines** `[G8]`:
  1. "You can tell me."
  2. "But you did make it."
  3. "Maybe it's time you stopped being afraid."
  4. [Kiss Kerry] "Yes." or [Kiss Kerry] "Shadows'll fade before you."
- Afterwards, the joytoys Brittany Hayes and Logan Scott become available in the Dark Matter lounge `[F]`.

**Boat Drinks** (`sq028_kerry_romance`) `[F]` `[G8:313905]`

- About 24 hours after Off the Leash, meet Kerry at the Gold Beach Marina at 7 PM.
- On the yacht _Seamurai_, you can join in smashing the coffee machine, the painting and the record player, then break the pole.
- With a masculine body and voice, the kiss triggers the romance scene `[F]`.
- game8 also says to help destroy the yacht and tell him to "pencil you in for a round 2" `[G8]`.
- The boat burns; swim ashore and choose whether to go home with Kerry.
- **Achievement:** "To Bad Decisions!" `[F]`.
- **Reward:** a record-player memorabilia item (Patch 1.6+) `[F]`.

---

## 6. Panam side chain (decides The Star and the Panam Temperance)

### 6.1 Riders on the Storm (`sq004_riders_on_the_storm`) `[F]` `[G8:313991]` `[PPX]`

- **Unlock:** after Life During Wartime.
- **Rewards:**
  - 1158 XP, 1737 Street Cred.
  - **Overwatch**, Mitch's sniper rifle, given in the morning.
  - **Problem Solver**, an iconic Saratoga. It drops from the Wraiths Boss Hunter near the camp's main entrance and is missable `[F]` `[F:Problem Solver]`.
- **Flow:**
  1. At the Aldecaldo camp, Saul has been taken by the Wraiths.
  2. Use Mitch's drone to observe the gate, the tracks, the truck, the main building and the garage.
  3. **Take the SuperJet** from Mitch.
  4. Ride the van to the Corp-Bud Cement Factory. A dust storm is coming.
  5. Saul is in the basement of the main building. Exit through the maintenance tunnel.
  6. Shelter at the Ingalls Farm: restore power and use the external panel.
  - Clearing every Wraith in the camp gives unique dialogue `[F]`.
- **FAIL / DEADLINE:**
  - Fandom: starting the job and then leaving the area for too long makes Panam text that **Saul died**. The quest fails and **all follow-ups, the Panam romance and The Star ending are lost** `[F]`.
  - PowerPyx is more specific: after taking the SuperJet, drive with Panam to the camp right away. Driving the wrong way gets you kicked out of the car, and skipping time then fails the quest `[PPX]`.
- **Romance (masculine body)** `[F]` `[G8]`:
  - Side with Panam in her argument with Saul about selling out.
  - Touch her thigh on the couch; she rejects you for now.
  - Masculine V gets a kiss the next morning, or when asking about the previous evening.
  - game8 says riding with her to the camp also helps `[G8]` **(UNVERIFIED)**.
- **Unlocks** `[F]`:
  - With a Little Help from My Friends.
  - I'll Fly Away.
  - _Gun Music_ (named in the Fandom infobox).

### 6.2 I'll Fly Away (minor job, `mq001_scorpion`) `[F:I'll Fly Away]`

- **Giver:** Mitch. **Unlock:** after Riders on the Storm. Also needs that you did **not** abandon Panam in Life During Wartime `[F:Life During Wartime]`.
- **Flow:** drive Mitch's car to Scorpion's favourite collapsed bridge. Put the CHOOH2 canister in the passenger seat, light the rag, and watch the car go off the ramp.
- **Rewards:** 2303 XP, 3453 Street Cred, **Stinger**, and an Action Figure.
- **MISSABLE:**
  - Unavailable after the Queen of the Highway text from Mitch saying the Basilisk is ready `[F]`.
  - Also locked if _With a Little Help from My Friends_ is received first, because Mitch is then with Panam `[F:With a Little Help]`.
  - **Do it straight after Riders on the Storm.**
  - **(CONFLICT)** in timing wording: one Fandom page cites the Basilisk-ready text, the other cites receiving WALHFMF. Treat it as "before taking Panam's next call".

### 6.3 With a Little Help from My Friends (`sq027_01_baslisk_convoy`) `[F]` `[G8:314074]`

- **Rewards:** 1322 XP, 1981 Street Cred.
- **KEY CHOICES** `[F]`:
  - **Decline at first:** you can still join later at the Corp-Bud Railroad Station.
  - **Tell Saul (a hidden choice):**
    - Saul pays **€$42,940**. Panam angrily cuts contact.
    - **Queen of the Highway and The Star are lost.**
    - Saul's later parting gift is a red **"Bonewrecker"** (Mizutani Shion) at the Sunset Motel.
    - Do not do this on a Star/Panam run.
  - **Help:** get into the control tower (Technical door, Body rear door, or climb the generator to the balcony), find the **Punchcard** in a cabinet and insert it.
- **Romance (masculine V)** `[F]` `[G8]`:
  - In the tower talk, **don't** choose "Not doing it for free".
  - **Do** choose "Next time, try following that impulse". game8 also suggests "I missed you" and touching her hand.
  - At the campfire, "Gotten kinda cold" is **not** required. You can scoot closer and put an arm around her.
  - You can toast Scorpion and Jackie.
- **Morning raid:** ride alongside the locomotive and seize the Militech Basilisk. Shooting the coupler changes nothing `[F]`.
- Panam texts about your relationship afterwards `[F]`.

### 6.4 Queen of the Highway (`sq027_02_raffen_shiv_attack`) `[F]` `[G8:314079]` `[PPX]`

- **Rewards:** 1322 XP, 1981 Street Cred, and **Widowmaker** if Nash was not killed in Ghost Town `[F]`.
- **Start:** it starts after the previous job. You **must travel out of the camp and skip 24 hours**, then return to Panam `[PPX]`.
- **Flow:**
  1. Panam pilots, then you pilot through the Wind Farms. Shoot five targets.
  2. Both jack in.
  3. **Romance:** say the Basilisk is "cozy" and let Panam touch your thigh. This starts the romance scene `[G8]` `[F]`.
  4. The Raffen Shiv ambush you, then attack the camp.
  5. Saul asks Panam to co-lead. Drinks follow, then a **Relic malfunction**.
  6. You wake at the new camp in a tent and explain your condition.
  7. Kiss her goodbye if romanced `[F]`.
- **Completing it unlocks Panam as the ally for The Star (and Panam-Temperance)** `[F:Endings]` `[PPX]`.
- **Next:** _Fortunate Son_ `[F infobox]`.

---

## 7. Judy side chain (romance only; does not gate endings)

Romance requirement: **feminine body and feminine voice** `[F:Romance]` `[G8:313905]`.

### 7.1 Both Sides, Now (`sq026_01_suicide`) `[F]`

- **Unlock:** after Double Life, and only after calling Mr. Hands in M'ap Tann Pèlen.
- **Rewards:** 578 XP, 866 Street Cred.
- **Flow:** Evelyn is dead in the bathtub. Carry her body, then talk on the roof. Judy lets you keep the cigarette case.
- **Reveals:** Woodman kept Evelyn for three days and sold her to the Scavengers. Judy later texts that Evelyn is buried at the Columbarium `[F]`.
- game8: always accept Judy's calls immediately `[G8:313905]`.

### 7.2 Ex-Factor (`sq026_02_maiko`) `[F]`

- **Rewards:** 578 XP, 866 Street Cred.
- **MISSABLE / LOCK:** telling Judy the Clouds takeover is a bad idea removes the quest and **ends Judy's chain and romance** `[F]`.
- **Flow:** meet early morning at the Clouds balcony, then Maiko's office. Maiko refuses to join.
- **Iconic: Death and Taxes** (Nue pistol), on a table near the entrance of Maiko's office. If missed, it can be picked up later at Judy's apartment after Maiko messages `[F:Death and Taxes]`.
- **KEY CHOICE: Woodman revenge.** Only available if he survived Automatic Love `[F]`.
  - Maiko says he is on the maintenance level. Confront him; he is unrepentant and dies.
  - If V lets Judy do the killing, "she will hate herself for having become a killer" `[F]`.
  - If V threatens Maiko, the option to kill Woodman becomes unavailable `[F]` **(UNVERIFIED; Fandom marks it {{Verify}})**.

### 7.3 Talkin' 'bout a Revolution (`sq026_03_pizza`) `[F]` `[G8:313905]`

- **Rewards:** 578 XP, 866 Street Cred.
- **Flow:** the pizza meeting with Tom, Roxanne and Maiko. Reflexes and Body checks add dialogue. The "sparring" with Tom is scripted and can't be won `[F]`.
- **Choices:**
  - Commit to the plan with "You can count on me". Pulling out is recoverable by calling Judy `[F]` `[G8]`.
  - game8 romance tips: refuse the pay ("Out of the question") and don't burden her about the Relic ("Forget about it. It's passed.") `[G8]`. Fandom only notes you can tell her about the Relic `[F]`.
  - **Stay the night** on the couch `[F]` `[G8]`.

### 7.4 Pisces (`sq026_04_hiromi`) `[F]` `[G8:314242]`

- **Rewards:** 578 XP, 866 Street Cred. Maiko's bribe ranges from €$0 to €$37,200: €$27,900 base, €$37,200 with the Streetkid haggle `[F]`.
- **Flow:**
  1. Clear the Tyger Claws on the Megabuilding maintenance level.
  2. Take the freight elevator to the roof and drop onto Hiromi's balcony.
  3. In the office, Maiko reveals she is betraying the plan in front of the bosses Hiromi Sato, Jun Azegami and Marcus Ichida `[F]`.
- **Iconic: Tsumetogi** (katana). It is on the display; you can grab it before the dialogue starts, or take it from Hiromi when he is neutralised `[F:Tsumetogi]`.
- **KEY CHOICE** `[F]` `[G8]`:

| Choice                                 | Judy's reaction                               | Fate of Clouds                                                             | Pyramid Song                |
| -------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- | --------------------------- |
| Side with Maiko **and take the money** | Judy cuts ties and leaves NC                  | Clouds is no better under Maiko                                            | **LOCKED; no Judy romance** |
| Side with Maiko, refuse the money      | Disappointed but accepts it                   | Clouds is no better under Maiko                                            | Open (Judy sad later)       |
| Side with Judy, kill Maiko             | Judy is shocked                               | Tyger Claws retake Clouds; Tom killed, Roxanne in hiding                   | Open                        |
| Side with Judy, Maiko left alive       | Judy is pleased; feminine V gets a cheek kiss | The dolls run Clouds; Tom is still killed in retaliation and Roxanne flees | Open                        |

- game8's romance page recommends a specific line ending in killing Maiko. Its Pisces page agrees that only "accept payment" locks Pyramid Song, so killing Maiko is optional `[G8:313905]` `[G8:314242]`.

### 7.5 Pyramid Song (`sq030_judy_romance`) `[F]` `[G8:314253]`

- **Unlock:** if you did not side with Maiko and take her money. Meet at the lake shack at Laguna Bend at **sunrise** `[F]`.
- **Flow:**
  1. Calibrate the dive suit.
  2. Dive to the drowned town. Scan the restaurant, her home, the gas station and the church. Give Judy the camera.
  3. Relic malfunction; Judy does CPR.
  4. Start the generator, then the bathroom talk.
- **Romance (feminine V):**
  1. "Why not" to staying the night.
  2. Kiss her.
  3. In the morning, anything except **"A pleasant distraction"**. game8 suggests "The beginning of something amazing." `[F]` `[G8]`.
- **Outcomes** `[F]`:
  - "A pleasant distraction": Judy leaves Night City and deletes V.
  - Romanced: Judy stays, and V gets apartment access.
  - Not romanced or masculine V, and you stay until morning: Judy leaves NC and gives V her apartment.
  - **Leave while she sleeps (Johnny's advice): Judy disappears and deletes V** `[F]`.
- **Rewards** `[F]`:
  - **Mox** shotgun, left on her kitchen counter. It is there right away if not romanced, or after a text a few days later if romanced.
  - Romance-only: MaxTac helmet, jacket and pants at her apartment.
  - Memorabilia: the diving box and the Laguna Bend photo.
  - Underwater: the **Heart of Laguna Bend** and a cross necklace on the church steps.

---

## 8. River / Peralez chain

### 8.1 I Fought the Law (`sq012_lost_girl`) `[F]`

- **Giver:** Elizabeth Peralez. **Unlock:** after Life During Wartime.
- **Rewards:** 2826 XP, 4238 Street Cred, Peralez Campaign Poster memorabilia.
- **Flow:**
  1. City Hall braindance: Péter Horváth, River Ward, and the "Red Queen's Race".
  2. Meet River at Chubby Buffalo's.
  3. Two leads:
     - Neil White at Max-imum Pleasure (use the "Igor" line).
     - Christine Markov at the Cherry Blossom Market.
  4. Tyger Claws are at River's car.
     - Stay quiet, or "jump" when asked, and they leave.
     - Non-lethal or quiet handling pleases River.
  5. The Red Queen's Race (Charter Hill, Animals): the entrance is in a shipping crate.
     - The boss upstairs can be choked out and interrogated.
     - The computer reveals Holt and Han.
     - Interact with **the braindance wreath** in the booth.
  6. Confront Han.
  7. Visit the Peralezes. Johnny advises you to withhold; you can tell them or withhold. They pay either way.
- **Unlocks:** Dream On, The Hunt, Sweet Dreams `[F infobox]`.

### 8.2 Dream On (`sq006_dream_on`) `[F]`

- **Rewards:** 2475 XP, 3711 Street Cred.
- **Flow:**
  1. Investigate the Peralez apartment. Elizabeth's memories are inconsistent.
     - Get into the hidden room with Body 9, code **6709** at the control-room computer, or the roof hatch.
  2. On the roof, find the Militech-style transmitter and line of sight to a van.
  3. **Chase the van (Emperor 620 Ragnar)** from Japantown to the Maelstrom compound near All Foods.
     - Losing the van ends the quest early with a lesser payout.
     - Incapacitated agents' heads explode (Project Condin).
  4. Elizabeth at the Yagami Market ramen shop asks you not to tell Jefferson.
  5. Jefferson waits at Reconciliation Park. An unknown caller (Mr. Blue Eyes) warns V `[F]`.
- **KEY CHOICE: tell Jefferson the truth or lie** `[F]`:
  - Truth: he plays along with his manipulators while seeking exposure.
  - Lie (blame Holt): he focuses on winning first.

### 8.3 The Hunt (`sq021_sick_dreams`) `[F]` `[G8:313996]`

- **Rewards:** 2598 XP, 3896 Street Cred, **Tinker Bell** (missable).
- **Flow:**
  1. Watch the news clip (Peter Pan / Anthony Harris; Randy's shoes).
  2. **NCPD Lab:** enter through the Technical door on the left, the Body door on the right, or over the wall from a container. Find Harris's file. Yawen Packard is blackmailed.
     - Romance: back River in the timed lines, "Hasn't let me down yet." and "I wanna see for myself.", plus "River's all right." to Johnny `[G8]`.
  3. **Joss's trailer (Randy's room):**
     - Take the key from the shelf to open the cabinet.
     - Get the computer password from the record player, or hack it with Intelligence.
     - On the Net tab, red-people image → "Join Us" → Files, and replay the video. River sends it to Yawen.
     - Optionally find Harris's IP (high Intelligence).
     - Sleep. Romance: "Sign me up for that beer." in the car `[G8]`.
  4. **Three braindances.** Find enough clues `[F]`:
     - School: 3 visuals.
     - Childhood barn: 7 visuals.
     - Adulthood barn: 13 visuals, including the "towers of light", plus AV sounds on the audio layer.
     - If you have visited Edgewood Farm before, scanning the skyline or the towers lets V recognise it instantly `[F]`.
- **KEY CHOICE: which farm. Pick EDGEWOOD FARM** `[F]` `[G8]`.
  - Poppy Farm (wrong): Wraiths, then Randy is found dead. River blames V and kills Harris alone, then texts a goodbye. Later he ends up in jail (credits message). **Following the River is locked and River cannot be romanced** `[F]`.
  - A HUD bug can show "Entering a new area: Edgewood Farm" during the BDs `[F]`.
- **At Edgewood Farm:**
  - Mines, four turrets and cameras.
  - The switch under the house desk opens a hidden room; its computer disables the turrets and cameras. Tinker Bell is nearby. The Fandom weapon page says "control room" — **(CONFLICT, minor)**.
  - Climb the ladder on the barn's left to the roof opening and switch off the BD machine.
  - Help the other victims (two survive).
  - **Leaving the area kills both River and Randy** `[F]`.
- **Final talk:** **do not pick "count me out"** if you want the romance. game8 says pick "I'll help you." `[F]` `[G8]`.

### 8.4 Following the River (`sq029_sobchak_romance`) `[F]` `[G8:313905]`

- **Start:** reply to River's text (game8 suggests "How about a new record?"), then accept the dinner invite.
- **Flow:** jambalaya, the AR game with the kids (you can let them win), then the water tower.
- **Rewards:** River gives **Crash** (his revolver), plus the _Big Trouble in Heywood_ AR box memorabilia, and River's tank top if romanced. The Kutcher home unlocks as an apartment `[F]`.
- **Romance requirement:** feminine body, any voice `[F:Romance]`.
  - **(CONFLICT, minor)** The Fandom Following the River page words the Joss scene as "feminine voice and body". The Romance page and game8 say any voice.

---

## 9. Delamain chain `[F]`

- **Human Nature** (`sq025_0_pickup`): a divergent Delamain cab rams V's Archer Hella in the H10 lot. The car is repaired about 6 in-game hours after Playing for Time; skipping time does not speed this up `[F:Human Nature]`.
- **Tune Up:** visit Delamain HQ in Vista del Rey and receive €$4,900 compensation `[F:Tune Up]`.
- **Epistrophy:**
  - HQ tour. **Harming the clients in reception fails the quest** `[F]`.
  - Find **7 divergent cabs** in Wellsprings, North Oak, Coastview, Rancho Coronado, Northside, Badlands and the Glen, using Delamain's scanner. Return them for €$4,900.
  - **MISSABLE:** destroying any cab fails the job and **locks the rest of the chain** `[F]`.
- **Don't Lose Your Mind** (`sq025b_delamain_insurgence`):
  - **Trigger:** a traffic jam on the Corpo Plaza ring road, or about 48 hours after Epistrophy.
  - **HQ entry:** a Technical side door or the roof hatch. Terminal code **1234** or Intelligence.
  - **Drones:** they patrol the workshop and fight each other.
  - **KEY CHOICE: what to do with the core** `[F]`:
    - **Reset** the original Delamain. He loses his memory but gives V a cab. Johnny dislikes it.
    - **Hack** the core: needs **20 Intelligence** per Fandom. This merges the cabs into one entity that leaves NC and gives V "Junior". Johnny approves.
    - **Destroy** the core: frees the divergent cabs. "Excelsior" stays with V. Johnny strongly approves.
  - **Rewards:** Delamain No. 21, plus an autonomous Delamain Cab from Patch 2.3 onward `[F]`.
  - Skipping to Phantom Liberty auto-completes this job with the core reset `[F]`.

## 10. Mama Welles: Heroes (`sq018_jackie`) `[F:Heroes]`

- **Availability depends on Jackie's body choice in The Heist:**
  - Sent to his family, or Delamain told to wait: the **ofrenda** at El Coyote Cojo.
    1. Mama Welles gives you the garage key.
    2. Misty is at the garage. **Find the key to Jackie's room on the desk** to reveal the mandala.
    3. Pick an offering: Jackie's Book, a basketball, a tequila bottle, or a leather belt.
    4. Scan the pin-up posters for memorabilia.
    5. **Convince Misty to join** before leaving the garage. This improves the Misty–Mama Welles relationship.
    6. Sit with Viktor and give your speech.
    7. Receive the **key to Jackie's ARCH** (motorcycle).
  - Sent to Viktor: no ofrenda. Three days later a package with the ARCH key arrives at V's apartment. Viktor says Arasaka took the body; a Jackie engram appears in some endings.
- **Rewards:** 300 XP, 446 Street Cred, Jackie's ARCH.
  - **La Chingona Dorada** (Jackie's twin Nue pistols): on the ofrenda altar **24 hours after** leaving the Coyote Cojo. Missable if forgotten; also sold by Herold Lowe `[F:La Chingona Dorada]`.
- **Streetkid lifepath:** unlocks _Small Man, Big Mouth_ next.
- **Epilogue:** completing Heroes adds Mama Welles voicemails that vary by ending `[F:Endings]`.

---

## 11. Romance requirement summary `[F:Romance]` `[G8:313905]`

| Partner | Body      | Voice     | Chain                                                                                                               | Lock-out risks                                                                                             |
| ------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Judy    | Feminine  | Feminine  | Both Sides, Now → Ex-Factor → Talkin' 'bout a Revolution → Pisces → Pyramid Song                                    | Refusing in Ex-Factor; Maiko plus money in Pisces; "pleasant distraction" or leaving early in Pyramid Song |
| River   | Feminine  | Any       | I Fought the Law → The Hunt → Following the River                                                                   | Wrong farm or "count me out" in The Hunt; leaving Edgewood                                                 |
| Panam   | Masculine | Any       | (Ghost Town/Life During Wartime choices) → Riders on the Storm → With a Little Help → Queen of the Highway          | Saul dies (Riders); telling Saul; "Not doing it for free"; Nash refusal per game8 **(CONFLICT)**           |
| Kerry   | Masculine | Masculine | Holdin' On → Second Conflict → A Like Supreme → Rebel! Rebel! → I Don't Wanna Hear It → Off the Leash → Boat Drinks | Abandoning Kerry in Rebel! Rebel!                                                                          |

- Lifepath and genitalia don't matter `[F]`.
- With matching body and voice, V can hold **two** romances at once with no penalty `[F]`:
  - Masculine V: Panam + Kerry.
  - Feminine V: Judy + River.
- Only one partner can be called on the rooftop `[F]`.
- **Ending behaviour** `[F:Romance]`:
  - Panam and Judy stay with V only in The Star.
  - River and Kerry wait for V in The Sun or The Devil.
  - The Tower ends all romances except a possible Kerry reunion.
- Rogue (via Johnny, Blistering Love) and Alt (Never Fade Away) are romantic encounters, not relationships `[F:Romance]`.

## 12. Ending-gate checklist (things to do before Nocturne Op55N1)

| Ending                          | Act 2 requirement                                                                                                                                             | Source                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| The Devil (Arasaka)             | Always available. **The achievement needs Takemura saved** (Search and Destroy). Oda appears only if spared **and** Takemura alive                            | `[F:Endings]` `[PPX]`       |
| The Star (Aldecaldos)           | Complete Queen of the Highway                                                                                                                                 | `[F]` `[PPX]`               |
| The Sun (Rogue)                 | Correct Chippin' In grave dialogue, then complete Blistering Love                                                                                             | `[F]` `[PPX]`               |
| Temperance                      | Panam or Rogue path unlocked (or the secret path), then let Johnny keep the body                                                                              | `[F]`                       |
| Secret: (Don't Fear) The Reaper | Chippin' In three-line set; wait about 5 min (5:08) on the rooftop; "Let's hear this plan" → "[Attack Arasaka Tower] Means goin' out with a bang – I like it" | `[F]` `[G8:314736]` `[PPX]` |

Notes on the secret ending:

- **Not** affinity based.
- **(CONFLICT)** on whether Blistering Love is also required; see §5.2.
- Saving is disabled during it. Max health drops 25% and then about 1% more per interval.
- **(CONFLICT)** on autosaves:
  - Fandom says checkpoint autosaves exist (start, mainframe level, pre-Smasher), but death rolls credits.
  - PowerPyx says it is "one try only" (reload the rooftop save).
  - game8 says "credits will roll and you'll have to go back to a previous file".
- In the modified Sun ending, Rogue survives `[F:(Don't Fear) The Reaper]` `[G8:314736]`.

## 13. Missables quick list (Act 2 scope)

**Iconic weapons and items:**

- Lizzie and Cocktail Stick (Automatic Love).
- Cottonmouth (The Space in Between).
- Errata (Disasterpiece).
- Prototype: Shingen Mark V, container 667 (Gimme Danger).
- Genjiroh, code 2906 (Play It Safe).
- Jinchu-Maru, from Oda.
- Butcher's Cleaver (M'ap Tann Pèlen).
- Sasquatch's Hammer (I Walk the Line).
- Timeworn Trench Coat (Transmission, NetWatch branch, game8 only).
- Widow Maker (Ghost Town or Queen of the Highway).
- Archer Quartz "Bandit" (refuse to help with Nash).
- Problem Solver (Riders on the Storm).
- Death and Taxes (Ex-Factor, recoverable later at Judy's).
- Tsumetogi (Pisces).
- Tinker Bell (The Hunt).
- Gold-plated baseball bat and Doom Doom (Second Conflict).
- Porsche 911 (Chippin' In).
- La Chingona Dorada (Heroes, after 24 hours).
- Phantom Liberty's Herold Lowe sells most of these if missed `[F]`.

**Quest lock-outs:**

- Love Rollercoaster: gone after Double Life.
- I'll Fly Away: do it right after Riders on the Storm, and don't abandon Panam in Life During Wartime.
- Riders on the Storm: fails if you leave or skip time (Saul dies).
- With a Little Help: telling Saul.
- Ex-Factor: refusing Judy.
- Pisces: Maiko plus money.
- The Hunt: wrong farm.
- Epistrophy: destroying a cab.
- Rebel! Rebel!: leaving Kerry.
- Chippin' In: grave dialogue.
- Search and Destroy: Takemura.
- Woodman's fate in Automatic Love: decides whether the Ex-Factor revenge exists.

**Fixed outcome:** Evelyn always dies; no choice prevents it `[F:Evelyn Parker]`.

## 14. Open items / to verify in-game on Switch 2 (2.5)

1. Clouds opening time (5 pm vs 6 pm).
2. The XBD price.
3. Sasquatch's bounty (15k vs 16k).
4. Whether the Nash choice affects the Panam romance.
5. Whether Blistering Love is needed for the secret ending.
6. Secret-ending checkpoint behaviour.
7. The Tapeworm trigger count (three vs four).
8. The Fingers ripperdoc lock-out relevance in 2.x.
9. The Timeworn Trench Coat drop.
10. Exact 2.x attribute thresholds. IGN's numbers look like 1.x.
11. The Switch 2 release date of 2.5 (Oct 26 vs Oct 27).

---

## 15. Additions for the side-chain pages (read 2026-10-29 through the Fandom API)

Source form: `https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`.

- **Human Nature** `[F:Human_Nature]`: reading the H10 Administration message is an optional objective of Playing for Time. If you fetch the car before finishing Playing for Time, Johnny is more hostile. Next job: Tune Up.
- **Tune Up** `[F:Tune_Up]`: Delamain HQ is on Pajaro street, Vista del Rey (Heywood). Cutting the queue: a client calls V out; a Body-gated reply appears only with enough Body. Delamain pays €$4,900, then Epistrophy starts.
- **Epistrophy** `[F:Epistrophy]` and its seven sub-pages `[F:Epistrophy:_<District>]`:
  - Follow the Bombus drone through the factory, take Delamain's Scanner, leave the garage. Damaging a cab triggers a warning text; destroying one fails Epistrophy and the rest of the chain.
  - Wellsprings: the cab that wrecked V's car ("Beep-beep, motherfucker!") turns hostile; **damage it until it surrenders** (deactivate, not destroy). €$1,640.
  - North Oak: roundabout near the North Oak Sign. The anxious cab lets V drive it back to HQ; **Auto Drive is disabled**, drive slowly; too much damage fails this and Epistrophy. €$1,640.
  - Coastview: patrols near the Grand Imperial Mall / Pacifica Serenity Bible Church; stay within signal range; a Maelstrom ambush at the underpass near the Dogtown border. €$1,640.
  - Rancho Coronado: "Clarice" asks V to destroy 8 flamingos in the neighbourhood; stay within signal range.
  - Northside: corrupted location on Eisenhower street; the cab hides in a small storage facility near Eisenhower / Longshore North and flees; follow it until it crashes into a shack.
  - The Glen: intersection of Hanford and McBride; the cab tries to drive off the viewpoint; talk it down. Pushing it off the edge with your own car also counts as a success.
  - Badlands: Municipal Landfill, Red Peaks. Get in the cab, listen, get out.
  - After all seven: return to HQ, put the scanner in the box, receive €$4,900.
- **Don't Lose Your Mind** `[F:Don't_Lose_Your_Mind]`: the radio can mention the Corpo Plaza traffic jam (three cabs blocking a Kaukaz truck). In the control room each divergent cab pleads to be freed and the original asks for a reset. Reset: Delamain loses his memory and gives V a cab from the fleet. Hack (Intelligence 20): a single entity leaves NC and leaves "Junior". Destroy: the cabs flee and "Excelsior" stays behind in the hangar. A Cerberus-chip AI (Militech Canto / Erebus) comments if installed.
- **Heroes** `[F:Heroes]`: giver Mama Welles (Guadalupe Alejandra Welles) by call after V recovers. Jackie's garage is in the alley behind El Coyote Cojo. The blue door needs the Key to Jackie's Room (on the desk). Several gig characters attend (Gustavo Orta and Martha Young, the Fuscinos, Ernesto Muñoz). Optional talks: bartender Pepe Najarro, Viktor, the Valentinos, Padre. Reward 300 XP, 446 Street Cred, Jackie's ARCH; posters for V's apartment by scanning the pin-ups.
- **Second Conflict** `[F:Second_Conflict_(quest)]`: Nancy Hartley is Bes Isis. The Totentanz club entrance is on the third floor. With Royce alive the objectives include "Steal the data". After Totentanz, drive with Nancy to N54 News, call Kerry, then Denny's mansion: the gate is locked and the intercom unanswered, so trespass. Choosing Denny: Henry leaves. Choosing Henry: Denny kicks everyone out.
- **Holdin' On** `[F:Holdin'_On]`: Johnny heard Kerry is depressed and attempted suicide. Kerry is in the shower when V enters the villa. Nancy has been missing for two days.
- **Both Sides, Now** `[F:Both_Sides,_Now]`: Judy's building is on Charter street, Northside. Judy calls the NCPD, who won't come.
- **Ex-Factor** `[F:Ex-Factor]`: Clouds is in Megabuilding H8; the balcony is on the 12th floor; let Judy do the talking. If Woodman was killed in Automatic Love, Judy decides to call Maiko the next day instead. Judy recruits former dolls afterwards.
- **Rebel! Rebel!** `[F:Rebel!_Rebel!]`: Foodscape at Manzanita / Mallagra, Rancho Coronado; outside 12:30–3:30 AM V waits on a chair. Kerry drives a borrowed Thorton Galena. After the escape, drop Kerry on Montenegro street (dialogue says Carnitas) and accept coffee at Capitán Caliente to get the €$21,470 text; declining means he "will send the payment later". Escaping then leaving: Kerry goes home alone and stays in contact.
- **Off the Leash** `[F:Off_the_Leash_(quest)]`: the elevator bouncer lets V in as Kerry's guest. In the promo version Kerry introduces V as his "right hand" and introduces Spector Cheng (a "friends and family" discount). Feminine V's kiss attempt is politely declined.
- **Following the River** `[F:Following_the_River]`: fetch the rice (Joss is inside), option to halt the talk about his parents, AR game with Monique and Dorian; Crash on the water tower. Not romanced: drinks and a hangover in the trailer. Joss later texts a photo from the hospital.
- **The Hunt** `[F:The_Hunt]`: River calls, then picks V up in his truck. Randy Kutcher is River's nephew; Joss Kutcher is his sister. Anthony Harris ("Peter Pan") is comatose after the NCPD shot him, hence the braindance of his dreams.

## 16. Additions checked by the Act 2 main-job writer (Fandom API, 2026-10-29)

Read through `https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1`:

- `[F:Automatic Love]`: Woodman's office is reached through a restricted part of Clouds; Evelyn's jacket in the dressing room is only a scannable prop (Johnny comments). The backroom reached from the exterior walkway (or the Body door by the bathroom) holds one Tyger Claw with an access card and an elevator to the VIP backroom. Guards spot V if V lingers in front of the glass window.
- `[F:Oswald Forrest]`: Woodman tells V he sold Evelyn to the ripperdoc Fingers (Finn Gerstatt) when he could not help her.
- `[F:Double Life]`: if V has advanced the Transmission line first, V smokes automatically. BD1 also shows vévé markings around the altar (Pacifica clue).
- `[F:M'ap Tann Pèlen]`: the contact at the altar is Alexandre Batisma; the butcher-shop vendor is John Milard. Mr. Hands says the Voodoo Boys are not interested in V but have a job; doing it earns an audience with Brigitte.
- `[F:I Walk the Line]`: garage has about three Animals at the entry and five further in (two leave, three grouped in the left corner). Atrium: about six Animals on the upper gallery, 12–18 on the lower floor, plus a turret. The van sits roughly in the middle of the far side, lower floor; a side room holds a server cabled to the van; three alert Animals stand by the van. If V fought in the atrium, Placide opens a route to the cinema. The film on screen is _One-Eyed Jacks_.
- `[F:Sasquatch]`: €$15,000 bounty. If defeated, V can mention her to Angie in the side job _No Easy Way Out_.
- `[F:Placide]`: immune to the System Collapse quickhack. His equipment table lists the Timeworn trench coat (clothing), a M2038 Tactician, a Machete and the Chapel Access Token (supports game8's Timeworn Trench Coat claim for the NetWatch branch).
- `[F:Never Fade Away (quest)]`: full objective list (Grab the microphone → … → Talk to Thompson); at the Atlantis an optional "Ask around for Rogue"; in the Tower, destroy two turrets, open the mainframe door, arm explosives, find Alt, defeat agents, check on Alt. The memory is stated to be inaccurate (Johnny's version).
- `[F:Akira]`: Arasaka bodyguard in the 2013 memory, guarding Toshiro and Alt at the mainframe.
- `[F:Omega blocker]`: V takes the Omega blockers after completing Transmission.
- `[F:Sandayu Oda]`: at the docks (Down on the Street) Oda comes alone by car, tells V to stop talking once he realises V saw Konpeki, and warns he will show no leniency at a second meeting. Smasher's lines in the endings: spared → "Mercy is disgusting"; killed → "You killed Oda? Good! He was useless."
- `[F:Nash]`: the Raffen Shiv hideout of the Ghost Town branch is the Corp-Bud Mine. Abilities: Combat Stim, Sandevistan Mk.2, Kerenzikov, Charge Jump, Biohazard Grenades. If spared, he dies attacking the nomad camp in Queen of the Highway.
- `[F:Ghost Town]`: Panam's car is the Thorton Mackinaw "Warhorse"; the 6th Street client is Boz; the cargo is Betahaloperidol; bartender Noah at the Sunset Motel. Objective "Collect €$15,000" appears if V lacks the money.
- `[F:Lightning Breaks]`: enemies listed: Kang Tao, drones, Kang Tao robots. Panam fires a Techtronika T40 Uragan.
- `[F:Life During Wartime]`: the AV is a Zetatech Surveyor; the gas station is the SovOil Fuel Station (Highway 101); the crash is near the Jackson Plains Regional Airport. Optional objective "Defeat the Kang Tao Operatives on the Airstrip" on the tracks branch.
- `[F:Hotel Pistis Sophia]`: West Wind Estate, Pacifica, Santa Maria St.; Johnny hid his army dog tags in the room in 2003.
- `[F:Plan B]`: magazine 20, headshot multiplier 200%, 10% Bleeding chance; €$1 per shot.
- `[F:Search and Destroy]`: Gillean Jordan (N54 News) can be met at Redwood Market recording a piece on the parade attack.
- Spanish wiki (`https://cyberpunk.fandom.com/es/api.php`): no Act 2 quest pages exist, so no Latin-American quest names could be verified.
