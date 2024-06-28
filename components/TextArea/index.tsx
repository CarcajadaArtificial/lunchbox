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
import Text from '../Text/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<TextArea/ >`](/x/lunchbox/components/TextArea/setup.ts?s=iTextArea)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {string} label
 *    This property will add a `<Text />` component inside the `<label/>` element and links it to the
 *    by nesting it inside the label as well.
 *
 * @param {string | null} error
 *    This string creates a standardized error message linked individually to the component.
 *
 * @param {boolean} maxWidth
 *    If true, overrides the default max width and makes it adjust to the parent container's width.
 *
 * @param {boolean} noResize
 *    If true, adds a `resize-none` css style fully preventing resizing.
 *
 * @returns {JSXInternal.Element}
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
    <div ref={fwd.container?.ref} class={c.container} {...fwd.container}>
      <label ref={fwd.label?.ref} class={c.label} {...fwd.label}>
        <Text
          nostyleAll={nostyleAll}
          fref={fwd.text?.ref}
          noMargins
          class={c.text}
          {...fwd.text}
        >
          <>{label}</>
          {p.required
            ? (
              <sup
                ref={fwd.text?.ref}
                title='Required'
                class={c.required}
                {...fwd.required}
              >
                *
              </sup>
            )
            : null}
        </Text>
        {fieldIcon
          ? (
            <div class={c.iconContainer} {...fwd.iconContainer}>
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
            {...fwd.error}
          >
            {error}
          </Text>
        )
        : null}
    </div>
  );
}
