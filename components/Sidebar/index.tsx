//   ___ _    _     _
//  / __(_)__| |___| |__  __ _ _ _
//  \__ \ / _` / -_) '_ \/ _` | '_|
//  |___/_\__,_\___|_.__/\__,_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Sidebar
 * *Atom*
 *
 * This module contains the render function for the `<Sidebar />` component.
 *
 * @module
 */
import setup, { iSidebar } from './setup.ts';

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
  const { fwd, children, ...p } = setup(props);

  return (
    <div {...fwd.container}>
      <aside {...p}>
        {children}
      </aside>
    </div>
  );
}
