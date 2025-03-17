import type { JSX } from 'preact';
import { KATEX_CSS } from '@deno/gfm';
import type { iAtom } from '@lunchbox/ui';

/**
 * This atom renders the CSS styles necessary for the `deno-gfm` package to render LaTeX equations in markdown content. Works in conjunction with the {@linkcode /@lunchbox/ui/doc/atoms/~/Prose | Prose} atom which handles the actual markdown rendering.
 *
 * @example Usage
 * ```ts
 * import KatexStyles from 'lunchbox/atoms/KatexStyles.tsx';
 * import Prose from 'lunchbox/atoms/Prose.tsx';
 *
 * <head>
 *   <KatexStyles />
 * </head>
 * <body>
 *   <Prose>
 *     {LaTeX content}
 *   </Prose>
 * </body>
 * ```
 */
const KatexStyles = (p: iAtom<HTMLStyleElement>): JSX.Element => (
  <style {...p}>{KATEX_CSS}</style>
);

export default KatexStyles;
