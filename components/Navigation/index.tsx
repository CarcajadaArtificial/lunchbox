//   _  _          _           _   _
//  | \| |__ ___ _(_)__ _ __ _| |_(_)___ _ _
//  | .` / _` \ V / / _` / _` |  _| / _ \ ' \
//  |_|\_\__,_|\_/|_\__, \__,_|\__|_\___/_||_|
//                  |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Navigation
 * *Molecule*
 *
 * This module contains the render function for the `<Navigation />` component.
 *
 * @module
 */
import setup, { iNavigation } from './setup.ts';
import Panel from '../Panel/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Navigation/ >`](/x/lunchbox/components/Navigation/setup.ts?s=iMarkdown)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Navigation />` component.
 */
export default function (props: Partial<iNavigation>) {
  const { fwd, children, ...p } = setup(
    props,
  );

  return (
    <div {...fwd.container}>
      <Panel {...fwd.panel}>
        <nav {...p}>
          {children}
        </nav>
      </Panel>
    </div>
  );
}
