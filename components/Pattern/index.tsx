//   ___      _   _
//  | _ \__ _| |_| |_ ___ _ _ _ _
//  |  _/ _` |  _|  _/ -_) '_| ' \
//  |_| \__,_|\__|\__\___|_| |_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Pattern
 * *Atom*
 *
 * This module contains the render function for the `<Pattern />` component.
 *
 * @module
 */
import setup, { iPattern } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Pattern/ >`](/x/lunchbox/components/Pattern/setup.ts?s=iPattern)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {PatternTypes | null} type
 *    The type of the pattern.
 *
 * @param {boolean} flip
 *    Indicates if the pattern should be flipped.
 *
 * @returns {JSXInternal.Element}
 *  The `<Pattern />` component.
 */
export default function (props: Partial<iPattern>) {
  const { c, nostyle, nostyleAll, fref, type, ...p } = setup(props);

  return <div ref={fref} {...p} class={c.pattern} />;
}
