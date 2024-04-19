//    ___ _    _
//   / __| |_ (_)_ __
//  | (__| ' \| | '_ \
//   \___|_||_|_| .__/
//              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Chip
 * *Molecule*
 *
 * This module contains the render function for the `<Chip />` component.
 *
 * @module
 */
import Text from '../../atoms/Text/index.tsx';
import setup, { iChip } from './setup.ts';
import { IconX } from '../../../../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Chip/ >`](/x/lunchbox/components/Chip/setup.ts?s=iChip)` component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {string} content
 *    The text interior of a chip.
 *
 * @param {null | ComponentChild} icon
 *    The icon component. *Must contain the property "size: number"*
 *
 * @param {null | Function} onRemove
 *    Adds a button with an `<XIcon/>` from tabler icons and a listener for the `extendedClick()` event
 *    for the remove button.
 *
 * @param {null | Function} onActivate
 *    Adds "button-like" interactivity to the chip and a listener for the `extendedClick()` event.
 *
 * @returns {JSXInternal.Element}
 *  The `<Chip />` component.
 */
export default function Chip(props: Partial<iChip>) {
  const {
    c,
    fwd,
    nostyle,
    nostyleAll,
    fref,
    content,
    icon,
    onRemove,
    ...p
  } = setup(
    props,
  );

  return (
    <li ref={fref} class={c.chip} {...p}>
      {icon
        ? (
          <div class={c.icon}>
            {icon}
          </div>
        )
        : null}

      <Text noMargins type='small' class={c.content}>{content}</Text>
      {onRemove
        ? (
          <button class={c.remove}>
            <IconX size={12} class={c.removeIcon} {...fwd.removeIcon} />
          </button>
        )
        : null}
    </li>
  );
}
