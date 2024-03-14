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
 * @param {Partial<iSelect>} props
 *  {@link iSelect} (Partial by [design](https://deno.land/x/lunchbox#configure-anything-easily))
 *
 * @returns {JSXInternal.Element}
 *  The `<Select />` component.
 */
export default function Select(props: Partial<iSelect>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    children,
    placeholder,
    options,
    maxWidth,
    label,
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
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        {label === '' ? null : (
          <Text
            nostyleAll={nostyleAll}
            fref={fwd.text?.ref}
            noMargins
            class={c.text}
          >
            <>{label}</>
            {p.required
              ? (
                <sup
                  ref={fwd.required?.ref}
                  title='Required'
                  class={c.required}
                >
                  *
                </sup>
              )
              : null}
          </Text>
        )}
        <select ref={fref} class={c.input} {...p}>
          {optionPlaceholder}
          {optionComponents}
          {children}
        </select>
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
