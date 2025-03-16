import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import area from '../particles/area.ts';
import clr from '../particles/clr.ts';
import layout from '../particles/layout.ts';

/**
 * This dictionary provides semantic HTML elements for structuring a page's layout. These atoms help
 * maintain consistent styling and proper document structure while following web standards. Each
 * element maps to its corresponding HTML5 semantic tag:
 *
 * @example Usage
 * ```ts
 * import { Page } from 'lunchbox/atoms';
 *
 * <Page.Body>
 *  <Page.Header>{...}</Page.Header>
 *  <Page.Main>{...}</Page.Main>
 *  <Page.Footer>{...}</Page.Footer>
 * </Page.Body>
 * ```
 */
const Page = {
  /**
   * The Body atom is essential for establishing a consistent theming foundation across your app.
   * Without it, you'd need to manually handle dark mode transitions, font inheritance, and color
   * schemes on every page. By using this atom at your app's root, you ensure all nested components
   * inherit the correct theme context and base styles.
   */
  Body: (p: iAtom<HTMLBodyElement>): JSX.Element => (
    <body
      {...p}
      class={cn(
        'font-base',
        'txt-base',
        clr.panel.bg,
        clr.neutral.txt,
        p.class,
      )}
    />
  ),
  /**
   * The Main atom enforces a consistent content structure across your application. Rather than
   * letting each page define its own layout rules, this atom ensures your primary content always
   * follows accessibility best practices and maintains visual consistency with the rest of the app.
   */
  Main: (p: iAtom): JSX.Element => (
    <main
      {...p}
      class={cn(
        clr.page.bg,
        layout,
        'py-3/1',
        'w-full',
        p.class,
      )}
    />
  ),
  /**
   * The Header atom standardizes navigation placement and branding across your app. Instead of
   * building custom headers for each page, this atom provides a semantic container that maintains
   * your app's visual hierarchy and ensures consistent user navigation patterns.
   */
  Header: (p: iAtom): JSX.Element => (
    <header
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  ),
  /**
   * The Footer atom creates a predictable location for important site-wide information and secondary
   * navigation. By using this atom instead of a generic container, you maintain semantic HTML structure
   * while ensuring footer content is consistently positioned and styled across all pages.
   */
  Footer: (p: iAtom): JSX.Element => (
    <footer
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  ),
};

export default Page;
