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
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Code />` component.
 */
export default function Code(props: Partial<iCode>) {
  const { children, fwd, ...p } = setup(props);

  return (
    <div {...fwd.wrapper}>
      <code {...p}>
        {children}
      </code>
    </div>
  );
}
