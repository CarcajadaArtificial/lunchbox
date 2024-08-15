//   _    _      _
//  | |  (_)_ _ | |__
//  | |__| | ' \| / /
//  |____|_|_||_|_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Link
 * *Atom*
 *
 * This module contains the render function for the `<Link />` component.
 *
 * @module
 */
import setup, { iLink } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Link/ >`](/x/lunchbox/components/Link/setup.ts?s=iLink) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Link />` component.
 */
export default function Link(props: Partial<iLink>) {
  const { children, ...p } = setup(props);

  return <a {...p}>{children}</a>;
}
