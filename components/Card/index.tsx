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
 * Render function for the `<Card />` component.
 *
 * @param {Partial<iCard>} props
 *  {@linkcode iCard} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Card />` component.
 */
export default function (props: Partial<iCard>) {
  const {
    c,
    fref,
    fwd,
    nostyle,
    nostyleAll,
    children,
    imageUrl,
    ...p
  } = setup(props);

  return (
    <div ref={fref} class={c.card} {...p}>
      <Panel
        nostyleAll={nostyleAll}
        fref={fwd.panel?.ref}
        class={c.panel}
      >
        {imageUrl === '' ? undefined : (
          <div
            class={c.image}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        <div class={c.section}>
          {children}
        </div>
      </Panel>
    </div>
  );
}
