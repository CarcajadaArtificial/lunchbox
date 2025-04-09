import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * Displays keyboard shortcuts and key combinations in a visually distinct way. Particularly useful in
 * documentation, tutorials, and command references.
 *
 * @example Usage
 * ```ts
 * import Kbd from 'lunchbox/atoms/Kbd.tsx';
 *
 * <p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy</p>
 * ```
 */
const Kbd = (p: iAtom<HTMLElement>): JSX.Element => (
  <kbd
    {...p}
    class={cn(
      clr.neutral.bg_10,
      clr.neutral.border_25,
      'txt-small',
      'relative bottom-1/8',
      'py-1/4 px-1/3',
      'border-b-[1px]',
      'rounded',
    )}
  />
);

export default Kbd;
