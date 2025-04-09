import { cn } from '@vyn/cn';

/**
 * This particle contains the styles that are common in button atoms.
 *
 * @example Usage
 * ```ts
 * import btn from 'lunchbox/particles/btn.ts';
 *
 * <button class={btn}>Button</button>
 * ```
 */
const btn: string = cn(
  'px-3/4 py-1/4',
  'rounded',
);

export default btn;
