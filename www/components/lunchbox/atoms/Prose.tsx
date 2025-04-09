import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';

/**
 * This atom contains style settings for the `@tailwind/typeography` plugin and works with the `deno-gfm` package to render markdown content. It can be used by itself, but using the {@linkcode /@lunchbox/ui/doc/molecules/~/Markdown | Markdown} molecule is highly recommended to avoid redundancies.
 *
 * @example Usage
 * ```ts
 * import Prose from 'lunchbox/atoms/Prose.tsx';
 *
 * <Prose>
 *   <p>Hello</p>
 * </Prose>
 * ```
 */
const Prose = (p: iAtom<HTMLDivElement>): JSX.Element => (
  <div
    {...p}
    class={cn(
      'prose dark:prose-invert',
      'prose-h1:font-heading prose-h1:text-title prose-h1:mb-3/2',
      'prose-h2:font-heading prose-h2:text-head prose-h2:mb-1/1 prose-h2:mt-3/1',
      'prose-h3:text-subhead prose-h3:mb-1/2 prose-h3:mt-3/2',
      'prose-a:has-[.anchor]:*:hidden',
      'prose-a:outline-neutral prose-a:dark:outline-d-neutral prose-a:outline-offset-2 prose-a:inline-block',
      'prose-p:mb-1/2',
      'prose-pre:my-1/2',
      'prose-li:my-1/4',
      'prose-ul:mb-1/2 prose-ol:mb-1/2',
      'prose-tr:grid md:prose-tr:table-row',
      'prose-hr:my-2/1',
      'prose-td:py-1/8 prose-td:px-1/2 prose-th:py-1/8 prose-th:px-1/2',
      'prose-img:my-0 prose-img:text-center prose-img:mx-auto',
      'prose-figure:my-1/1 prose-figure:text-center',
      'prose-figcaption:mt-1/4 prose-figcaption:text-center',
      p.class,
    )}
  />
);

export default Prose;
