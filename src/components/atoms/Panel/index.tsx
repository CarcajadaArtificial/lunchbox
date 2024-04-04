//   ___               _
//  | _ \__ _ _ _  ___| |
//  |  _/ _` | ' \/ -_) |
//  |_| \__,_|_||_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Panel
 * *Atom*
 *
 * This module contains the render function for the `<Panel />` component.
 *
 * @module
 */
import setup, { iPanel } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Panel/ >`](/x/lunchbox/components/Panel/setup.ts?s=iPanel) component.
 *
 * @param {Partial<iPanel>} props
 *  {@link iPanel} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Panel />` component.
 */
export default function (props: Partial<iPanel>) {
  const { c, nostyle, nostyleAll, fref, children, ...p } = setup(props);

  return (
    <div ref={fref} class={c.panel} {...p}>
      {children}
    </div>
  );
}
