import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';
import txt from '../particles/txt.ts';

/**
 * (description)
 *
 * @example Usage
 * ```ts
 * (example code)
 * ```
 */
export const H0 = (p: iAtom<HTMLSpanElement>): JSX.Element => (
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

/**
 * (description)
 *
 * @example Usage
 * ```ts
 * (example code)
 * ```
 */
export const H1 = (p: iAtom<HTMLHeadingElement>): JSX.Element => (
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

/**
 * (description)
 *
 * @example Usage
 * ```ts
 * (example code)
 * ```
 */
export const H2 = (p: iAtom<HTMLHeadingElement>): JSX.Element => (
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

/**
 * (description)
 *
 * @example Usage
 * ```ts
 * (example code)
 * ```
 */
export const H3 = (p: iAtom<HTMLHeadingElement>): JSX.Element => (
  <h3
    {...p}
    class={cn(
      'block',
      txt.subhead,
      p.class,
    )}
  />
);
