import clr from './clr.ts';
import { cn } from '@vyn/cn';

// =====================================================================================================
/**
 * This particle contains the styles for any element's focus state.
 *
 * @example Usage
 * ```ts
 * import { focus } from 'lunchbox/particles';
 *
 * <div tabIndex={0} class={focus}>{...</div>
 * ```
 */
export default cn(
  clr.neutral.outline,
  'focus:outline-1',
  'outline-offset-2',
);
