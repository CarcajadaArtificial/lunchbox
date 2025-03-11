//   __  __          _      _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/Markdown
 *
 * @todo Add the KatexStyles atom to the page's head when the allowMath option is true.
 */
import type { JSX } from 'preact';
import { render, type RenderOptions } from '@deno/gfm';
import { apDef } from '@lunchbox/ui';
import { Prose } from '../atoms.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
export type iMarkdown = {
  content: string;
  renderOptions: RenderOptions;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iMarkdown = {
  content: '',
  renderOptions: {
    allowIframes: false,
    allowMath: false,
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
function setup(props: Partial<iMarkdown>) {
  const p = apDef<iMarkdown>(d, props);
  p.content = render(p.content, p.renderOptions);
  return p;
}

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iMarkdown>): JSX.Element {
  const p = setup(props);

  return <Prose dangerouslySetInnerHTML={{ __html: p.content }} />;
}
