//   ___         _
//  | __|__  ___| |_ ___ _ _
//  | _/ _ \/ _ \  _/ -_) '_|
//  |_|\___/\___/\__\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Footer
 * *Molecule*
 *
 * This module contains the render function for the `<Footer />` component.
 *
 * @module
 */
import { ComponentChild } from 'preact';
import setup, { iFooter } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';
import Link from '../Link/index.tsx';
import Button from '../Button/index.tsx';
import IconBrandFresh from '../Icon/IconBrandFresh.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Footer/ >`](/x/lunchbox/components/Footer/setup.ts?s=iFooter) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @prop {LayoutTypes} layout
 *    The layout type of the native Layout component inside the Footer.
 *
 * @prop {boolean} madeWithFresh
 *    If true, displays the "Made with fresh" badge.
 *
 * @returns {JSXInternal.Element}
 *  The `<Footer />` component.
 *
 * @todo [ ] Lazy load the `made-with-fresh` images.
 * @todo [?] Replace an src image with an inline SVG.
 */
export default function (props: Partial<iFooter>) {
  const {
    c,
    fref,
    fwd,
    nostyle,
    nostyleAll,
    children,
    layout,
    madeWithFresh,
    ...p
  } = setup(props);

  if (madeWithFresh) {
    (children as [ComponentChild]).push(
      <Link
        fref={fwd.badge_link?.fref}
        class={c.badge_link}
        href='https://fresh.deno.dev'
        nostyleAll={nostyleAll}
      >
        <Button type='panel'>
          <IconBrandFresh size='xs' /> Made with <strong>Fresh</strong>
        </Button>
      </Link>,
    );
  }

  return (
    <Panel
      nostyleAll={nostyleAll}
      fref={fwd.panel?.fref}
      {...fwd.panel}
      class={c.panel}
    >
      <footer ref={fref} {...p} class={c.footer}>
        <Layout
          fref={fwd.layout?.fref}
          type={layout}
          nostyleAll={nostyleAll}
          {...fwd.layout}
          class={c.layout}
        >
          {children}
        </Layout>
      </footer>
    </Panel>
  );
}
