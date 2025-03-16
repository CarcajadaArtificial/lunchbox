import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';
import layout from '../particles/layout.ts';

// =====================================================================================================
/**
 * This dictionary contains atoms for building consistent navigation structures across your application.
 * Navigation is a critical part of any web application's information architecture, and these atoms
 * ensure users can always find their way around, regardless of viewport size or scroll position.
 *
 * The navigation components are designed to work seamlessly with the {@linkcode Page} atoms, particularly within the `Page.Header` component for site-wide navigation.
 *
 * @example Usage
 * ```ts
 * import { Nav, Page } from '@lunchbox/ui';
 *
 * <Page.Header>
 *   <Nav.Sticky>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *   </Nav.Sticky>
 * </Page.Header>
 * ```
 */
export default {
  /**
   * A navigation container that maintains its position at the top of the viewport while scrolling.
   * Essential for ensuring critical navigation links remain accessible throughout the user's journey,
   * particularly on longer pages or in single-page applications.
   */
  Sticky: (p: iAtom): JSX.Element => (
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
  ),
};
