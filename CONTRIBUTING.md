# Contributing to the Cyberpunk 2077 Guide

Thanks for wanting to help. This is a small, unofficial fan-made companion
guide for Cyberpunk 2077: Ultimate Edition (base game + Phantom Liberty,
Update 2.5) — no formal process, just a few conventions that keep the
content trustworthy and the two locales in sync.

## Running it locally

```bash
git clone https://github.com/ArtemioPadilla/cyberpunk-2077-guide.git
cd cyberpunk-2077-guide
npm install
npm run dev      # http://localhost:4321
```

`npm run check` runs the full gate this project uses before merging
anything: `astro check` + `tsc --noEmit` + `vitest` + `prettier --check` + a
production build. Run it before opening a PR.

## Where the content lives

Everything the guide displays is Zod-validated Astro content under
`src/content/games/cp2077/`:

```
src/content/games/cp2077/
  es/               # Spanish (default locale)
    meta.json, cards.json, weapons.json, bosses.json, ...
    chapters/*.md   # one Markdown file per job
  en/               # English — same files, same ids, same order
  aliases.json      # optional: short forms for the auto-links
```

Every JSON file ships as a **sibling pair**: `es/weapons.json` and
`en/weapons.json` share the same schema and the same entry order — there's
no `locale` field per entry, the directory _is_ the locale. The schemas
(what fields each collection accepts) live in `src/content.config.ts`.

## Reporting a content correction

If you spot something wrong while playing, use the **"Reportar un problema"
/ "Report an issue"** button (bottom-right corner of the live site). It
captures the page you were on and opens a pre-filled GitHub issue. You can
also file directly with the `bug_report` template.

## Sending a content-correction PR

A good content PR:

- **Cites a source** (Cyberpunk Wiki, game8, IGN, PowerPyx, a screenshot or
  your own playthrough notes) that a reviewer can check.
- **Keeps `es/` and `en/` in sync** — translated, not copy-pasted.
- **Doesn't rename or reorder existing entries** unless that's the point:
  checklists persist progress client-side keyed off these ids.
- **Passes `npm run check`.**

## Images

Game imagery belongs to CD PROJEKT RED and is used under its Fan Content
Guidelines (non-commercial, with the unofficial-fan-work notice). Only add
pictures through `npm run images:games` so their provenance is recorded in
`public/img/games/SOURCES.md`.

## Conventions

- [Conventional Commits](https://www.conventionalcommits.org/) for commit
  messages (`fix:`, `feat:`, `docs:`, ...).
- Never push directly to `main` — always a branch + PR.
- No `@radix-ui/*`, `framer-motion`, or `@tremor/react` — see `CLAUDE.md`.
