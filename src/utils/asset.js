/**
 * Resolves a public-folder file against Vite's base path. This keeps the resume
 * and portrait working when the site is hosted on a GitHub Pages subpath.
 */
export function asset(path) {
  if (!path) return '';
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, '')}`;
}
