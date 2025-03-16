import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';

/**
 * This dictionary contains the atoms that render secondary sections of content made using the
 * `<aside/>` element, usually for types of sidebars.
 *
 * @example Usage
 * ```ts
 * import { Aside } from 'lunchbox/atoms';
 *
 * <Aside.Sticky>
 *   <p>Hello</p>
 * </Aside.Sticky>
 * ```
 */
export default {
  /**
   * A sticky sidebar component optimized for desktop layouts, commonly used for page-level navigation
   * like tables of contents that follow the user's scroll position. While it can be used on mobile,
   * the limited horizontal space often makes this pattern less practical on smaller screens. The
   * sticky behavior keeps the content accessible while scrolling through the main content area.
   */
  Sticky: (p: iAtom): JSX.Element => (
    <aside
      {...p}
      class={cn(
        'sticky',
        'top-3/1',
        p.class,
      )}
    />
  ),
};
