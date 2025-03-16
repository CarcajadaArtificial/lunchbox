import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';

/**
 * A collection of semantic list components for organizing hierarchical content. Provides both
 * marker-based and numerical list variants while maintaining proper HTML semantics and accessibility.
 * Extends with custom classes through the standard atom interface.
 *
 * @example Usage
 * ```ts
 * import { List } from 'lunchbox/atoms';
 *
 * <List.ul>
 *   <li>First bullet point</li>
 *   <li>Second bullet point</li>
 * </List.ul>
 *
 * <List.ol>
 *   <li>First numbered item</li>
 *   <li>Second numbered item</li>
 * </List.ol>
 * ```
 */
const List = {
  /**
   * Unordered list component that uses bullet points. Essential for presenting related items where
   * order doesn't matter. Commonly used in feature lists, navigation menus, and content hierarchies.
   */
  ul: (p: iAtom<HTMLUListElement>): JSX.Element => (
    <ul
      {...p}
      class={cn(
        'list-disc',
        'ml-1/1 my-1/4',
        p.class,
      )}
    />
  ),
  /**
   * Ordered list component that uses numbers. Critical for sequences, instructions, and prioritized
   * content where order matters.
   */
  ol: (p: iAtom<HTMLUListElement>): JSX.Element => (
    <ul
      {...p}
      class={cn(
        'list-decimal',
        'ml-1/1 my-1/4',
        p.class,
      )}
    />
  ),
};

export default List;
