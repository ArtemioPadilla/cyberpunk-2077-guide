# FAQ research: combat, quickhacking, weapons, stealth, perks (troubleshooting)

Target: Cyberpunk 2077: Ultimate Edition, Nintendo Switch 2, Update 2.5. Compiled 2026-10-30.
Reader: Act 1 (Watson), about level 5, just after La recolección (The Pickup) with Brick spared. Hacker/netrunner build, weak aim, gyro.

How to read this note:

- The **short answers are in Spanish** (ready to adapt). Details are in English for the writer.
- Source tags: **[W:Page]** = Cyberpunk Fandom wiki, read through `api.php?action=parse&page=<Page>&prop=wikitext&format=json&redirects=1` on 2026-10-30. The wiki pages reflect the current 2.x game unless marked. **[PLAN-MX]** = CDPR build planner es-MX locale chunk `https://www.cyberpunk.net/build/9308-f41cc1eb8e9612e44d94.js` (EN chunk `…/8603-b6e6f72c476c734a52a4.js`, es-ES chunk `…/7116-d2d73b46bd9a2042b41d.js`). It already contains the 2.5 perks (Double Trouble), so it is current. **[SYS]** = `systems-early-game-builds.md`. **[GLOS]** = `glossary-es-mx.md`.
- **(inference)** = my deduction from the facts, not stated by a source.
- Reddit, IGN and Twinfinite could not be fetched (403 or blocked). Steam threads are behind an age gate; only search snippets were used for them, so they count as weak.

---

### Q: Mi arma inteligente no fija objetivos. ¿Qué hago?

- **Short answer:** Las armas inteligentes solo fijan blancos si llevas un **Smart Link** (o el tatuaje de los Tyger Claws) en el espacio de **manos**. Viktor te puso el Ballistic Coprocessor ahí: cámbialo en un matasanos. Skippy es la única que fija sin nada.
- **Details:**
  - Smart Link is **required** to enable smart-targeting in 2.x [W:Cyberpunk_2077_Weapons] [W:Smart_Link]. Hands has **1 slot** until _Ambidextrous_ («Ambidiestra», Habilidad técnica 15), and Viktor's **Ballistic Coprocessor** sits in it [SYS 1.10, 2.3]. Smart Link: T1, capacity 4, any ripperdoc from level 1, +1–2 max RAM [W:Smart_Link].
  - **Alternative that also enables smart-targeting:** _Tattoo: Tyger Claws Dermal Imprint_ (Hands, **capacity 0**). Free from Cassius Ryder as Wakako's gift in _The Gig_ (Act 2). From T3: +10/15/20% lock-on speed and a 20% smaller reticle. Its flavour text says it jams enemy smart weapons; the wiki says **it does not** [W:Tattoo:_Tyger_Claws_Dermal_Imprint]. Not reachable in Act 1.
  - **Exception:** Skippy needs no Smart Link [W:Skippy]. It is in Vista del Rey (Heywood), so Act 2 only [SYS 1.8].
  - **Check the weapon is really "Smart".** Power and Tech pistols never lock on [W:Cyberpunk_2077_Weapons].
  - **Rounds can still miss.** They have to be inside the weapon's tracking box, they curve but fly slower, and hits are not guaranteed. **Tyger Claws** enemies use masking ink: **50% chance** that smart rounds miss them [W:Cyberpunk_2077_Weapons]. You meet Tyger Claws in Kabuki and at Clouds in Amor cibernético (Automatic Love).
  - **Range:** each weapon has an effective range (Skippy 30 m) and a lock-on time (Skippy 1.20 s) [W:Skippy]. Netrunner skill 20 gives +20% Smart lock-on range [SYS 2.1].
  - **Locks break** when you reload or switch weapons, unless you have _Acquisition Specialist_ («Especialista en objetivos») and _Target Lock Transfer_ («Transferencia de objetivos»), both Intelligence 15 [SYS 2.2] [PLAN-MX].
  - Aiming locks faster than hip-fire; _Targeting Prism_ («Prisma de objetivos») adds multiple locks when aiming [SYS 2.2]. Ping T3 gives +25% lock-on speed against pinged targets [SYS 2.5].
- **Sources:** cyberpunk.fandom.com via API (pages above), read 2026-10-30; [PLAN-MX] (includes 2.5 perks).
- **Confidence:** high (Smart Link required, Skippy, tattoo, Tyger ink). Range/lock numbers: high for Skippy only.
- **es-MX names:** armas inteligentes, Ambidiestra, Especialista en objetivos, Transferencia de objetivos, Prisma de objetivos (PLAN-MX). "Smart Link" not found in any es-MX string (GLOS). Tyger Claws es-MX not verified (GLOS: es-ES "Garras de Tygre").

### Q: No me deja hackear / el hackeo rápido no se ejecuta.

- **Short answer:** Casi siempre es la **RAM**: el hackeo cuesta más de la que te queda, o más de tu máximo (Synapse Burnout cuesta 10 y tu Paraline de inicio tiene 5). También necesitas **ver al enemigo** o una cámara que lo vea. Algunos enemigos resisten más los hackeos.
- **Details:**
  - **RAM cost vs current RAM.** Every quickhack costs RAM. RAM comes back slowly: **60 s per unit outside combat** [W:Cyberdeck]. A T1 Militech Paraline has 5 base RAM [W:Militech_Paraline via SYS 1.5].
  - **Cost above your max RAM.** _Synapse Burnout_ (free in _The Pickup_) costs **10 RAM** at T3, more than a T1 Paraline's 5 [SYS 1.8] [W:Synapse_Burnout]. You can only cast it with more max RAM or with **Sobreaceleración (Overclock)**, which pays the missing RAM with Health (Intelligence 15) [W:Overclock].
  - **Enemy resistance.** "Certain enemies may have quickhack resistance, increasing the amount of base RAM required for them to be hacked" [W:Cyberdeck].
  - **Line of sight.** You normally need to see the target, or see it through a camera. Evidence: _Counter-A-Hack_ («Contrahackeo», Int 9) is what lets you hack **enemy netrunners** through walls [W:Counter-A-Hack]. Ping T5 lets you hack devices through walls [SYS 2.5]. Netrunner skill 60 lets Overclock "hack them through the cover" (fixed in 2.1) [W:Patch_2.1]. (inference: without these, walls block you.)
  - **Cameras:** _Eye In The Sky_ («Ojos en el cielo», Int 4) highlights cameras and access points. Control, Covert and Distract Enemies quickhacks sent through cameras cost −1 RAM and last +50% [PLAN-MX] [W:Eye_In_The_Sky via SYS].
  - **One quickhack per target** until _Hack Queue_ («Hackeo en cola», Int 9, level 2) unlocks queues of 2 [SYS 2.2]. (inference: a second quickhack on the same target waits for the first without it.)
  - **Wrong target type:** Contagion is ineffective against mechs and drones; Short Circuit does extra damage to them [SYS 2.5].
  - **Bosses:** players report that bosses resist Ultimate quickhacks such as Suicide; one says System Collapse only stuns a boss for a few seconds (UNVERIFIED, Steam forum snippets only) [web search, Steam threads 3711558744938098548, 3875968032475963570].
  - **RAM recovery tools** for an Act 1 hacker: _Optimization_ («Optimización», Int 4, +35% RAM recovery), RAM Upgrade (any ripperdoc), Memory Boost (level 5+, RAM on kill) [SYS 2.2, 1.10].
- **Sources:** [W:Cyberdeck], [W:Counter-A-Hack], [W:Overclock], [W:Patch_2.1], [W:Synapse_Burnout] (2026-10-30); [PLAN-MX]; Steam search snippets (2023–2024, weak).
- **Confidence:** high (RAM, cost above max, resistance). Medium (line-of-sight rule, deduced from perk wording). Low (boss immunity, UNVERIFIED).
- **es-MX names:** hackeo rápido, RAM, ciberterminal, Sobreaceleración, Contrahackeo, Ojos en el cielo, Hackeo en cola, Optimización, Distraer enemigos (PLAN-MX, STEAM-MX). Quickhack names (Synapse Burnout, Short Circuit…) not verified in es-MX (GLOS 2d).

### Q: ¿Qué significa "rastreo" y cómo hago que paren de rastrearme?

- **Short answer:** Los hackeos de combate y control son **rastreables**: al lanzarlos, una barra de rastreo se va llenando y, si se completa, los enemigos saben dónde estás. Lo cortas con hackeos encubiertos, con un derribo silencioso (con la ventaja _Hackeo en la sombra_), noqueando o matando al netrunner, o alejándote.
- **Details:**
  - "Traceability is the chance enemies are able to detect the origin of the quickhack" [W:Encryption]. Most Combat and Control quickhacks carry a "Traceable" tag; Covert quickhacks "typically do not start trace progress" [W:Cyberpunk_2077_Quickhacks] [web: gameluster 2.0 Intelligence guide snippet].
  - When the bar fills, enemies in the area are alerted to your position (forum description, medium) [Steam thread 4040355933308026676 snippet].
  - **Ways to lower or clear trace (all 2.x):**
    - _Encryption_ («Encriptado», Int 4): −30% traceability on all quickhacks [W:Encryption] [PLAN-MX].
    - _Shadowrunner_ («Hackeo en la sombra», Int 9): "−100% de progreso de rastreo al realizar un derribo" [PLAN-MX] [W:Shadowrunner]. Players say it resets the bar to zero but does not stop new trace (medium, forum).
    - **Memory Wipe** (Covert, T3+): untraceable; outside combat −25% trace progress; T4: quickhacks queued after it are not traced [W:Memory_Wipe].
    - **Sonic Shock** (Covert, T2+): untraceable; T3: quickhacks against that enemy still start trace but no longer increase it [W:Sonic_Shock].
    - **System Collapse** T5: −20% trace after a kill with it; neutralising an **enemy netrunner** removes all trace progress [W:System_Collapse].
    - **Ping** is untraceable (traceability 0) [W:Ping].
    - **Arasaka deck:** T2 enemies need +40% more time to trace you; T5 + Overclock: quickhacks no longer raise trace progress [SYS 1.5].
  - Forum tip: get far away from where you hacked, or deal with the whole group (UNVERIFIED) [Steam thread snippets].
- **Sources:** [W:Encryption], [W:Shadowrunner], [W:Memory_Wipe], [W:Sonic_Shock], [W:System_Collapse], [W:Ping] (2026-10-30); [PLAN-MX]; web search snippets of Steam threads (2023–24) and gameluster.com "v2.0 Intelligence Perk Tree Guide".
- **Confidence:** high (perk and quickhack effects). Medium (what happens at 100%).
- **es-MX names:** rastreo / progreso de rastreo / rastreabilidad, derribo, Encriptado, Hackeo en la sombra, hackeos encubiertos (PLAN-MX). Memory Wipe / Sonic Shock / System Collapse es-MX not verified.

### Q: Un netrunner enemigo me está hackeando (veo una barra de carga), ¿qué hago?

- **Short answer:** Rompe su **línea de visión** (escóndete o destruye las cámaras que usa), o neutralízalo. Con _Contrahackeo_ (Inteligencia 9) puedes hackearlo a través de paredes. Más adelante, el implante **Self-ICE** (nivel 20) bloquea un hackeo enemigo solo.
- **Details:**
  - Since 1.5 you can **interrupt the enemy hack by damaging the netrunner** or by having **Self-ICE** [W:Patch_1.5].
  - _Counter-A-Hack_ («Contrahackeo», Int 9, after Hack Queue): counter-hack enemy netrunners **through walls and obstacles**, −1 RAM on those counter-hacks. _Copy-Paste_ («Copia-Pega») spreads it to their allies [W:Counter-A-Hack] [PLAN-MX].
  - **Self-ICE**: Frontal Cortex, capacity 5, any ripperdoc **from level 20**. Automatically negates one enemy quickhack; cooldown 45 s (T3) to 20 s (T5++); +1–2 max RAM. 2.1 shortened the cooldown [W:Self-ICE].
  - Line of sight: enemy netrunners need to see you, directly or through cameras. Destroy the cameras; scanning shows the link (PRE-2.0 source, Dec 2020; the "I Spy" perk it names no longer exists) [outsidergaming.com 2020-12-12]. Treat as (PRE-2.0) except the line-of-sight idea.
  - (inference) In Act 1, the simplest counters are: break line of sight, shoot the netrunner (the scanner marks them with the netrunner icon [W:Cyberpunk_2077_Enemies]), or quickhack them first.
- **Sources:** [W:Patch_1.5], [W:Counter-A-Hack], [W:Self-ICE], [W:Cyberpunk_2077_Enemies] (2026-10-30); https://outsidergaming.com/cyberpunk-2077-how-to-stop-overheat-and-being-hacked-in-combat/ (2020-12-12, PRE-2.0).
- **Confidence:** high (Self-ICE, Counter-A-Hack, damage interrupts). Medium (camera line-of-sight detail).
- **es-MX names:** Contrahackeo, Copia-Pega (PLAN-MX). Self-ICE: no es-MX string found (French wiki: "Auto-GLACE"; not usable).

### Q: El Protocolo de invasión ya no me sale en los enemigos.

- **Short answer:** Desde la 2.0 el **Protocolo de invasión solo funciona en puntos de acceso**, ya no en enemigos. Sirve para sacar eddies, componentes y, en puntos más difíciles, hackeos rápidos.
- **Details:**
  - 2.0: "Removed the option to use Breach Protocol on enemies" [W:Patch_2.0] [W:Breach_Protocol_(quickhack)].
  - You must jack into an Access Point physically. Up to **three Datamine daemons** per breach; rewards are eurodollars, quickhack crafting components, and from harder access points quickhacks [W:Quickhacking].
  - The sequence you can type is limited by the deck's **buffer size**. _Forcekill Cypher_ («Cifra mortal», Int 4, after Eye In The Sky) shortens every sequence by 1, minimum 2 characters [W:Quickhacking] [W:Forcekill_Cypher] [PLAN-MX].
  - Once a daemon is uploaded you can no longer reset the matrix by disconnecting [W:Quickhacking].
  - Encrypted shards are also opened with Breach Protocol [W:Quickhacking].
  - Since 2.1 the Breach timer can be switched off (Accessibility); on Switch 2 you can play it by touch [W:Patch_2.1] [SYS 4.1].
  - (PRE-2.0, OBSOLETE) Guides that list Camera Shutdown, Turret Shutdown, Turret Tamer, Icepick or Mass Vulnerability daemons, or the "Advanced Datamine" perk (removed in 2.0) [W:Advanced_Datamine_(perk)] [web: gamepretty/gamewith search snippets].
  - What the 2.x "Datamine" daemons are called exactly (V1/V2/V3? Basic/Advanced/Expert?) was **not confirmed** by a 2.x source. The site card says "Advanced Datamine" gives quickhacks (from [SYS]); keep it vague.
- **Sources:** [W:Patch_2.0], [W:Quickhacking], [W:Breach_Protocol_(quickhack)], [W:Forcekill_Cypher], [W:Advanced_Datamine_(perk)], [W:Patch_2.1] (2026-10-30).
- **Confidence:** high (access points only, datamine rewards, buffer). Low (daemon names).
- **es-MX names:** Protocolo de invasión, daemon (STEAM-MX); puntos de acceso, Cifra mortal (PLAN-MX).

### Q: ¿Qué es la Sobreaceleración (Overclock) y cómo la activo con el mando / en Switch 2?

- **Short answer:** Es el modo de netrunner de **Inteligencia 15** (ventaja _Sobreaceleración_, nivel 3): durante 14 s puedes lanzar hackeos aunque no tengas RAM, pagando 10 de salud por cada unidad que falte. Se recarga en 30 s. En mando se activa oprimiendo **L1 + R1 / LB + RB a la vez**. En Switch 2 debería ser **L + R** (sin confirmar).
- **Details:**
  - Perk: Intelligence 15, needs _Embedded Exploit_ («Vulnerabilidad incrustada»), 3 levels: L1 +10% RAM recovery, L2 +10% quickhack damage, L3 unlocks the mode. **Needs a cyberdeck installed.** Duration 14 s, cooldown 30 s; each RAM unit over your max costs 10 Health [W:Overclock] [PLAN-MX].
  - **PC key:** the planner text says "oprime [E] para activarlo" [PLAN-MX]; a Nexus mod page says Overclock's default key "e" conflicts with UI_MoveDown while scanning [web: nexusmods 21656 snippet; page itself 403].
  - **Controller:** Twinfinite's netrunner build says Overclock is "activated by pressing L1 and R1 or LB and RB simultaneously" [web: twinfinite.net netrunner build, search snippet only; page 403, date not seen]. The same chord activates the Sandevistan per GameWith ("hold [L1] [R1]") [web: gamewith.net 23521 snippet]. Overclock counts as Operating System activation like Berserk/Sandevistan (a Tech perk triggers "whenever you activate Operating System cyberware (Berserk, Sandevistan) or Overclock") [PLAN-MX].
  - **Switch 2:** no source gives the Switch 2 button. (inference) The Switch 2 layout puts L/R where L1/R1 (LB/RB) are, so **L + R**. Mark (UNVERIFIED): tell the reader to check _Opciones → Controles_.
  - A jeuxvideo.com user (Sep 2025) reported that L1+R1 did nothing after unlocking it. (inference) The likely cause is not having perk **level 3**, or having a Sandevistan/Berserk instead of a cyberdeck in the OS slot [web snippet].
  - Since 2.1 you can activate it while controlling a camera [W:Patch_2.1].
  - Related: _Sublimación_ (Sublimation), _Subida de tensión_ (Power Surge), _Repercusión_ (Spillover, Int 20), _Sinergia inteligente_ (Smart Synergy) [SYS 2.2] [PLAN-MX].
  - **Not usable before level ~15–20** in practice (Intelligence 15 needs points). The reader is level 5 (inference).
- **Sources:** [W:Overclock], [W:Patch_2.1] (2026-10-30); [PLAN-MX]; search snippets: twinfinite.net "Cyberpunk 2077 Best Netrunner Build", gamewith.net/cyberpunk-2077/article/show/23521, nexusmods.com/cyberpunk2077/mods/21656, jeuxvideo.com forum 2025-09-29.
- **Confidence:** high (effect, numbers, needs deck). Medium (controller L1+R1/LB+RB: one guide plus the Sandevistan chord). Low (Switch 2 L+R, UNVERIFIED).
- **es-MX names:** Sobreaceleración, modo Sobreaceleración, Vulnerabilidad incrustada, Sublimación, Subida de tensión, Repercusión, Sinergia inteligente, ciberware del sistema operativo, Berserker (PLAN-MX).

### Q: ¿Con qué botón escaneo y hackeo en Switch 2?

- **Short answer:** El escáner se usa **manteniendo el botón de hombro izquierdo** (L1 en PlayStation, LB en Xbox; en Switch 2 debería ser **L**). Mientras escaneas eliges el hackeo de la lista. En portátil también puedes tocar la pantalla en los menús y en el Protocolo de invasión. No encontré una lista oficial de botones de Switch 2.
- **Details:**
  - Scan = hold LB (Xbox) / L1 (PlayStation) [web: senseos.gg quickhacks guide, updated 2026-10-27, checked against 2.5].
  - Switch 2 features: gyro aiming ("Gyroscope Mode"), mouse mode with Joy-Con 2, touch screen for menus, skills and Breach Protocol [SYS 4.1, CDPR 51566].
  - **Motion patterns:** "roll their left Joy-Con 2 to dodge"; healing is also a motion pattern [CDPR blog 150, 2025-06-23]. Melee swings with Joy-Con motion [cyberpunk2077.wiki/switch-2 (fan site, 2026-09-19); tweaktown].
  - Mouse mode: the fire button moves from ZR to R [web: review snippet, search "Switch 2 hold L"].
  - 2.5 fixed "tagging enemies while scanning could also cause V to crouch or stand up when using certain control schemes" [W:Update_2.5]. (inference) If tagging made V crouch before, update.
  - Nintendo Life: gyro options are sensitivity, when gyro turns on (for example only when aiming down sights), and dampening [SYS 4.1; nintendolife review snippet].
  - **Open:** exact Switch 2 default buttons for scanner, quickhack select/upload, tag, Overclock and combat gadget. Searched CDPR blog 150, cyberpunk.net 51566, Nintendo Life, nintenderos, 3DJuegos, cyberpunk2077.wiki: none lists them.
- **Sources:** https://senseos.gg/guides/cyberpunk-2077/cyberpunk-2077-quickhacks-netrunning/ (2026-10-27, 2.5); https://www.cdprojektred.com/en/blog/150/new-console-new-rules-creating-cyberpunk-2077-for-nintendo-switch-2 (2025-06-23); https://cyberpunk2077.wiki/switch-2 (fan site, 2026-09-19); [W:Update_2.5].
- **Confidence:** high (L1/LB on PS/Xbox, gestures). Low (Switch 2 "L", inference, UNVERIFIED).
- **es-MX names:** none found for the button prompts or the scanner ("escáner" is generic). The glossary has "Protocolo de invasión".

### Q: ¿Cómo uso el nanocable (Monowire) con un hackeo?

- **Short answer:** Solo con la ventaja **Liberación (Jailbreak)** del **Relic** (Phantom Liberty, acto 2). Le da al nanocable un espacio para un **hackeo de control**: cargas el golpe y, al soltarlo, sube el hackeo **sin gastar RAM**. Sin Liberación, el nanocable es solo un látigo.
- **Details:**
  - Monowire: Arms, capacity 8, any ripperdoc **from level 10**, quality rises every 10 levels, Intelligence-attuned. Physical damage, 10–20% Bleeding chance; longest-range melee weapon [W:Monowire].
  - Jailbreak (3 Relic points): "The Monowire now has a dedicated slot for **Control** quickhacks. To use the installed quickhack, charge the Monowire. When fully charged, release the attack and upload the quickhack **without paying its RAM cost**" [W:Jailbreak]. Quickhack page: "With the Jailbreak Relic perk, Control Quickhacks can be installed into a Monowire" [W:Cyberpunk_2077_Quickhacks].
  - Search results found no 2.x path to a Monowire quickhack without Jailbreak [web: eip.gg relic perks snippet].
  - **When:** the Relic tree opens in _Dog Eat Dog_, after Un millón de años luz (Transmission), Act 2 [SYS 2.9].
  - _Data Tunneling_ («Tunelización de datos», 1 Relic point): normal Monowire hits spread the Monowire-uploaded quickhack to the other enemies hit [W:Data_Tunneling] [PLAN-MX].
  - Other Monowire synergies (no Relic needed): _Siphon_ («Sifón», Monowire hits restore 0.5 RAM, 1 if the target is quickhacked); _Finisher: Live Wire_ («Remate: Hilo conductor», restores 15% Health and 5 RAM); Militech Paraline T3 +2% Monowire damage per RAM used [PLAN-MX] [SYS 1.5, 2.2].
  - (PRE-2.0, OBSOLETE) In 1.x the Monowire scaled with Cool and had a general quickhack slot [W:Monowire].
- **Sources:** [W:Monowire], [W:Jailbreak], [W:Data_Tunneling], [W:Cyberpunk_2077_Quickhacks] (2026-10-30); [PLAN-MX]; eip.gg relic perks (search snippet).
- **Confidence:** high.
- **es-MX names:** **nanocable** (es-ES "monocable"), Liberación, Tunelización de datos, Sifón, Remate: Hilo conductor, hackeo de control, Relic (PLAN-MX). The planner's Jailbreak text: "Desbloquea nuevas habilidades para el ciberware de brazos: garras mantis, brazos de gorila, sistema de lanzamiento de proyectiles y nanocable."

### Q: ¿Puedo llevar Sandevistan y ciberterminal al mismo tiempo?

- **Short answer:** No. Los dos van en el único espacio de **sistema operativo**. Si cambias la ciberterminal por un Sandevistan o un Berserker, pierdes los hackeos rápidos y la Sobreaceleración.
- **Details:**
  - Operating System: 1 slot [W:Cyberpunk_2077_Cyberware via SYS 2.4]. Cyberdecks, Sandevistans and Berserk are OS cyberware (site gear.json, kind "Sistema operativo"; PLAN-MX "ciberware del sistema operativo (Berserker, Sandevistan)").
  - Overclock needs a cyberdeck installed [W:Overclock].
  - Quickhacks are installed in the cyberdeck [W:Cyberpunk_2077_Quickhacks]. (inference) No deck, no quickhacks.
- **Sources:** [W:Overclock], [W:Cyberpunk_2077_Quickhacks] (2026-10-30); [PLAN-MX]; [SYS 2.4].
- **Confidence:** high.
- **es-MX names:** sistema operativo, ciberterminal, Sandevistan, Berserker (PLAN-MX).

### Q: No encuentro la opción de llevar dos pistolas.

- **Short answer:** Necesitas **Temple 9** y la ventaja **Doble o nada (Double Trouble)** de la 2.5. Solo sirve con **pistolas y revólveres de Potencia**: no con armas inteligentes (Skippy) ni tecnológicas. Luego, en el inventario, equipa una pistola de Potencia como arma principal y aparece un **espacio de arma secundaria a la izquierda**.
- **Details:**
  - Double Trouble: Cool 9, no prerequisite, 2 levels. L1: dual-wield, **−37.5% damage per weapon**, both fire together; when aiming −15% recoil and spread. L2: Quick Melee is replaced by **Heywood Hurricane**: both guns auto-fire for 1 s with +50% spread; ammo for hits is refunded [W:Double_Trouble] [PLAN-MX].
  - Only Power pistols and Power revolvers [W:Double_Trouble] [W:Update_2.5]. Tech and Smart handguns equip normally but refuse the second slot (search summary of a 2.5 guide) [web search snippet]. **You can mix a pistol and a revolver**, and you don't need two copies of the same gun [beebom.com 2026-10-23].
  - **Equip steps:** Inventory → select your equipped weapon → set a Power pistol or revolver as primary → "Use the newly available secondary weapon slot on the left to equip another compatible handgun" [beebom.com 2026-10-23]. No source gives console button prompts; on Switch 2 follow the on-screen prompts (UNVERIFIED).
  - Auxiliary perks (Cool 9, need Double Trouble): «Dos manos diestras» (Two Right Hands), «Tequila triple», «Pizca de amor» (Splash of Love), «Otra ronda» (Keep 'Em Comin') [PLAN-MX].
    - (CONFLICT) Keep 'Em Comin': the planner says **+15 Stamina** per dual-wield kill and +15 per Tequila stack [PLAN-MX]; the wiki (in [SYS 2.7]) says +40 and +20.
  - Act 1 Power pistols the reader can have: **Dying Night** (free, _The Gun_) and later **Kongou** (_The Heist_) [SYS 1.8].
  - (inference) Johnny's **Malorian Arms 3516** (Act 2, _Chippin' In_) is an iconic **Power** pistol, so it can be dual-wielded. But its iconic effect is on **Quick Melee**, and Double Trouble L2 **replaces** Quick Melee with the Hurricane, so the two collide [W:Malorian_Arms_3516_(2077)] [W:Double_Trouble].
  - (PRE-2.5, OBSOLETE) Guides that say dual wield doesn't exist (game8 2022) [SYS 2.7].
- **Sources:** [W:Double_Trouble], [W:Update_2.5], [W:Malorian_Arms_3516_(2077)] (2026-10-30); [PLAN-MX]; https://beebom.com/cyberpunk-2077-dual-wield-guide/ (2026-10-23).
- **Confidence:** high (requirement, weapon types, slot on the left, mixing allowed). Medium (Tech/Smart "refuse" wording). CONFLICT on Keep 'Em Comin' numbers.
- **es-MX names:** **Doble o nada** (Double Trouble), **empuñadura doble** (dual wield), **Huracán de Heywood** (Heywood Hurricane), Dos manos diestras, Tequila triple, Pizca de amor, Otra ronda (PLAN-MX; identical in es-ES). "Power" weapon class es-MX not verified (GLOS 2b).

### Q: ¿Cómo noqueo a alguien sin matarlo?

- **Short answer:** Agárralo por la espalda sin que te vea y elige la opción **no letal**. En combate, usa **armas contundentes o los puños**, o un arma con el mod **Pax**. Ojo: si le pegas a alguien ya inconsciente, lo matas. En las detecciones de ciberpsicópata, dejarlos con vida no cambia la paga, pero Regina lo agradece al final.
- **Details:**
  - "Enemies can also be incapacitated instead of killed by non-lethal weapons, though lethal weapons can do this as well provided they don't damage enemy weakpoints, or they are equipped with a Pax modification" [W:Cyberpunk_2077_Weapons].
  - **Blunt weapons** (hammers, clubs, Gorilla Arms, fists) are non-lethal and can stun [W:Cyberpunk_2077_Weapons].
  - **Pax mod:** makes the weapon non-lethal; +20% damage out of combat, −10% to −2.5% in combat (no penalty at T5). **Hitting an unconscious target with a Pax weapon kills them.** Sold at weapon vendors (T1–T3, sometimes); also a _Psycho Killer_ reward [W:Pax].
  - **Grab takedown:** sneak up and grab; you then choose lethal or non-lethal; the non-lethal one leaves them unconscious (forum/guide snippets) [web: twinfinite non-lethal guide snippet, Steam threads]. The exact es-MX prompt text was not found.
  - **Quickhacks:** _System Collapse_ (Ultimate, T4) "knocking them out without making a sound" [W:System_Collapse]. _Sonic Shock_ T5 makes targets already under Memory Wipe and Reboot Optics lose consciousness [W:Sonic_Shock]. Players say Overheat and Short Circuit kills without "overkill" count as non-lethal (UNVERIFIED, forum) [web snippets].
  - **Skippy** in "Puppy-Loving Pacifist" mode aims at limbs (non-lethal); after 50 kills or 50 incapacitations it starts a dialogue and may lock its mode [W:Skippy]. Act 2.
  - **Careful:** players report that any damage while the enemy is falling or down (even landing on them) kills them; explosives, katanas and knives are always lethal (forum, 2023) [web: Steam thread snippets]. Grenades and explosions are risky (inference).
  - **Cyberpsychos:** the reward comes either way; if none are killed, Regina is grateful because she gets them therapy [W:Psycho_Killer]. Forum: in 2.x cyberpsychos drop incapacitated as long as you don't hit them again after they fall (UNVERIFIED) [web: Steam threads 3418808280410552221, 3875967769033454334 snippets].
  - Enemies tagged elite / with a skull may not be grabbable (forum) — see the skull question.
- **Sources:** [W:Cyberpunk_2077_Weapons], [W:Pax], [W:System_Collapse], [W:Sonic_Shock], [W:Skippy], [W:Psycho_Killer] (2026-10-30); Steam/Twinfinite search snippets (2020–2024, weak).
- **Confidence:** high (blunt, Pax, System Collapse, Psycho Killer reward). Medium (grab choice). Low (quickhack non-lethality, "don't hit after they fall").
- **es-MX names:** armas contundentes (PLAN-MX); derribo = takedown (PLAN-MX "al realizar un derribo"); detección de ciberpsicópata (STEAM-MX). "Pax", "noquear"/"incapacitar" prompt text: not found.

### Q: ¿Importa si mato a la gente en los trabajos? (La recolección, Woodman, Brick…)

- **Short answer:** No hay "karma" general: matar o no solo importa en momentos concretos. Lo que ya hiciste en La recolección cuenta más adelante (Brick vuelve a aparecer). En Amor cibernético, matar a Woodman te quita una escena de la cadena de Judy. En algunos encargos, el objetivo tiene que salir **vivo**.
- **Details:**
  - (inference from the pages below; no source claims a global morality system.)
  - **La recolección (The Pickup):** if Brick is freed, he is met later at the **Totentanz** and has retaken Maelstrom; he is tied to _Second Conflict_ (Kerry's chain). If Royce and Brick both die, Ofelia leads Maelstrom there. Unless The Pickup was played the peaceful way, the Maelstrom leader orders V attacked at the Totentanz [W:Declan_Griffin]. Knocking Royce out with the **Body 7** option counts as not fighting Maelstrom (but in what looks like a bug Meredith dies) [W:The_Pickup].
  - **Amor cibernético (Automatic Love):** if **Woodman survives**, he blacklists V from Clouds even if you were polite or paid. Later, in Fría como el viento (Ex-Factor), Judy and V can take revenge on him [W:Oswald_Forrest]. Killing him in Automatic Love removes that option (the site's chapter already says so).
  - **Gig Monster Hunt** (Watson, tier 1): you can kill **or incapacitate** Jotaro Shobo; if incapacitated, you carry him to the fixer's car for the Mox. Having done it lets you intimidate Woodman later [W:Gig:_Monster_Hunt] [W:Automatic_Love].
  - **Gigs with "alive" requirements** (Watson): _Occupational Hazard_ (eddies only if Hal "makes it out alive"; taking Anna Nox down does not count for Psycho Killer), _Concrete Cage Trap_ (escort Tiny Mike out alive) [W:Gig:_Occupational_Hazard] [W:Gig:_Concrete_Cage_Trap].
  - **Cyberpsychos:** paid either way; Regina's final reaction changes [W:Psycho_Killer].
  - Forum claim: some police jobs pay more for knocking people out (UNVERIFIED) [Steam snippet].
- **Sources:** [W:Declan_Griffin], [W:The_Pickup], [W:Oswald_Forrest], [W:Automatic_Love], [W:Gig:_Monster_Hunt], [W:Gig:_Occupational_Hazard], [W:Gig:_Concrete_Cage_Trap], [W:Psycho_Killer] (2026-10-30).
- **Confidence:** high for each listed consequence; the "no global karma" framing is (inference).
- **es-MX names:** La recolección, Amor cibernético, Fría como el viento, Un alma en pena (GLOS 1). Gig names: es-MX not verified (keep English). Totentanz, Clouds: brand names.

### Q: ¿Por qué hago tan poco daño?

- **Short answer:** Desde la 2.0 **los enemigos suben de nivel contigo**, así que subir de nivel no basta: el daño depende del **nivel (tier) del arma**. Cambia tus armas de nivel 1 por las de nivel 2 en cuanto llegues al nivel 9, mejora tus emblemáticas y revisa la dificultad.
- **Details:**
  - 2.0: "All NPCs now scale to your level"; "Enemies will have different tiers depending on the faction they belong to"; "Some NPC archetypes will feature Low, Medium or High armor"; "All resistances for regular NPCs have been removed" [W:Patch_2.0].
  - "Weapons now scale damage based on their Tier." Tiers are tied to level: **T2 from level 9, T3 17, T4 25, T5 33**, T5++ 51 (PL) [W:Patch_2.0] [W:Cyberpunk_2077_Weapons]. Loot and vendor stock scale with your level [W:Patch_2.0].
  - "Apart from cyberware, now **only Iconic weapons can be upgraded**. They gain a higher Tier with each upgrade", using crafting components [W:Patch_2.0] [W:Cyberpunk_2077_Crafting_Specs]. Iconics from vendors/blueprints scale up to T5 at level 33; rewards or world iconics to T5+ at level 41 [W:Cyberpunk_2077_Weapons]. (inference) Dying Night is a free iconic you can keep upgrading.
  - **Smart weapons** do less damage since 2.0 and rely on their perks [W:Patch_2.0].
  - **Armor:** some archetypes have Low/Medium/High armor; the base game's main bosses got Armor Penetration [W:Patch_2.0]. Tech weapons charge to pierce cover [W:Cyberpunk_2077_Weapons].
  - **Elites / skulls** have more health and damage (see the skull question).
  - **Difficulty** (Easy / Normal / Hard / Very Hard) can be changed any time; 2.0 "Rebalanced game difficulty to increase the challenge at higher difficulties" [W:Patch_2.0] [SYS 4.2].
  - For a hacker: quickhacks do the damage (Short Circuit, Overheat). _Embedded Exploit_ (Int 9) gives +60% quickhack damage vs targets under Control/Covert/Distract [SYS 2.2].
- **Sources:** [W:Patch_2.0], [W:Cyberpunk_2077_Weapons], [W:Cyberpunk_2077_Crafting_Specs] (2026-10-30). Weapon tier levels cite CDPR support "Item tiers in loot and vendors" (in the wiki).
- **Confidence:** high.
- **es-MX names:** nivel (tier), Vulnerabilidad incrustada, componentes de creación, legendario, emblemática (GLOS, PLAN-MX).

### Q: ¿Qué significa que un arma sea "emblemática"? ¿Y la pistola de Johnny?

- **Short answer:** Una **emblemática** (iconic) es un arma única con un efecto propio, casi siempre de una sola fuente. Desde la 2.0 son **las únicas armas que puedes mejorar** de nivel con componentes. La pistola de Johnny, la **Malorian Arms 3516**, llega en el acto 2 (trabajo Chippin' In).
- **Details:**
  - Iconics "can, in most cases, only be acquired once and are acquired from a specific source". They usually have no mod slots but have a unique effect; PL x-MOD2 iconics have 2 guaranteed mod slots [W:Cyberpunk_2077_Weapons] [W:Cyberpunk_2077_Iconics].
  - Only iconics (and cyberware) can be upgraded since 2.0 [W:Patch_2.0]. Components also upgrade cyberware [W:Cyberpunk_2077_Crafting_Specs].
  - 2.0 changed the unique effects of some iconics; V's apartment stash wall displays all base-game iconics [W:Patch_2.0].
  - **Malorian Arms 3516:** iconic **Power** pistol, from Jeremiah Grayson in _Chippin' In_. Quick Melee ignites the enemy for massive damage (+800% Quick Melee damage) but empties the magazine; +10% damage vs Elite enemies [W:Malorian_Arms_3516_(2077)].
  - Missable iconics coming up in El golpe (The Heist): Kongou, Satori, Nehan (Herold Lowe sells them later with PL) [SYS 1.8].
- **Sources:** [W:Cyberpunk_2077_Weapons], [W:Cyberpunk_2077_Iconics], [W:Patch_2.0], [W:Malorian_Arms_3516_(2077)] (2026-10-30).
- **Confidence:** high.
- **es-MX names:** emblemática / armas emblemáticas (GLOS: Pandora Game, medium). "Chippin' In" (same in es-MX, GLOS 1c).

### Q: El enemigo tiene una calavera roja. ¿Puedo pelear con él?

- **Short answer:** Sí. Desde la 2.0 los enemigos escalan a tu nivel, así que la calavera ya no significa "imposible". Marca a un enemigo **élite o de mucho peligro**: más vida y daño, y quizá no lo puedas agarrar. Escanéalo, usa hackeos y cobertura, o evítalo.
- **Details:**
  - Wiki: threat level is shown by the colour of the enemy-type icon: white/grey (very low), green, yellow, orange, red (very high) [W:Cyberpunk_2077_Enemies].
  - 2.0: enemies scale to your level and have tiers by faction [W:Patch_2.0]. So some factions or archetypes sit above you (inference).
  - Forum (2023-10-01): enemies "with a skull over their head" deal more damage, have more health and bonus abilities, "but killing them will still be possible" [Steam thread 3875967769025569151]. Another player: in 2.0 the skull marks an elite, and some cannot be grappled (no takedown) [Steam search snippet].
  - (PRE-2.0, OBSOLETE) 2020 posts: a red skull means much higher level, cannot be grappled, kills you in one or two shots [Steam threads 2996548176278168418, 2988665684327827452].
  - Johnny's Malorian does +10% vs Elite enemies, so "Elite" is a real 2.x category [W:Malorian_Arms_3516_(2077)].
  - A player says Cyberpsychosis turned red-skull enemies against each other (UNVERIFIED) [Steam snippet].
- **Sources:** [W:Cyberpunk_2077_Enemies], [W:Patch_2.0] (2026-10-30); https://steamcommunity.com/app/1091500/discussions/0/3875967769025569151/ (2023-10-01); other Steam snippets (2020, PRE-2.0).
- **Confidence:** medium (2.x meaning from forums; scaling from the patch notes). The exact rule for when a skull appears in 2.x is (UNVERIFIED).
- **es-MX names:** not found.

### Q: ¿Cómo me vuelvo invisible? ¿Cómo juego en sigilo?

- **Short answer:** El **camuflaje óptico** (desde el nivel 10, en cualquier matasanos) te vuelve casi invisible unos segundos. Hasta entonces: muévete agachado, distrae con el hackeo **Distraer enemigos**, apaga o usa las cámaras, y haz **derribos** por la espalda.
- **Details:**
  - **Optical Camo:** Integumentary, capacity 20, **level 10**, Cool-attuned. −30% (T2) to −90% (T5) visibility for 4–7 s; harder to detect out of combat and harder to hit in combat. Cooldown 70–50 s; +15–30 Armor [W:Optical_Camo]. It makes your weapon (and its scope) invisible too; the implant overlays its own reticle [W:Optical_Camo].
  - It uses the **Combat Gadget** quickslot: installing it removes your grenades / Projectile Launch System from that slot [W:Optical_Camo] [PLAN-MX: "debes tener equipado Camuflaje óptico en el espacio rápido de dispositivos de combate"]. See the next question.
  - **Cool perks:** _Pasos felinos_ (Feline Footwork, Cool 4), _Instinto asesino_ (Killer Instinct), _Ninjutsu_ (Cool 15), _Esfumación_ (Vanishing Act: camo turns on by itself while crouch-sprinting or sliding) [SYS 3.2] [PLAN-MX].
  - **Relic (PL, Act 2):** _Ocultación de emergencia_ (Emergency Cloaking): camo in combat makes enemies lose you [PLAN-MX] [SYS 2.9].
  - **Hacker stealth tools:** Ping (free from Yoko Tsuru, _The Gift_) reveals the network; Memory Wipe, Sonic Shock and System Collapse are untraceable; _Ojos en el cielo_ makes camera hacks cheaper; Arasaka deck for slower trace [W:Ping] [W:Memory_Wipe] [W:Sonic_Shock] [W:System_Collapse] [SYS 1.5].
  - **Lynx Paws** (legs, level 10): 50% quieter movement [SYS 1.4].
  - 2.0 detection: faster detection when walking or sprinting; enemies that notice a silenced bullet's impact investigate the source [W:Patch_2.0]. 2.0 also added smoke grenades [W:Patch_2.0].
  - Fixers' "stay undetected" optional objectives: not researched here.
- **Sources:** [W:Optical_Camo], [W:Patch_2.0], [W:Ping], [W:Memory_Wipe], [W:Sonic_Shock], [W:System_Collapse] (2026-10-30); [PLAN-MX]; [SYS].
- **Confidence:** high.
- **es-MX names:** camuflaje óptico, derribo, Distraer enemigos (STEAM-MX), Pasos felinos, Instinto asesino, Ninjutsu, Esfumación, Ocultación de emergencia, Ojos en el cielo (PLAN-MX).

### Q: Me instalé el camuflaje óptico y ya no puedo lanzar granadas.

- **Short answer:** Es normal: el camuflaje óptico ocupa el mismo espacio rápido de **dispositivo de combate** que las granadas y el sistema de lanzamiento de proyectiles. Usas uno u otro.
- **Details:**
  - "When installing Optical Camo, the Projectile Launch System or Grenade become unavailable as they occupy the same slot" [W:Optical_Camo]. Emergency Cloaking's text: you must have Optical Camo equipped to your Combat Gadget quickslot [PLAN-MX].
  - (inference) To throw grenades again, swap the quickslot back in the inventory (no ripperdoc needed for the quickslot). Not verified in-game.
  - Hacker alternative: the **Detonate Grenade** quickhack («Detonar granada») blows up the grenade an enemy carries [GLOS 2d] [site items.json].
- **Sources:** [W:Optical_Camo] (2026-10-30); [PLAN-MX].
- **Confidence:** high (shared slot). Low (how to swap back, inference).
- **es-MX names:** espacio rápido de dispositivos de combate, camuflaje óptico, sistema de lanzamiento de proyectiles, Detonar granada (PLAN-MX, STEAM-MX).

### Q: ¿Por qué mis curaciones y granadas tienen tiempo de recarga?

- **Short answer:** Desde la 2.0, los objetos de salud y las granadas tienen **cargas** que se recargan solas con el tiempo; no gastas unidades. Con la ventaja **Monstruo vital** tienes una carga más y recargan más rápido. En Switch 2 también puedes curarte con un gesto de movimiento.
- **Details:**
  - 2.0: "Health Items and grenades now have a limited number of charges that recharge over time after being used" [W:Patch_2.0].
  - **Base number of charges and base recharge time: not found** in any source. Tell the reader to check the item tooltip.
  - Perks (Technical Ability): _Sed de guerra_ (Glutton For War, Tech 4): 5% instant recharge of health items and grenades per enemy neutralised [W:Glutton_For_War]. _Monstruo vital_ (Health Freak, Tech 9): L1 +8% recharge speed for health items and grenades; L2 **+1 health item charge** and +150% recharge out of combat [W:Health_Freak] [PLAN-MX]. Also _Primeros auxilios_ (First Aid), _Transfusión_, _Tiempo prestado_ (Borrowed Time) [PLAN-MX]; one guide says Borrowed Time refills a charge below 25% Health, another says 20% (CONFLICT, minor) [web snippets].
  - Items: MaxDoc instantly restores 50–126 Health; Bounce Back restores 10–30 then 6–17/s for 10 s [W:MaxDoc] [W:Bounce_Back]. 2.1: Universal Booster lets health-item effects stack [W:Patch_2.1].
  - Since 2.0 you can use health items while driving [W:Patch_2.0].
  - Switch 2: healing is one of the motion patterns [CDPR blog 150].
  - (PRE-2.0, OBSOLETE) Guides telling you to stock up and spam MaxDocs.
- **Sources:** [W:Patch_2.0], [W:Glutton_For_War], [W:Health_Freak], [W:MaxDoc], [W:Bounce_Back], [W:Patch_2.1] (2026-10-30); [PLAN-MX]; CDPR blog 150 (2025-06-23); fextralife/eip.gg snippets for Borrowed Time.
- **Confidence:** high (system, perks). Base charges: unknown.
- **es-MX names:** objetos de salud, granadas, carga ("+1 carga adicional de un objeto de salud"), Sed de guerra, Monstruo vital, Primeros auxilios, Transfusión, Tiempo prestado (PLAN-MX). MaxDoc / Bounce Back es-MX not found (brand names, probably kept).

### Q: ¿Puedo reiniciar mis ventajas y atributos?

- **Short answer:** Las **ventajas** se devuelven gratis, una por una, cuando quieras. Los **atributos** se reinician **una sola vez por personaje**, con el botón de la esquina inferior izquierda del menú de atributos. Guarda a mano antes.
- **Details:**
  - Perks: 2.0 "Removed the option to reset all Perks at once. Instead, it is now possible to refund each Perk individually for free" [W:Patch_2.0]. Refund dependent perks before their parents [gamerant.com, updated 2023-10-27].
  - Attributes: "Reset Attributes" button, lower-left of the Attribute menu, **only once** [gamerant.com 2023-10-27]. "Reset attributes only once per character… a one-time option for your character" in 2.0+; the button disappears once used [theclick.gg, 2026-10-23, written for 2.5].
  - **Open question re-checked (new 2.x saves):** a Steam commenter says the reset is "available even to those who start a new game" [Steam search snippet, thread 3878218962821836123 or 3875967769032143373, 2023]. theclick.gg (2.5) frames it as once per character with no exception for old saves. The 2.0 patch note words it as an option for existing playthroughs [W:Patch_2.0]. **Verdict: probably available on new saves too, once (medium).** Not confirmed by CDPR.
  - Skills (Headhunter, Netrunner…) cannot be reset; no source mentions a way (UNVERIFIED) [SYS 2.8].
  - Mods for infinite resets exist on PC (Nexus "Infinite Attribute Reset - REDmod") [Steam snippet]. Not on Switch 2: 2.5 console mod support is listed for PC, Mac, PS5 and Xbox only [W:Update_2.5].
  - (PRE-2.0, OBSOLETE) Tabula e-Rasa, €$100,000 respecs, "you can't reset attributes" [SYS 2.8].
- **Sources:** [W:Patch_2.0], [W:Update_2.5] (2026-10-30); https://gamerant.com/cyberpunk-2077-respec/ (2023-10-27); https://www.theclick.gg/cyberpunk-2077-reset-attributes-perks/ (2026-10-23, 2.5); Steam search snippets (2023).
- **Confidence:** high (perks free; attributes once). Medium (available on brand-new saves).
- **es-MX names:** ventajas, atributos, puntos de ventaja; the planner's Refund button is "Reintegrar" and its reset buttons are "restablecer todos" / "restablecer {{tree}}" (PLAN-MX, the website's UI, maybe not the in-game prompt). The in-game "Reset Attributes" button text in es-MX: not found.

### Q: Una puerta o un diálogo me pide Constitución o Habilidad técnica que no tengo. ¿Me pierdo algo?

- **Short answer:** Casi nunca te bloquea la historia: suele haber otra entrada (ventila, ventana, otra puerta, hackear o una llave) o la otra opción de diálogo. En el acto 1 los chequeos importantes están en **La recolección**. Los **brazos de gorila** (desde el nivel 10) suman de 1 a 6 en las pruebas de Constitución.
- **Details:**
  - What each attribute opens (official): Body = "abrir puertas a la fuerza, arrancar torretas", intimidating/solo dialogue; Technical Ability = "forzar algunas cerraduras, manipular dispositivos", tech dialogue; Intelligence = "acceder a subredes locales", Net dialogue; Cool and Reflexes = dialogue [PLAN-MX help texts].
  - **Act 1 checks (wiki "Dialogue choices" pages):**
    - _The Information_: Tech 6 (recognise Judy's hardware), Cool 4–5 lines, Reflexes lines (flavour) [W:Technical_Ability/Dialogue_choices] [W:Cool/Dialogue_choices] [W:Reflexes/Dialogue_choices].
    - _The Pickup_: Tech 6/7 (identify, disarm Militech mines, override turrets; open a door under the stairs near the Militech truck), Body 7 (rip off turrets; knock Royce out), **Body 20** (force the doors you pass with Dum Dum) [W:Technical_Ability/Dialogue_choices] [W:Body/Dialogue_choices]. The reader is past it.
    - _The Heist_: Intelligence lines (neutralise Konpeki's netrunner, use access points on floor 98), Cool 5 (Aristotle quote) [W:Intelligence/Dialogue_choices] [W:Cool/Dialogue_choices].
    - Next ones (Act 2): Automatic Love Tech 5/7 doors at Clouds; Intelligence to talk Woodman round; The Space in Between Body 7 [W:Technical_Ability/Dialogue_choices] [W:Automatic_Love].
    - Caveat: these lists are cumulative wiki pages; some numbers may be 1.x values (no changelog on the pages).
  - **Gorilla Arms:** +1 (T2) to +6 (T5++) to Body attribute checks; level 10, any ripperdoc. The wiki notes it now applies to dialogue checks too, marked {{Verify}} [W:Gorilla_Arms].
  - Alternatives from guides: vents, roof hatches, windows; some doors open with device quickhacks; optional loot behind Body/Tech 18–20 doors may stay locked (forum and walkthrough snippets, weak) [web search snippets].
  - (inference) For a hacker, it's worth getting Technical Ability toward 9 anyway (All Things Cyber; the netrunner build has Tech 9 at level 10 [SYS 3.1]), which covers most early Tech doors.
- **Sources:** [W:Technical_Ability/Dialogue_choices], [W:Body/Dialogue_choices], [W:Intelligence/Dialogue_choices], [W:Cool/Dialogue_choices], [W:Reflexes/Dialogue_choices], [W:Gorilla_Arms] (2026-10-30); [PLAN-MX]; walkthrough/forum search snippets.
- **Confidence:** high (attribute roles, Gorilla Arms bonus to Body checks). Medium (exact Act 1 numbers). Low (alternatives, general claim).
- **es-MX names:** Constitución, Habilidad técnica, Inteligencia, Temple, Reflejos; brazos de gorila (PLAN-MX).

### Q: ¿Por qué me persigue la policía después de una pelea?

- **Short answer:** Desde la 2.0 el **NCPD te persigue** si cometes un delito (atacar o matar civiles o policías, por ejemplo) y sube tu nivel de búsqueda. Huye, escóndete o espera a que pierda tu rastro. También puedes hackear a los policías.
- **Details:**
  - 2.0: "The NCPD will chase you when you commit a crime, whether on foot or in a vehicle"; unit types depend on your NCPD Wanted Level (roadblocks, MaxTac with AVs at the top); "It's now possible to quickhack NCPD officers" [W:Patch_2.0].
  - 2.0 removed the one-hit kill protection from civilians [W:Patch_2.0]. (inference) Stray fire, explosions and area quickhacks (Contagion spreading) can hit civilians and start a chase.
  - How the wanted level decays: not researched (out of topic).
- **Sources:** [W:Patch_2.0] (2026-10-30).
- **Confidence:** high (system exists), low (the civilians-by-quickhack inference).
- **es-MX names:** NCPD (STEAM-MX). "Wanted level" es-MX not found.

---

## Open questions

- **Switch 2 default buttons** for scanner, quickhack select/upload, tag, Overclock, combat gadget and grab/takedown. Only the PS/Xbox scanner (L1/LB) and Overclock (L1+R1 / LB+RB) were found; the Switch 2 mapping (L, L+R) is inference.
- **2.x Breach Protocol daemon names** for access points (the "Datamine" variants).
- **Base number of health-item charges** and base recharge time.
- **Attribute reset on brand-new 2.x saves:** probably yes, once per character (theclick.gg 2.5 + Steam forum), not confirmed by CDPR.
- **The 2.x rule for the red skull** (level gap? elite flag?) and whether skull enemies can never be grabbed.
- **Non-lethality of Combat quickhacks** (Short Circuit, Overheat) in 2.x, and the "cyberpsychos always drop alive unless you hit them again" claim.
- **Keep 'Em Comin' numbers:** planner +15/+15 vs wiki +40/+20 (CONFLICT). The planner is probably the current in-game text, but that is unverified.
- **es-MX names** of quickhacks (Memory Wipe, System Collapse, Sonic Shock, Short Circuit, Overheat…), Smart Link, Self-ICE, Pax, "Power" class, the grab prompts and the "Reset Attributes" button. None appear in the planner or Steam strings.

## Errors or gaps in the current site

1. **`src/content/games/cp2077/es/cards.json`, id `mechanics-smart-weapons`.** It says "En la 2.x, Smart Link sigue siendo obligatorio… La excepción es Skippy". It misses the **Tyger Claws Dermal Imprint** tattoo: Hands, capacity 0, it also enables smart-targeting, free from Cassius Ryder after _The Gig_ (Act 2). gear.json `tattoo-tyger-claws-dermal-imprint` already has it, so the card contradicts gear.json. Source: [W:Tattoo:_Tyger_Claws_Dermal_Imprint].
2. **`gear.json`, ids `monowire`, `electrifying-monowire`, `thermal-monowire`, `toxic-monowire`.** "un espacio para un hackeo rápido (los de control solo con la ventaja Liberación del Relic)" implies the Monowire has a usable quickhack slot without Jailbreak. In 2.x the slot comes **with** Liberación (Jailbreak), takes **Control** quickhacks only, and uploads them with a charged attack at no RAM cost. Suggested text: "con la ventaja Liberación (Relic), un espacio para un hackeo de control que se sube con el golpe cargado, sin gastar RAM". Sources: [W:Jailbreak], [W:Monowire], [W:Cyberpunk_2077_Quickhacks].
3. **`cards.json`, `mechanics-dual-wield` (and the Double Trouble mention in `weapons.json` notes, e.g. `dying-night`, `malorian-arms-3516`, `overture`).** These use English names where es-MX exist: **Doble o nada** (Double Trouble), **Huracán de Heywood** (Heywood Hurricane), **empuñadura doble**, Dos manos diestras, Tequila triple, Pizca de amor, Otra ronda [PLAN-MX]. Also worth adding: pistol + revolver can be mixed [beebom 2026-10-23], the secondary slot is on the left of the loadout, and the Malorian quick-melee vs Hurricane clash (inference).
4. **Perk names in English where es-MX planner names exist.** Affected: `mechanics-intelligence`, `mechanics-tech-cyberware`, `mechanics-build-netrunner`, `mechanics-build-stealth`, `mechanics-build-smart`, `survival-level-before-heist`. Examples: Optimization → **Optimización**; Encryption → **Encriptado**; Subordination → **Subordinación**; Eye In The Sky → **Ojos en el cielo**; Hack Queue → **Hackeo en cola**; Shadowrunner → **Hackeo en la sombra**; System Overwhelm → **Sobrecarga del sistema**; Speculation → **Especulación**; Feedback Loop → **Bucle de retroalimentación**; Queue Acceleration → **Saltarse la cola**; Spillover → **Repercusión**; Smart Synergy → **Sinergia inteligente**; Acquisition Specialist → **Especialista en objetivos**; Target Lock Transfer → **Transferencia de objetivos**; Targeting Prism → **Prisma de objetivos**; Blood Daemon → **Daemon de sangre**; Sublimation → **Sublimación**; Power Surge → **Subida de tensión**; Siphon → **Sifón**; Live Wire → **Remate: Hilo conductor**; All Things Cyber → **Todo lo de ciber**; Driver Update → **Actualización de controlador**; Chipware Connoisseur → **Conocedora de chips**; Renaissance Punk → **Renacimiento punk**; Ambidextrous → **Ambidiestra**; Glutton For War → **Sed de guerra**; Feline Footwork → **Pasos felinos**; Creeping Death → **Muerte rastrera**; Vanishing Act → **Esfumación**; Submachine Fun → **Diversión con subfusiles**; Precision Subroutines → **Subrutinas de precisión**; Recirculation → **Recirculación**; Data Tunneling → **Tunelización de datos**; Sensory Protocol → **Protocolo sensorial**; Machine Learning → **Aprendizaje automático**. All are in the es-MX planner chunk; feminine forms, masculine for a male V. `glossary-es-mx.md` section 4 should list them too.
5. **`cards.json`, `rule-respec`.** "puedes recuperar tus puntos de ventaja y reiniciar los atributos para repartirlos de nuevo… Prueba sin miedo" reads as unlimited. Attributes reset **once per character**. Add "una sola vez", or point to `mechanics-respec`. Sources: gamerant 2023-10-27, theclick.gg 2026-10-23.
6. **`cards.json`, `mechanics-respec`.** It can now say more: theclick.gg (2.5, 2026-10-23) and a Steam commenter say the reset is available on new games, once per character. Also: no mods on Switch 2 (2.5 console mods are PC/Mac/PS5/Xbox only, [W:Update_2.5]).
7. **`cards.json`, `mechanics-intelligence`.** It describes Overclock but **not how to activate it**: L1+R1 / LB+RB on controller (Twinfinite), "[E]" on PC (planner), probably L+R on Switch 2 (UNVERIFIED). It also doesn't say it needs a **cyberdeck** in the OS slot and perk **level 3**.
8. **`cards.json`, `mechanics-quickhacks`.** Missing: what **rastreo** (trace) is and how to clear it (Encriptado, Hackeo en la sombra, Memory Wipe, Sonic Shock T3, neutralising the netrunner). Also missing: that some enemies resist quickhacks (higher RAM cost, [W:Cyberdeck]) and line-of-sight/cameras.
9. **`cards.json`, `mechanics-switch2-aim`.** Could add: the 2.5 fix for tagging while scanning making V crouch/stand [W:Update_2.5]; the motion patterns (roll left Joy-Con 2 to dodge; heal gesture) [CDPR blog 150]; scanning is the left shoulder button (L1/LB; L on Switch 2 by layout, UNVERIFIED).
10. **No card covers:** the camo-replaces-grenades slot (gear.json `optical-camo` says it briefly), health-item charges (only one line in `mechanics-tech-cyberware`), the red-skull meaning, the OS-slot clash (Sandevistan vs cyberdeck), enemy netrunners hacking you (Self-ICE is only in gear.json), and non-lethal takedowns (only in `enemies.json` cyberpsycho notes and `survival-psychos-gigs`).
11. **`enemies.json` cyberpsycho notes** ("Se puede dejar con vida (armas contundentes, el mod Pax o System Collapse)"). Correct but incomplete. The wiki says lethal weapons also incapacitate if you avoid weak points [W:Cyberpunk_2077_Weapons]. Add "no le pegues cuando ya cayó" (Pax kills unconscious targets, [W:Pax]).
