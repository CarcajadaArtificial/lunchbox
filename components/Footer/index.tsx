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
import setup, { iFooter } from './setup.ts';
import Panel from '../Panel/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Footer/ >`](/x/lunchbox/components/Footer/setup.ts?s=iFooter) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Footer />` component.
 */
export default function (props: Partial<iFooter>) {
  const {
    fwd,
    children,
    ...p
  } = setup(props);

  return (
    <Panel {...fwd.panel}>
      <footer {...p}>
        {children}
      </footer>
    </Panel>
  );
}
