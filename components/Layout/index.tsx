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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Layout/ >`](/x/lunchbox/components/Layout/setup.ts?s=iLayout) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {boolean} whitespace
 *    If true, adds horizontal whitespace margins to the layout section. This is useful for making
 *    certain layout types more focused. Additionally, having this mode turned off would create a
 *    layout with the minimum whitespace, making it have a "dashboard-like" appearance.
 *
 * @returns {JSXInternal.Element}
 *  The `<Layout />` component.
 */
export default function Layout(props: Partial<iLayout>) {
  const { whitespace, children, ...p } = setup(props);

  return (
    <section {...p}>
      {children}
    </section>
  );
}
