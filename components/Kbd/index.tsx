//   _  ___        _
//  | |/ / |__  __| |
//  | ' <| '_ \/ _` |
//  |_|\_\_.__/\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Kbd
 * *Atom*
 *
 * This module contains the render function for the `<Kbd />` component.
 *
 * @module
 */
import setup, { iKbd } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Kbd/ >`](/x/lunchbox/components/Kbd/setup.ts?s=iKbd) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Kbd />` component.
 */
export default function Kbd(props: Partial<iKbd>) {
  const { children, ...p } = setup(props);

  return <kbd {...p}>{children}</kbd>;
}
