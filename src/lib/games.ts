/**
 * The game this guide covers. The site is a single-game guide served at the
 * root (`/`, `/chapters/<id>/`, `/en/…`), but the shared engine keeps its
 * multi-game shape (content rows carry a `game`, components take a `game`
 * prop), so this registry stays a list of one.
 *
 * Pure module (no Astro imports): the remark plugin (Node) reads it too.
 */
export type GameId = 'cp2077';

/** The one game of this site. Every route renders it. */
export const GAME_ID: GameId = 'cp2077';

export interface Game {
  id: GameId;
  /** Short label for compact spots ("2077"). */
  short: string;
  /** Accent colour for the game's cards (CSS colour). */
  accent: string;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  /** Edition / version the guide covers. */
  covers: { es: string; en: string };
  /**
   * `draft` content is never loaded (no pages, no search, no tests); flip
   * to `published` in the PR that ships it.
   */
  status: 'published' | 'draft';
}

export const GAMES: readonly Game[] = [
  {
    id: 'cp2077',
    short: '2077',
    accent: '#fcee0a',
    title: { es: 'Cyberpunk 2077', en: 'Cyberpunk 2077' },
    tagline: {
      es: 'V, Johnny Silverhand y la Reliquia en Night City; Phantom Liberty en Dogtown.',
      en: 'V, Johnny Silverhand and the Relic in Night City; Phantom Liberty in Dogtown.',
    },
    covers: {
      es: 'Ultimate Edition (juego base + Phantom Liberty), Update 2.5',
      en: 'Ultimate Edition (base game + Phantom Liberty), Update 2.5',
    },
    status: 'published',
  },
];

export const GAME_IDS = GAMES.map((g) => g.id) as GameId[];

/** Games that run on the shared engine (all of them). */
export const ENGINE_GAME_IDS = GAME_IDS;

// PUBLISH_GAMES=cp2077 renders a draft in a local build (review, preview)
// without publishing it; CI never sets it.
const previewed = ((typeof process !== 'undefined' && process.env?.PUBLISH_GAMES) || '').split(',');

/** Games whose content is loaded and rendered (see `status`). */
export const PUBLISHED_ENGINE_GAME_IDS = ENGINE_GAME_IDS.filter(
  (id) => GAMES.find((g) => g.id === id)!.status === 'published' || previewed.includes(id),
);

/** Compact label ("2077"). */
export function gameShortLabel(g: Game): string {
  return g.short;
}

export function getGame(id: string): Game | undefined {
  return GAMES.find((g) => g.id === id);
}

export function isGameId(id: string): id is GameId {
  return (GAME_IDS as string[]).includes(id);
}

/**
 * The game a route belongs to. Single-game site: always `cp2077` (kept as a
 * function so the layout and islands read the same way they did on the
 * multi-game engine).
 */
export function gameOfRoute(_routePath: string): GameId {
  return GAME_ID;
}
