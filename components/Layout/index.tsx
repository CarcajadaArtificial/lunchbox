//   _                       _
//  | |   __ _ _  _ ___ _  _| |_
//  | |__/ _` | || / _ \ || |  _|
//  |____\__,_|\_, \___/\_,_|\__|
//             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Layout
 * *Atom*
 *
 * This module contains the render function for the `<Layout />` component.
 *
 * @module
 */
import setup, { iLayout } from './setup.ts';
import { ComponentChild } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Layout/ >`](/x/lunchbox/components/Layout/setup.ts?s=iLayout) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {LayoutTypes} type
 *    Available options that represent the different column arrangements on the grid.
 *
 * @param {boolean} whitespaceMode
 *    If true, adds horizontal whitespace margins to the layout section. This is useful for making
 *    certain layout types more focused. Additionally, having this mode turned off would create a
 *    layout with the minimum whitespace, making it have a "dashboard-like" appearance.
 *
 * @returns {JSXInternal.Element}
 *  The `<Layout />` component.
 */
export default function Layout(props: Partial<iLayout>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    type,
    whitespaceMode,
    children,
    ...p
  } = setup(
    props,
  );

  return (
    <div ref={fref} {...p} class={c.layout}>
      {Array.isArray(children)
        ? (
          children.map((child: ComponentChild) =>
            child
              ? (
                <div ref={fwd.module?.ref} class={c.module} {...fwd.module}>
                  {child}
                </div>
              )
              : null
          )
        )
        : children
        ? (
          <div ref={fwd.module?.ref} class={c.module} {...fwd.module}>
            {children}
          </div>
        )
        : null}
    </div>
  );
}
