import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * The innermost component that holds the actual code. It requires a container parent component to function properly.
 *
 * @example Usage
 * ```ts
 * import * as Code from 'lunchbox/atoms/Code.tsx';
 *
 * <p>
 *   Use the{" "}
 *   <Code.Inline>
 *     <Code.Content>
 *       npm install
 *     </Code.Content>
 *   </Code.Inline>
 *   {" "}command.
 * </p>
 * ```
 */
export const Content = (p: iAtom<HTMLSpanElement>): JSX.Element => (
  <code
    {...p}
    class={cn(
      clr.brand.txt,
      'leading-[calc(100%-1px)]',
      p.class,
    )}
  />
);

/**
 * Creates a single-line code display optimized for technical terms and commands within flowing text. Provides the styling context that Content components need for inline presentation.
 *
 * @example Usage
 * ```ts
 * import * as Code from 'lunchbox/atoms/Code.tsx';
 *
 * <p>
 *   Use the{" "}
 *   <Code.Inline>
 *     <Code.Content>
 *       npm install
 *     </Code.Content>
 *   </Code.Inline>
 *   {" "}command.
 * </p>
 * ```
 */
export const Inline = (p: iAtom<HTMLSpanElement>): JSX.Element => (
  <span
    {...p}
    class={cn(
      clr.panel.bg_35,
      clr.brand.txt,
      'inline-block',
      'pt-[3px] pb-[1px] px-[0.5ch]',
      'rounded',
      p.class,
    )}
  />
);

/**
 * Creates a multi-line code display with features like line numbers and copy buttons. Like Inline, provides styling context for Content, but with additional functionality for larger code samples.
 *
 * @example Usage - WIP
 * ```ts
 * import * as Code from 'lunchbox/atoms/Code.tsx';
 *
 * <Code.Block>
 *   <Code.Content>
 *     const greeting = 'Hello World';
 *     console.log(greeting);
 *   </Code.Content>
 * </Code.Block>
 * ```
 *
 * @todo [DEV] Finish implementing this atom.
 */
export const Block = (p: iAtom<HTMLDivElement>): JSX.Element => (
  <div
    class={cn(
      p.class,
    )}
    {...p}
  />
);
