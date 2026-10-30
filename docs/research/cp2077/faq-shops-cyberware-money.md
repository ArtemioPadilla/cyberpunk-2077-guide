# FAQ research: shops, ripperdocs, cyberware, crafting, money (troubleshooting)

Target: Cyberpunk 2077: Ultimate Edition, Nintendo Switch 2, Update 2.5. Compiled 2026-10-30.
Reader: Act 1 (Watson), about level 5, just after La recolección (The Pickup) with Brick spared. Hacker/netrunner build, weak aim, gyro.

How to read this note:

- The **short answers are in Spanish** (ready to adapt). Details are in English for the writer.
- Source tags:
  - **[TWEAK]** = CDPR's own game data (TweakDB source files), from the public mirror `https://github.com/CDPR-Modding-Documentation/Cyberpunk-Tweaks` (sparse clone, read 2026-10-30). **Its newest data commit is "Patch 2.31" (2025-09-11)**, so it is 2.31 data, not 2.5. Update 2.5's notes list no economy, vendor or cyberware changes [W:Update_2.5], so 2.31 data should still hold (inference). Files used, all under `tweaks/base/gameplay/static_data/database/`:
    - `vendors/ripperdocs.tweak`, `loot/loot_prereqs.tweak`: ripperdoc stock and level gates
    - `vendors/skilltrainers.tweak`, `vendors/base_values.tweak`: netrunner vendors and quickhack gates
    - `items/prices/price_modifiers.tweak`, `items/cyberware/base_values.tweak`: price formula
    - `items/cyberware/legs/legs_advanced.tweak`: Reinforced Tendons record
    - `items/crafting/upgrade_data.tweak`: weapon upgrade costs
    - `characters/player/player_base_stats.tweak`: carry capacity
    - `vehicles/vehicleoffers.tweak`: AUTOFIXER offers
  - **[W:Page]** = Cyberpunk Fandom wiki, read through `api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1` on 2026-10-30.
  - **[PLAN-MX]** = CDPR build planner es-MX chunk `https://www.cyberpunk.net/build/9308-f41cc1eb8e9612e44d94.js` (EN `…/8603-b6e6f72c476c734a52a4.js`).
  - **[STEAM-MX]** = Steam achievements `?l=latam`, read 2026-10-30.
  - **[SYS]** = `systems-early-game-builds.md`. **[GLOS]** = `glossary-es-mx.md`.
- **(inference)** = my deduction from the facts, not stated by a source.
- Blocked or unreadable: Reddit (403, and not allowed in web search). IGN (WebFetch blocked; a plain curl of the IGN cyberware page worked). gamestegy, primagames and nexusmods (403). YouTube watch pages (empty to curl; search-result titles only). Steam threads were read by curl with the age-gate cookie.

---

### Q: No me aparecen los Tendones Reforzados (ni otros implantes de piernas o brazos) en el matasanos.

- **Short answer:** Es por tu **nivel**, no por tu Reputación. Los Tendones Reforzados no existen en nivel 1: su versión más baja es de nivel 2, y los matasanos solo la venden **a partir del nivel 10 de personaje**. Lo mismo pasa con todos los implantes de piernas y brazos.
- **Details:**
  - **Game data:** every ripperdoc stocks cyberware by **player level** only. No Street Cred check exists anywhere in the ripperdoc stock [TWEAK ripperdocs/loot_prereqs]. The tier windows are:
    - **Tier 1** (Common): only while level is **below 10**
    - **Tier 2**: levels **10–19**
    - **Tier 3**: 20–29
    - **Tier 4**: 30–39
    - **Tier 5**: 40–60
  - CDPR's support page gives the same thresholds for cyberware: T2 10, T3 20, T4 30, T5 40. For weapons they are T2 9, T3 17, T4 25, T5 33, and T5++ 51 (PL) [CDPR support 2593].
  - **Reinforced Tendons** (`AdvancedBoostedTendons…`): the lowest record is Uncommon (T2). The ripperdoc list has T2, T3, T4 and T5 entries, each behind the level window above [TWEAK legs_advanced, ripperdocs]. The wiki says the same thing: "any ripperdoc, starting at level 10" [W:Reinforced_Tendons].
  - **Every other leg implant is the same.** Lynx Paws, Fortified Ankles (internal `ReinforcedMuscles`) and Jenkins' Tendons are all sold only from **T2**, so from level 10 [TWEAK ripperdocs].
  - **Arm cyberware** is the same: Mantis Blades, Gorilla Arms, Monowire and PLS start at T2, level 10 [W pages via the site's gear.json].
  - Also T2-only, so level 10, in [TWEAK]: Optical Camo, Kerenzikov, Synaptic Accelerator, **Memory Boost**.
  - Sold from level 1 (they have a T1): RAM Upgrade, Smart Link, Kiroshi optics.
  - **Street Cred is irrelevant to ripperdoc stock in 2.x.** No gate in [TWEAK], and a Steam reply from 2023-09-25 says "Street Cred has nothing to do with ripperdoc inventory anymore. It's strictly tied to player level" [Steam 3878218563601885492]. The old figure "Street Cred 12, €$45,000" comes from 1.x guides (PRE-2.0, OBSOLETE).
  - **All ripperdocs share one stock.** The Watson ripperdocs inherit the same list. Viktor's list is the same, minus Bionic Joints, Cogito Lattice and NeuroMatrix, which only the other ripperdocs carry [TWEAK ripperdocs: `AdvancedCollectiveRipperDocGeneral` vs `…Victor`].
  - Many items at the other ripperdocs (Smart Link, Optical Camo, Kiroshi optics…) also need `AfterFirstVisitAtVictor` [TWEAK]. You already did that in El matasanos (The Ripperdoc).
  - **What to do at level 5 (inference):** get to level 10 (cyberpsychos, NCPD hustles, Regina's gigs), save about €$11,000, then buy at any Watson ripperdoc.
- **Sources:**
  - [TWEAK] files above (2.31 data)
  - https://support.cdprojektred.com/en/cyberpunk/pc/gameplay/issue/2593/item-tiers-in-loot-and-vendors (post-2.0, no date shown)
  - [W:Reinforced_Tendons] (2026-10-30)
  - https://steamcommunity.com/app/1091500/discussions/0/3878218563601885492/ (2023-09-22 to 25, patch 2.0)
  - https://www.3djuegos.com/juegos/cyberpunk-2077/guias-y-trucos/cyberpunk-2077-como-conseguir-doble-salto (2024-08-05: "no hay versión de nivel 1 en el caso de los Tendones Reforzados", level 10)
- **Confidence:** high.
- **es-MX names:**
  - **matasanos**: PLAN-MX "clínicas de matasanos"; GLOS
  - **ciberware**, **implante**: PLAN-MX; STEAM-MX "Instala al menos un implante en cada sistema y parte del cuerpo" (achievement _Carbono modificado_ = Full Body Conversion)
  - **Reputación** (Street Cred): STEAM-MX
  - "Tendones reforzados" is used by 3DJuegos (Spain) and the YouTube title by SiferYT, region unknown. (UNVERIFIED for es-MX.)
  - Fortified Ankles appears as "Tobillos fortalecidos" (SiferYT) and "Tobillos reforzados" (the_evil0023), both YouTube titles. (UNVERIFIED, CONFLICT.)

### Q: ¿Cuánto cuestan los Tendones Reforzados en la 2.x al nivel 10?

- **Short answer:** Cerca de **€$10,700** (nivel 2). El precio depende del nivel del implante, no de tu nivel: cuesta lo mismo en el nivel 10 que en el 19. La Reputación y el descuento de Charles Bucks lo bajan un poco más.
- **Details:**
  - **Direct 2.x price quotes for the T2:**
    - **DualShockers, 2023-10-03 (patch 2.0):** "10,699 Eurodollars (Tier 2)".
    - cyberpunk2077pedia (2026-06-21): "At Tier 2, it'll set you back exactly 10,699 Eurodollars". Probably copied; it adds nothing new.
    - note.com Japanese guide ("based on Ver 2.31 game data", posted 2026-02-09): "Tier 2, which appears at levels 10–19, is about 10,000 eddies".
    - These back up the Google AI claim of "unos 10,000" that cited DualShockers. No "escapesf" page turned up in two searches.
  - **The game's price formula, from [TWEAK], explains why the price does not climb with your level:**
    - Every cyberware's buy price is `1000 (BaseCyberwarePrice) × quality_to_price_mult(tier) × plus-tier mult × 0.4 (CyberwareMultiplier) × Street Cred discount` [TWEAK cyberware/base_values, price_modifiers].
    - Reinforced Tendons adds one more multiplier, the curve `midhigh_humanity_to_price_mult` by tier. **It is the only cyberware in the game on that curve** (inference: CDPR priced it on purpose) [TWEAK legs_advanced].
    - **There is no player-level or item-level term in the cyberware price** (weapons do have one: `PowerLevelMultiplier`). So T2 Tendons cost the same at level 10 and at level 19 (inference from the formula).
    - The curve values themselves live in `.curveset` files that are not in the public mirror. That is why I cannot compute the price from the files.
  - **IGN's €$67,824 is most likely the Tier 4 price (inference).** In the same IGN table (page dated 2025-06-02), every deck costs €$47,197, and the decks are labelled Tetratronic Rippler MK.4, Paraline MK.4, Arasaka MK.4, Biotech MK.3 and Raven MK.2. Because Biotech starts at T2 and Raven at T3, all of those are **T4**. IGN's other prices are also about 1.7× the wiki's T3 prices, which also points to T4: Mantis Blades 49,458 vs 28,783, PLS 50,102 vs 29,483, Adrenaline Converter 9,447 vs 5,273. So IGN's list is a level 30–39 snapshot (except Smart Link/ThreatEvac at €$541, probably T1).
  - **Other figures, and why they differ:**
    - "€$45,000" is the 1.x Rare price with Street Cred 12 (game8 Dec 2020; Steam guides) (PRE-2.0, OBSOLETE).
    - "30,000+" comes from The Nerd Stash (2023-09-30, updated 2024-10-04): single source, conflicts with the others (CONFLICT).
  - **Discounts:**
    - **Street Cred:** −1% at SC 5/10/15/20/25/30, −2% at 35 and 45, −5% at 50; 15% total [W:Street_Cred]. In the formula this is `BuyPrice_StreetCred_Discount`, −0.01 per discount point [TWEAK].
    - **Charles Bucks:** 20% off his own wares if you accept his bribe in _Last Login_ [SYS 1.2]. With that, T2 Tendons ≈ €$8,600 (inference: 10,699 × 0.8, if the discounts multiply).
  - **Upgrading later costs extra:** components plus eddies at the ripperdoc. Tendons have `upgradeCostMult = 1.5`, i.e. 1.5× the base upgrade cost [TWEAK].
  - **Its armor is tiny in 2.x:** T2 = 4 Armor, up to 12 at T5++. Formula: 2 + 2 per quality step + 1 for a "+" tier [TWEAK]; nukesdragons lists the same 4 → 12. The wiki's "20 at T2, +8 per tier" predates the 2.1 armor cut [W:Patch_2.1 "Reinforced Tendons: Decreased Armor"] (OBSOLETE).
- **Sources:**
  - https://www.dualshockers.com/cyberpunk-2077-how-to-get-double-jump/ (2023-10-03, 2.0)
  - https://cyberpunk2077pedia.com/how-i-unlocked-and-upgraded-double-jump-in-cyberpunk-2077-2-0.html (2026-06-21)
  - https://note.com/lofty_jaguar8502/n/ne2d7f8fc6595?hl=en (2026-02-09, "Ver 2.31 data")
  - https://www.ign.com/wikis/cyberpunk-2077/Cyberware (2025-06-02, read by curl)
  - https://thenerdstash.com/how-to-get-double-jump-in-cyberpunk-2077-2-0/ (2023-09-30, updated 2024-10-04)
  - https://nukesdragons.com/cyberpunk-2077/db/cyberware/reinforced-tendons (undated)
  - [TWEAK] price files (2.31)
  - [W:Street_Cred], [W:Patch_2.1]
- **Confidence:**
  - Price ≈ €$10,700 at T2: **medium**. Two independent sources, one dated 2.0 and one citing 2.31 data, both near 10–10.7k; no in-game screenshot.
  - "Same price at level 10 and 19": medium-high (game formula).
  - "IGN 67,824 = T4": medium (inference).
  - Recommend wording: "unos €$10,700 (compruébalo en el juego)".
- **es-MX names:** eurodólares / €$ (GLOS: UNVERIFIED for es-MX). **Reputación** (STEAM-MX). **blindaje** (armor, PLAN-MX).

### Q: ¿El matasanos cambia lo que vende? Antes veía un implante barato y ahora solo aparece uno más caro.

- **Short answer:** Sí. Al llegar a los niveles 10, 20, 30 y 40 la tienda cambia de nivel de implante. La versión anterior **desaparece** y aparece la siguiente, más cara. Si quieres algo barato de nivel 1, cómpralo antes del nivel 10.
- **Details:**
  - The Tier 1 entries need level **< 10**, the Tier 2 entries need 10–19, and so on. **Only one tier of each implant is on sale at a time** [TWEAK loot_prereqs `CommonCWLevelAvailabilityAtVendor`, `UncommonCW…`].
  - The wiki note (from [SYS 1.2]): the inventory refreshes **every 10 levels**, not every 24 h, and the random stat bonuses shown stay locked until then [W:Cyberpunk_2077_Cyberware].
  - There are also extra "next tier" queries at levels 7–13, 14–16, 17–23, 24–26, 27–33, 34–36 and 37+ (`NextTier…CyberwareAtVendor`, `CyberwareNextTierArrayQuery`) [TWEAK ripperdocs]. Their contents are not in the mirror. (UNVERIFIED: these may put a few next-tier pieces on sale early, for example some T2 items from level 7.)
  - A Steam reply (2023-09-25): higher tiers "start to drop [as loot] earlier than you can buy them, roughly 3 at 15, 4 at 25, 5 at 35" [Steam 3878218563601885492]. This matches the weapon loot gates (T3 17, T4 25, T5 33) [CDPR support 2593].
  - Already-bought cyberware is never downgraded: you upgrade it yourself (next questions).
- **Sources:** [TWEAK]; [W:Cyberpunk_2077_Cyberware]; Steam thread above (2023, 2.0); CDPR support 2593.
- **Confidence:** high for the tier switch. Low for the "next tier" queries (UNVERIFIED).
- **es-MX names:** matasanos, ciberware (PLAN-MX). "Nivel" is used for item tier in es-MX ("a partir del nivel 3") [GLOS], so the guide must say "nivel del implante" vs "tu nivel" to avoid confusion (inference).

### Q: No puedo instalar un implante: "capacidad de ciberware insuficiente".

- **Short answer:** Tu capacidad de ciberware sube con tu nivel (+3 por nivel), con fragmentos de capacidad y con la habilidad Engineer. Si no te alcanza, quita o cambia un implante, o sube de nivel.
- **Details:**
  - **Base capacity:** 24 at level 1, +3 per level, 201 at level 60 [W:Cyberpunk_2077_Stats]. So **36 at level 5** and **51 at level 10** (inference: 24 + 3 × (level − 1)).
  - **What is already installed (inference):**
    - Viktor's three implants: Ballistic Coprocessor 2, Basic Kiroshi Optics 1, Subdermal Armor 5 [site gear.json, W pages]
    - the starting Militech Paraline deck: 14 [SYS 1.5]
    - total about **22**, so about **14 free at level 5** and about **29 at level 10**
  - **Costs of the usual hacker picks:**
    - Reinforced Tendons 8, RAM Upgrade 8, Smart Link 4 (replacing the Coprocessor's 2), Kiroshi Sentry 2 (replacing Basic's 1)
    - Memory Boost 18 and Optical Camo 20
    - [W pages] [IGN capacity column, 2025-06-02]
    - (inference) At level 10 you cannot fit all of them. Tendons + RAM Upgrade + Smart Link + Sentry use about 19 of 29; Memory Boost or Optical Camo then needs a few more levels or shards.
  - **More capacity:**
    - **Cyberware Capacity Shards:** random enemy drops, below.
    - **Engineer skill 10 / 30:** +5 / +10. Engineer XP comes from Tech weapons, grenades, and also from **crafting, upgrading and disassembling items** [W:Cyberpunk_2077_Skills].
    - _Renaissance Punk_ («Renacimiento punk», Tech 9): +4 per attribute at 9+.
    - _Edgerunner_ (Tech 20): go up to 50 over the limit at −0.5% max Health per point.
    - **Chrome Compressor**: +40–70; Dogtown and Airdrops; it replaces your deck, so it is useless for a netrunner.
    - [W:Cyberpunk_2077_Stats] [W:Cyberpunk_2077_Cyberware] [PLAN-MX]
  - _All Things Cyber_ («Todo lo de ciber», Tech 9), level 2: −20% capacity cost for Integumentary and Skeleton implants [PLAN-MX].
  - The hard cap is 450; 430 is reachable with the Compressor, 360 without [W:Cyberpunk_2077_Stats].
- **Sources:** [W:Cyberpunk_2077_Stats], [W:Cyberpunk_2077_Cyberware], [W:Cyberpunk_2077_Skills] (2026-10-30); [PLAN-MX]; IGN cyberware page (2025-06-02).
- **Confidence:** high (rules). Medium for the level-5/level-10 arithmetic (inference from sourced numbers; capacity shards already looted would add to it).
- **es-MX names:**
  - **capacidad de ciberware** (PLAN-MX "+4 de capacidad de ciberware para cada atributo que tenga 9 puntos o más")
  - **Renacimiento punk**, **Todo lo de ciber**, **Edgerunner**, **Licencia para cromar** (PLAN-MX)
  - Shard: not verified. One LatAm-looking YouTube title says "lector de capacidad de ciberware" (a.k.a. Julius, patch 2.01). (UNVERIFIED)

### Q: ¿Dónde consigo fragmentos de capacidad de ciberware?

- **Short answer:** Los sueltan enemigos al azar, uno por nivel como máximo. Los primeros (nivel 2, +2 de capacidad) salen desde el nivel 2. También hay uno en la recompensa final de Regina por los ciberpsicópatas y otro en Phantom Liberty.
- **Details:**
  - The shards give +2 / +3 / +4 / +6 capacity at tiers T2 / T3 / T4 / T5. Base-game drops add up to 60 capacity. All are random enemy drops in Night City [W:Cyberware_Capacity_Shard]:
    - **T2:** 7 drops, from level 2, at most one per level
    - **T3:** 4 drops, from level 9, at most one per 2 levels
    - **T4:** 4 drops, from level 17
    - **T5:** 2 drops, from level 25
  - **Psycho Killer**: Regina's final reward cache, after all 17 cyberpsychos, holds a T4 or T5 shard. The T5 needs level 25+ [W:Cyberware_Capacity_Shard].
  - **PL:** a T3/T4 shard in a cache in the EBM Petrochem Stadium parking garage during _Dog Eat Dog_. **It can be missed.** Five Dogtown cyberjunkies drop T2 shards [W:Cyberware_Capacity_Shard].
  - **Fixes:** 2.1 made shards drop properly at max level [W:Patch_2.1]; 2.3 lets missed shards (within the drop limit) still drop [W:Patch_2.3].
  - (inference) Loot everyone you knock down. In Watson the first T2 shards come from ordinary enemies, NCPD hustles and gigs.
- **Sources:** [W:Cyberware_Capacity_Shard], [W:Patch_2.1], [W:Patch_2.3] (2026-10-30).
- **Confidence:** high.
- **es-MX names:** not found. (UNVERIFIED)

### Q: ¿Por qué el matasanos no me deja mejorar (o quitar) un implante?

- **Short answer:** Para mejorar un implante necesitas **componentes de creación** del nivel siguiente y eddies; si te falta uno de los dos, la opción no avanza. No hay muro de nivel para mejorar. El límite es el nivel 5++ (5 en algunos implantes).
- **Details:**
  - Since 2.0, cyberware is **upgraded on the ripperdoc screen**. Crafting and upgrading use only **one type of component** (Item Components of the tier) [W:Patch_2.0] [W:Cyberpunk_2077_Cyberware "upgraded in quality with corresponding Item Components at Ripperdocs"].
  - Eddies are also charged: DualShockers says "the necessary eddies and Tier components"; cyberpunk2077pedia says "increasing amounts of Eurodollars and tier-appropriate components" [DualShockers 2023-10-03]. The eddie amounts are not published. (UNVERIFIED amounts)
  - **Base component costs per step,** from `CyberwareBaseUpgradeCosts` [TWEAK]:
    - 20 for the step to T1+ (30 for "core" cyberware), 15 to T2, 20 to T2+ (30 core), and the same 15/20 pattern up the tiers
    - 50 to T5++ (80 core)
    - each implant multiplies these by its own `upgradeCostMult` (0.5–3.5; Reinforced Tendons 1.5, Lynx Paws 0.5)
    - which component tier pays which step is not spelled out in this record
  - **No level wall for upgrades.** A player at level 16 upgraded "all my cyberware to tier 3+ without putting up a level wall, as long as I have the mats" (Steam, 2023-09-25). (UNVERIFIED single report, but nothing in [TWEAK] gates upgrades by level.)
  - **Max tier:** most cyberware goes to T5++. T5++ needs Phantom Liberty (the [TWEAK] records for T5++ are tagged `[ EP1 ]`). The Ultimate Edition includes it.
  - **Stat bonuses on upgrade:** you get the bonus set shown. With _Chipware Connoisseur_ («Conocedora de chips», Tech 9) you choose between options; from T3 there is a third [PLAN-MX] [W:Cyberpunk_2077_Cyberware].
  - **Components:** dismantle items (next questions) and loot. You can also craft higher components from lower ones in the Crafting menu: 5 T1 make 1 T2 [W:Tier_2_Item_Components crafting table]. game8's breakdown (75 T5 = 375 T4 = 1,875 T3 …) shows the same 5:1 ratio [game8 iconic, 2023-09-27].
  - _Lucky Day_ («Día de suerte», Tech 9, after All Things Cyber): +25% crafting components from looting [W:Lucky_Day] [PLAN-MX].
  - **Removing implants:** you can only install or swap cyberware at a ripperdoc [SYS 1.2]. I found nothing in 2.x sources about removal being blocked; with a single-slot body part (Hands, Legs) you swap, not add. (UNVERIFIED)
- **Sources:** [W:Patch_2.0], [W:Cyberpunk_2077_Cyberware], [W:Tier_2_Item_Components], [W:Lucky_Day] (2026-10-30); [TWEAK] `items/cyberware/base_values.tweak`; https://www.dualshockers.com/cyberpunk-2077-how-to-get-double-jump/ (2023-10-03); https://steamcommunity.com/app/1091500/discussions/0/3878218563601885492/ (2023-09-25); https://game8.co/games/Cyberpunk-2077/archives/Upgrade-Iconic-Weapons (2023-09-27).
- **Confidence:** high for components at the ripperdoc. Medium for "no level wall". Low for the eddie part (no numbers).
- **es-MX names:**
  - **componentes de creación** (PLAN-MX "+25% de probabilidad de encontrar componentes de creación al saquear")
  - **mejorar** ("Al mejorar tu ciberware", PLAN-MX)
  - **Conocedora de chips** / **Día de suerte** (PLAN-MX; masculine forms for a male V)

### Q: ¿Me conviene mejorar mi implante o comprar uno nuevo cuando suba de nivel?

- **Short answer:** Normalmente conviene **mejorar** el que ya tienes con componentes: sale más barato que comprar el del nivel siguiente. Compra nuevo solo lo que todavía no tienes.
- **Details:**
  - A guide summary says it "usually costs less money to upgrade a lower-tier Cyberware than to buy a new one of the desired rarity" (search snippet; the article itself not opened). (UNVERIFIED)
  - Price scale (inference from IGN's T4 list vs wiki T3 prices): each tier costs roughly 1.7–3.5× the previous one, so buying every tier new is expensive.
  - (inference) For a hacker at level 10–20: buy Tendons T2 once and upgrade it later; buy the deck you want to keep and upgrade it. The deck is the "core" item, whose upgrade steps cost 30 instead of 20 components [TWEAK].
- **Sources:** search snippet (vulkk / gamewiki.blog, not opened); [TWEAK]; IGN and wiki prices above.
- **Confidence:** low-medium (inference).
- **es-MX names:** mejorar (PLAN-MX).

### Q: ¿Dónde compro hackeos rápidos? Yoko no me vende casi nada.

- **Short answer:** En Watson los venden **Yoko Tsuru** (tienda EdgeNet del mercado de Kabuki) y **Nix** (en el Afterlife, Little China). Antes del **nivel 7** solo tienen Ping y Bait de nivel 1 y algunas especificaciones de creación. Los hackeos de nivel 2 aparecen al llegar al nivel 7 o si llevas una ciberterminal de nivel 2 o mejor.
- **Details:**
  - **Netrunner vendors:** Chang Hoon Nam and the Netrunner vendor (Japantown), Netrunner (Coastview), Netrunner (Vista del Rey), Yoko Tsuru (Kabuki), Nix (Little China); in PL, Sammy Taylor (EBM Petrochem Stadium) [W:Cyberpunk_2077_Vendors].
    - **In Watson only Yoko and Nix.** In [TWEAK] they are `wat_kab_netrunner_01` and `wat_lch_netrunner_01`, with identical lists.
    - There is also a Kabuki "techstore" (`wat_kab_techstore_01`) that sells **only Tier 5** quickhacks (level 32+) [TWEAK techstores]. Which shop that is was not identified.
  - **Nix is at the Afterlife** (Little China, Watson) [W:Nix] [W:Afterlife]. You certainly go there at the start of El golpe (The Heist) [M1 notes]. (UNVERIFIED whether he trades before that.)
  - **What the netrunner vendor stocks, and when** [TWEAK skilltrainers + vendors/base_values]:
    - **Always:** **Ping** (T1) and **WhistleLvl0Program** (T1 Covert; probably Bait), plus netrunner clothing.
    - **Quickhack specs (crafting specs):** T2 from **level 2**, T3 from 12, T4 from 20, T5 from 30.
    - **Ready-made quickhacks:** **T2 from level 7**, T3 from 15, T4 from 23, T5 from 32, T5++ from 51.
    - **Or earlier, if your equipped deck is good enough:** each gate is "level X **or** equipped cyberdeck of minimum quality N" (`RarityOfEquippedCyberdeckPrereq`, N = 2/4/6/8/10). (inference: N=2 means a T2 deck, so a T2 deck unlocks T2 quickhacks; the exact quality scale is not documented in the mirror.)
  - **Vendors never sell Tier 1 versions** of Short Circuit, Overheat, Reboot Optics etc.; their lists start at the "Lvl1" records, which are Uncommon = T2 [TWEAK quickhack records: `OverheatLvl1Program` quality Uncommon]. T1 copies come from loot, enemy netrunners, the Datamine in access points, and the free Ping from _The Gift_ [SYS 2.5].
  - **Which T2 quickhacks are on the list:** Short Circuit, Overheat, Contagion, Cyberware Malfunction, Cripple Movement, Weapon Glitch, Reboot Optics, Sonic Shock, Request Backup and Bait. T3 adds Synapse Burnout, Ping and Memory Wipe. T4 adds Suicide, Detonate Grenade, System Collapse and Cyberpsychosis [TWEAK; internal names mapped as `EMPOverload`=Short Circuit, `BrainMelt`=Synapse Burnout, `DisableCyberware`=Cyberware Malfunction, `LocomotionMalfunction`=Cripple Movement, `WeaponMalfunction`=Weapon Glitch, `Blind`=Reboot Optics, `Madness`=Cyberpsychosis, `GrenadeExplode`=Detonate Grenade]. (The `CommsNoise`/`CommsCallIn`/`Whistle` → Sonic Shock / Request Backup / Bait mapping is inference.)
  - Vendors no longer sell quickhack crafting components (since 2.0) [W:Patch_2.0]. You get them from enemy netrunners and access points [W:Cyberpunk_2077_Crafting_Specs].
  - **Practical (inference):** at level 5, buy the T2 **specs** if you have quickhack components, loot netrunners, and come back at level 7. Short Circuit T2 is not among the level-2 specs; its first spec is T3, at level 12.
- **Sources:** [TWEAK] (2.31); [W:Cyberpunk_2077_Vendors], [W:Nix], [W:Yoko_Tsuru], [W:Afterlife], [W:Patch_2.0], [W:Cyberpunk_2077_Crafting_Specs] (2026-10-30).
- **Confidence:** high for the vendor names and level gates (game data). Medium for the deck-quality alternative. Low for Nix before The Heist.
- **es-MX names:**
  - **hackeo rápido**, **Protocolo de invasión**, **ciberterminal**, **netrunner** (STEAM-MX, PLAN-MX)
  - quickhack names: only Detonar granada and Distraer enemigos are verified (GLOS)
  - "especificación de creación" not verified (UNVERIFIED)

### Q: ¿Puedo crear mis propios hackeos rápidos?

- **Short answer:** Sí: necesitas la **especificación** del hackeo (se compra a vendedores netrunner o sale del Protocolo de invasión) y **componentes de hackeo rápido** (de netrunners enemigos y puntos de acceso). No hace falta ninguna ventaja.
- **Details:**
  - Specs: bought from netrunner vendors (T2 from level 2) [TWEAK], or from the Expert Datamine in Breach Protocol [W:Cyberpunk_2077_Crafting_Specs].
  - Components: Tier 2–5 Quickhack Components, from enemy netrunners, access points and netrunner stores [W:Cyberpunk_2077_Crafting_Specs]. Since 2.0 vendors no longer sell quickhack components [W:Patch_2.0]. (CONFLICT, minor: the wiki's crafting page still says "Netrunner Stores"; that page carries a "Cleanup: Update for Patch 2.X" banner.)
  - Crafting quickhacks gives **Netrunner skill XP** [W:Cyberpunk_2077_Skills].
- **Sources:** [W:Cyberpunk_2077_Crafting_Specs], [W:Patch_2.0], [W:Cyberpunk_2077_Skills] (2026-10-30); [TWEAK].
- **Confidence:** medium-high.
- **es-MX names:** **creación** ("Crea tres objetos legendarios", STEAM-MX _Creador maestro_), hackeo rápido.

### Q: ¿Cómo mejoro un arma emblemática (Dying Night, Skippy…)?

- **Short answer:** Menú **Inventario > Creación > pestaña Mejoras**, con el arma en tu mochila (no en el alijo). Cada mejora sube un nivel y cuesta componentes del nivel correspondiente. No necesitas ventajas ni especificaciones.
- **Details:**
  - **Since 2.0, only iconic weapons can be upgraded** (and cyberware). Each upgrade raises one tier [W:Patch_2.0]. Normal weapons cannot be upgraded; replace them with a higher-tier drop.
  - **How:** Crafting menu → **Upgrades** tab. **The weapon must be in your backpack**; iconics in the stash don't appear [game8, 2023-09-27].
  - **Component cost per step** [TWEAK upgrade_data; matches game8 for the top steps]:
    - T1 → T1+: **75 T1**
    - T1+ → T2: **40 T2**
    - T2 → T2+: **75 T2**
    - T2+ → T3: **40 T3**
    - … and so on, alternating 75 same-tier / 40 next-tier
    - T5 → T5+: **75 T5**
    - T5+ → T5++: **200 T5**
  - **No perk or attribute is needed** (none in [TWEAK] or game8). _Lucky Day_ («Día de suerte») gives +25% components from loot [W:Lucky_Day].
  - **Level:** I found no level gate for upgrades in [TWEAK]. gamers.wiki says T5++ needs PL and level 51 (single source; UNVERIFIED). Weapon loot and vendor tiers follow the level windows (T2 9, T3 17, T4 25, T5 33, T5++ 51) [CDPR support 2593].
  - Upgrading gives Engineer XP (crafting, upgrading and disassembling all do) [W:Cyberpunk_2077_Skills].
  - game8's "upgrade bug" only affects iconics carried over from pre-2.0 saves [game8 2023-09-27]. Irrelevant for a new Switch 2 save.
  - **Crafting new weapons** needs a spec. Specs come from bosses of Suspected Organized Crime Activities and from weapon vendors. Getting an iconic unlocks its next-tier spec automatically, up to Legendary [W:Cyberpunk_2077_Crafting_Specs].
- **Sources:** https://game8.co/games/Cyberpunk-2077/archives/Upgrade-Iconic-Weapons (2023-09-27, 2.0); [TWEAK] `items/crafting/upgrade_data.tweak`; [W:Patch_2.0], [W:Cyberpunk_2077_Crafting_Specs], [W:Cyberpunk_2077_Skills]; https://gamers.wiki/en/games/cyberpunk-2077/guides/cyberpunk-2077-iconic-weapon-upgrades-to-tier-5 (search snippet only).
- **Confidence:** high (method, costs). Low (level gate for 5++).
- **es-MX names:** **emblemática** (GLOS medium), **creación** (STEAM-MX), componentes de creación (PLAN-MX). The tab name "Mejoras" is not verified (UNVERIFIED).

### Q: ¿Pagar a Viktor ya o después? ¿Qué pasa si no le pago?

- **Short answer:** No hay fecha límite ni castigo. Lo único: **Viktor no te vende ni te instala nada hasta que le pagues los €$21,000**. Como los demás matasanos venden lo mismo, págale cuando te sobre el dinero, después de comprar lo que necesites.
- **Details:**
  - Minor job _Paid in Full_ (`mq045_viktor_debt`): €$21,000 for Ballistic Coprocessor, Basic Kiroshi Optics and Subdermal Armor. "There is no deadline for paying the debt, but Viktor's services will not be available until he has been paid." Viktor tries to refuse; V insists. No item, XP or Street Cred reward is listed [W:Paid_in_Full].
  - Viktor's stock is the shared stock minus three Integumentary/Skeleton items [TWEAK]. Charles Bucks, Dr. Chrome, Instant Implants and Cassius Ryder sell everything a hacker needs [SYS 1.2].
  - The story does not need you to pay. Viktor's clinic is still a location of Lagunas mentales (Playing for Time) after The Heist [M1 notes: `main-1-prologue-act1.md`]. (inference: the debt does not block the story.)
  - (inference) Spending order with about €$21k: Reinforced Tendons at level 10 (about €$10.7k) and the deck/RAM implants first; Viktor's debt later.
- **Sources:** [W:Paid_in_Full], [W:Viktor_Vektor] (2026-10-30); [TWEAK] ripperdocs; [SYS].
- **Confidence:** high.
- **es-MX names:** matasanos (PLAN-MX). The job name "Paid in Full" in es-MX: not found (UNVERIFIED).

### Q: ¿Cómo gano dinero rápido en el acto 1 (Watson)?

- **Short answer:** Haz los **chanchullos del NCPD** de Watson (unos €$42,000 en total), las **cinco detecciones de ciberpsicópata** del acto 1 (unos €$13,000) y los **encargos de Regina** (€$2,200–6,400 cada uno). Vende lo que no uses en los Drop Points y saquea los puntos de acceso.
- **Details:**
  - **Wiki reward fields** (the patch is not stated; treat as approximate):
    - **NCPD Scanner Hustles in Watson** (32 activities on the wiki; 26 Assaults, Reported Crimes and SOCAs have an eddie reward listed). Each pays €$750–2,100, roughly **€$42,000 in total**, plus the loot in their caches:
      - Assault in Progress: €$1,500–1,790 each in Kabuki and Little China (one pays €$752)
      - Reported Crime: €$1,500–2,100
      - Suspected Organized Crime Activity: €$1,500–2,100
    - **Cyberpsycho sightings in Act 1:**
      - Demons of War €$2,550, Lt. Mower €$2,550, Six Feet Under €$2,900, Ticket to the Major Leagues €$2,300, Where the Bodies Hit the Floor €$2,900
      - about **€$13,200 total**
      - Bloody Ritual (€$2,900) needs Act 2
    - **Regina's tier-1 gigs:** Hippocratic Oath €$3,000, Many Ways to Skin a Cat €$3,000, Rite of Passage €$3,000, Monster Hunt €$2,800, Playing for Keeps €$2,230 (≈ **€$14,000**). _Last Login_ (tier 5) €$6,400 [W gig pages].
    - The game8 figure "Psycho Killer €$33,270 (17 missions)" is from a page last updated 2023-12-05 that also promotes a dupe glitch. It doesn't match the per-sighting wiki fields. Don't print it (CONFLICT).
  - **Selling:** Drop Points ("Sell All Junk") and vendors. Loot scales with level since 2.0 [W:Patch_2.0] [SYS 1.7]. Datamine access points with Breach Protocol for eddies [SYS 1.7].
  - **The Pickup:** €$3,000–13,000 depending on route [W:The_Pickup infobox]. Already done by this reader.
  - **Not in Act 1:**
    - Car races, €$10,000 per win [game8 2023-12-05]. They need _The Beast in Me_, an Act 2 job.
    - Vehicle contracts for El Capitán (PL, after _Push It to the Limit_ in Dogtown) [W:Just_Another_Story].
  - **Dupe glitch:** game8 (2023-12-05) describes one for 2.0. It needs frame-rate tricks, and nothing confirms it in 2.5. Don't recommend it (UNVERIFIED).
  - (inference) Done before level 10, these easily cover Tendons (about €$10.7k) plus RAM implants, with Viktor's €$21k later.
- **Sources:**
  - wiki infoboxes via API (2026-10-30): [W:Cyberpunk_2077_Minor_Activities] category members, [W:Cyberpsycho_Sighting:_Demons_of_War] and the other four, [W:Gig:_Hippocratic_Oath], [W:Gig:_Monster_Hunt], [W:Gig:_Playing_for_Keeps], [W:Gig:_Rite_of_Passage], [W:Gig:_Many_Ways_to_Skin_a_Cat], [W:Gig:_Last_Login], [W:The_Pickup]
  - https://game8.co/games/Cyberpunk-2077/archives/312850 (2023-12-05)
- **Confidence:** medium. The amounts are wiki infobox values, the patch is not stated, and 2.x may scale them. The ranking (NCPD + psychos + gigs) is high.
- **es-MX names:** **chanchullo del escáner del NCPD**, **detección de ciberpsicópata**, **encargo**, **Protocolo de invasión** (STEAM-MX: "Completa todos los encargos y chanchullos del escáner del NCPD en Watson", achievement _Elemental_). "Drop Point" in es-MX: not found (UNVERIFIED).

### Q: ¿Vale la pena comprar un auto ya?

- **Short answer:** No todavía. En el acto 1 ya tienes el Archer Hella gratis, y hay autos gratis más adelante. Los autos se compran en **AUTOFIXER** (desde €$13,000, más según tu Reputación), pero no está claro que estén a la venta antes de El golpe. Gasta primero en ciberware.
- **Details:**
  - **AUTOFIXER:** since 2.0 cars are bought only on this netpage, on V's computer or at terminals at gas stations and repair shops. There is a map filter. More cars unlock as Street Cred rises [W:Patch_2.0] [W:Autofixer].
  - **Cheapest:** Thorton Galena G240 **€$13,000** (wiki infobox `street_cred = 1`), Mahir Supron FS3 €$16,000, Thorton Colby C125 €$18,000, Villefort Columbus €$19,000, Makigai MaiMai €$22,000 (SC 6) [W:Autofixer] [W:Thorton_Galena_G240] [W:Makigai_MaiMai_P126].
  - **When it opens (CONFLICT / UNVERIFIED):**
    - GameRant (2023-09-26) says El Capitán emails you "during the game's prologue".
    - A Steam reply (2023-09-25) says "you have to complete the heist and then have Delamain smash up your car before they start offering vehicles". Others in that thread report most cars still locked at SC 30–40.
    - In [TWEAK] each offer is gated by a quest fact (`…_available`), not visible in the mirror.
  - **Free cars:** Jackie's ARCH (after The Heist, _Heroes_) and others, plus the Archer Hella returned after _Human Nature_ [site items.json] [SYS].
  - **Discounts:** AUTOFIXER discount shards from replayable races and PL vehicle contracts stack, up to 100% with 25 shards [W:Autofixer].
  - **Achievement** _Motorexia_ (Autojock) = buy every vehicle for sale [STEAM-MX].
- **Sources:** [W:Autofixer], [W:Patch_2.0], [W:Thorton_Galena_G240], [W:Makigai_MaiMai_P126] (2026-10-30); https://gamerant.com/cyberpunk-2077-how-buy-cars-20-update/ (2023-09-26); https://steamcommunity.com/app/1091500/discussions/0/3878218962822132805/ (2023-09-25 to 10-14); [TWEAK] vehicleoffers.
- **Confidence:** high for prices and AUTOFIXER. Low for the Act 1 availability (CONFLICT).
- **es-MX names:** "Compra todos los **vehículos a la venta**" (STEAM-MX). AUTOFIXER is a brand name (probably kept).

### Q: ¿Qué son los contratos de vehículos de El Capitán? ¿Los puedo hacer ya?

- **Short answer:** Son trabajos repetibles de **Phantom Liberty**: robas un auto marcado y se lo entregas a El Capitán. Dan descuentos para AUTOFIXER, eddies y más autos. No están en el acto 1: empiezan tras _Push It to the Limit_, en Dogtown (acto 2).
- **Details:**
  - _Just Another Story_ (repeatable minor job, giver Muamar Reyes / El Capitán). Unlocked after _Push It to the Limit_. Start it by finding a car marked with a blue steering wheel. The variants: pursuers, "good condition" delivery, or the Blackbird hacking car. Rewards depend on performance; the discount shard is always one of them [W:Just_Another_Story].
  - 1–14 completions unlock PL cars on AUTOFIXER (for example the Thorton Colby BARGHEST after 1) [W:Autofixer].
  - The achievement _Lo que fácil viene fácil se va_ (Easy Come, Easy Go): "Roba el camión médico de Arasaka o **entrégale 10 vehículos al Capitán**" [STEAM-MX].
- **Sources:** [W:Just_Another_Story], [W:Autofixer] (2026-10-30); [STEAM-MX].
- **Confidence:** high.
- **es-MX names:** **el Capitán** (STEAM-MX "al Capitán"; GLOS). Job name in es-MX not found.

### Q: ¿Desmantelar o vender? ¿Qué hago con la "chatarra"?

- **Short answer:** **Vende la chatarra** (Drop Points: "vender toda la chatarra"). **Desmantela** las armas y la ropa que no quieras cuando necesites componentes para mejorar ciberware y armas emblemáticas. Vende cuando necesites eddies.
- **Details:**
  - **Junk** (category `Gen_Junk`) has **no disassembly result** in the data [TWEAK disassembly_recipes]. (inference: junk exists only to be sold.) Drop Points sell items for eddies; they have a "Sell All Junk" option [W:Cyberpunk_2077_Vendors] [M1 notes].
  - **Disassembling** gives Item Components of the item's tier. Components pay for cyberware upgrades at ripperdocs, iconic weapon upgrades and crafting [W:Tier_2_Item_Components] [W:Patch_2.0]. Disassembling also gives Engineer XP [W:Cyberpunk_2077_Skills].
  - **Sell values are low** (inference from [TWEAK] price multipliers: generic sell ×0.1, clothing sell ×0.05, cyberware sell ×0.2 of the base price; other curves also apply).
  - (inference) Clothing sells for little and gives components, and its look is saved in the wardrobe anyway. So dismantle clothes you don't wear, sell weapons when short of cash, and dismantle them when you need components.
  - Since 2.1 you can mark weapons as **Favorite**. This locks selling, disassembling and dropping them, so you can't lose iconics by mistake [W:Patch_2.1].
- **Sources:** [TWEAK] `items/crafting/disassembly_recipes.tweak`, `items/prices/price_modifiers.tweak`; [W:Cyberpunk_2077_Vendors], [W:Tier_2_Item_Components], [W:Patch_2.0], [W:Patch_2.1], [W:Cyberpunk_2077_Skills] (2026-10-30).
- **Confidence:** medium (junk not dismantlable is from data only; UNVERIFIED in-game).
- **es-MX names:** "chatarra" and "desmantelar" not verified in es-MX (UNVERIFIED). Note: "chatarreros" = Scavengers [GLOS].

### Q: Voy sobrecargado. ¿Cómo subo la capacidad de carga? ¿Dónde guardo cosas?

- **Short answer:** Guarda lo que no uses en el **alijo** de tu departamento o de tu auto (es el mismo alijo). Para cargar más: implante **Titanium Bones** (esqueleto), la habilidad **Solo** (niveles 5 y 25) y, en Phantom Liberty, fragmentos de capacidad de carga de los Airdrops.
- **Details:**
  - Base carry capacity **200** [TWEAK player_base_stats].
  - **Solo skill:** +50 at rank 5, +100 at rank 25. Solo XP comes from shotguns, LMGs/HMGs, blunt weapons and Body checks [W:Cyberpunk_2077_Skills].
  - **Titanium Bones:** Skeleton, T1, capacity 6, +30% (T1) to +66% (T5++) carrying capacity. Any ripperdoc from level 1 [W:Titanium_Bones]. IGN: +54% at its listed (T4) tier [IGN 2025-06-02].
  - **Carrying Capacity Shard:** +2 permanently, from PL Airdrops only [W:Carrying_Capacity_Shard].
  - **Stash:** in V's apartment. Owned vehicles (except the Archer "Bandit") and other apartments share it since 1.2 [W:Stash]. 2.5 added item filters to apartment and vehicle stashes [W:Update_2.5].
  - What over-encumbrance does (no sprint / no fast travel) was not checked in a 2.x source (UNVERIFIED).
- **Sources:** [TWEAK]; [W:Cyberpunk_2077_Skills], [W:Titanium_Bones], [W:Carrying_Capacity_Shard], [W:Stash], [W:Update_2.5] (2026-10-30).
- **Confidence:** high.
- **es-MX names:** "alijo" (stash) is used by the site; not verified in es-MX (UNVERIFIED).

### Q: ¿La ropa da blindaje? ¿Puedo vestirme como quiera?

- **Short answer:** Desde la 2.0 la ropa es casi solo **estética**: el blindaje sale del **ciberware**. Ponte lo que te guste. El **guardarropa** guarda cada prenda que consigues, así que puedes vender o desmantelar la ropa y seguir usando su aspecto.
- **Details:**
  - Patch 2.0: "Armor is now provided primarily by cyberware. As a result, clothing's purpose is mostly cosmetic. Clothing items no longer have mod slots, and only some items provide bonuses" [W:Patch_2.0].
  - Some tactical clothing still gives a little armor through intrinsic mods. Clothing tiers only change value and disassembly components [W:Cyberpunk_2077_Clothing] [W:Cyberpunk_2077_Stats].
  - Armor: about 1 DPS less per 10 Armor, capped at 50% at 1,500 Armor [W:Cyberpunk_2077_Stats].
  - **Wardrobe:** available from your apartment in El rescate (The Rescue). Up to 6 outfits. Appearances unlock on pickup, and **the item can then be sold or dismantled** (special outfits excepted). Also accessible through clothing vendors since 2.0 [W:Wardrobe] [W:Patch_2.0].
  - **Glamdocs (2.5):** five shops that restyle **arm cyberware only** (Mantis Blades, Gorilla Arms, Monowire, PLS). One is in Kabuki: Issam Zahir. The others are in Charter Hill, West Wind Estate, Rancho Coronado and Downtown [W:Update_2.5] [W:Cyberpunk_2077_Vendors]. Not relevant to clothes.
  - New 2.5 sets at clothing vendors: NetWatch (Kabuki, Japantown), MaxiWear (Little China, Heywood, Arroyo), IconAmerica (Northside, Pacifica, Badlands) [W:Update_2.5].
  - (PRE-2.0, OBSOLETE) Any guide that ranks clothes by armor or talks about clothing mods.
- **Sources:** [W:Patch_2.0], [W:Cyberpunk_2077_Clothing], [W:Cyberpunk_2077_Stats], [W:Wardrobe], [W:Update_2.5], [W:Cyberpunk_2077_Vendors] (2026-10-30).
- **Confidence:** high.
- **es-MX names:** **blindaje** (PLAN-MX). Wardrobe / Glamdoc not verified (UNVERIFIED).

### Q: ¿Para qué sirve la Reputación en la 2.x?

- **Short answer:** Para **descuentos** en todas las tiendas (hasta 15%), para desbloquear **autos en AUTOFIXER** y, en la 2.5, el trabajo _Welcome to Paradise_ (Reputación 15, después de El golpe). **No** cambia lo que vende el matasanos, ni abre encargos.
- **Details:**
  - The discount table is in the Tendons price question [W:Street_Cred]. Max SC 50 gives the achievement _Leyenda del Afterlife_ [STEAM-MX].
  - AUTOFIXER cars unlock with Street Cred (the wiki infoboxes give per-car SC: Galena 1, MaiMai 6…) [W:Autofixer] [W:Patch_2.0].
  - _Welcome to Paradise_ (2.5): unlocks after The Heist **and** Street Cred 15 [W:Update_2.5].
  - **Not:** gigs (no SC requirement since 1.5) [SYS 1.7]; ripperdoc stock (level only) [TWEAK].
  - The wiki line "Legendary equipment becomes more common at Street Cred 40" [W:Street_Cred] could not be matched in [TWEAK], which gates loot by player level (UNVERIFIED, maybe 1.x text).
- **Sources:** [W:Street_Cred], [W:Autofixer], [W:Patch_2.0], [W:Update_2.5] (2026-10-30); [TWEAK]; [STEAM-MX].
- **Confidence:** high (discounts, cars, Welcome to Paradise, not ripperdocs). Low (SC 40 legendary).
- **es-MX names:** **Reputación** ("Alcanza el máximo nivel de reputación", STEAM-MX). _Welcome to Paradise_ es-MX title not found.

### Q: ¿Puedo comprar un departamento ya?

- **Short answer:** No en el acto 1. Los cuatro departamentos que se compran llegan en el acto 2. El más barato es el de Northside (Watson): €$10,000, o gratis con Inteligencia 20.
- **Details:**
  - "In Act 2, four more can become available… Another additional four can be bought after visiting the location or from the netpage" [W:Cyberpunk_2077_Apartments].
  - Northside (Sunset Motel) €$10,000, or free by hacking the keypad with **Intelligence 20**. Japantown €$30,000. The Glen €$80,000. Corpo Plaza is listed further down the page [W:Cyberpunk_2077_Apartments] [OV 3.8].
  - Since 2.0 apartments give smaller buffs [W:Patch_2.0]. All share the stash and have a wardrobe [W:Stash].
- **Sources:** [W:Cyberpunk_2077_Apartments], [W:Patch_2.0], [W:Stash] (2026-10-30).
- **Confidence:** high (Act 2, prices).
- **es-MX names:** "departamento" is LatAm HUD wording (YT-GS objective "Ve al departamento de Judy") [GLOS].

### Q: ¿Por qué las armas suben de precio cuando subo de nivel y el ciberware no?

- **Short answer:** Las armas cuestan según su nivel de objeto, que sube con el tuyo. El ciberware solo cuesta según su nivel de implante (1–5): mientras no cambie de nivel, su precio se queda igual.
- **Details:**
  - Weapon price modifiers include `RangedWeaponPowerLevelMultiplier` / `MeleeWeaponPowerLevelMultiplier`, curves on the item's PowerLevel [TWEAK price_modifiers].
  - The cyberware buy price list has only base × quality × plus × 0.4 × SC discount, plus a per-item curve on quality [TWEAK cyberware/base_values].
  - Tech and Smart weapons cost ×1.1 vs Power ×1.0 [TWEAK].
- **Sources:** [TWEAK].
- **Confidence:** medium-high (data reading; the curve values are unknown).
- **es-MX names:** armas tecnológicas / inteligentes (PLAN-MX).

### Q: ¿Cuál matasanos me conviene? ¿El descuento de Charles Bucks vale la pena?

- **Short answer:** Todos venden lo mismo. Si haces el encargo _Last Login_ (Kabuki) y **aceptas el soborno** de Charles Bucks, te deja un **20% de descuento permanente** con él: úsalo para los Tendones (≈ €$8,600 en vez de ≈ €$10,700).
- **Details:** [SYS 1.2] (high, game8 2023-10-12 + wiki): refusing makes him flee; attacking or killing him removes him as a vendor. _Last Login_: tier 5, €$6,400, 1,000 XP, 770 SC [W:Gig:_Last_Login]. The discount is not in the vendor tweak files I read (probably quest-scripted).
- **Sources:** [SYS 1.2]; [W:Gig:_Last_Login] (2026-10-30).
- **Confidence:** high (discount); medium (the €$8,600 arithmetic is inference).
- **es-MX names:** matasanos, encargo (PLAN-MX, STEAM-MX).

---

## Errors or gaps in the current site

1. **`src/content/games/cp2077/es/cards.json` → `survival-reinforced-tendons`**
   - Price: the card says "las guías no coinciden y ninguna da el de la 2.5… decenas de miles de eddies". **Fix:** about **€$10,700** for the T2. Same price from level 10 to 19; less with Street Cred and Charles Bucks (−20%). Check in game. "Decenas de miles" is wrong for T2. Sources: DualShockers 2023-10-03 (2.0), note.com (Ver 2.31 data); [TWEAK] formula.
   - Street Cred: change "Las fuentes no le ponen requisito de Reputación" to a firm statement. The game data gates ripperdoc stock by level only [TWEAK ripperdocs/loot_prereqs].
2. **`gear.json` → `reinforced-tendons` `effect`: "Blindaje 20"** is pre-2.1. In 2.x the T2 gives **4** Armor (up to 12 at T5++) [TWEAK legs_advanced; nukesdragons; W:Patch_2.1 "Decreased Armor"].
3. **Memory Boost "desde el nivel 5" is wrong; the game data says level 10.** Its lowest record is T2, sold only in the level 10–19 window [TWEAK ripperdocs: `AdvancedMemoryBoostUncommon` + `UncommonCWLevelAvailabilityAtVendor`]. Places to fix:
   - `gear.json` → `memory-boost` `where`
   - `cards.json` → `survival-first-cyberdeck` ("Memory Boost (desde el nivel 5)")
   - `cards.json` → `survival-level-before-heist` ("Memory Boost (desde el nivel 5) … ya están a la venta")
   - The wiki's "after level 5" conflicts with the data. Possible explanation: the "next tier" vendor queries at level 7+. (UNVERIFIED)
4. **`gear.json` → `fortified-ankles` `where`:** "Niveles del implante: del 1 al 5++ (las fuentes no coinciden…)". **Fix:** T2 to T5++, from level 10. The vendor and item records start at Uncommon (`AdvancedReinforcedMusclesUncommon`) [TWEAK].
5. **`cards.json` → `mechanics-quickhacks` ("Dónde conseguirlos: vendedores netrunner…")**
   - Missing: before **level 7**, Yoko and Nix sell only T1 Ping and Bait plus T2 specs. T2 quickhacks appear at level 7 (T3 15, T4 23, T5 32), or earlier with a better deck.
   - Missing: vendors never sell T1 Short Circuit, Overheat etc. [TWEAK skilltrainers/base_values].
   - Worth its own survival card, because the reader is level 5.
6. **`items.json` → quickhack `where` fields** (`contagion`, `short-circuit`, `overheat`… "Vendedores netrunner: Yoko Tsuru (Kabuki), Chang Hoon Nam (Japantown), Nix…").
   - Add the level gates.
   - Note that only Yoko and Nix are in Watson; Chang Hoon Nam, Japantown, Coastview and Vista del Rey are Act 2.
   - Contagion is T2+, so a vendor copy needs level 7 (or a good deck).
   - The `ping` entry is fine (free from Yoko, and T1 Ping is always in stock).
7. **`cards.json` → `survival-ripperdocs`**
   - Add: T1 versions **disappear** at level 10 (one tier on sale at a time) [TWEAK].
   - Add: Street Cred does not affect ripperdoc stock.
   - Minor: Viktor's stock lacks Bionic Joints, Cogito Lattice and NeuroMatrix [TWEAK]. "Todos tienen el mismo inventario" is true for everything a hacker needs.
8. **`cards.json` → `survival-eddies`**
   - The "Psycho Killer pays €$33,270 in total (game8)" figure is shaky. game8's page (updated 2023-12-05) also pushes a dupe glitch, and the wiki per-sighting fields give €$2,300–2,900 each. **Better:** "las cinco del acto 1 pagan unos €$13,000 en total".
   - Add the NCPD Watson total (about €$42,000 over 26 activities with rewards listed) [W activity infoboxes, patch not stated].
9. **`cards.json` → `mechanics-tech-cyberware`** ends "El ciberware solo se instala o se mejora en un matasanos, con componentes".
   - Add "y eddies".
   - Add: there is no level wall for upgrades.
   - Add: components can be made from lower tiers (5:1) in Creación [DualShockers; W:Tier_2_Item_Components; Steam 2023-09-25].
10. **Missing topics (no card yet):**
    - iconic weapon upgrades: Crafting → Upgrades, weapon in backpack, 75 / 40 / … / 200 components; normal weapons can't be upgraded
    - capacity shards: random drops from level 2, one per level
    - clothing is cosmetic in 2.x; the wardrobe keeps appearances after you sell or dismantle
    - junk: sell; dismantle for components
    - carry capacity: base 200, Titanium Bones, Solo 5/25
    - AUTOFIXER car buying: prices from €$13,000; Act 1 availability unclear
    - El Capitán vehicle contracts are PL / Act 2
    - Street Cred uses in 2.x
11. **`items.json` → `thorton-galena-g240`: "sin requisito de Reputación"** vs the wiki infobox `street_cred = 1`. Harmless, but "Reputación 1" is the sourced wording [W:Thorton_Galena_G240].
12. **`docs/research/cp2077/systems-early-game-builds.md` §1.4 / §5 open question (Tendons price):** can now be closed with "≈ €$10,699 at T2 (DualShockers 2.0; note.com 2.31 data); IGN 67,824 ≈ T4". §1.10 / §1.9 "Memory Boost from level 5" should become level 10 (see 3).
