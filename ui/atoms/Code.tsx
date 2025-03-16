import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import clr from '../particles/clr.ts';

/**
 * A specialized component system for displaying code with proper syntax highlighting and formatting.
 * The architecture enforces semantic structure through required parent-child relationships.
 *
 * @example Usage (Inline)
 * ```ts
 * import { Code } from 'lunchbox/atoms';
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
 *
 * @example Usage (Block) - WIP
 * ```ts
 * import { Code } from 'lunchbox/atoms';
 *
 * <Code.Block>
 *   <Code.Content>
 *     const greeting = 'Hello World';
 *     console.log(greeting);
 *   </Code.Content>
 * </Code.Block>
 * ```
 *
 * @todo [DEV] Implement the `<Code.Block/>` atom.
 */
const Code = {
  /**
   * The innermost component that holds the actual code. It requires a container parent component to
   * function properly.
   */
  Content: (p: iAtom): JSX.Element => (
    <code
      {...p}
      class={cn(
        clr.brand.txt,
        'leading-[calc(100%-1px)]',
        p.class,
      )}
    />
  ),
  /**
   * Creates a single-line code display optimized for technical terms and commands within flowing text.
   * Provides the styling context that Content components need for inline presentation.
   */
  Inline: (p: iAtom<HTMLDivElement>): JSX.Element => (
    <div
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
  ),
  /**
   * Creates a multi-line code display with features like line numbers and copy buttons. Like Inline,
   * provides styling context for Content, but with additional functionality for larger code samples.
   */
  Block: (p: iAtom<HTMLDivElement>): JSX.Element => (
    <div
      class={cn(
        p.class,
      )}
      {...p}
    />
  ),
};

export default Code;
