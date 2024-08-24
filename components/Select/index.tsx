//   _____        _     _
//  |_   _|____ _| |_  /_\  _ _ ___ __ _
//    | |/ -_) \ /  _|/ _ \| '_/ -_) _` |
//    |_|\___/_\_\\__/_/ \_\_| \___\__,_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### TextArea
 * *Molecule*
 *
 * This module contains the render function for the `<TextArea />` component.
 *
 * @module
 */
import setup, { iSelect } from './setup.ts';
import Text from '../Text/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Select/ >`](/x/lunchbox/components/Select/setup.ts?s=iSelect) component.
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
 * @param {string} placeholder
 *    Creates an `<option value='' selected hidden>` HTMLElement that acts as a placeholder.
 *
 * @param {iOption[]} options
 *    The array of available options in the component.
 *
 * @returns {JSXInternal.Element}
 *  The `<Select />` component.
 */
export default function Select(props: Partial<iSelect>) {
  const {
    fwd,
    children,
    placeholder,
    options,
    maxWidth,
    label,
    fieldIcon,
    error,
    ...p
  } = setup(props);

  const optionPlaceholder = placeholder
    ? (
      <option value='' selected hidden>
        {placeholder}
      </option>
    )
    : null;

  const optionComponents = options.map((option) => {
    return typeof option === 'string'
      ? <option value={option}>{option}</option>
      : option.value && option.name
      ? <option value={option.value}>{option.name}</option>
      : (
        { option }
      );
  });

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
        <select {...p}>
          {optionPlaceholder}
          {optionComponents}
          {children}
        </select>
      </label>
      {error ? <Text {...fwd.error}>{error}</Text> : null}
    </div>
  );
}
