import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * This dictionary contains the atoms that make up the `<details/>` element. A custom one could be built using this atoms, but for most cases the {@linkcode Accordion} molecule is a standard solution.
 *
 * - `Container`: The container for the details element that is shown/hidden when a summary atom is
 *    clicked.
 * - `Summary`: The summary element that prompts the user to click to show/hide a container atom.
 *
 * @example Usage
 * ```ts
 * import { Details } from 'lunchbox/atoms';
 *
 * <Details.Container open={p.open}>
 *   <Details.Summary>{p.summary}</Details.Summary>
 * </Details.Container>
 * ```
 */
export default {
  Container: (p: iAtom<HTMLDetailsElement>): JSX.Element => (
    <details
      {...p}
      class={cn(
        clr.panel.bg_35,
        'rounded',
        'mb-1/2',
        'px-1/2 py-1/4',
        p.class,
      )}
    />
  ),
  Summary: (p: iAtom): JSX.Element => (
    <summary
      {...p}
      class={cn(
        'py-1/4 px-1/2',
        p.class,
      )}
    />
  ),
};
