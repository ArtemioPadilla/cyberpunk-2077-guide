# Guía Cyberpunk 2077 — agent context

An offline-first, bilingual (Spanish default at `/`, English under `/en/`)
fan companion guide for **Cyberpunk 2077: Ultimate Edition** (base game +
Phantom Liberty), as played on **Nintendo Switch 2, Update 2.5**. It is meant
to stay open next to the game: walkthrough per job, collectibles with
checklists, arsenal, bosses, shards, achievements, characters.

Deployed to GitHub Pages at <https://artemiop.com/cyberpunk-2077-guide/>
(`.github/workflows/deploy.yml`, `ASTRO_BASE` defaults to
`/cyberpunk-2077-guide`; `ci.yml` runs `npm run check` on every push/PR).
The engine was copied from `resident-evil-guide` (Astro 5 + React islands +
Nano Stores) and reduced to a single game.

## Architecture

**Single game, served at the root.** `src/lib/games.ts` registers one game,
`cp2077` (`GAME_ID`), with its titles, tagline, edition (`covers`), accent
(`#fcee0a`) and `status`. The engine keeps its multi-game shape internally —
content rows carry a `game`, components take a `game` prop — but nothing
puts the game in the URL:

- Routes live directly in `src/pages/` (Spanish) and `src/pages/en/`
  (English): `/`, `/chapters/`, `/chapters/<id>/`, `/collectibles/`,
  `/collectibles/<type>/`, `/maps/`, `/arsenal/`, `/arsenal/<id>/`,
  `/arsenal/gear/<id>/`, `/bosses/[<id>/]`, `/enemies/[<id>/]`,
  `/items/[<id>/]`, `/files/`, `/achievements/`, `/guide/`, `/extras/`,
  `/characters/[<id>/]`, plus `search-index.json`, `offline-images.json`
  and `llms.txt`. Each page file is a two-liner that renders a
  `src/components/game/Game*Page.astro` with `game={GAME_ID}`; dynamic ones
  get their `getStaticPaths` from `src/lib/game-content.ts`
  (`gameEntityStaticPaths`, `collectibleTypeStaticPaths`, `gameChapters`),
  which emit only `id`/`type`/`slug` — never a `game` param.
- `gameHref(locale, game, path)` (`src/i18n/utils.ts`) returns the root
  path with locale prefix and deploy base (`/en/arsenal/` under `/base/`);
  `gameOfRoute()` always returns `cp2077`; `pageHref` in
  `src/lib/entity-links.ts` has the same shape for the remark plugin.
  Always link through these (or `withBase`/`localizedHref`), never a bare
  string: the site runs under a sub-path.
- `BaseLayout.astro` builds the header nav from `ENGINE_SECTIONS`
  (`src/lib/nav.ts`) filtered by `gameSections()` — a section is linked
  only when the game has rows for it — plus the current-job strip
  (`GameChapterStrip`) and the mobile tab bar (`BottomTabBar`). Section
  pages are always generated (static routes), so an empty one simply
  renders an empty list; it is just not linked until it has content.
  The footer shows the CDPR notice and the sources line on every page.

**Content** (Zod-validated, `src/content.config.ts`):
`src/content/games/cp2077/<es|en>/` holds `meta.json` (parts = chapter
groups: `prologue`, `act1`, `act2`, `act3`, `pl`, `side`; and collectible
types with totals), `cards.json` (sections: `rules`/`lore` on the home,
`mechanics`/`survival` on `/guide/`, `modes`/`dlc`/`unlocks`/`endings`/
`secrets` on `/extras/`), and, as they get written, `collectibles`,
`weapons`, `gear`, `bosses`, `enemies`, `items`, `files` (shards),
`achievements`, `characters`, `shop`, `maps` JSON, plus `chapters/*.md`
(one Markdown file per job; front matter `number`, `title`, `part`,
`order`, optional `summary`, `pills`, `photos`). A missing file is an empty
collection. Every JSON file ships in both locales with the same ids, order
and data fields; `src/lib/game-content.test.ts` pins that parity and the
cross-references (parts and collectible types declared in meta, chapter
references real, totals respected). Copy supports blank-line paragraphs,
`- ` bullets and `**bold**` (`GameText.astro`). Rows are read through
`src/lib/game-content.ts` (`gameEntries`, `gameChapters`, `gameSections`).
A `draft` status in `games.ts` hides all content (`PUBLISH_GAMES=cp2077`
previews it locally, `CHECK_GAMES=cp2077` tests it).

**Auto-links.** `src/lib/game-entity-links.ts` builds a dictionary from the
content (weapons, gear, bosses, enemies, items, characters, collectible
types and pieces) plus `src/content/games/cp2077/aliases.json` (short forms,
`page:/path/#hash` targets, `skip` for names never to link such as `V`,
`protect` phrases). The remark plugin (`remark-entity-links.ts`, wired in
`astro.config.mjs`) links the job Markdown; `GameText.astro` links copy in
pages. Astro caches rendered Markdown by digest: after changing the
dictionary run `rm -rf .astro node_modules/.astro` before judging a build.

**Checklists and state.** Nano Stores + `idb-keyval`, no backend:
`checklistStore('<game>-<list>-done')` (`cp2077-collectibles-done`,
`cp2077-files-done`, `cp2077-achievements-done`) and
`currentChapterStore('cp2077')` in `src/stores/checklist.ts`. Never rename
a key or a content id (a saved run must survive). Islands share state only
through Nano Stores (never React Context across islands);
`useHydratedStore` avoids hydration mismatches.

**Search.** `src/lib/game-search-index.ts` builds `/search-index.json` per
locale (precached); the `SearchBox` island (⌘K / Ctrl+K) lands on pages or
`#id` anchors — keep the ids when restyling.

**PWA / offline.** `@vite-pwa/astro` precaches every built page, script,
style, font and the search index. Pictures (`public/img/games/**`) are not
precached: they are runtime-cached (`CacheFirst`, cache name in
`src/lib/runtime-cache.ts`) and the offline panel on the home
(`OfflinePanel.astro` + `OfflineImages` island, `/offline-images.json`)
downloads them all ahead of time.

**Images.** `npm run images:games` (`scripts/import-game-images.mjs`)
fetches files from the Cyberpunk Wiki API
(`https://cyberpunk.fandom.com/api.php`) listed in
`scripts/wiki-images/cp2077*.json` (`{ collection, id, file, crop?,
caption? }`), writes `public/img/games/cp2077/<collection>/<id>.webp`, the
manifest `src/data/game-images.json` and `public/img/games/SOURCES.md`.
`src/lib/game-images.ts` resolves them; a row without a file renders
text-only. `game-images.test.ts` fails on a file without a manifest row (or
vice versa) and on a picture that names nothing real.

**Image licensing.** All game imagery is CD PROJEKT RED's, used
non-commercially under **CD PROJEKT RED's Fan Content Guidelines**: the
site stays free (no ads, no paywall), never uses the CDPR/Cyberpunk logos
as its own branding (the mark in `public/favicon.svg` is original), and
must show on every page the notice «Obra de fans no oficial, no aprobada
ni respaldada por CD PROJEKT RED.» / "This is an unofficial fan work, not
approved or endorsed by CD PROJEKT RED." (`footer.notice` in
`src/i18n/ui.ts`, rendered by `BaseLayout`). A takedown is honoured by
deleting the file and its manifest row.

**Theme.** Dark-first (the inline script in `BaseLayout` adds `.dark`
unless the reader or the system chose light; `src/stores/theme.ts` +
`ThemeToggle`), with a light skin too. Tokens are declared once on `:root`
with `light-dark()` in `src/styles/global.css`: background `#0a0b12`,
off-white foreground, primary CP yellow `#fcee0a`, `--accent-cyan`
`#00f0ff`, destructive `#ff003c`. Fonts are self-hosted via `@fontsource`
(Rajdhani display, Inter body, Share Tech Mono labels) so they work
offline.

**UI copy** lives in `src/i18n/ui.ts` (es/en; `UiKey` is typed from the
Spanish block). RPG labels: chapters = Misiones/Jobs, files =
Fragmentos/Shards.

## Research

Research notes live in `docs/research/cp2077/` (written by research
agents; sources per claim). Write content from there and check a fact
against a live source (Cyberpunk Wiki, game8, IGN, PowerPyx) before
changing it. Claims must hold for Update 2.5 on Switch 2. The folder is
excluded from Prettier; never reformat or rewrite those notes.

## Conventions

- Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`…).
- Never push to `main` directly: branch (`claude/…`, `feat/…`) + PR.
- Every PR passes `npm run check` (astro check, `tsc --noEmit`, vitest,
  `prettier --check`, build).
- Never import `@radix-ui/*`, `framer-motion` or `@tremor/react`
  (`.claude/checklists/forbidden-imports.json`).
- Nano Stores for cross-island state, never React Context across islands.
- Keep es/en in sync in the same PR.
