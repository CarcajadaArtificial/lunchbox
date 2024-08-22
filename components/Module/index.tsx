//   _                       _
//  | |   __ _ _  _ ___ _  _| |_
//  | |__/ _` | || / _ \ || |  _|
//  |____\__,_|\_, \___/\_,_|\__|
//             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Module
 * *Atom*
 *
 * This module contains the render function for the `<Module />` component.
 *
 * @module
 */
import setup, { iModule } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Module/ >`](/x/lunchbox/components/Module/setup.ts?s=iModule) component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Module />` component.
 */
export default function Module(props: Partial<iModule>) {
  const { size, children, ...p } = setup(props);

  return (
    <article {...p}>
      {children}
    </article>
  );
}
