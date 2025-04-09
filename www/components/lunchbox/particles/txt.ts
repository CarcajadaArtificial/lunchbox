/**
 * This is a dictionary of particles that represent the different text sizes and line heights. These
 * are used in the Text atoms along with other standarized styles. In most cases, the
 * `<Text.Base/>` atom is recommended over the `txt.base` particle.
 *
 * @example Usage
 * ```ts
 * import txt from 'lunchbox/particles/txt.ts';
 *
 * <span class={txt.base}>Base text</span>
 * ```
 */
const txt: Record<string, string> = {
  display: 'text-[3.8146972656rem]/[4.5rem]',
  title: 'text-[3.0517578125rem]/[4.5rem]',
  head: 'text-[2.44140625rem]/[3rem]',
  subhead: 'text-[1.5625rem]/[3rem]',
  base: 'text-[1rem]/[1.5rem]',
};

export default txt;
