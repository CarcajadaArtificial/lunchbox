//   __  __          _      _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `Markdown` molecule.
 * @module molecules/Markdown
 */
import type { JSX } from 'preact';
import { render, type RenderOptions } from '@deno/gfm';
import { apDef } from '@lunchbox/ui';
import { Prose } from '../atoms.tsx';

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
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DEV] Add the KatexStyles atom to the page's head when the allowMath option is true.
 *
 * @example
 * ```ts
 * import { Markdown } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iMarkdown>): JSX.Element {
  const p = setup(props);

  return <Prose dangerouslySetInnerHTML={{ __html: p.content }} />;
}
