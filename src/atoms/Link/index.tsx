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
 * @param {Partial<iLink>} props
 *  {@link iLink} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Link />` component.
 */
export default function (props: Partial<iLink>) {
  const { c, nostyle, nostyleAll, fref, children, ...p } = setup(props);

  return (
    <a ref={fref} tabIndex={p.tabIndex ? p.tabIndex : 0} class={c.link} {...p}>
      {children}
    </a>
  );
}
