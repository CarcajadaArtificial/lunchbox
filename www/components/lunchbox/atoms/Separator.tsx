import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * Creates visual separation between content sections with a neutral-colored horizontal line. Useful for
 * breaking up long content into logical segments while maintaining visual hierarchy.
 *
 * @example Usage
 * ```ts
 * import Separator from 'lunchbox/atoms/Separator.tsx';
 *
 * <Separator />
 * ```
 */
const Separator = (p: iAtom<HTMLHRElement>): JSX.Element => (
  <hr
    class={cn(
      clr.neutral.border,
      'w-full',
      'mt-3/2',
      'h-3/2',
    )}
    {...p}
  />
);

export default Separator;
