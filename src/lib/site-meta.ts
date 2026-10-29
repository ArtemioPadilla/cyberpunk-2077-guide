/**
 * ⚠️ SINGLE SOURCE of this site's machine-readable identity (llms.txt,
 * JSON-LD, default meta description, the feedback widget's repo).
 */
export const SITE = {
  name: 'Guía Cyberpunk 2077',
  nameEn: 'Cyberpunk 2077 Guide',
  description:
    'Guía-compañera offline de Cyberpunk 2077: Ultimate Edition (juego base + Phantom Liberty, Nintendo Switch 2, Update 2.5): misiones paso a paso, coleccionables con checklist, arsenal, jefes, fragmentos y logros. Obra de fans no oficial, no aprobada ni respaldada por CD PROJEKT RED.',
  repoSlug:
    (import.meta.env.PUBLIC_REPO_SLUG as string | undefined) ??
    'ArtemioPadilla/cyberpunk-2077-guide',
  license: 'MIT',
} as const;

export const REPO_URL = `https://github.com/${SITE.repoSlug}`;
