//    ___             _
//   / __|__ _ _ _ __| |
//  | (__/ _` | '_/ _` |
//   \___\__,_|_| \__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Card
 * *Molecule*
 *
 * This module contains the render function for the `<Card />` component.
 *
 * @module
 */
import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Card/ >`](/x/lunchbox/components/Card/setup.ts?s=iCard)` component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {string} imageUrl
 *    An optional URL for the card's header.
 *
 * @returns {JSXInternal.Element}
 *  The `<Card />` component.
 */
export default function Card(props: Partial<iCard>) {
  const { fwd, children, imageUrl, ...p } = setup(props);

  return (
    <div {...p}>
      {imageUrl === '' || imageUrl === undefined ? undefined : (
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          {...fwd.image}
        />
      )}
      <Panel {...fwd.panel}>
        {children}
      </Panel>
    </div>
  );
}
