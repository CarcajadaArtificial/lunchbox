//   __  __      _
//  |  \/  |__ _(_)_ _
//  | |\/| / _` | | ' \
//  |_|  |_\__,_|_|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Main
 * *Atom*
 *
 * This module contains the render function for the `<Main />` component.
 *
 * @module
 */
import setup, { iMain } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Main/ >`](/x/lunchbox/components/Main/setup.ts?s=iMain) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Main />` component.
 */
export default function (props: Partial<iMain>) {
  const { children, ...p } = setup(props);

  return <main {...p}>{children}</main>;
}
