//   ___                          _
//  / __| ___ _ __  __ _ _ _ __ _| |_ ___ _ _
//  \__ \/ -_) '_ \/ _` | '_/ _` |  _/ _ \ '_|
//  |___/\___| .__/\__,_|_| \__,_|\__\___/_|
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Separator
 * *Atom*
 *
 * This module contains the render function for the `<Separator />` component.
 *
 * @module
 */
import setup, { iSeparator } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Separator/ >`](/x/lunchbox/components/Separator/setup.ts?s=iSeparator) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Separator />` component.
 */
export default function Separator(props: Partial<iSeparator>) {
  const { c, nostyle, nostyleAll, fref, ...p } = setup(props);

  return <hr ref={fref} class={c.separator} {...p} />;
}
