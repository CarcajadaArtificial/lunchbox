//   __  __      _
//  |  \/  |__ _(_)_ _
//  | |\/| / _` | | ' \
//  |_|  |_\__,_|_|_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Main
 * *Molecule*
 *
 * This module contains the render function for the `<Main />` component.
 *
 * @module
 */
import setup, { iMain } from './setup.ts';
import Layout from '../Layout/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Main/ >`](/x/lunchbox/components/Main/setup.ts?s=iMain) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @prop {LayoutTypes} layout
 *    The layout type of the native Layout component inside the main.
 *
 * @returns {JSXInternal.Element}
 *  The `<Main />` component.
 */
export default function (props: Partial<iMain>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, layout, ...p } = setup(
    props,
  );

  return (
    <main ref={fref} {...p} class={c.main}>
      <Layout
        type={layout}
        fref={fwd.layout?.fref}
        {...fwd.layout}
        class={c.layout}
      >
        {children}
      </Layout>
    </main>
  );
}
