import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import area from '../particles/area.ts';
import clr from '../particles/clr.ts';
import layout from '../particles/layout.ts';

/**
 * The Body atom is essential for establishing a consistent theming foundation across your app. Without it, you'd need to manually handle dark mode transitions, font inheritance, and color schemes on every page. By using this atom at your app's root, you ensure all nested components inherit the correct theme context and base styles.
 *
 * @example Usage
 * ```ts
 * // ./routes/_app.tsx or middleware.
 * import { Body } from 'lunchbox/atoms/Page.tsx';
 *
 * <html>
 *   {...}
 *   <Body>
 *     <Component />
 *   </Body>
 * </html>
 * ```
 */
export function Body(p: iAtom<HTMLBodyElement>): JSX.Element {
  return (
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
  );
}

/**
 * The Main atom enforces a consistent content structure across your application. Rather than letting each page define its own layout rules, this atom ensures your primary content always follows accessibility best practices and maintains visual consistency with the rest of the app.
 *
 * @example Usage
 * ```ts
 * // ./routes/_app.tsx or middleware.
 * import { Main } from 'lunchbox/atoms/Page.tsx';
 *
 * <Main>{...}</Main>
 * ```
 */
export function Main(p: iAtom<HTMLElement>): JSX.Element {
  return (
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
  );
}

/**
 * The Header atom standardizes navigation placement and branding across your app. Instead of building custom headers for each page, this atom provides a semantic container that maintains your app's visual hierarchy and ensures consistent user navigation patterns.
 *
 * @example Usage
 * ```ts
 * // ./routes/_app.tsx or middleware.
 * import { Main, Header } from 'lunchbox/atoms/Page.tsx';
 *
 * <Header>{...}</Header>
 * <Main>{...}</Main>
 * ```
 */
export function Header(p: iAtom<HTMLElement>): JSX.Element {
  return (
    <header
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  );
}

/**
 * The Footer atom creates a predictable location for important site-wide information and secondary navigation. By using this atom instead of a generic container, you maintain semantic HTML structure while ensuring footer content is consistently positioned and styled across all pages.
 *
 * @example Usage
 * ```ts
 * // ./routes/_app.tsx or middleware.
 * import { Main, Footer } from 'lunchbox/atoms/Page.tsx';
 *
 * <Main>{...}</Main>
 * <Footer>{...}</Footer>
 * ```
 */
export function Footer(p: iAtom<HTMLElement>): JSX.Element {
  return (
    <footer
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  );
}
