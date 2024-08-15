//   ___               _
//  | _ \__ _ _ _  ___| |
//  |  _/ _` | ' \/ -_) |
//  |_| \__,_|_||_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Panel
 * *Atom*
 *
 * This module contains the render function for the `<Panel />` component.
 *
 * @module
 */
import setup, { iPanel } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Panel/ >`](/x/lunchbox/components/Panel/setup.ts?s=iPanel) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Panel />` component.
 */
export default function Panel(props: Partial<iPanel>) {
  const { children, fref, nostyle, nostyleAll, ...p } = setup(props);

  return (
    <div {...p}>
      {children}
    </div>
  );
}
