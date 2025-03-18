import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';
import txt from '../particles/txt.ts';

/**
 * An `H0` heading is a for large decorative text. The `H1-3` headings have ver specific semantic and structural purposes for accessibility. This heading has no semantic attachment, it's simply large text you can use for banners, titles in hero sections, etc. This component is exempt from all rules other headings usually have.
 *
 * @example Usage
 * ```ts
 * import { H0 } from 'lunchbox/atoms/Heading.tsx'
 *
 * <H0>Decorative text</H0>
 * ```
 *
 * @todo [DEV] Adjust size for small screens.
 */
export function H0(p: iAtom<HTMLSpanElement>): JSX.Element {
  return (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.display,
        clr.brand.txt,
        p.class,
      )}
    />
  );
}

/**
 * A heading for page titles. The `H1` atom has a very specific place in the structure of the page. For a correct semantic in the page, there shouldn't by more than **one** single instance of this component for every page. This is a behavior similar to the {@linkcode @lunchbox/ui/doc/atoms/~/Page.Main | Page.Main} atom. Additionally, this component must be placed before all other semantic heading components.
 *
 * @example Usage
 * ```ts
 * import { H1 } from 'lunchbox/atoms/Heading.tsx'
 *
 * <H1>Page title</H1>
 * ```
 */
export function H1(p: iAtom<HTMLHeadingElement>): JSX.Element {
  return (
    <h1
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.title,
        clr.brand.txt,
        p.class,
      )}
    />
  );
}

/**
 * A heading for section titles. The `H2` requires an {@linkcode @lunchbox/ui/doc/atoms/~/H1 | H1} atom to exist and for it to be before this one. This hierarchy of `H1->H2` is required for a correct accessibility in a page.
 *
 * @example Usage
 * ```ts
 * import { H1, H2 } from 'lunchbox/atoms/Heading.tsx'
 *
 * <H1>Page title</H1>
 *   <H2>Section title</H2>
 *   <H2>Section title</H2>
 * ```
 */
export function H2(p: iAtom<HTMLHeadingElement>): JSX.Element {
  return (
    <h2
      {...p}
      class={cn(
        'block',
        'font-heading',
        txt.head,
        clr.brand.txt,
        p.class,
      )}
    />
  );
}

/**
 * A heading for sub-section titles. The `H3` is the smallest heading component in the library. Headings smaller than this one are niche enough to be customly developed. This heading, like its larger peers {@linkcode @lunchbox/ui/doc/atoms/~/H1 | H1} and {@linkcode @lunchbox/ui/doc/atoms/~/H2 | H2} must follow the hierarchy of `H1->H2->H3`.
 *
 * @example Usage
 * ```ts
 * import { H1, H2, H3 } from 'lunchbox/atoms/Heading.tsx'
 *
 * <H1>Page title</H1>
 *   <H2>Section title</H2>
 *     <H3>Sub-section title</H3>
 *     <H3>Sub-section title</H3>
 *   <H2>Section title</H2>
 *     <H3>Sub-section title</H3>
 *     <H3>Sub-section title</H3>
 * ```
 */
export function H3(p: iAtom<HTMLHeadingElement>): JSX.Element {
  return (
    <h3
      {...p}
      class={cn(
        'block',
        txt.subhead,
        p.class,
      )}
    />
  );
}
