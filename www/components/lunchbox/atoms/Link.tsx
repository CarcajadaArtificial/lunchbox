import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import focus from '../particles/focus.ts';

/**
 * Provides consistent link styling and behavior across the application, with built-in hover states and
 * focus indicators. Essential for navigation and content references.
 *
 * @example Usage
 * ```ts
 * import Link from 'lunchbox/atoms';
 *
 * <Link href="/about">About Us</Link>
 * ```
 */
const Link = (p: iAtom<HTMLAnchorElement>): JSX.Element => (
  <a
    class={cn(
      'text-[inherit]',
      'hocus:text-brand-hc dark:hocus:text-d-brand-hc',
      'underline',
      'cursor-pointer',
      'rounded',
      focus,
    )}
    {...p}
  />
);

export default Link;
