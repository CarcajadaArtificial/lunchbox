//   ___      _   _
//  | _ )_  _| |_| |_ ___ _ _
//  | _ \ || |  _|  _/ _ \ ' \
//  |___/\_,_|\__|\__\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Button
 * *Atom*
 *
 * This module contains the render function for the `<Button />` component.
 *
 * @module
 */
import setup, { iButton } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Button/ >`](/x/lunchbox/components/Button/setup.ts?s=iButton) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {boolean} maxWidth
 *    If true, expands the width of the button up to its maximum width.
 *
 * @param {boolean} compact
 *    If true, the button's paddings will be shorter.
 *
 * @param {boolean} large
 *    If true, the button's paddings will be larger.
 *
 * @param {ButtonTypes} type
 *    Changes the button's style depending on the property.
 *    - **disabled:** Adds `cursor: not-allowed` and makes it look unavailable.
 *    - **error:** Makes it the standard red color.
 *    - **panel:** Gives a panel background to the button. If placed on top of a `<Panel />` component,
 *       it gives a page background instead, simulating a "hole" in the panel.
 *    - **transparent:** Makes the button's background transparent.
 *
 * @returns {JSXInternal.Element}
 *  The `<Button />` component.
 *
 * @todo - tabindex=0 by default
 * @todo - compact
 * @todo - large
 */
export default function Button(props: Partial<iButton>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    children,
    padding,
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
