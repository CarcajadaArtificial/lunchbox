import clr from './clr.ts';
import { cn } from '@vyn/cn';

/**
 * This particle contains the styles that are common between the `<Page.Header/>` and
 * `<Page.Footer/>` atoms.
 *
 * @example Usage
 * ```ts
 * import area from 'lunchbox/particles/area.ts';
 *
 * <section class={area}>...</section>
 * ```
 */
const area: string = cn(
  clr.panel.bg,
  'py-3/1',
);

export default area;
