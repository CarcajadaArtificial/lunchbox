import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';

/**
 * Unordered list atom that uses bullet points. Essential for presenting related items where
 order doesn't matter. Commonly used in feature lists, navigation menus, and content hierarchies.
 *
 * @example Usage
 * ```ts
 * import * as List from 'lunchbox/atoms/List.tsx';
 *
 * <List.ul>
 *   <li>First bullet point</li>
 *   <li>Second bullet point</li>
 * </List.ul>
 * ```
 */
export const ul = (p: iAtom<HTMLUListElement>): JSX.Element => (
  <ul
    {...p}
    class={cn(
      'list-disc',
      'ml-1/1 my-1/4',
      p.class,
    )}
  />
);

/**
 * Ordered list atom that uses numbers. Critical for sequences, instructions, and prioritized content where order matters.
 *
 * @example Usage
 * ```ts
 * import * as List from 'lunchbox/atoms/List.tsx';
 *
 * <List.ol>
 *   <li>First numbered item</li>
 *   <li>Second numbered item</li>
 * </List.ol>
 * ```
 */
export const ol = (p: iAtom<HTMLUListElement>): JSX.Element => (
  <ul
    {...p}
    class={cn(
      'list-decimal',
      'ml-1/1 my-1/4',
      p.class,
    )}
  />
);
