//   ___      _        _
//  / __| ___| |___ __| |_
//  \__ \/ -_) / -_) _|  _|
//  |___/\___|_\___\__|\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Select
 * *Molecule*
 *
 * This module contains the render function for the `<Select />` component.
 *
 * @module
 */

import setup, { iTextArea } from './setup.ts';
import Text from '../../atoms/Text/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<TextArea/ >`](/x/lunchbox/components/TextArea/setup.ts?s=iTextArea) component.
 *
 * @param {Partial<iTextArea>} props
 *  {@link iTextArea} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<TextArea />` component.
 */
export default function TextArea(props: Partial<iTextArea>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    maxWidth,
    label,
    error,
    fieldIcon,
    ...p
  } = setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        <Text
          nostyleAll={nostyleAll}
          fref={fwd.text?.ref}
          noMargins
          class={c.text}
        >
          <>{label}</>
          {p.required
            ? (
              <sup ref={fwd.text?.ref} title='Required' class={c.required}>
                *
              </sup>
            )
            : null}
        </Text>
        {fieldIcon
          ? (
            <div class={c.iconContainer}>
              {fieldIcon}
            </div>
          )
          : null}
        <textarea ref={fref} class={c.input} {...p} />
      </label>
      {error
        ? (
          <Text
            fref={fwd.error?.ref}
            noMargins
            inheritColor
            type='small'
            class={c.error}
            nostyleAll={nostyleAll}
          >
            {error}
          </Text>
        )
        : null}
    </div>
  );
}
