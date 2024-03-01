//   ___      _   _
//  | _ )_  _| |_| |_ ___ _ _
//  | _ \ || |  _|  _/ _ \ ' \
//  |___/\_,_|\__|\__\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Button
 * *Basic Atom*
 *
 * This module contains the render function for the `<Button />` component.
 *
 * @module
 */
import setup, { iButton } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the `<Button />` component.
 *
 * @param {Partial<iButton>} props
 *  {@linkcode iButton} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Button />` component.
 */
export default function Button(props: Partial<iButton>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    children,
    compact,
    type,
    ...p
  } = setup(
    props,
  );

  return (
    <button
      ref={fref}
      class={c.button}
      {...p}
    >
      {children}
    </button>
  );
}
