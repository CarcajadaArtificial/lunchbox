import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * The container for the details element that is shown/hidden when a summary atom is clicked.
 *
 * @example Usage
 * ```ts
 * import * as Details from 'lunchbox/atoms/Details.tsx';
 *
 * <Details.Container open={p.open}>
 *   <Details.Summary>{p.summary}</Details.Summary>
 * </Details.Container>
 * ```
 */
export const Container = (p: iAtom<HTMLDetailsElement>): JSX.Element => (
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
);

/**
 * The summary element that prompts the user to click to show/hide a container atom.
 *
 * @example Usage
 * ```ts
 * import * as Details from 'lunchbox/atoms/Details.tsx';
 *
 * <Details.Container open={p.open}>
 *   <Details.Summary>{p.summary}</Details.Summary>
 * </Details.Container>
 * ```
 */
export const Summary = (p: iAtom<HTMLElement>): JSX.Element => (
  <summary
    {...p}
    class={cn(
      'py-1/4 px-1/2',
      p.class,
    )}
  />
);
