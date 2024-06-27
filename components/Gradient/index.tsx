//    ___             _ _         _
//   / __|_ _ __ _ __| (_)___ _ _| |_
//  | (_ | '_/ _` / _` | / -_) ' \  _|
//   \___|_| \__,_\__,_|_\___|_||_\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Gradient
 * *Atom*
 *
 * This module contains the render function for the `<Gradient />` component.
 *
 * @module
 */
import setup, { iGradient } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Gradient/ >`](/x/lunchbox/components/Gradient/setup.ts?s=iGradient)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {GRADIENT_PATTERNS | null} gradient_pattern
 *    The pattern of the gradient.
 *
 * @param {boolean} flip
 *    Indicates if the gradient should be flipped.
 *
 * @returns {JSXInternal.Element}
 *  The `<Gradient />` component.
 */
export default function (props: Partial<iGradient>) {
  const { c, nostyle, nostyleAll, fref, ...p } = setup(props);

  return <div ref={fref} class={c.gradient} {...p} />;
}
