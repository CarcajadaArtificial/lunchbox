import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';
import layout from '../particles/layout.ts';

/**
 * A navigation container that maintains its position at the top of the viewport while scrolling. Essential for ensuring critical navigation links remain accessible throughout the user's journey, particularly on longer pages or in single-page applications.
 *
 * @example Usage
 * ```ts
 * import * as Nav from 'lunchbox/atoms/Nav.tsx';
 *
 * <Nav.Sticky>
 *   <a href="/">Home</a>
 *   <a href="/about">About</a>
 * </Nav.Sticky>
 * ```
 */
export const Sticky = (p: iAtom<HTMLElement>): JSX.Element => (
  <nav
    {...p}
    class={cn(
      'sticky',
      'top-0',
      'py-1/4',
      'z-[16]',
      clr.panel.bg,
      layout,
      p.class,
    )}
  />
);
