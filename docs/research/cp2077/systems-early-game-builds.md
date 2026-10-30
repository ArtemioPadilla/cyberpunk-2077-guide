# Research notes: early-game priorities (Watson, Act 1), 2.x hacker systems, builds, Switch 2 combat settings

Target: Cyberpunk 2077: Ultimate Edition, Nintendo Switch 2, Update 2.5. Notes compiled 2026-10-30.
Reader profile: Act 1, after _The Pickup_ with Brick spared. Plays on Switch 2 with gyro, wants hacking/netrunning, has weak aim.

How to read these notes:

- Every bullet ends with a source tag. **[W:Page]** = Cyberpunk Fandom wiki page, read through the API. **[G8:id]** = game8.co article id. **[IGN:Page]** = IGN wiki page. **[PPX]** = PowerPyx. **[CDPR:id]** = cyberpunk.net news id. **[OV]** / **[M1]** = the existing notes `00-overview.md` / `main-1-prologue-act1.md` (not re-read at source today).
- **(UNVERIFIED)** = one source only, an old page, or my inference. **(CONFLICT)** = sources disagree; both sides given. **(PRE-2.0, OBSOLETE)** = the source describes the 1.x game and is wrong for 2.5.
- **(inference)** marks advice I derived from the facts, not something a source says.
- **Age of the guide sites:** game8 build pages were updated May 2025 (post-2.0, pre-2.5). IGN's netrunner build is from Oct 2023 (2.0). **Every PowerPyx page I opened is dated Dec 2020 (patch 1.0x) and is obsolete for 2.x systems.** The game8 Beginner's Guide and "Double Jump or Super Jump?" pages also still carry 1.x text.

## Sources read (URLs)

Fandom wiki, `https://cyberpunk.fandom.com/api.php?action=parse&page=<Page>&prop=wikitext&format=json` (with `&redirects=1`), `page=` values:

- Systems: Cyberpunk_2077_Attributes, Intelligence, Technical_Ability, Body, Reflexes, Cool, Relic_(attribute), Cyberpunk_2077_Skills, Cyberware_Capacity (redirects to the Stats page), Cyberpunk_2077_Cyberware, Cyberdeck, Cyberpunk_2077_Quickhacks, Cyberpunk_2077_Smart_Weapons (redirects to the Weapons page), Smart_Link, Street_Cred, Cyberpunk_2077_Character_Customization, Tabula_e-Rasa, Phantom_Liberty, Cyberpunk_2077_Vendors, Ripperdoc, Watson_(2077), The_Heist
- Patches: Update_2.5, Patch_2.0, Patch_2.1, Patch_1.5
- Intelligence perks: Optimization, Overclock, Spillover, Queue_Mastery, Hack_Queue, Queue_Acceleration, Proximate_Propagation, Siphon, Embedded_Exploit, Data_Recycler, Feedback_Loop, Smart_Synergy, Target_Lock_Transfer, Counter-A-Hack, Icepick, Encryption, System_Overwhelm, Shadowrunner, Sublimation, Power_Surge, Blood_Daemon, Copy-Paste, Eye_In_The_Sky, Forcekill_Cypher, No_Escape, Race_Against_Mind, Recirculation, Speculation, Subordination, Terminal_Velocity, Warning:_Explosion_Hazard, Precision_Subroutines, Targeting_Prism, Queue_Hack_Root, Queue_Prioritization, Acquisition_Specialist, Carhacker, Finisher:_Live_Wire
- Technical Ability perks: License_To_Chrome, Edgerunner_(perk), Chrome_Constitution, Built_Different, Chipware_Connoisseur, Driver_Update, Ambidextrous, All_Things_Cyber, Cyborg_(perk), Extended_Warranty, Glutton_For_War, Health_Freak, Renaissance_Punk
- Cool / Reflexes / Body perks: Double_Trouble, Keep_'Em_Comin', Triple_Tequila, Splash_Of_Love, Two_Right_Hands, Ninjutsu, Feline_Footwork, Creeping_Death, Vanishing_Act, Shinobi_Sprint, Killer_Instinct, Focus, Deadeye_(perk), Slippery, Dash, Air_Dash, Painkiller, Adrenaline_Rush, Juggernaut, Comeback_Kid
- Relic perks: Jailbreak, Data_Tunneling, Emergency_Cloaking, Sensory_Protocol, Vulnerability_Analytics, Machine_Learning, Launch_Capacity_Override, Limiter_Removal, Spatial_Mapping
- Cyberdecks: Militech_Paraline, Arasaka_Shadow, Tetratronic_Rippler, Biotech_Σ_(cyberdeck) (URL-encoded), Raven_Microcyber, NetWatch_Netdriver, Militech_Canto
- Other cyberware: Reinforced_Tendons, Fortified_Ankles, Lynx_Paws, Ballistic_Coprocessor, Basic_Kiroshi_Optics, Kiroshi_Sentry_Optics, Kiroshi_Stalker_Optics, Kiroshi_Doomsayer_Optics, Kiroshi_Clairvoyant_Optics, Kiroshi_The_Oracle_Optics, Kiroshi_Cockatrice_Optics, Behavioral_Imprint-synced_Faceplate, RAM_Upgrade, Ex-Disk, Camillo_RAM_Manager, Memory_Boost, Bioconductor, Mechatronic_Core, Newton_Module, Self-ICE, Kerenzikov_Boost_System, COX-2_Cybersomatic_Optimizer, RAM_Reallocator, Quantum_Tuner, Axolotl, Chrome_Compressor, Optical_Camo, Feen-X, RAM_Recoup, Heal-On-Kill, Pain_Editor, Subdermal_Armor, Synaptic_Accelerator, Kerenzikov
- Quickhacks: Short_Circuit, Overheat, Contagion, Synapse_Burnout, Cyberpsychosis_(quickhack), System_Collapse, Suicide, Memory_Wipe, Reboot_Optics, Ping
- People, jobs, items: Viktor_Vektor, Cassius_Ryder, Charles_Bucks, Regina_Jones, Yoko_Tsuru, Paid_in_Full, Psycho_Killer, Last_Call, Gig:_Last_Login, Skippy, Overture, Kiroshi_Optics (company page; not useful)
- Rendered table: `action=parse&page=Cyberpunk_2077_Gigs&prop=text&section=1`
- Category lists (`action=query&list=categorymembers&cmtitle=Category:…`): Cyberpunk_2077_Perks_-_Intelligence, Cyberpunk_2077_Perks_-_Technical_Ability, Cyberpunk_2077_Perks_-_Relic, Cyberpunk_2077_Attributes, Cyberpunk_2077_Quickhacks, Cyberpunk_2077_Cyberware_-_Operating_System, Cyberpunk_2077_Cyberware_-_Cyberdecks, Cyberpunk_2077_Cyberware_-_Face, Cyberpunk_2077_Cyberware_-_Frontal_cortex
- Searches (`action=query&list=search&srsearch=`): "attribute reset", "respec perks", "level cap 60", "Smart Link required", "aim assist", "gyro", "netrunner vendor Watson quickhacks"
- Missing on the wiki (`missingtitle`): Attributes, Quickhacks, Smart_weapons, Level, Perks, Respec, Experience, Last_Login (the gig is at "Gig:_Last_Login")

game8.co:

- https://game8.co/games/Cyberpunk-2077 (hub)
- https://game8.co/games/Cyberpunk-2077/archives/309681 (Best Builds, updated 2025-05-13)
- https://game8.co/games/Cyberpunk-2077/archives/314513 (Netrunner Build, 2025-05-09)
- https://game8.co/games/Cyberpunk-2077/archives/320906 (Smart Weapons Build, 2025-05-09)
- https://game8.co/games/Cyberpunk-2077/archives/313713 (How to Respec, 2025-05-14)
- https://game8.co/games/Cyberpunk-2077/archives/312850 (Money, 2023-12-05)
- https://game8.co/games/Cyberpunk-2077/archives/315155 (Best Cyberware and Cyberdeck, 2025-05-09)
- https://game8.co/games/Cyberpunk-2077/archives/314454 (Ripperdoc Locations, 2023-10-12)
- https://game8.co/games/Cyberpunk-2077/archives/313866 (Beginner's Guide, 2025-04-23, but 1.x text)
- https://game8.co/games/Cyberpunk-2077/archives/313894 (Settings Guide, 2023-12-06)
- https://game8.co/games/Cyberpunk-2077/archives/314075 (Double Jump or Super Jump?, 2020-12-13)
- https://game8.co/games/Cyberpunk-2077/archives/393573 (Is Dual Wielding Possible?, 2022-10-17)
- https://game8.co/games/Cyberpunk-2077/archives/309677 (List of Cyberware; no prices found)

IGN:

- https://www.ign.com/wikis/cyberpunk-2077/Best_Netrunner_Build (2023-10-12)
- https://www.ign.com/wikis/cyberpunk-2077/Cyberware (2025-06-02)
- https://www.ign.com/wikis/cyberpunk-2077/Tips_and_Tricks (2022-12-30, 1.x)
- https://www.ign.com/wikis/cyberpunk-2077/Paid_in_Full (2025-05-06)
- https://www.ign.com/wikis/cyberpunk-2077/How_to_Dual_Wield (2026-10-23)
- https://www.ign.com/wikis/cyberpunk-2077/All_Cyberpunk_2077_2.5_Updates_and_Changes (2026-10-21)
- https://www.ign.com/wikis/cyberpunk-2077/The_Heist_Walkthrough and https://www.ign.com/wikis/cyberpunk-2077/Act_1 (the "Recommended Level" cell did not render: **no level found**)
- Probed, 404: How_to_Double_Jump, Reinforced_Tendons, Best_Cyberware, Ripperdocs, Best_Smart_Weapon_Build, Best_Stealth_Build, Smart_Weapons, Quickhacks, How_to_Respec, Iconic_Weapons, Nintendo_Switch_2, Controls and others.

PowerPyx (all Dec 2020, patch 1.0x):

- https://www.powerpyx.com/cyberpunk-2077-wiki-strategy-guide/ (hub)
- https://www.powerpyx.com/cyberpunk-2077-how-to-reset-attributes-skills-perks/
- https://www.powerpyx.com/cyberpunk-2077-what-is-max-level/
- https://www.powerpyx.com/cyberpunk-2077-fast-money-guide/
- https://www.powerpyx.com/cyberpunk-2077-all-ripperdoc-locations/
- PowerPyx has no 2.x build guide that I could find (site search and hub list).

cyberpunk.net:

- https://www.cyberpunk.net/en/news/51566/cyberpunk-2077-ultimate-edition-is-out-on-nintendo-switch-2 (2025-06-05)
- https://www.cyberpunk.net/en/news/49591/update-2-1-accessibility-features (2023-12-01)
- https://www.cyberpunk.net/en/news/52120/check-out-whats-coming-to-night-city-in-the-edgerunners-2-update-for-cyberpunk-2077 (2026-10-21)
- https://www.cyberpunk.net/en/news/52125/cyberpunk-2077s-edgerunners-2-update-2-5-is-out-now (2026-10-22)
- https://www.cyberpunk.net/en/news (index)

---

## 1. Early progression in Watson (Act 1 → The Heist)

### 1.1 Where you can go

- During Act 1, exploration is limited to Watson. Lore reason: the district was closed off for Saburo Arasaka's visit to Konpeki Plaza [W:Watson (2077)].
- **Answer to "is Watson closed until after The Heist?":** it is the other way round. You are locked _inside_ Watson until The Heist; the rest of the city opens in Act 2. Watson stays reachable after that [W:Watson (2077)] [M1]. The Gig payout from Wakako is collected "after the Watson lockdown lifts", i.e. in Act 2 [M1].
- Since 2.0, all NPCs scale to your level, and enemy difficulty no longer depends on the district [W:Patch 2.0]. Loot and vendor stock also scale with level [W:Patch 2.0].

### 1.2 Ripperdocs in Watson and who to buy from

- Watson ripperdocs: **Viktor Vektor** (Little China), **Charles Bucks** (Kabuki), **Dr. Chrome / Robert Rainwater** (Kabuki), **Instant Implants / Sogo Watanabe** (Kabuki), **Cassius Ryder** (Northside, Pershing St.) [W:Ripperdoc] [W:Cassius Ryder] [G8:314454].
- **Since 2.0 every ripperdoc has the same stock.** You do not need to shop around; stock depends on your level (and on PL ownership) [G8:314454]. IGN: cyberware costs "the same at every Ripperdoc" [IGN:Cyberware].
  - (PRE-2.0, OBSOLETE) game8's Beginner's Guide still says "each [ripperdoc] will sell a specific set of Cyberware" [G8:313866]. PowerPyx says "each of them sells different unique Cyberware parts" [PPX ripperdocs].
- Ripperdoc inventory refreshes every 10 levels, not every 24 hours. The random stat bonuses shown stay locked until that refresh [W:Cyberpunk 2077 Cyberware, note].
- Since 2.0 you can only install or swap cyberware at a ripperdoc [G8:314454].
- **Viktor vs Cassius Ryder:** for buying there is no difference in 2.x (same stock, same price). The differences are elsewhere:
  - **Viktor is unavailable until you pay the €$21,000 debt** (see 1.6) [W:Paid in Full] [IGN:Paid in Full].
  - **Charles Bucks** gives a **permanent 20% discount** on his wares if you accept his bribe in the Regina gig _Last Login_. Refusing makes him flee; attacking or killing him removes him as a vendor for good [W:Charles Bucks] [G8:314454]. _Last Login_ is a tier-5 Watson gig in Kabuki: steal Alois Daquin's laptop, reward €$6,400, 1,000 XP, 770 Street Cred [W:Gig: Last Login].
  - **Cassius Ryder** gives the free Tyger Claws Dermal Imprint tattoo after _The Gig_ (Act 2) [W:Cassius Ryder] [G8:314454].
- Street Cred gives a permanent vendor discount: +1% at SC 5/10/15/20/25/30, +2% at 35 and 45, +5% at 50, total 15%. Max SC is 50 [W:Street Cred].

### 1.3 Cyberware tiers and what unlocks when

- Cyberware tiers can be bought from: **T1 level 1, T2 level 10, T3 level 20, T4 level 30, T5 level 40** [W:Cyberpunk 2077 Cyberware] (source cited there: CDPR support "Item tiers in loot and vendors").
- Weapons: T2 from level 9, T3 17, T4 25, T5 33, T5++ 51 (PL) [W:Weapons].
- Base Cyberware Capacity: **24 at level 1, +3 per level, 201 at level 60**. Extra from Capacity Shards (max +74), Engineer skill 10 and 30 (+5 and +10), Edgerunner perk (+50), Renaissance Punk (+4 per attribute at 9+, max +20), Chrome Compressor OS (+70). Hard cap 450 (430 reachable with the Compressor, 360 without) [W:Stats] [W:Cyberpunk 2077 Cyberware].
  - (CONFLICT, minor) The Stats page says Engineer gives "+15" and Renaissance Punk "+20"; the Cyberware page splits them as "+5 and +10" and "+4 per attribute over 9, max +20". The totals agree [W:Stats] [W:Cyberpunk 2077 Cyberware] [W:Renaissance Punk].
- **(inference)** Level 10 is the first big shopping threshold: Reinforced Tendons, Optical Camo, Lynx Paws, Kerenzikov, Synaptic Accelerator and the Biotech Σ deck all become available there (sources per item below).

### 1.4 Reinforced Tendons (double jump)

- Legs slot. Effect: press jump in midair to double jump. **Capacity cost 8.** Armor 20 at T2, +8 per tier. Attuned to Reflexes (Crit Chance). Double jump is disabled after falling from too high [W:Reinforced Tendons].
- **Where:** any ripperdoc (so all five in Watson), **starting at level 10**. Its lowest quality is Tier 2 [W:Reinforced Tendons].
- **Street Cred requirement in 2.x:** none listed; the wiki infobox's `street_cred` field is empty. The level-10 gate comes from the tier system [W:Reinforced Tendons] [W:Cyberpunk 2077 Cyberware]. (UNVERIFIED that there is no hidden SC gate)
- **Price:** (UNVERIFIED / CONFLICT)
  - IGN's 2.x list shows **€$67,824** but does not say which tier. Its prices clearly come from different levels: Smart Link €$541, Kiroshi Optics MK.1 €$541 [IGN:Cyberware].
  - (PRE-2.0, OBSOLETE) game8 (Dec 2020) calls it "the expensive 45,000 Eddy purchase" [G8:314075].
  - The wiki gives no price (`buy_price` empty) [W:Reinforced Tendons].
  - Tell the reader to check the in-game price at level 10. Expect tens of thousands of eddies.
- game8 2.x calls it "the undisputed best leg cyberware in Update 2.0" [G8:315155]. Both game8 builds and IGN's netrunner build use it [G8:314513] [G8:320906] [IGN:Best Netrunner Build].
- Alternatives (all Legs, level 10): **Lynx Paws** (T2, cap 5, Cool: 50% quieter movement, +6–12% crouched speed, −20% fall damage; game8's stealth alternative) [W:Lynx Paws] [G8:314513]. **Fortified Ankles** (charge jump, cap 6, Body) [W:Fortified Ankles].

### 1.5 First cyberdeck and Kiroshi optics

- **You already own a deck:** a Tier 1 **Militech Paraline** is in V's possession from the start of _The Rescue_ [W:Militech Paraline].
- Cyberdecks (Operating System slot). RAM / quickhack slots / Breach buffer by tier, and where to buy [W:deck pages]:
  - **Militech Paraline** (cap 14): RAM 5–9, slots 4–8, buffer 0–4. T2: +10% quickhack damage. T3: Monowire +2% damage per RAM used (max +30%). T4: shooting a target with a Smart weapon speeds up a quickhack upload. T5 + Overclock: Smart weapons and Monowire deal +25% (T5+ 40%, T5++ 60%) as extra Electrical damage. Any ripperdoc.
  - **Arasaka (Shadow)** (cap 14): RAM 5–9, slots 4–8, buffer 0–4. T2: enemies need +40% time to trace you (60% at T5+, 100% at T5++). T3: −2 RAM for Covert quickhacks. T4: +5 RAM on a takedown. T5 + Overclock: quickhacks no longer raise trace progress. Any ripperdoc. **(inference) best stealth deck.**
  - **Tetratronic Rippler** (cap 16): RAM 5–20, slots 4–8, buffer 1–4. T2: +15% weapon damage. T3: Combat quickhacks +40% when followed by a non-Combat quickhack in the queue. T4: +4 base RAM (7 at T5+, 11 at T5++). T5: activating Overclock auto-uploads Reboot Optics and Weapon Glitch to enemies within 8 m. Any ripperdoc.
    - (CONFLICT, minor) The wiki says the T2 bonus is "+15% weapon damage against enemies"; IGN and game8 say "against enemies affected by non-Combat quickhacks" [W:Tetratronic Rippler] [IGN:Cyberware] [G8:314513].
  - **Biotech Σ** (from T2, cap per IGN 16): RAM 6–9, slots 5–8, buffer 1–4. Longer Combat quickhacks, stronger DoTs, Monowire bonus vs DoT targets. **Any ripperdoc after level 10** [W:Biotech Σ].
  - **Raven Microcyber** (from T3, cap 20): wider quickhack spread, spreads at upload start; T5 + Overclock: 15% chance to spread to 2 more enemies. **Level 20+** [W:Raven Microcyber]. (CONFLICT, minor: the infobox and body text disagree on its slot and buffer numbers.)
  - **NetWatch Netdriver** (Iconic T5, cap 25): 13 RAM, 8 slots. −50% RAM cost for Device and Vehicle quickhacks; boosts Combat quickhacks sent through devices. **Level 40+** [W:NetWatch Netdriver]. IGN's build calls it the critical deck for the highest base RAM [IGN:Best Netrunner Build].
  - **Militech Canto** (Iconic T5, PL): crafted during _Somewhat Damaged_ / _This Corrosion_; adds Blackwall Gateway [W:Militech Canto] [IGN:Cyberware].
- RAM regenerates (60 s per unit outside combat); the buffer sets how many characters you can pick in Breach Protocol [W:Cyberdeck].
- (PRE-2.0, OBSOLETE) IGN Tips: "a good Rare one called Biodyne MK.2 at the ripperdoc on Watson's Northside for $15,000" [IGN:Tips and Tricks]. No "Biodyne" cyberdeck exists in the 2.x deck category [W:Category Cyberdecks].
- **Kiroshi optics (Face slot, 1 slot until PL's _Birds with Broken Wings_)** [W:Cyberpunk 2077 Cyberware]:
  - **Basic Kiroshi Optics**: installed in _The Ripperdoc_ (part of the €$21,000 debt). T1, cap 1, Cool-attuned. −20–44% camera detection speed and scan zoom [W:Basic Kiroshi Optics]. You already have it.
  - **Kiroshi "Sentry"**: any ripperdoc from T1, cap 2, **Intelligence-attuned**. Highlights cameras and turrets when scanning (15–39 m) [W:Kiroshi Sentry Optics]. game8's netrunner pick, chosen for the Intelligence attunement [G8:314513]. **(inference) the cheap early upgrade for a hacker.**
  - Others: Stalker (Tech weapons), Doomsayer (traps), Clairvoyant (level 20, highlights enemies), The Oracle (level 30, highlights enemies through cover; game8's smart-weapon pick), Cockatrice (Dogtown, level 35) [W:Kiroshi pages] [G8:320906].
  - (PRE-2.0, OBSOLETE) "Kiroshi Optics MK.1" in IGN text. Before 2.0 Kiroshi was the only optic line [W:Basic Kiroshi Optics] [M1].

### 1.6 Viktor's debt: _Paid in Full_

- Minor job, giver Viktor Vektor, Little China. It appears only if you didn't pay (or couldn't) during _The Ripperdoc_ [W:Paid in Full].
- **Amount: €$21,000**, for the Ballistic Coprocessor, Basic Kiroshi Optics and Subdermal Armor [W:Paid in Full]. IGN: "When you've earned $21000 return to Viktor" [IGN:Paid in Full].
- **When:** no deadline. **Viktor's services stay unavailable until he is paid** [W:Paid in Full, note] [IGN:Paid in Full]. Viktor tries to refuse the money and V insists [W:Paid in Full].
- **(inference)** Because all ripperdocs share one stock in 2.x, the debt costs nothing in practice: buy from Bucks/Dr. Chrome/Instant Implants/Ryder and pay Viktor whenever 21k is spare. Don't pay it before Reinforced Tendons if money is short.

### 1.7 Eddies in Act 1 Watson

- **Sell junk and unused loot** at Drop Points ("Sell All Junk") and vendors. Loot scales with level since 2.0 [M1, IGN] [G8:312850] [W:Patch 2.0].
- **Datamine Access Points** (Breach Protocol): eddies, and the Advanced Datamine gives quickhacks and specs [G8:312850] [W:Cyberpunk 2077 Quickhacks].
- **NCPD Scanner Hustles** (blue map markers): quick fights, decent pay [G8:312850].
- **Regina Jones's gigs:** 23 Watson gigs (Northside, Kabuki, Little China), tiers 1–8. Tier 1: Hippocratic Oath, Many Ways to Skin a Cat, Monster Hunt, Playing for Keeps, Rite of Passage. Highest (tier 8): Concrete Cage Trap, Fixer Merc Soldier Spy, Occupational Hazard, The Heisenberg Principle [W:Cyberpunk 2077 Gigs (rendered)]. Gigs have not needed Street Cred since 1.5 [W:Cyberpunk 2077 Gigs]. (UNVERIFIED which Watson gigs appear before The Heist; some may only appear in Act 2.)
  - Finishing all Watson gigs triggers _Last Call_: Regina leaves the iconic **Axolotl** (Frontal Cortex, cyberware cooldown on kill) in your stash. **T5 quality needs level 33**, so finishing them very early gives a lower tier [W:Last Call] [W:Axolotl].
- **Cyberpsycho sightings (_Psycho Killer_):** starts with Regina's call after _The Ripperdoc_ plus Jackie's talk in _The Ride_. **Five are in Watson in Act 1:** Demons of War (after _The Pickup_), Lt. Mower, Six Feet Under, Ticket to the Major Leagues, Where the Bodies Hit the Floor. The 6th Watson one (Bloody Ritual) needs Act 2, 8 PM–5 AM [W:Psycho Killer]. game8 lists Psycho Killer at €$33,270 total, recommended level 10–25 [G8:312850].
  - Final rewards (infobox): Chrome Compressor, Pax, a Cyberware Capacity Shard, a Trauma Team vest [W:Psycho Killer]. (CONFLICT: the Chrome Compressor page lists only Airdrops and Dogtown ripperdocs as sources [W:Chrome Compressor].) Incapacitate them (non-lethal) for Regina's better reaction; the reward comes either way [W:Psycho Killer].
- Already in your pocket from Act 1 if you followed those routes: €$3,000 for Royce in _The Pickup_; Brick's €$5,000 bounty only if you killed him with the detonator (you spared him, so no) [M1].
- (UNVERIFIED for 2.5, do not recommend) game8 (Dec 2023) describes an item duplication glitch "that works in 2.0" [G8:312850]. (PRE-2.0, OBSOLETE) PowerPyx's "Space Oddity" sell/buy-back exploit is from patch 1.06 and needs Act 2 anyway [PPX money].

### 1.8 Free items and iconics reachable now (Act 1, Watson)

- **Dying Night** (Iconic Power pistol): free from Robert Wilson, 2nd Amendment, Megabuilding H10 (_The Gun_) [M1, W:The Gun].
- **Ping** quickhack: free from Yoko Tsuru, Kabuki Market EdgeNet shop (_The Gift_) [W:Yoko Tsuru] [W:Ping] [M1].
- **Synapse Burnout** (T3 Combat quickhack): from _The Pickup_ if you breached the Militech datashard and copied the infected data [W:Synapse Burnout] [M1]. It costs 10 RAM at T3 [W:Synapse Burnout], more than a T1 Paraline's 5 base RAM [W:Militech Paraline]. **(inference)** It will only be usable after more RAM (Intelligence, Frontal Cortex cyberware, better deck) or with Overclock (Intelligence 15).
- **Chaos** (Iconic Tech pistol): from Royce, only if Royce died in _The Pickup_. Brick can only be freed on paths 3 and 4, so you probably have it [M1].
- **The Heist** gives **Kongou** (Iconic Power pistol), **Satori** (Iconic katana) and **Nehan** (Iconic throwing knife), all missable; Herold Lowe (PL) sells them later [W:The Heist] [M1].
- Not reachable yet:
  - **Skippy** (Iconic **Smart** pistol): found beside a body in an alley in **Vista del Rey, Heywood**, so **Act 2 only** [W:Skippy]. **Smart Link is not required for Skippy's smart-targeting** [W:Skippy, notes]. Choose "Puppy-Loving Pacifist" (limbs only, non-lethal) or "Stone Cold Killer" (head when aiming) [W:Skippy]. **(inference) The best weak-aim weapon of the early game once Act 2 opens.**
  - **Overture** is **not an iconic** in 2.x. It is a regular Malorian Power revolver, sold **from level 17** by Robert Wilson (Little China), Rancho Coronado, Downtown and others. Its iconic variants are Amnesty, Archangel, Crash and, in PL, Ol' Reliable and Rosco [W:Overture].
  - **Jackie's items** (Jackie's ARCH, La Chingona Dorada) come after The Heist via _Heroes_. **Plan B** (Dex) comes after Act 1 [M1].

### 1.9 Level before The Heist

- **No source gave a recommended level.** IGN's "Recommended Level" cell did not render; the wiki has none [IGN:The Heist Walkthrough] [W:The Heist]. Enemies scale to your level since 2.0, so being "over-levelled" matters less than it did in 1.x [W:Patch 2.0].
- **(inference) Suggest about level 10 before starting The Heist:**
  - T2 cyberware (Reinforced Tendons, Optical Camo, Biotech Σ deck) and T2 weapons (level 9) unlock there [W:Cyberpunk 2077 Cyberware] [W:Weapons].
  - Intelligence 9 opens Hack Queue and the Embedded Exploit branch (see 2.2).
  - The Heist is long and the post-Heist stretch (Love Like Fire, Playing for Time) gives no shopping stops [M1].
  - Most early RAM and stealth tools (Memory Boost from level 5, Optical Camo from 10) are then affordable [W:Memory Boost] [W:Optical Camo].
  - It's also a good point to do the five Act 1 cyberpsychos and the low-tier Regina gigs for XP and eddies [W:Psycho Killer] [W:Cyberpunk 2077 Gigs].

### 1.10 Shopping list for a hacker (Act 1) — (inference, built from the facts above)

1. Kiroshi "Sentry" (cheap, Intelligence-attuned) [W:Kiroshi Sentry Optics].
2. **Smart Link** in Hands, replacing the Ballistic Coprocessor, if you want smart weapons (T1, cap 4, cheap; IGN lists €$541) [W:Smart Link] [IGN:Cyberware]. Hands has 1 slot until Ambidextrous [W:Cyberpunk 2077 Cyberware].
3. RAM Upgrade (T1, cap 8, +RAM regen, +1–2 RAM) and Memory Boost (level 5+, cap 18, RAM on kill, +1 RAM) in Frontal Cortex [W:RAM Upgrade] [W:Memory Boost].
4. Level 10: Reinforced Tendons, then Optical Camo (level 10, cap 20) for the stealth route [W:Reinforced Tendons] [W:Optical Camo].
5. Deck: keep the Paraline (smart-weapon synergy) or buy an Arasaka (stealth) or Tetratronic Rippler (RAM growth). Biotech Σ from level 10 [W:deck pages].
6. Quickhacks: netrunner vendors sell quickhacks and crafting specs [W:Cyberpunk 2077 Vendors]. Vendors no longer sell quickhack crafting components since 2.0 [W:Patch 2.0].

---

## 2. 2.x systems for a hacker build

### 2.1 Attributes, levels, perk points

- Six attributes: Body, Reflexes, Technical Ability, Intelligence, Cool, plus **Relic** (Phantom Liberty only) [W:Cyberpunk 2077 Attributes] [W:Relic (attribute)].
- Character creation: 3 in each, plus 7 to place, max 6 at creation. **Max 20 afterwards.** **+1 attribute point and +1 perk point per level** [W:Character Customization].
- **Level cap 50 in the base game, 60 with Phantom Liberty**, which the Ultimate Edition includes [W:Character Customization] [W:Phantom Liberty] [OV]. (PRE-2.0, OBSOLETE) PowerPyx "max level is 50" [PPX max level].
- Each skill also gives +1 perk point at skill levels 15 and 35 [W:Cyberpunk 2077 Skills] [W:Character Customization].
- What each point gives [W:attribute pages]:
  - **Body:** +2 max Health per point. Solo skill.
  - **Reflexes:** +0.5% Crit Chance per point. Shinobi skill.
  - **Technical Ability:** +2 Armor per point. Grenades, Tech weapons, PLS, "compatible with high-end cyberware". Engineer skill.
  - **Intelligence:** +1 max RAM per 4 points (game8: +5 RAM at 20) [G8:320906]. Quickhacks, Smart weapons, local subnets and Net dialogue. Netrunner skill.
  - **Cool:** +1.25% Crit Damage per point. Headhunter skill.
- Since 2.0, cyberware is **attuned** to an attribute: the higher that attribute, the stronger the bonus [W:Patch 2.0]. Examples: Smart Link → Intelligence (smart damage), Reinforced Tendons → Reflexes, Basic Kiroshi → Cool, Kiroshi Sentry → Intelligence [W:item pages].
- **Skills** (Headhunter/Netrunner/Shinobi/Solo/Engineer) level by use, to 60, independent of the attribute level [W:Patch 2.0] [W:Cyberpunk 2077 Skills]. **Netrunner** skill milestones: 5 +5% RAM recovery; 10 +1 RAM; 15 +1 perk; 20 +20% Smart lock-on range; 25 +5% RAM recovery; 30 +1 RAM; 35 +1 perk; 40 −20% RAM cost on devices and vehicles; 45 longer Control/Covert, +5% Combat quickhack damage; 50 +40% Overclock duration; 55 −10% Health cost during Overclock; 60 Overclock reveals enemies within 10 m and lets you quickhack non-netrunners through cover. XP comes from Smart and Monowire kills, quickhacks, daemons and crafting quickhacks [W:Cyberpunk 2077 Skills]. game8: the level-60 Overclock change came in 2.1 [G8:314513].
  - (PRE-2.0, OBSOLETE) PowerPyx: "skill level cannot be greater than the underlying attribute", 12 skills, 235 perks [PPX reset].

### 2.2 Intelligence perk tree (2.x)

Attribute level needed / prerequisite / effect, all from the perk's wiki page:

- **Int 4:** _Optimization_ (+35% RAM recovery). From it: _Proximate Propagation_ (up to −35% RAM cost the closer you are), _Encryption_ (−30% traceability), _Subordination_ (+100% Control duration on full-Health targets). Separately: _Eye In The Sky_ (highlights access points and cameras; −1 RAM, +50% duration for Control/Covert/Distract through cameras) → _Forcekill Cypher_ (Breach sequences 1 shorter) and _Warning: Explosion Hazard_ (+40% hacked-device explosion damage, +80% vs quickhacked enemies). _Carhacker_ (vehicle quickhacks, depends on deck tier).
- **Int 9:**
  - _Hack Queue_ (2 levels): +1 RAM, then **unlocks queues (2 quickhacks on one enemy)**, +30% upload speed for the second. From it: _Data Recycler_ (80% RAM back from unfinished queue on kill), _Feedback Loop_ (+25% RAM recovery per queued quickhack), _Counter-A-Hack_ (counter-hack enemy netrunners through walls, −1 RAM) → _Copy-Paste_ (counter-hack spreads to their allies).
  - _Embedded Exploit_ (2 levels; needs Optimization): +10% RAM recovery, then **+60% quickhack damage vs targets under Control, Covert or Distract**. From it: _Shadowrunner_ (takedowns wipe trace), _Icepick_ (−1 RAM Combat on such targets) → _Siphon_ (Monowire hits restore RAM), _System Overwhelm_ (+7% damage per unique quickhack/DoT on the target), _Speculation_ (Combat quickhack kill refunds 25%).
  - _Precision Subroutines_ (+2% Smart accuracy per max-RAM unit of the deck) and _No Escape_ (shooting refreshes an expiring lock), both after Acquisition Specialist. _Recirculation_ (needs Speculation + Precision Subroutines): +2 RAM on Smart-weapon kills, more if the target was quickhacked.
- **Int 15:**
  - _Overclock_ (3 levels; needs Embedded Exploit): +10% RAM recovery, +10% quickhack damage, then **Overclock mode: cast quickhacks without enough RAM, each RAM unit over max costs 10 Health. 14 s duration, 30 s cooldown.** Needs a cyberdeck. From it: _Sublimation_ (RAM recovery also heals during Overclock), _Power Surge_ (activating it heals 5× max RAM), _Race Against Mind_ (up to +50% damage as Health drops).
  - _Queue Acceleration_ (3 levels): +1 RAM, −1 RAM on devices/vehicles, then **+1 queue size**, faster uploads for the 3rd+ quickhack. From it: _Queue Hack_Root_ (−1 RAM for the first quickhack of each category after the first), _Queue Prioritization_ (+50% upload speed for the first when 2+ queued), _Finisher: Live Wire_ (Monowire finisher, restores 15% Health and 5 RAM). _Blood Daemon_ (needs Queue Hack_Root + Sublimation): +40 Health per queued quickhack on a kill during Overclock.
  - Smart branch: _Acquisition Specialist_ (2 levels): +10% larger Smart reticle, then reloading keeps the lock, +15% lock-on speed hip-fire, +20% aimed. _Target Lock Transfer_ (3 levels): +10% reticle; switching from aim to hip-fire keeps head/weakspot locks; switching Smart weapons keeps the lock. From it: _Targeting Prism_ (**multiple target locks when aiming, +1 target**), _Terminal Velocity_ (faster projectiles and longer lock range after kills).
- **Int 20 (capstones):**
  - _Queue Mastery_ (needs Queue Acceleration): +1 queue size. The last quickhack to fill the queue costs −50% RAM and locks the queue until all upload. +15% damage vs locked-queue targets.
  - **_Spillover_ (needs Overclock): while Overclock is active, +50% chance for quickhacks to spread to one more target.** This is the 2.x "spread" mechanic. Other spread sources: Contagion (natural spread), Raven Microcyber deck, Copy-Paste (vs netrunners), Reboot Optics T5, Data Tunneling (Relic, Monowire) [W:perk and item pages].
  - _Smart Synergy_ (needs Overclock + Target Lock Transfer): during Overclock, Smart weapons get **instant lock**, +25% damage vs quickhacked enemies.
- **RAM regeneration** sources in one place: Optimization, Embedded Exploit, Overclock L1 (+35/+10/+10%), Feedback Loop, the Netrunner skill, RAM Upgrade, Feen-X (+250% regen when RAM is low), RAM Recoup (RAM from damage taken), Memory Boost (RAM on kill), Camillo RAM Manager (level 30, instant refill at low RAM), Siphon/Live Wire (Monowire) [W:perk and cyberware pages].

### 2.3 Technical Ability: cyberware capacity perks

- **Yes, cyberware perks live in Technical Ability in 2.x** [W:Category Perks - Technical Ability]. Capacity itself comes mainly from level (24 + 3 per level), not from the attribute [W:Stats].
- _All Things Cyber_ (Tech 9, 2 levels): +10% to all cyberware stat modifiers; −20% capacity cost for Integumentary and Skeleton cyberware [W:All Things Cyber].
  - _Driver Update_ (Tech 9): +1 stat modifier on all cyberware. → _Chipware Connoisseur_ (Tech 9): choose between stat-modifier options when upgrading [W:Driver Update] [W:Chipware Connoisseur].
  - _Renaissance Punk_ (Tech 9): +4 capacity per attribute at 9 or higher [W:Renaissance Punk].
  - _Chrome Constitution_ (Tech 9): −5% damage taken if all Integumentary and Skeleton slots are filled [W:Chrome Constitution].
- **_License To Chrome_** (Tech 15, needs All Things Cyber, 3 levels): +10% cyberware stats; +40 Armor; **a 3rd Skeleton slot**, Skeleton cyberware boosted [W:License To Chrome].
  - _Ambidextrous_ (Tech 15): **a 2nd Hands slot**. **(inference) lets you run Smart Link and Ballistic Coprocessor or Microgenerator together** [W:Ambidextrous].
  - _Built Different_ (Tech 15): unlocks the Cellular Adapter. _Cyborg_ (−15% cyberware cooldowns when all slots are full). _Extended Warranty_ (+15% cyberware effect duration) [W:perk pages].
- **_Edgerunner_** (Tech 20, needs License To Chrome): exceed capacity by up to 50 at −0.5% max Health per point over. Each combat kill has a 0.1% chance per point over to trigger **Fury** (+10% damage, +30% Crit Chance, +50% Crit Damage, 12 s) [W:Edgerunner (perk)].
- Health-item perks used by builds: _Glutton For War_ (Tech 4, 5% instant item/grenade recharge on kill) → _Health Freak_ (Tech 9, faster recharge, +1 charge) [W:perk pages]. Since 2.0, health items work on cooldowns [G8:320906].

### 2.4 Cyberware slots and capacity

- Slots: Frontal Cortex 3, Operating System 1, Arms 1, Face 1 (+1 in PL's _Birds with Broken Wings_), Skeleton 2 (+1 License To Chrome), Hands 1 (+1 Ambidextrous), Nervous System 3, Circulatory System 3, Integumentary System 3, Legs 1 [W:Cyberpunk 2077 Cyberware].
- Each implant has a capacity cost; the total cannot exceed your Cyberware Capacity (see 1.3) [W:Stats] [W:Patch 2.0].
- Cyberware gets 1 stat bonus at T1, a 2nd at T2, a 3rd with Driver Update. You upgrade tiers at ripperdocs with item components [W:Cyberpunk 2077 Cyberware].
- Armor mostly comes from cyberware: about 1 DPS reduced per 10 Armor, capped at 50% reduction at 1500 Armor [W:Stats].

### 2.5 Quickhacks (2.x)

- Types: **Combat** (damage, medium RAM), **Control** (disable/distract, low-medium), **Covert** (low RAM, usually no trace), **Ultimate** (largest RAM), **Device** (built into the deck), **Vehicle** (needs Carhacker) [W:Cyberpunk 2077 Quickhacks].
- Sources: netrunner vendors (quickhacks and specs), enemy netrunners, Airdrops, the Advanced Datamine in Breach Protocol [W:Cyberpunk 2077 Quickhacks].
- **Breach Protocol now works on access points only, not on enemies** [W:Patch 2.0]. Since 2.1 the Breach timer can be turned off (Accessibility) [CDPR:49591] [W:Patch 2.1]. On Switch 2 you can play it by touch [CDPR:51566].
- Key quickhacks (RAM cost by tier) [W:quickhack pages]:
  - **Short Circuit** (Combat, T1: 3 → 4 → 5 → 7 → 10). Electrical damage, extra vs mechs/drones/turrets. T2 +3 s to Control effects; T3 +10% per Cyberware Malfunction stack, weakspot explodes; T4 EMP DoT.
  - **Overheat** (Combat, T1: 3 → 4 → 6 → 7 → 9). Burn DoT; T4 melts armor; T5 adds Thermal on hits.
  - **Contagion** (Combat, from T2: 5 → 6 → 9 → 12). Poison DoT that **spreads to 2 enemies within 8 m (4 at T3)**, stacks 2. T4: Burn or Overheat **detonates** it. Ineffective vs mechs/drones.
  - **Synapse Burnout** (Combat, from T3: 10 → 14 → 16). Heavy damage, +10% per RAM unit currently spent (max +300%). T5: bigger cap during Overclock, kills extend Overclock 3 s. Free copy in _The Pickup_.
  - **Cyberpsychosis** (Ultimate, T4: 22). Enemy attacks the nearest person for 20 s (60 s at T5), or kills itself. Cyberware Malfunction or EMP reduces the cost by 6, stacking 3 times. Turns Minotaur mechs friendly.
  - **System Collapse** (Ultimate, T4: 28). Silent knockout, untraceable. Reducing trace makes it −12 RAM, 2 stacks.
  - **Suicide** (Ultimate, T4: 24).
  - **Memory Wipe** (Covert, from T3: 8 → 10 → 32). Untraceable, makes the target forget you. T4: quickhacks queued after it aren't traced. T5: all enemies leave combat. (Bug from 2.02: the T5 cost is too high to use.)
  - **Reboot Optics** (Control, T1: 2 → 5 → 7). Resets detection or lowers accuracy; T3 +15% headshot damage; T4 blinds.
  - **Ping** (Covert, T1: 4). Reveals the network; T3 +25% Smart lock-on speed vs pinged targets; T5 hack devices through walls.
- Combos game8 recommends: **Contagion → Overheat** (detonation for groups), **Cyberware Malfunction stacks → Short Circuit**, **Memory Wipe first** to stop traces [G8:314513]. IGN: Synapse Burnout + Overheat, Cripple Movement + Cyberware Malfunction, System Collapse; untraceable for stealth: System Collapse, Memory Wipe, Sonic Shock [IGN:Best Netrunner Build].

### 2.6 Smart weapons: how lock-on works

- Smart weapons fire guided gyrojet rounds that **lock on and seek targets inside the weapon's tracking box**, curve around obstacles and travel slower than normal bullets. Hits are not guaranteed; better Smart Links track better. **Tyger Claws' masking-ink tattoos give smart rounds a 50% miss chance.** Smart weapons accept no suppressors or scopes [W:Weapons].
- **Smart Link is still required in 2.x.** The Weapons page says it is "required to enable smart-targeting" [W:Weapons]. The Smart Link page says it "enables the use of smart-targeting" [W:Smart Link]. game8 2.x says "A Smart Link is required" [G8:320906]. IGN 2.0 calls it "the only Hand Cyberware that enables smart targeting" [IGN:Best Netrunner Build].
  - **Exception:** Skippy needs no Smart Link [W:Skippy].
  - Smart Link: Hands, T1, **cap 4**, Intelligence-attuned (smart damage). +1–2 max RAM; from T3, +10–20% lock duration and +5–15% Smart Crit Damage. Any ripperdoc, quality rises every 10 levels [W:Smart Link].
  - **(inference)** It shares the single Hands slot with the Ballistic Coprocessor that Viktor installed. Swap it until Ambidextrous (Tech 15).
- Since 2.0, Smart weapons do less damage but have dedicated perks (the Int Smart branch in 2.2) [W:Patch 2.0].
- Lock-on behaviour from the perks: separate lock speeds for hip-fire and aiming; reloading or switching can break a lock unless you have the perks; Targeting Prism adds multi-lock when aiming [W:Acquisition Specialist] [W:Target Lock Transfer] [W:Targeting Prism]. Each weapon has a lock-on time stat (Skippy 1.20 s) [W:Skippy].
- **(inference) Weak aim:** Smart SMGs and pistols plus quickhacks are the most forgiving combination. Smart Synergy (Int 20 + Overclock) gives instant locks.

### 2.7 Update 2.5 dual wield: _Double Trouble_

- New **Cool** perk, **Cool 9**, no prerequisite perk [W:Double Trouble]. IGN: "a second-tier perk… a new cluster to the center left of this skill tree" [IGN:How to Dual Wield].
- **Weapons: only Power pistols and Power revolvers.** No Tech or Smart pistols (IGN names King's _Coronation_ from _Clampdown_ as not eligible), no other weapon types, no melee [W:Update 2.5] [IGN:How to Dual Wield] [IGN:2.5 Updates]. **(inference) It does not combine with Skippy or other smart pistols.**
- L1: dual-wield, **−37.5% damage per weapon**, both fire together; when aiming −15% recoil and spread. L2: **Heywood Hurricane** replaces Quick Melee: auto-fires both guns for 1 s at +50% spread; ammo for hits is refunded [W:Double Trouble] [IGN:How to Dual Wield].
- How to equip: after unlocking it, the inventory shows a prompt to equip a secondary weapon next to the primary pistol or revolver [IGN:How to Dual Wield].
- Auxiliary perks (all Cool 9, need Double Trouble) [W:perk pages]:
  - _Two Right Hands_: −25% Stamina on hip-fire; −20% recoil and spread when aiming.
  - _Triple Tequila_: +10% Mitigation per kill (15 s, 3 stacks); stacks are spent on Hurricane, +15% damage each.
  - _Splash Of Love_: +50% Hurricane fire rate; +1 s at 3 Tequila stacks.
  - _Keep 'Em Comin'_ (IGN spells it "Keep 'Em Coming"): +40 Stamina per dual-wield kill, +20 per Tequila stack.
- IGN pairings: Riskit & Death and Taxes, Seraph & Unity, Her Majesty & Mancinella [IGN:How to Dual Wield]. Act 1/2 Power pistols you get: Dying Night, Kongou, later Plan B and La Chingona Dorada [M1].
- (PRE-2.5, OBSOLETE) game8 "Is Dual Wielding Possible?" (2022) predates the perk [G8:393573].

### 2.8 Respec rules

- **Perks: refund individually, for free, any time; there is no "refund all" button** [W:Patch 2.0] [G8:313713].
  - (CONFLICT / PRE-2.0) The wiki Character Customization page still says perk points reset "in exchange for eurodollars" [W:Character Customization]. PowerPyx says €$100,000 per reset [PPX reset]. The Tabula e-Rasa shard (€$25,000) was removed in 1.3 [W:Tabula e-Rasa]. All obsolete.
- **Attributes: one full reset per playthrough**, via the "Reset Attributes" button in the Character screen; no PL needed [G8:313713] [G8:309681].
  - (CONFLICT, nuance) The 2.0 patch note words it as an option for existing playthroughs ("You can also choose to reset your Attributes once") [W:Patch 2.0]. The wiki says attribute points are permanent [W:Character Customization]. game8 2025 says once per playthrough, new saves included. Advise: treat it as one-time and make a manual save first [G8:313713].
  - (PRE-2.0, OBSOLETE) PowerPyx: "you can't reset Attributes" [PPX reset].
- Skills cannot be reset; no source mentions one (UNVERIFIED).

### 2.9 Relic tree basics (Phantom Liberty, in the Ultimate Edition)

- Unlocked automatically when Songbird gives V new Militech software in _Dog Eat Dog_. **15 Relic points:** 3 from Songbird in _Dog Eat Dog_, 3 in _Birds with Broken Wings_, 9 from Operational/Restricted Data Terminals in Dogtown [W:Relic (attribute)].
- _Dog Eat Dog_ starts only after _Transmission_ in Act 2 [OV]. **(inference) Not relevant before The Heist.**
- Perks (several are gated by an arm cyberware) [W:Relic perk pages]:
  - **Jailbreak**: new abilities for arm cyberware (Mantis Blades, Gorilla Arms, PLS, Monowire). Per the quickhack list and game8, it lets the **Monowire carry a Control quickhack** [W:Cyberpunk 2077 Quickhacks] [G8:314513].
  - **Data Tunneling** (Jailbreak + Monowire): Monowire hits spread its quickhack.
  - **Emergency Cloaking**: Optical Camo in combat makes enemies lose you. → **Sensory Protocol**: when crouched and detected, time slows; dash out of sight to exit combat.
  - **Vulnerability Analytics**: shows weak spots on armor and cyberware. → **Machine Learning**.
  - Arm-specific: Launch Capacity Override (PLS), Limiter Removal (Gorilla Arms), Spatial Mapping (Mantis Blades).
- Priority for netrunners: Jailbreak → Data Tunneling → Emergency Cloaking → Sensory Protocol → Vulnerability Analytics → Machine Learning [G8:314513]. Smart build: Vulnerability Analytics → Machine Learning first, then Jailbreak → Data Tunneling [G8:320906].

---

## 3. Recommended builds

None of the sources give level bands 1–15 / 15–30 / 30–60. game8 gives attribute snapshots at levels 1, 10, 50 and 60, which I map onto the requested bands. **Band labels and ordering are (inference)**; the numbers are the sources'.

### 3.1 Netrunner (quickhack)

- **Attributes** (Body / Reflex / Tech / Int / Cool) [G8:314513]:
  - Level 1: 3 / 4 / 6 / 6 / 3
  - Level 10: 3 / 7 / 9 / 9 / 3
  - Level 50: 6 / 15 / 15 / 20 / 15
  - Level 60: 16 / 15 / 15 / 20 / 15 (put the 10 PL points into Body)
  - IGN level 60: Body 11, Reflex 15, Tech 15, Int 20, Cool 20 [IGN:Best Netrunner Build]. (CONFLICT: game8 15 Cool / 16 Body vs IGN 20 Cool / 11 Body. Both total 81.)
- **Perk order** [G8:314513]:
  - Int: Optimization → Eye in the Sky → Hack Queue → Embedded Exploit → Overclock → Queue Acceleration → capstones Queue Mastery, Spillover, Smart Synergy. Cross-branch Blood Daemon and Recirculation.
  - Tech: Glutton for War → All Things Cyber → Driver Update, Chipware Connoisseur, Renaissance Punk → License to Chrome → Extended Warranty.
  - Reflexes: Slippery → Dash → Air Dash.
  - Cool: Feline Footwork → Ninjutsu (+ Shinobi Sprint, Creeping Death, Vanishing Act).
  - Body (PL points): Painkiller → Adrenaline Rush.
- **Cyberware** [G8:314513]: Tetratronic Rippler (T5). Thermal Monowire. Kiroshi Sentry. Microgenerator or Smart Link. Heal-on-Kill + Adrenaline Booster + Microrotors. Reinforced Tendons or Lynx Paws. RAM Upgrade + Ex-Disk + Camillo RAM Manager. Dense Marrow + RAM Recoup + Feen-X. Kerenzikov + Synaptic Accelerator. Optical Camo + Subdermal Armor + Pain Editor.
  - IGN: NetWatch Netdriver, Ex-Disk + RAM Upgrade + Camillo, Smart Link "must-have", Reinforced Tendons [IGN:Best Netrunner Build].
- **Quickhacks:** Memory Wipe, Contagion + Overheat, Cyberware Malfunction + Short Circuit [G8:314513].
- **Weapons:** Smart guns for cleanup. Base game: Genjiroh, Prototype: Shingen Mark V. PL: Crimestopper, Pizdets, Hercules 3AX. Plus Monowire [G8:314513] [IGN:Best Netrunner Build].
- **How to play** [G8:314513]: quickhacks are the main damage; open with Overclock; Blood Daemon, Sublimation and Power Surge keep you alive; use the Monowire (Siphon, Live Wire) for RAM; finish stragglers with your gun.
- **Band mapping (inference):**
  - **1–15:** Int to 9 first (Hack Queue, Embedded Exploit), Tech to 9 (All Things Cyber), Reflexes toward 9 (Dash). Kiroshi Sentry, RAM Upgrade, Memory Boost, Smart Link; Paraline or Rippler deck; Short Circuit, Overheat, Reboot Optics, Ping, Synapse Burnout once RAM allows.
  - **15–30:** Int 15 (Overclock, Queue Acceleration), Tech 15 (License to Chrome). Contagion; Ex-Disk at level 20; Raven Microcyber from level 20 if you want spread.
  - **30–60:** Int 20 capstones (Queue Mastery, Spillover). Camillo (30+), Pain Editor (30+), Netdriver (40+); Cyberpsychosis and System Collapse at T4; Relic perks.

### 3.2 Stealth netrunner

- No source has a dedicated "stealth netrunner" build. game8's netrunner build is stealth-leaning: "staying undetected is the key", play slow [G8:314513]. Below it is combined with item and perk facts; **the combination is (inference)**.
- **Attributes:** as 3.1, with Cool raised earlier for Ninjutsu (Cool 15). IGN's 20 Cool spread fits [IGN:Best Netrunner Build].
- **Perks:**
  - Int: Encryption (−30% traceability), Eye In The Sky (camera hacks cheaper and longer), Shadowrunner (takedowns clear trace), Embedded Exploit (+60% vs Covert/Control targets), Subordination [W:perk pages].
  - Cool: Killer Instinct (+25% damage with silenced guns, knives, axes out of combat), Feline Footwork (Cool 4), Ninjutsu (Cool 15, crouch-sprint), Creeping Death, Vanishing Act (auto Optical Camo when crouch-sprinting or sliding) [W:perk pages].
- **Cyberware:** Arasaka deck (trace +40–100% slower, −2 RAM Covert, +5 RAM on takedowns, untraceable during Overclock at T5). Kiroshi Basic or Sentry (cameras). Optical Camo (level 10). Lynx Paws. Synaptic Accelerator (slows time at 50% detection, level 10) [W:item pages] [G8:314513].
- **Quickhacks:** Memory Wipe, System Collapse, Sonic Shock, Reboot Optics, Ping [IGN:Best Netrunner Build] [W:quickhack pages].
- **Relic:** Emergency Cloaking → Sensory Protocol [W:Relic perks].

### 3.3 Smart-weapon gunner (best fit for weak aim)

- **Attributes** (Body / Reflex / Tech / Int / Cool) [G8:320906]:
  - Level 1: 3 / 6 / 4 / 6 / 3
  - Level 10: 3 / 9 / 4 / 12 / 3
  - Level 50: 15 / 20 / 13 / 20 / 3
  - Level 60: 18 / 20 / 20 / 20 / 3
  - Best Builds page summary: same level-50 row [G8:309681].
- **Perks** [G8:320906]:
  - Int: Optimization → Embedded Exploit → **Acquisition Specialist → No Escape, Precision Subroutines → Target Lock Transfer → Targeting Prism, Terminal Velocity** → Overclock → capstones **Spillover, Smart Synergy**. Cross-branch Recirculation.
  - Reflexes (SMGs): Slippery → Dash → Ready, Rested, Reloaded → Sharpshooter → Air Dash → capstones Salt in the Wound, **Submachine Fun** (switching SMGs auto-reloads), Tailwind.
  - Tech: Glutton for War → All Things Cyber → Health Freak → (PL) License to Chrome → Edgerunner.
  - Body: Body 4 for Painkiller early, later Adrenaline Rush.
- **Cyberware** [G8:320906]: Militech Paraline (MK.4 named; the T4+ smart-weapon upload bonus). Kiroshi "The Oracle". **Smart Link (required).** Blood Pump + Clutch Padding + Heal-on-Kill. Reinforced Tendons. Ex-Disk + Memory Boost + RAM Upgrade. Electrifying Monowire. Epimorphic Skeleton + Para Bellum + RAM Recoup. Kerenzikov + Neofiber + Visual Cortex Support. Defenzikov + Shock-N-Awe + Subdermal Armor.
- **Weapons:** base game Yinglong + Prototype: Shingen Mark V (swap between them for Submachine Fun) + Divided We Stand. PL: Pizdets, Hercules 3AX [G8:320906]. **(inference) Early: Skippy in Act 2** [W:Skippy].
- **Quickhacks:** Weapon Glitch heads the list (the page text was cut off after that) [G8:320906]. Ping T3 +25% lock-on speed [W:Ping]; Short Circuit with the electric Yinglong [G8:320906].
- **Band mapping (inference):**
  - **1–15:** Int 9 → 12 by level 10 as game8 shows; Smart Link right away; Acquisition Specialist needs Int 15, so early smart play is base lock-on only; Reflexes 9 for Dash.
  - **15–30:** Int 15 (Acquisition Specialist, Target Lock Transfer, Targeting Prism, Overclock), Reflexes toward 20.
  - **30–60:** Int 20 (Smart Synergy, Spillover), Reflexes 20 (Submachine Fun), Tech with PL points.

---

## 4. Switch 2 combat settings for a player with weak aim

### 4.1 What the Switch 2 version offers

- Motion controls (Joy-Con), **gyro aiming ("Gyroscope Mode")**, **mouse controls** "for pin-point precision", and **touch screen** for menus, skills and the Breach Protocol minigame [CDPR:51566].
- From earlier research, not re-read today; source nintendolife [OV]:
  - Gyro options: sensitivity, activation condition (for example only while aiming down sights), movement dampening.
  - Motion-gesture system only with two detached Joy-Con 2.
  - Mouse mode: reload (Y) sometimes unreliable; mouse and gyro can't be swapped seamlessly mid-game.
  - Graphics modes: **Quality 30 fps / Performance 40 fps**, both handheld; docked Performance needs a 120 Hz display; VRR handheld.
- **2.5:** "Added an FOV slider on consoles" [W:Update 2.5] [CDPR:52120]. Switch 2 is not named (UNVERIFIED for Switch 2). Also fixed a bug where tagging enemies while scanning made V crouch or stand with certain control schemes [W:Update 2.5].
- **2.5 Switch 2 release date (CONFLICT):** CDPR 52125 (2026-10-22) says 2.5 is "available now on … Nintendo Switch 2". CDPR 52120 (2026-10-21) said Switch 2 gets it "in the days to follow". The wiki says Oct 26 (infobox) and Oct 27 (body) [CDPR:52125] [CDPR:52120] [W:Update 2.5].

### 4.2 Aim assist and related options (all platforms; Accessibility tab since 2.1)

- **Aim Assist, ranged: Off / Light / Standard / Substantial.** Melee: Off / Light / Standard. Vehicle combat: On/Off [CDPR:49591].
- **Snap to Target:** toggle; snaps to targets when aiming with firearms [CDPR:49591] [G8:313894].
- Also: Weapon Sway (camera or weapon), Additive Camera Motions (reduces secondary camera movement), Center of Screen Dot, controller vibration [CDPR:49591]. Since 2.1, Difficulty and some Controls options are in the Accessibility tab [W:Patch 2.1].
- Controller camera options: horizontal/vertical sensitivity, **Zoom Sensitivity Reduction** (slower camera while aiming), inner/outer dead zone, response curve, turning bonus [G8:313894]. 2.1 fixed leftover dead zone when inner dead zone = 0 [W:Patch 2.1].
- Control schemes: **Classic, Dynamic, Alternative** (since 2.0) [W:Patch 2.0]. Patch 2.0 "Improved the Aim Assist feature" [W:Patch 2.0].
- Difficulty can be changed any time (Easy / Normal / Hard / Very Hard) [OV, W:Character Customization].

### 4.3 What helps most — (inference, built from the facts above)

1. Aim Assist ranged on **Substantial** and **Snap to Target ON**; gyro set to activate only while aiming; lower gyro sensitivity with dampening; raise Zoom Sensitivity Reduction.
2. Play the hacker so aiming matters less: quickhacks need only a scan-and-select, which uses no aim. Smart weapons + Smart Link do the aiming. Ping (and Ping T3) speeds up locks.
3. Performance mode (40 fps) handheld, or docked on a 120 Hz screen, for smoother gyro tracking [OV].
4. Avoid Deadeye/Focus headshot builds: they reward precise aim (Deadeye: no spread above 85% Stamina; Focus mode while aiming at full Stamina) [W:Deadeye (perk)] [W:Focus].
5. Dual wield is a Power-only, Cool-9 option. Its hip-fire Heywood Hurricane needs little aim but uses no smart rounds [W:Double Trouble] [IGN:How to Dual Wield].

---

## 5. Open questions / not found

- Exact 2.5 price of Reinforced Tendons at level 10 (T2). Sources only give €$67,824 (IGN, tier unknown) and pre-2.0 €$45,000.
- Which of the 23 Watson gigs are offered before The Heist.
- Whether the one-time attribute reset is offered on brand-new 2.x saves (game8 says yes; the patch note wording is ambiguous).
- Switch 2-specific aim-assist defaults, and whether the console FOV slider is present on Switch 2.
- Whether _Psycho Killer_ really gives the Chrome Compressor (CONFLICT, see 1.7).
- A sourced recommended level for The Heist.
