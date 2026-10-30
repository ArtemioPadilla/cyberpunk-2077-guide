# Glossary: English → Latin-American Spanish (es-MX, "Español (Latinoamérica)")

Researched 2026-10-30 for Cyberpunk 2077: Ultimate Edition, Update 2.5 (Switch 2).
Purpose: show the es-MX in-game name, with the English name in parentheses on first
mention. **es-MX and es-ES (Spain) quest names differ a lot.** Both localizations
renamed most quests after Spanish-language songs, but they picked different songs.
Spain picked Spanish rock (Siniestro Total, Hombres G…). Latin America picked
Latin-American and Mexican songs (Soda Stereo, Luis Miguel, Molotov, Calle 13…).
Never take a quest name from the Spanish Fandom wiki or a Spain-based guide.

## Sources and how strong each one is

| key | source | what it gives | locale proof |
|---|---|---|---|
| **STEAM-MX** | Steam achievements, `https://steamcommunity.com/stats/1091500/achievements/?l=latam` (all 57 achievement names and descriptions are in the page JSON) | official CDPR strings: tarot/ending names, PL ending names, "Things Done Changed"/"Run This Town" titles, Street Cred, gigs, NCPD hustles, Cyberpsycho Sightings, Breach Protocol, Detonate Grenade, districts | es-MX: "Chambas cochambrosas", "Un camino para dos", "rifle de francotirador", "detecciones de ciberpsicópatas". `?l=spanish` returns English, so CDPR only supplied this one Spanish set to Steam |
| **PSN-ES** | PS4 trophy list in Spanish (Spain), `https://raw.githubusercontent.com/FlexBy420/sce-tmdb-scraper/main/trophies/es/NPWR19785_00.json` | the es-ES counterpart of the same strings | es-ES: "fusil de francotirador", "curro Todo se transforma", "Dos en la carretera", "encuentros con ciberpsicópatas" |
| **CDPR-PLANNER** | CDPR's official build planner, `https://www.cyberpunk.net/es-mx/build-planner`. Its locale files are webpack chunks: es-MX `https://www.cyberpunk.net/build/9308-f41cc1eb8e9612e44d94.js`, es-ES `…/7116-d2d73b46bd9a2042b41d.js`, EN `…/8603-b6e6f72c476c734a52a4.js` | attributes, every 2.x perk name and description, plus many cyberware/weapon/quickhack terms. The es-MX and es-ES files are separate and differ where the locales differ | official, per locale |
| **CDPR-TAROT** | tarot reader on cyberpunk.net, chunk `…/build/4988-cc3ffd14d07a26fd4d1d.js` (es-MX), `…/5177-…js` (es-ES) | the 38 card names it uses (22 major arcana + 16 court cards) | official |
| **CDPR-SITE** | `https://www.cyberpunk.net/us/es-mx/cyberpunk-2077`, `/us/es-mx/phantom-liberty`, `/us/es-mx/edgerunners-2-update` | PL terms (FIA, NN. EE. UU., Barghest), braindance, Mox | marketing copy: it mixes in Spain slang ("fardar", "chungos"), so treat it as weaker than the planner |
| **ES-WIKI** | `https://cyberpunk.fandom.com/es/api.php` | very thin (about 600 pages, 2 quest pages). Its text is es-ES ("Coge las llaves"). The *Tu Frialdad* page says that in LatAm the quest is "Fría como el viento" | es-ES, except where it names LatAm explicitly |
| **VIDAEXTRA** | `https://www.vidaextra.com/rpg/misiones-cyberpunk-2077-cambian-a-johnny-cash-alaska-aqui-tienes-playlist-para-disfrutar-todas-ellas` (2020) | table of main jobs, English vs **es-ES** | es-ES (Spain outlet) |
| **YT-iRail** | YouTube playlist by iRailguner, `https://www.youtube.com/playlist?list=PLTyK7GQEPlqg0FznPK1gvluZMPNnHfkdL` | **bilingual titles** "English / Español" for 29 main jobs | LatAm names (matches the LatAm channels below, never the es-ES list) |
| **YT-GS** | GAMESTATION PS4 channel (UCmCMnTwFMg8BGKlBT6HKFTA). Its titles are "QUEST NAME . current HUD objective" | about 125 titles. The objective text lets each name be matched to the English quest | es-MX HUD wording ("Reúnete", "Megaedificio", "departamento", "auto") |
| **YT-JAM** | JAMATIS playlist `PLlLKI8dBgmrB2sF5hjWvOMi4O9L1-UMU7` | 26 main jobs in order | LatAm |
| **YT-PIAMA** | "MamáGamer" (Piama) playlist `PLhSX3I6RogMTrkZqB-s6C0MUa9LwSBK2o` | 43 jobs in order, including the ending chains | LatAm ("Fría como el viento", "Día común: Doble vida") |
| **YT-OTHER** | single LatAm channels found by search: Bit 21, Pandora Game, el Caballero de Capricornio, Jose De Vizia Rivas, TeKno, AliroJuega, miguelwill, Conejero | supporting titles | mostly LatAm. TeKno has runs in both locales (one uses "Tu frialdad") |

Sources that did **not** work: cyberpunk.net `/es-mx/news/*` (404, news is English only);
the localized booklet PDFs (only `CP2077-UE-Booklet-EN-1.pdf` exists); Reddit (403 from the
proxy); GitHub code search (no localization dumps found); LatAm outlets
(LevelUp, Atomix, Xataka México, TierraGamer) did not surface in the US-only web search;
PSN es-419 trophy list (not found; Steam latam covers the same strings).

Confidence legend: **high** = official CDPR string, or ≥3 independent LatAm sources that
agree; **medium** = 2 sources, or 1 official source with indirect support; **(UNVERIFIED)** =
one weak source or inferred from play order. "same" = identical in es-MX and es-ES.

> **Warning, added 2026-10-30 (from `faq-switch2-settings-names.md`): YouTube
> auto-translates video titles and descriptions** into the viewer's language. A search
> made with `hl=es` shows English videos under machine-translated Spanish titles (for
> example Nizar GG's English "Charged Jump Or Double Jump?" shows as "¿Salto cargado o
> doble salto? (Tobillos Fortificados…)"). **Before using a YouTube title as a source,
> check the original title with oEmbed** (`https://www.youtube.com/oembed?url=…&format=json`).
> The YouTube-based rows below were collected before this was known and should get the
> same check; GAMESTATION PS4's titles were re-checked and are original. Also: many LatAm
> players use **es-ES text with LatAm voices** ("Español Latino" in a title can mean the
> voices only), so a LatAm channel is not proof of es-MX text. Use marker names to tell
> the locales apart: nanocable/monocable, rifle/fusil, Lagunas mentales/Bailaré sobre tu
> tumba, Boleto a las ligas mayores/Billete a primera división.

**Sources added 2026-10-30** (FAQ research, see the four `faq-*.md` notes):
**ESHOP-MX** = Nintendo eShop Mexico page of the Ultimate Edition (Nintendo's store copy,
not game text); **CDPR-ER2-MX** = `https://www.cyberpunk.net/us/es-mx/edgerunners-2-update`
(es-MX 2.5 page); **CDPR-SUP-ES** = CD PROJEKT RED support pages in Spanish, which exist only
in **es-ES** (`/es/`), so their menu names are es-ES, not es-MX.

---

## 1. Quest names

### 1a. Main jobs (prologue, Act 1, Act 2, Act 3)

| English | es-MX | source | confidence | es-ES (Spain) if different |
|---|---|---|---|---|
| The Nomad | Nómada (lifepath name; quest title not seen) | YT titles "Nómada" only as lifepath | (UNVERIFIED) | — |
| The Streetkid | Buscavidas (lifepath name; quest title not seen) | YT (Mr.G, Albatroz1 "Español Latino": "StreetKid (BuscaVidas)") | (UNVERIFIED) | — |
| The Corpo-Rat | La corporrata | YT-PIAMA cap. 1 | (UNVERIFIED) | — |
| Practice Makes Perfect | not found (the perk "Practice Makes Perfect" is "La práctica hace a la maestra", a different thing) | — | — | — |
| The Rescue | El rescate | YT-iRail, YT-GS, YT-OTHER (TeKno, Inside Gamers) | high | same (El rescate) |
| The Ripperdoc | El matasanos | YT-iRail, YT-GS, YT-JAM | high | — |
| The Ride | El paseo | YT-iRail, YT-GS | medium | — |
| The Information | La información | YT-iRail, YT-GS, YT-JAM, YT-PIAMA | high | same |
| The Pickup | La recolección | YT-iRail, YT-GS (4 videos: "La recolección . Reúnete con la agente de Militech", "… Escapa de All Foods"…), YT-JAM ("CAP. 04 l LA RECOLECCIÓN"), YT-PIAMA, DuncanSix, ZeroX, CyonBlade (all oEmbed-checked) | high | **La prueba = es-ES** (Lpcast, Marcosxy, Zona Gamer). CONFLICT resolved 2026-10-30: the "Español Latino" channel DSTROY uses es-ES text (his chapter 10 is "Tengo un pasajero", the es-ES name of Life During Wartime); Eichdoland and Izahal pair "La prueba" with es-ES "Bailaré sobre tu tumba". Never print "La prueba" |
| The Heist | El golpe | YT-iRail, YT-GS, YT-JAM, YT-PIAMA; CDPR-SITE "el golpe al Konpeki Plaza" | high | same |
| Love Like Fire | La bala | YT-iRail, YT-GS ("La bala . Sal al escenario"), YT-JAM, AliroJuega | high | — |
| Playing for Time | Lagunas mentales | YT-iRail, YT-GS ("Habla con el desconocido"), YT-JAM | high | Bailaré sobre tu tumba (VIDAEXTRA) |
| Automatic Love | Amor cibernético | YT-iRail, YT-GS ("Ve a la oficina del Leñador", "Ve a la cabina 9"), YT-JAM, YT-PIAMA | high | Al calor del amor en un bar (VIDAEXTRA) |
| The Space in Between | En el limbo | YT-iRail, YT-GS ("Busca la clínica de Dedos") | medium | Devuélveme a mi chica (VIDAEXTRA) |
| Disasterpiece | Orgasmos oscuros | YT-iRail, YT-GS ("Pregunta por NeuroX en la calle Jig-Jig"), YT-JAM | high | Carne pa' la picadora (VIDAEXTRA) |
| Double Life | Día común - Doble vida (iRailguner shortens it to "Doble vida") | YT-GS "DIA COMUN - DOBLE VIDA", YT-PIAMA "Día Común: Doble Vida", YT-iRail; Millenium credits the Soda Stereo song | high (exact punctuation unverified) | Cuéntame un cuento (VIDAEXTRA) |
| M'ap Tann Pèlen | M'ap Tann Pèlen | YT-iRail, YT-GS, YT-JAM | high | same |
| I Walk the Line | Entre caníbales | YT-iRail, YT-GS ("Habla con la gente de Placide"), YT-PIAMA | high | Terror en el supermercado (VIDAEXTRA) |
| Transmission | Un millón de años luz | YT-iRail, YT-GS ("Sal de la capilla"), YT-JAM, YT-PIAMA | high | Entre dos tierras (VIDAEXTRA) |
| Never Fade Away | Never Fade Away | YT-GS, YT-JAM, YT-PIAMA | high | same (VIDAEXTRA) |
| Ghost Town | Ciudad fantasma | YT-iRail, YT-GS ("Escanea el transformador"), YT-PIAMA | high | Aquí no hay playa (VIDAEXTRA) |
| Lightning Breaks | Ojos en la espalda | YT-iRail, YT-GS ("Reúnete con Panam a medianoche") | medium | — |
| Life During Wartime | La vida en tiempos de guerra | YT-iRail, YT-GS ("Inspecciona el lugar del accidente"), YT-JAM | high | Tengo un pasajero (VIDAEXTRA) |
| Down on the Street | Amigos | YT-iRail, YT-GS ("Reúnete con Takemura", "Visita a Wakako"), YT-JAM | high | Cómo hemos cambiado (VIDAEXTRA) |
| Gimme Danger | Adrenalina | YT-iRail, YT-GS ("Vuelve a la calle", "Entra en el almacén"), YT-JAM | high | No nos podrán parar (VIDAEXTRA) |
| Play It Safe | Ritmo de la noche | YT-iRail, YT-GS ("Derrota a Oda"), YT-JAM | high | same (VIDAEXTRA) |
| Search and Destroy | Destrucción | YT-iRail, AliroJuega ("misión Destrucción") | medium | Te visitará la muerte (VIDAEXTRA, TeKno, JaviBonus) |
| Tapeworm | Parásito | YT-iRail, YT-GS ("Parásito . Habla con Johnny"), YT-PIAMA | high | — |
| Nocturne Op55N1 | Nocturno Op. 55 N.° 1 | YT-GS "NOCTURNO OP. 55 N. 1", YT-JAM "NOCTURNO OP. 55 N.° 1", YT-PIAMA | high (exact punctuation medium) | Nocturne OP55N1 per VIDAEXTRA (2020). Spain YouTubers also write "Nocturno op 55 n1" (UNVERIFIED) |

### 1b. Endings and their sub-jobs

The tarot ending names come from the achievements (STEAM-MX) and are the most reliable.
The sub-job titles come from YouTube.

| English | es-MX | source | confidence | es-ES if different |
|---|---|---|---|---|
| The Devil (ending/achievement) | El Diablo | STEAM-MX, CDPR-TAROT | high | same (PSN-ES) |
| The Star | La Estrella | STEAM-MX, CDPR-TAROT | high | same |
| The Sun | El Sol | STEAM-MX, CDPR-TAROT | high | same |
| Temperance | Templanza (achievement). The tarot card is "La Templanza" | STEAM-MX; CDPR-TAROT | high | same (PSN-ES "Templanza") |
| The Tower | La Torre | STEAM-MX, CDPR-TAROT | high | same |
| The World (main story done) | El Mundo | STEAM-MX | high | same |
| The Fool / The Lovers / The Hermit / Wheel of Fortune / The High Priestess | El Loco / Los Amantes / El Ermitaño / La Rueda de la Fortuna / La Sacerdotisa | STEAM-MX, CDPR-TAROT | high | same |
| Path of Least Resistance (suicide ending) | not found | — | — | — |
| (Don't Fear) The Reaper (secret ending) | No temas a la muerte | Bit 21 | (UNVERIFIED) | — |
| Last Caress | Prófugos | YT-PIAMA, TeKno ("Final El Diablo") | medium | Tiempos nuevos, tiempos salvajes (VIDAEXTRA) |
| Totalimmortal | Inmortal | YT-PIAMA, TeKno | medium | Insurrección (VIDAEXTRA) |
| Where Is My Mind? | Mi vida sin ti | YT-PIAMA, TeKno, Jeor DurPlay | medium | Llamando a la Tierra (CRazrael, UNVERIFIED) |
| For Whom the Bell Tolls | Por quién doblan las campanas | YT-PIAMA, TeKno | medium | Mi rock perdido (VIDAEXTRA) |
| Knockin' on Heaven's Door | Tocando las puertas del cielo | YT-PIAMA, TeKno, Jeor DurPlay | medium | Cuando fuimos los mejores (VIDAEXTRA) |
| Path of Glory | Camino de gloria **or** Camino al cielo (CONFLICT) | TORREJ80 ("Camino de Gloria"); YT-GS has a "CAMINO AL CIELO" video with no objective shown | (UNVERIFIED) | — |
| We Gotta Live Together | Bajo la misma luna | YT-iRail, YT-GS ("Métete en la bañera"), YT-PIAMA, Jose De Vizia | high | Volver (VIDAEXTRA) |
| Forward to Death | Camino al infierno | YT-iRail, YT-GS, YT-JAM, Jose De Vizia | high | Va a estallar el obús (VIDAEXTRA) |
| Belly of the Beast | La boca del lobo | YT-iRail, YT-GS ("Derrota a Adam Smasher"), YT-PIAMA | high | Sean bienvenidos (VIDAEXTRA) |
| All Along the Watchtower | La vuelta al mundo | YT-iRail, YT-GS ("Comenta el plan con Mitch y Panam"), YT-JAM | high | — |
| New Dawn Fades (Temperance) | not found | — | — | — |
| Changes (Mikoshi) | not found | — | — | — |

### 1c. Side-job chains (inside the chain pages)

| English | es-MX | source | confidence | es-ES if different |
|---|---|---|---|---|
| Heroes (Mama Welles) | El rey | Bit 21; LegacyHorizon; ES-WIKI "El rey" (es-ES text) | medium (CONFLICT: YT-iRail writes "Héroes") | same (El rey, ES-WIKI) |
| Chippin' In | Chippin' In | YT-GS, YT-JAM, Pandora Game | high | same |
| Blistering Love | Mi buen amor | YT-JAM, Bit 21 ("Johnny & Rogue"), Pandora Game, YT-PIAMA | high | — |
| Both Sides, Now | Un alma en pena | YT-GS ("Ve al departamento de Judy"), YT-JAM, Jose De Vizia | high | — |
| Ex-Factor | Fría como el viento | ES-WIKI (LatAm trivia), YT-GS ("terraza del Clouds"), YT-PIAMA, Caballero | high | Tu frialdad (ES-WIKI) |
| Talkin' 'bout a Revolution | Cerca de la revolución | YT-GS ("Ve al departamento de Judy por la tarde/noche") | (UNVERIFIED) | — |
| Pisces | not found | — | — | — |
| Pyramid Song | Chica bonita (maybe Pisces instead) | YT-JAM, Bit 21, Caballero, all without objective text | (UNVERIFIED) | El fin del verano (TeKno, Manugames92) |
| Holdin' On | Holdin' On | Pandora Game, Caballero, TeKno | medium | same |
| Second Conflict / A Like Supreme | Second Conflict / A Like Supreme | Caballero cap. 113/115 | (UNVERIFIED) | — |
| Rebel! Rebel! | Soy rebelde | miguelwill, Caballero cap. 117 (Jose De Vizia: "Rebeldes") | medium | Enamorado de la moda juvenil (CRazrael, UNVERIFIED) |
| I Don't Wanna Hear It | Revolution Rock | Bit 21, miguelwill, Jose De Vizia, Caballero | medium | Rock & Roll Star (CRazrael, UNVERIFIED) |
| Off the Leash | La libertad | Conejero, Jose De Vizia, Caballero ("La libertad"/"En libertad") | (UNVERIFIED) | Off the Leash, possibly (TeKno 2.1 run, Lpcast) |
| Boat Drinks | Tragos en el bote? **or** Nada que explicar? (CONFLICT) | OCGames / Trophygamers / Karpo ("Tragos en el ba…"); Caballero cap. 120 lists "Nada que explicar" | (UNVERIFIED) | Bebidas en el barco (iczyg, UNVERIFIED) |
| Riders on the Storm | La tormenta de arena (JAMATIS/Jose: "Tormenta de arena") | YT-GS ("Encuentra a Saul"), YT-JAM, Pandora Game, Jose De Vizia | high | Jinetes en la tormenta (iczyg, OCGames, UNVERIFIED) |
| I'll Fly Away | Aprende a volar | YT-GS ("Habla con Mitch") | (UNVERIFIED) | — |
| With a Little Help from My Friends | Son mis amigos | YT-GS ("Ve al campamento de los Aldecaldo"), Pandora Game | medium | — |
| Queen of the Highway | Reina de la autopista | YT-GS, Pandora Game, Bit 21, Jose De Vizia | high | — |
| I Fought the Law | Luché contra la ley | YT-GS ("Reúnete con el detective Ward"), Pandora Game, Bit 21, YT-PIAMA | high | — |
| Dream On | Gimme tha Power (inferred from play order only) | YT-JAM, YT-PIAMA, Caballero list it between I Fought the Law and The Hunt | (UNVERIFIED) | — |
| The Hunt | Cazador | Bit 21, Pandora Game, YT-PIAMA, Caballero | high | La caza (JaviBonus, UNVERIFIED) |
| Following the River | Siguiendo el río | OCGames, EternalDreadLord (region unclear) | (UNVERIFIED) | — |
| Delamain: Epistrophy | Epistrophy (with the district, e.g. "Epistrophy: El Glen") | YT-GS | medium | — |
| Delamain: Human Nature / Tune Up / Don't Lose Your Mind | not found | Spain-side titles show "Algo personal" (Delamain HQ) | — | Algo personal (iMapGenX, Ale Gameplay; UNVERIFIED) |
| Sinnerman (not in the guide) | El pecador | Pandora Game, YT-PIAMA | medium | — |
| Burning Desire / Night Moves | Night Moves (after The Heist) | YT-GS | (UNVERIFIED) | Deseo ardiente → Amante bandido (ES-WIKI) |
| The Gift (side job, Yoko Tsuru) | El regalo | YT-GS es-MX HUD "EL REGALO . Recupera El Hackeo Rapido Ping Del Netrunner" | medium | — |
| Fool on the Hill (tarot graffiti job) | La Luna | STEAM-MX (achievement "Demente errante": "…para el trabajo La Luna") | high | Todo se transforma (PSN-ES "Loco errante") |

### 1d. Phantom Liberty jobs

Only two PL job titles are confirmed by official strings. The YouTube titles for the rest
come from two channels whose region is unclear: ROBEILER QUALITY X writes Spain slang
("minutazos", "fiestuqui"). Do not print these in the guide until someone checks them
in-game.

| English | es-MX | source | confidence |
|---|---|---|---|
| Things Done Changed | Punto sin retorno | STEAM-MX ("Completa «Punto sin retorno»", The Tower) | high |
| Run This Town | Para no ver el final | STEAM-MX ("Me representa"), Caballero cap. 79, Fretley | high |
| Firestarter | Pirómanos | GrumetTV, ROBEILER QUALITY X | (UNVERIFIED) |
| Birds with Broken Wings | Alas de algodón | GrumetTV ("Songbird se sincera"), ROBEILER | (UNVERIFIED) |
| You Know My Name | Privilegiados (the Black Sapphire party) | GrumetTV, ROBEILER | (UNVERIFIED) |
| Somewhat Damaged | Al límite / El límite | ROBEILER ("Al límite – final Rey de Copas"), GrumetTV | (UNVERIFIED) |
| The Killing Moon | Buscando la luna | ROBEILER, Lycantocles ("Buscando una luna") | (UNVERIFIED) |
| Phantom Liberty, Dog Eat Dog, Hole in the Sky, Spider and the Fly, Lucretia My Reflection, The Damned, Get It Together, I've Seen That Face Before, Black Steel in the Hour of Chaos, Leave in Silence, Who Wants to Live Forever, Unfinished Sympathy, Through Pain to Heaven, Four Score and Seven, From Her to Eternity | not found. Titles seen on YouTube ("Perro come perro", "Condenado", "Ya había visto esa cara antes", "Simpatía inacabada", "Irse en silencio", "¿Quién quiere vivir para siempre?") are guide channels' literal translations, not HUD text | — | (UNVERIFIED) |
| King of Cups / Pentacles / Swords / Wands | Rey de copas / Rey de oros / Rey de espadas / Rey de bastos | STEAM-MX, CDPR-TAROT | high (same in es-ES) |

---

## 2. Game terms

### 2a. Systems and UI

| English | es-MX | source | confidence | es-ES note |
|---|---|---|---|---|
| Street Cred | Reputación ("nivel máximo de reputación") | STEAM-MX "Leyenda del Afterlife" | high | same |
| eddies / eurodollars (€$) | eurodólares (UI shows €$; "eddies" is street slang in dialogue) | ES-WIKI "Eurodólar" | (UNVERIFIED for es-MX) | same |
| ripperdoc | matasanos | YT-iRail/YT-GS quest "El matasanos" | high | — |
| fixer | fixer | YT-GS gig "Sin fixers"; Caballero "Fixer, merc, soldado, espía" | medium | ES-WIKI uses "Arreglador" for the tabletop role |
| merc | merc (CDPR-SITE "merc ciberpunk a sueldo"; planner "merc adiestrada") | CDPR-SITE, CDPR-PLANNER | high | same |
| gig | encargo | STEAM-MX ("Completa todos los encargos") | high | same |
| side job | trabajo ("para el trabajo La Luna") | STEAM-MX | medium | **curro** (PSN-ES "para el curro…") |
| NCPD Scanner Hustle | chanchullo del escáner del NCPD | STEAM-MX | high | same (PSN-ES) |
| Cyberpsycho Sighting | detección de ciberpsicópata | STEAM-MX "Soy la ley"; YT-GS "Detección de ciberpsicópata: …" | high | **encuentro con ciberpsicópatas** (PSN-ES) |
| Increased Criminal Activity (PL) | Actividad criminal intensificada | STEAM-MX | high | — |
| quickhack | hackeo rápido | STEAM-MX, CDPR-PLANNER | high | same |
| Combat / Control / Covert quickhacks | hackeos rápidos de combate / de control / encubiertos | CDPR-PLANNER | high | same |
| Breach Protocol | Protocolo de invasión | STEAM-MX "Criptonomicón" | high | same |
| daemon | daemon | STEAM-MX, CDPR-PLANNER "Daemon de sangre" | high | same |
| RAM | RAM | CDPR-PLANNER | high | same |
| cyberdeck | ciberterminal (CDPR-PLANNER uses both "la ciberterminal" and "un ciberterminal") | CDPR-PLANNER | high | "el ciberterminal" (masculine) |
| cyberware | ciberware | CDPR-PLANNER, CDPR-SITE | high | same |
| Cyberware Capacity | capacidad de ciberware ("costo de capacidad…") | CDPR-PLANNER | high | "coste" |
| Operating System (cyberware slot) | sistema operativo | CDPR-PLANNER | high | same |
| Overclock (netrunner mode / perk) | Sobreaceleración (modo Sobreaceleración) | CDPR-PLANNER | high | same |
| braindance (BD) | neurodanza | CDPR-SITE ("técnica de neurodanzas"), YT-GS "club de neurodanzas" | high | ES-WIKI title "Danza cerebral" is old tabletop wording |
| netrunner | netrunner | CDPR-PLANNER, CDPR-SITE | high | same |
| Relic | el Relic | STEAM-MX, CDPR-PLANNER, CDPR-SITE | high | same |
| attributes | atributos ("puntos de atributo") | CDPR-PLANNER | high | same |
| Body | **Constitución** | CDPR-PLANNER (attribute.body) | high | same: es-ES is also Constitución. **Not "Cuerpo"**, which WRITING.md currently says |
| Reflexes | Reflejos | CDPR-PLANNER | high | same |
| Technical Ability | Habilidad técnica | CDPR-PLANNER | high | same |
| Intelligence | Inteligencia | CDPR-PLANNER | high | same |
| Cool | Temple | CDPR-PLANNER | high | same |
| perk / perk points | ventaja / puntos de ventaja | CDPR-PLANNER, STEAM-MX | high | same |
| perk tree | árbol de ventajas (STEAM-MX "árbol de ventajas del Relic"); CDPR-SITE says "árbol de habilidades del Relic" | STEAM-MX, CDPR-SITE | high | same |
| skill (2.x skill progression) | habilidad ("nivel máximo de una habilidad") | STEAM-MX "Diez de diez" | high | same |
| Tier (item/cyberware tier) | nivel ("a partir del nivel 3", "nivel de la ciberterminal") | CDPR-PLANNER | high | same |
| Legendary | legendario | STEAM-MX "Creador maestro" | high | same |
| iconic (weapon) | emblemática ("armas emblemáticas") | Pandora Game (LatAm); ES-WIKI category | medium | same |
| crafting / crafting components | creación / componentes de creación ("Crea tres objetos legendarios") | CDPR-PLANNER, STEAM-MX | high | same |
| upgrade (cyberware) | mejorar ("Al mejorar tu ciberware") | CDPR-PLANNER | high | same |
| Finisher | Remate | CDPR-PLANNER | high | same |
| health item | objeto de salud | CDPR-PLANNER | high | same |
| stamina | aguante | CDPR-PLANNER | high | same |
| Bleeding | hemorragia | CDPR-PLANNER | high | **sangrado** |
| fast travel / Data Term (dataterm) | viaje rápido / dataterm ("dataterms de viaje rápido") | STEAM-MX "Viajero frecuente" | high | same |
| shard | not verified (the guide's UI uses "fragmento") | — | (UNVERIFIED) | — |
| gear / clothing | not verified (ES-WIKI category "Cibermoda"/"Ropa") | — | (UNVERIFIED) | — |
| lifepath | pasado ("el pasado de V") | STEAM-MX "Método Stanislavski" | high | same |
| Nomad / Streetkid / Corpo | Nómada / Buscavidas / Corpo | YouTube LatAm titles ("BuscaVidas", "Nómada"); ES-WIKI "Nómada", "Corpo" | medium | same |
| Superhero Landing | Aterrizaje de superhéroe | STEAM-MX | high | same |
| Second Heart | Segundo corazón | STEAM-MX | high | same |
| dual wield (2.5 playstyle) | **empuñadura doble** ("utilizar la empuñadura doble") | CDPR-ER2-MX; CDPR-PLANNER | high | same. The eShop MX copy says "blandir un arma con cada mano"; "doble empuñadura" is fan wording |
| double jump | **salto doble** ("saltos dobles") | CDPR-PLANNER (Reflexes perk description) | high | — |
| Armor (stat) | blindaje | CDPR-PLANNER | high | same |
| takedown | derribo ("al realizar un derribo") | CDPR-PLANNER | high | same |
| trace (netrunner trace) | rastreo / progreso de rastreo / rastreabilidad | CDPR-PLANNER | high | same |
| access point | punto de acceso | CDPR-PLANNER | high | same |
| upload (a quickhack) | cargar ("se cargan automáticamente") | CDPR-PLANNER | high | same |
| health item charge | carga ("+1 carga adicional de un objeto de salud") | CDPR-PLANNER | high | same |
| combat gadget slot | espacio rápido de dispositivos de combate | CDPR-PLANNER | high | same |
| Assault in Progress (NCPD hustle) | **Asalto en curso** | AliroJuega (Chile, uses es-MX quest names "Destrucción", "Amor cibernético", "En el limbo") `KDQ3s_4fW50`; RoDz_Games (Puerto Rico) | medium-high | same (Eichdoland, walterarce7) |
| Suspected Organized Crime Activity / Reported Crime | not verified for es-MX | — | (UNVERIFIED) | **es-ES**: "Posible crimen organizado", "Delito notificado" (CRazrael, JaviBonus, Poyrott) |
| Ripperdoc (generic) | matasanos ("clínicas de matasanos") | CDPR-PLANNER (Cellular Adapter description) | high | — |
| vehicles for sale | vehículos a la venta ("Compra todos los vehículos a la venta", achievement Motorexia = Autojock) | STEAM-MX | high | — |
| Ultimate Edition (store name) | **Cyberpunk 2077: Edición definitiva** on the Nintendo eShop MX; CDPR's es-MX site keeps "Ultimate Edition" | ESHOP-MX, CDPR-ER2-MX | high (store name, not game text) | — |
| Save Data Cloud (Nintendo Switch Online) | Guardado de datos en la nube | ESHOP-MX | high (Nintendo string) | — |
| cross-platform mods (2.5) | mods multiplataforma | CDPR-ER2-MX | high | — |
| glamdoc (2.5) | glamdocs | CDPR-ER2-MX, ESHOP-MX | high | — |
| Aim Assist / Snap to Target (Accessibility) | not verified for es-MX. **Do not print "Asistencia de apuntado"** (no source) | — | (UNVERIFIED) | **es-ES** (CDPR-SUP-ES): "Ayuda al apuntar" (No / Mínima / Estándar / Significativa), "Fijación rápida del objetivo"; tab "Accesibilidad" |
| Gyroscope Mode / Motion Patterns / mouse sensor (Switch 2 menus) | not verified for es-MX (es-MX probably says "mouse": ESHOP-MX "usa tu Joy-Con 2 (R) como un mouse") | — | (UNVERIFIED) | **es-ES** (CDPR-SUP-ES): "Modo Giroscopio" ("Al mantener el botón de apuntar"…), "Patrones de movimiento", "Sensor del ratón" |
| Quality / Performance mode | not verified for es-MX | — | (UNVERIFIED) | **es-ES** (CDPR-SUP-ES): "Calidad" / "Rendimiento" |
| Clampdown, Welcome to Paradise (2.5 quests), Venus in Furs, Psycho Killer, Paid in Full, Drop Point, Perk Shard, Skip Time, wardrobe, stash, junk | not found | — | (UNVERIFIED): keep English | — |

### 2b. Weapons

| English | es-MX | source | confidence | es-ES note |
|---|---|---|---|---|
| Power weapons | not verified ("armas de potencia" is likely) | — | (UNVERIFIED) | — |
| Tech weapons | armas tecnológicas | CDPR-PLANNER | high | same |
| Smart weapons | armas inteligentes | CDPR-PLANNER | high | same |
| Assault Rifle / Precision Rifle / Sniper Rifle | rifle de asalto / rifle de precisión / rifle de francotirador | CDPR-PLANNER, STEAM-MX | high | **fusil** de asalto / de precisión / de francotirador |
| SMG / LMG / Shotgun | subfusil / ametralladora ligera / escopeta | CDPR-PLANNER | high | same |
| Pistol / Revolver / Handguns | pistola / revólver / pistolas | CDPR-PLANNER | high | same |
| Blades / Blunt weapons / Throwable weapons | armas blancas / armas contundentes / armas arrojadizas | CDPR-PLANNER | high | same |
| Melee / Ranged weapons | armas cuerpo a cuerpo / armas a distancia | STEAM-MX | high | same |
| Explosives / grenade | explosivos / granada | CDPR-PLANNER, STEAM-MX | high | same |

### 2c. Early-game cyberware and items

| English | es-MX | source | confidence | es-ES note |
|---|---|---|---|---|
| Mantis Blades | garras mantis | CDPR-PLANNER | high | same |
| Gorilla Arms | brazos de gorila | CDPR-PLANNER | high | same |
| Monowire | **nanocable** | CDPR-PLANNER (es-MX file) | high | **monocable** (es-ES file) |
| Projectile Launch System | sistema de lanzamiento de proyectiles | CDPR-PLANNER | high | same |
| Sandevistan | Sandevistan | CDPR-PLANNER | high | same |
| Berserk | Berserker | CDPR-PLANNER, STEAM-MX | high | same |
| Kerenzikov | Kerenzikov | CDPR-PLANNER | high | same |
| Optical Camo | camuflaje óptico | CDPR-PLANNER | high | same |
| Blood Pump | Bomba de sangre | CDPR-PLANNER | high | same |
| Reinforced Tendons | not found for es-MX | — | (UNVERIFIED) | **es-ES** lead "Tendones reforzados" (ES-WIKI, SiferYT, 3DJuegos); very likely the same in es-MX, but not seen |
| Fortified Ankles | not found for es-MX | — | (UNVERIFIED) | **es-ES** "Tobillos fortalecidos" (ES-WIKI, SiferYT, ElDoctorGafas); "Tobillos reforzados" (the_evil0023, España). "Tobillos Fortificados" is a YouTube auto-translation |
| Lynx Paws | not found for es-MX | — | (UNVERIFIED) | **es-ES** "Garras de lince" (ES-WIKI). "Patas de lince" appears only in auto-translated titles |
| Ballistic Coprocessor / Subdermal Armor / RAM Upgrade / Memory Boost | not found for es-MX | — | (UNVERIFIED) | **es-ES** (ES-WIKI): Coprocesador balístico, Blindaje subcutáneo, Mejora de RAM, Impulso de memoria |
| Cellular Adapter | Adaptador celular | CDPR-PLANNER | high | same |
| Operating System (slot) | sistema operativo ("ciberware del sistema operativo (Berserker, Sandevistan)") | CDPR-PLANNER | high | same |
| Kiroshi optics | Kiroshi (brand kept); the generic term is not verified | ES-WIKI "Kiroshi Opticals" | (UNVERIFIED) | **es-ES** (ES-WIKI): "Ópticas Kiroshi básicas", "Ópticas 'Sentry' de Kiroshi"; LatAm titles say "ópticas Kiroshi" (fan wording) |
| Militech Paraline | not found (brand + model, probably kept) | — | (UNVERIFIED) | — |
| Smart Link | not found (LatAm videos write "Smart Link" in English) | — | (UNVERIFIED) | **es-ES** "Smartlink" (ES-WIKI) |
| Bounce Back / MaxDoc | not found (brand names, probably kept) | — | (UNVERIFIED) | — |

### 2d. Quickhacks

| English | es-MX | source | confidence |
|---|---|---|---|
| Detonate Grenade | Detonar granada | STEAM-MX "Neuromante" | high (same in es-ES) |
| Distract Enemies | Distraer enemigos | STEAM-MX "Luz de gas", CDPR-PLANNER | high (same in es-ES) |
| Ping | Ping | YT-GS es-MX HUD "EL REGALO . Recupera El Hackeo Rapido Ping Del Netrunner" (`ImOyhNNNwas`) | medium-high |
| Short Circuit, Overheat, Contagion, Synapse Burnout, Cyberpsychosis, System Collapse, Reboot Optics, Sonic Shock, Suicide, Cripple Movement, Weapon Glitch, Memory Wipe, Request Backup, Cyberware Malfunction | not found in any official es-MX string (re-checked 2026-10-30). Do **not** guess ("Cortocircuito", "Sobrecalentamiento", "Contagio"… are plausible but unverified; "Cortocircuito" is es-ES, ElDoctorGafas España; the Italian game says "Ebollizione" for Overheat, so a literal translation is not safe) | — | (UNVERIFIED) |
| Combat / Control / Covert quickhack (category) | hackeo de combate / de control / encubierto | CDPR-PLANNER | high |

### 2e. Corporations, gangs, districts

| English | es-MX | source | confidence | es-ES note |
|---|---|---|---|---|
| Militech, Arasaka, Kang Tao, NetWatch, Trauma Team | kept as-is | CDPR-SITE, CDPR-PLANNER ("software de combate de Militech") | high | same |
| Maelstrom, Valentinos, Barghest | kept as-is | CDPR-SITE (Barghest); ES-WIKI | medium | same |
| Mox | las Mox | CDPR-SITE ("cuartel general de las Mox") | high | same (ES-WIKI "Las Mox") |
| Aldecaldos | los Aldecaldo | STEAM-MX, CDPR-SITE, YT-GS | high | same |
| Scavengers | chatarreros | YT-GS ("Derrota a los chatarreros", The Rescue) | medium | same (ES-WIKI) |
| Wraiths | Espectros | YT-GS gig ("territorio de los Espectros") | medium | same (ES-WIKI) |
| Tyger Claws | Garras de Tygre (es-ES wiki); a LatAm gig title says "Tygres y buitres" | ES-WIKI; YT-GS | (UNVERIFIED for es-MX) | Garras de Tygre |
| 6th Street | Calle 6 | ES-WIKI | (UNVERIFIED for es-MX) | Calle 6 |
| Animals | Animales | ES-WIKI | (UNVERIFIED for es-MX) | Animales |
| Voodoo Boys | Hijos del Vudú (ES-WIKI page title) | ES-WIKI | (UNVERIFIED for es-MX) | Hijos del Vudú |
| Watson / Westbrook / Heywood / Santo Domingo / Dogtown | same names | STEAM-MX | high | same |
| City Center | **Distrito Cero** | STEAM-MX ("…en el Distrito Cero") | high | same (PSN-ES, ES-WIKI) |
| Pacifica | Pacífica (with accent) | STEAM-MX | high | same |
| Badlands | las Badlands | STEAM-MX | high | same |
| Corpo Plaza | Centro Corporativo (?) | CDPR-SITE "rascacielos del Centro Corporativo" | (UNVERIFIED) | — |

### 2f. Phantom Liberty terms

| English | es-MX | source | confidence |
|---|---|---|---|
| Songbird | Songbird | STEAM-MX, CDPR-SITE, CDPR-PLANNER | high (same) |
| FIA | FIA (Agencia de Inteligencia Federal) | CDPR-SITE | high |
| NUSA | Nuevos Estados Unidos (de América), abbreviated NN. EE. UU. | CDPR-SITE | high |
| President Myers | la presidenta Myers | STEAM-MX, CDPR-SITE | high |
| Chimera (boss) | el Quimera ("Derrota al Quimera") | STEAM-MX "Aracnofobia" | high |
| Unification War | Guerra de Unificación | CDPR-SITE | high |
| Space Force One | Space Force One | CDPR-SITE | high |
| El Capitán | el Capitán | STEAM-MX | high |

---

## 3. Where es-ES differs from es-MX: summary

- **Quest titles: most of them.** The renamed main jobs above (Lagunas mentales vs
  Bailaré sobre tu tumba, Amor cibernético vs Al calor del amor en un bar, etc.) never
  match. Only literal titles are shared: El rescate, La información, El golpe,
  M'ap Tann Pèlen, Never Fade Away, Ritmo de la noche, Chippin' In, Holdin' On, El rey.
- **Achievements:** most names are shared. These differ:
  Panam = "Un camino para dos" (MX) / "Dos en la carretera" (ES);
  Heywood = "Calles peligrosas" / "Malas calles";
  Rogue = "Bushido y algo más" / "Bushido y mantita";
  Fool on the Hill = "Demente errante" / "Loco errante";
  Dogtown = "Chambas cochambrosas" (MX).
- **Vocabulary:** es-MX **rifle** vs es-ES **fusil**; **nanocable** vs **monocable**;
  **hemorragia** vs **sangrado**; **costo** vs **coste**; **oprimir** vs **pulsar**;
  **trabajo** vs **curro** (side job); **detección** vs **encuentro** (Cyberpsycho);
  "la ciberterminal" vs "el ciberterminal".
- **Identical in both:** attribute names (Constitución, Reflejos, Habilidad técnica,
  Inteligencia, Temple), almost all 2.x perk names (only Pasón/Chute de endorfinas,
  Respuesta/Zasca, No pueden pararme/No podéis pararme, Evasora/Deflectora de balas,
  Todo lo de ciber/Todo lo ciber, Conocedora de chips/Entendida en chips,
  Carburita/Carbureta, Con todo/A todo trapo, A la hora señalada/Sola ante el peligro
  differ), tarot names, districts.
- **Perk names follow V's gender:** the planner shows the feminine forms (Adicta a la
  velocidad, Escurridiza, Tiradora…). The game uses masculine forms for a male V.

## 4. Selected 2.x perk names (es-MX, CDPR-PLANNER, high)

Painkiller = Analgésico · Adrenaline Rush = Subidón de adrenalina · Juggernaut = Gigante ·
Spontaneous Obliteration = Aniquilación espontánea · Dorph-head = Pasón de endorfinas ·
Slippery = Escurridiza · Dash = Impulso · Air Dash = Impulso aéreo · Air Kerenzikov =
Kerenzikov aéreo · Finisher: Bladerunner = Remate: Blade Runner · Bullet Deflect = Evasora de
balas · Sharpshooter = Tiradora · Edgerunner = Edgerunner · License to Chrome = Licencia para
cromar · Health Freak = Monstruo vital · Bolt = Relámpago · Chain Lightning = Cadena de
relámpagos · Overclock = Sobreaceleración · Queue Mastery = Maestría de cola · ICEpick =
desHIELO · Embedded Exploit = Vulnerabilidad incrustada · Carhacker = Hacker automotor ·
Ninjutsu = Ninjutsu · Deadeye = Precisión letal · Killer Instinct = Instinto asesino ·
Scorpion Sting = Picadura de escorpión · Juggler = Malabarista · Jailbreak (Relic) =
Liberación · Emergency Cloaking = Ocultación de emergencia · Vulnerability Analytics =
Análisis de vulnerabilidades. The full list is in the es-MX chunk linked above (about 180 perks).

**Added 2026-10-30** (CDPR-PLANNER es-MX chunk, read again for the FAQ notes; it already
contains the 2.5 perks; high; grouped loosely, not by tree). Optimization = Optimización ·
Hack Queue = Hackeo en cola · Encryption = Encriptado · Subordination = Subordinación ·
Eye In The Sky = Ojos en el cielo · Shadowrunner = Hackeo en la sombra · System Overwhelm =
Sobrecarga del sistema · Speculation = Especulación · Feedback Loop = Bucle de
retroalimentación · Queue Acceleration = Saltarse la cola · Spillover = Repercusión ·
Counter-A-Hack = Contrahackeo · Copy-Paste = Copia-Pega · Proximate Propagation =
Propagación aproximada · Forcekill Cypher = Cifra mortal · Smart Synergy = Sinergia
inteligente · Blood Daemon = Daemon de sangre · Sublimation = Sublimación · Power Surge =
Subida de tensión · Siphon = Sifón · Finisher: Live Wire = Remate: Hilo conductor ·
Acquisition Specialist = Especialista en objetivos · Target Lock Transfer = Transferencia
de objetivos · Targeting Prism = Prisma de objetivos · Terminal Velocity = Velocidad
terminal · All Things Cyber = Todo lo de ciber · Driver Update =
Actualización de controlador · Chipware Connoisseur = Conocedora de chips · Renaissance
Punk = Renacimiento punk · Lucky Day = Día de suerte · Ambidextrous =
Ambidiestra · Mad Dash = Impulso frenético · Submachine Fun = Diversión con subfusiles ·
Salt in the Wound = Sal en la herida · Tailwind = Viento de cola · Ready, Rested, Reloaded =
Lista, descansada y recargada · Glutton For War = Sed de guerra · Focus =
Concentración · Feline Footwork = Pasos felinos · Vanishing Act = Esfumación · Creeping
Death = Muerte rastrera · **Double Trouble (2.5) = Doble o nada** (its level 2 burst,
Heywood Hurricane = **Huracán de Heywood**) · Two Right Hands = Dos manos diestras ·
Triple Tequila = Tequila triple · Splash of Love = Pizca de amor · Keep 'Em Comin' = Otra
ronda (all four 2.5 support perks are identical in es-ES) · Data Tunneling =
Tunelización de datos · Sensory Protocol = Protocolo sensorial · Machine Learning =
Aprendizaje automático (these three are Relic perks) · Precision Subroutines = Subrutinas de precisión · Recirculation =
Recirculación. Feminine forms as in the planner; use the masculine form for a male V
(Conocedor de chips, Ambidiestro…). Still not found: Pax (weapon mod), the "Power" weapon
class, the grab/takedown prompts and the in-game "Reset Attributes" button.
