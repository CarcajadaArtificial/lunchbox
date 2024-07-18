//   _  _             _
//  | || |___ __ _ __| |___ _ _
//  | __ / -_) _` / _` / -_) '_|
//  |_||_\___\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Header
 * *Molecule*
 *
 * This module contains the render function for the `<Header />` component.
 *
 * @module
 */
import setup, { iHeader } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Header/ >`](/x/lunchbox/components/Header/setup.ts?s=iHeader) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @prop {LayoutTypes} layout
 *    The layout type of the native Layout component inside the Header.
 *
 * @prop {boolean} banner
 *    If true, the header will span 90% of the device's height.
 *
 * @returns {JSXInternal.Element}
 *  The `<Header />` component.
 */
export default function (props: Partial<iHeader>) {
  const {
    c,
    fref,
    nostyle,
    nostyleAll,
    fwd,
    banner,
    children,
    layout,
    ...p
  } = setup(
    props,
  );

  return (
    <>
      <Panel
        nostyleAll={nostyleAll}
        fref={fwd.panel?.fref}
        {...fwd.panel}
        class={c.panel}
      >
        <header ref={fref} {...p} class={c.header}>
          <Layout
            fref={fwd.layout?.fref}
            type={layout}
            nostyleAll={nostyleAll}
            {...fwd.layout}
            class={c.layout}
          >
            {children}
          </Layout>
        </header>
      </Panel>
    </>
  );
}
