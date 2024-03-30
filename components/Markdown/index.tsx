//   __  __          _      _
//  |  \/  |__ _ _ _| |____| |_____ __ ___ _
//  | |\/| / _` | '_| / / _` / _ \ V  V / ' \
//  |_|  |_\__,_|_| |_\_\__,_\___/\_/\_/|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Markdown
 * *Atom*
 *
 * This module contains the render function for the `<Markdown />` component.
 *
 * @module
 */
import setup, { iMarkdown } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Markdown/ >`](/x/lunchbox/components/Markdown/setup.ts?s=iMarkdown) component.
 *
 * @param {Partial<iMarkdown>} props
 *  {@link iMarkdown} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Markdown />` component.
 */
export default function (props: Partial<iMarkdown>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    markdownContent,
    renderOptions,
    ...p
  } = setup(props);

  return (
    <div
      class={c.markdown}
      ref={fref}
      dangerouslySetInnerHTML={{ __html: markdownContent }}
      {...p}
    />
  );
}
