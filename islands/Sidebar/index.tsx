//   ___ _    _     _
//  / __(_)__| |___| |__  __ _ _ _
//  \__ \ / _` / -_) '_ \/ _` | '_|
//  |___/_\__,_\___|_.__/\__,_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Sidebar
 * *Organism*
 *
 * This module contains the render function for the `<Sidebar />` island.
 *
 * @module
 */
import setup, { iSidebar } from './setup.ts';
import Linkmap from '../../components/Linkmap/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Sidebar/ >`](/x/lunchbox/components/Sidebar/setup.ts?s=iMarkdown)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Sidebar />` component.
 *
 * @todo Remove the Linkmap functionality in favor of only the children.
 */
export default function Sidebar(props: Partial<iSidebar>) {
  const {
    c,
    fwd,
    links,
    nostyle,
    children,
    nostyleAll,
    ...p
  } = setup(props);

  return (
    <div {...fwd.container} class={c.container}>
      <aside class={c.sidebar} {...p}>
        {links && links.length > 0
          ? <Linkmap links={links} {...fwd.linkmap} class={c.linkmap} />
          : null}
        {children}
      </aside>
    </div>
  );
}
