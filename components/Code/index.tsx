//    ___         _
//   / __|___  __| |___
//  | (__/ _ \/ _` / -_)
//   \___\___/\__,_\___|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Code
 * *Atom*
 *
 * This module contains the render function for the `<Code />` component.
 *
 * @module
 */

import setup, { iCode } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Code/ >`](/x/lunchbox/components/Code/setup.ts?s=iCode) component.
 *
 * @param {Partial<iCode>} props
 *  {@link iCode} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Code />` component.
 */
export default function (props: Partial<iCode>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper} {...fwd.wrapper}>
      <code ref={fref} {...p} class={c.code}>
        {children}
      </code>
    </div>
  );
}
