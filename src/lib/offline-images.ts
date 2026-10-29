/**
 * Every runtime-cached image (runtime-cache.ts), per game, with its size on
 * disk: what the offline panel offers to download ahead of time. Built at
 * build time from the image manifest (src/data/game-images.json) and the
 * files themselves (public/img/games/).
 *
 * Node-only (reads public/): used by /offline-images.json and by the pages
 * that show the counts.
 */
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { GAME_IDS, type GameId } from '@/lib/games';
import { gameImageKeys, gameImagePath } from '@/lib/game-images';

const PUBLIC = join(process.cwd(), 'public');

export interface OfflineGameImages {
  /** Public paths without the deploy base (`/img/games/cp2077/…`). */
  paths: string[];
  bytes: number;
}

let cached: Record<GameId, OfflineGameImages> | undefined;

/** Per game: every image to fetch for offline use, and their total size. */
export function offlineImages(): Record<GameId, OfflineGameImages> {
  if (cached) return cached;
  const byGame = Object.fromEntries(
    GAME_IDS.map((g) => [g, { paths: [] as string[], bytes: 0 }]),
  ) as Record<GameId, OfflineGameImages>;
  const add = (game: GameId, path: string) => {
    let size = 0;
    try {
      size = statSync(join(PUBLIC, path)).size;
    } catch {
      return; // a manifest row without its file: the tests catch it
    }
    byGame[game].paths.push(path);
    byGame[game].bytes += size;
  };
  for (const key of gameImageKeys()) {
    const game = key.slice(0, key.indexOf('/')) as GameId;
    if (byGame[game]) add(game, gameImagePath(key));
  }
  cached = byGame;
  return byGame;
}
