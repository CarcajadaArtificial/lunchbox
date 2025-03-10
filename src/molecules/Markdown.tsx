//   __  __          _      _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/Markdown
 */
import { type iAtom, Markdown } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import { render, type RenderOptions } from '@deno/gfm';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
export type iMarkdown = {
  content: string;
  renderOptions: RenderOptions;
  fwd: iAtom<HTMLDivElement>;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iMarkdown = {
  content: '',
  renderOptions: {
    allowIframes: false,
    allowMath: true,
  },
  fwd: {},
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

  return (
    <Markdown
      dangerouslySetInnerHTML={{ __html: p.content }}
      {...p.fwd}
    />
  );
}
