//   ___                _
//  |_ _|_ _  _ __ _  _| |_
//   | || ' \| '_ \ || |  _|
//  |___|_||_| .__/\_,_|\__|
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Input
 * *Molecule*
 *
 * This module contains the render function for the `<Input />` component.
 *
 * @module
 */
import Text from '../Text/index.tsx';
import setup, { iInput } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Input/ >`](/x/lunchbox/components/Input/setup.ts?s=iInput) component.
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
 * @param {ComponentChild | null} fieldIcon
 *    A component that will be placed next to the input field.
 *
 * @returns {JSXInternal.Element}
 *  The `<Input />` component.
 */
export default function (props: Partial<iInput>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    maxWidth,
    label,
    fieldIcon,
    error,
    ...p
  } = setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container} {...fwd.container}>
      <label ref={fwd.label?.ref} class={c.label} {...fwd.label}>
        {label === '' ? null : (
          <Text
            nostyleAll={nostyleAll}
            fref={fwd.text?.fref}
            noMargins
            class={c.text}
            {...fwd.text}
          >
            <>{label}</>
            {p.required
              ? (
                <sup
                  ref={fwd.required?.ref}
                  title='Required'
                  class={c.required}
                  {...fwd.required}
                >
                  *
                </sup>
              )
              : null}
          </Text>
        )}
        {fieldIcon
          ? (
            <div
              ref={fwd.iconContainer?.ref}
              class={c.iconContainer}
              {...fwd.iconContainer}
            >
              {fieldIcon}
            </div>
          )
          : null}
        <input ref={fref} class={c.input} {...p} />
      </label>
      {error
        ? (
          <Text
            fref={fwd.error?.fref}
            noMargins
            type='small'
            inheritColor
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
