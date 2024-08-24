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
    fwd,
    maxWidth,
    label,
    fieldIcon,
    error,
    ...p
  } = setup(props);

  return (
    <div {...fwd.container}>
      <label {...fwd.label}>
        {label === '' ? null : (
          <Text {...fwd.text}>
            <>{label}</>
            {p.required ? <sup {...fwd.required}>*</sup> : null}
          </Text>
        )}
        {fieldIcon ? <div {...fwd.iconContainer}>{fieldIcon}</div> : null}
        <input {...p} />
      </label>
      {error ? <Text {...fwd.error}>{error}</Text> : null}
    </div>
  );
}
