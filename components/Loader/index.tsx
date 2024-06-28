//   _                 _
//  | |   ___  __ _ __| |___ _ _
//  | |__/ _ \/ _` / _` / -_) '_|
//  |____\___/\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Loader
 * *Atom*
 *
 * This module contains the render function for the `<Loader />` component.
 *
 * @module
 */
import setup, { iLoader } from './setup.ts';
import Panel from '../Panel/index.tsx';
import Text from '../Text/index.tsx';
import { IconLoader2 } from '../../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Loader/ >`](/x/lunchbox/components/Loader/setup.ts?s=iLoader)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @returns {JSXInternal.Element}
 *  The `<Loader />` component.
 */
export default function (props: Partial<iLoader>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <Panel ref={fref} class={c.loader} {...p}>
      <IconLoader2 ref={fwd.icon?.ref} class={c.icon} {...fwd.icon} />
      <Text noMargins fref={fwd.text?.ref} class={c.text} {...fwd.text}>
        Loading...
      </Text>
    </Panel>
  );
}
