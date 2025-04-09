import type { JSX } from 'preact';
import { render, type RenderOptions } from '@deno/gfm';
import { apDef } from '@lunchbox/ui';
import Prose from '../atoms/Prose.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `Markdown` molecule. */
export interface iMarkdown {
  content: string;
  renderOptions: RenderOptions;
}

/** Default properties of the `Markdown` molecule. */
const d: iMarkdown = {
  content: '',
  renderOptions: {
    allowIframes: false,
    allowMath: false,
  },
};

/** Setup function of the `Markdown` molecule. */
function setup(props: Partial<iMarkdown>) {
  const p = apDef<iMarkdown>(d, props);
  p.content = render(p.content, p.renderOptions);
  return p;
}

// =====================================================================================================
/**
 * The `Markdown` component renders markdown content as HTML using the specified render options. It allows for customization of rendering behavior through the `renderOptions` property. This component is useful for displaying formatted text, such as documentation or articles, that is written in markdown syntax. It leverages the `@deno/gfm` library for rendering.
 *
 * @todo [DEV] Add the KatexStyles atom to the page's head when the allowMath option is true.
 *
 * @example
 * ```ts
 * import { Markdown } from 'lunchbox/molecules';
 *
 * const markdownContent = '# Hello World\nThis is a markdown example.';
 *
 * <Markdown content={markdownContent} />
 * ```
 */
export default function (props: Partial<iMarkdown>): JSX.Element {
  const p = setup(props);

  return <Prose dangerouslySetInnerHTML={{ __html: p.content }} />;
}
