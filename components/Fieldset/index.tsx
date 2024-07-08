//   ___ _     _    _         _
//  | __(_)___| |__| |___ ___| |_
//  | _|| / -_) / _` (_-</ -_)  _|
//  |_| |_\___|_\__,_/__/\___|\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Fieldset
 * *Molecule*
 *
 * This module contains the render function for the `<Fieldset />` component.
 *
 * @module
 */
import Input from '../Input/index.tsx';
import setup, { iFieldset } from './setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Fieldset/ >`](/x/lunchbox/components/Fieldset/setup.ts?s=iFieldset)`
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @param {boolean} allowMultiple
 *  Indicates if multiple values can be selected.
 *
 * @param {string[]} values
 *  Array of available values for the fieldset.
 *
 * @param {string[]} selectedValues
 *  Array of selected values.
 *
 * @param {string} legend
 *  The legend text for the fieldset.
 *
 * @returns {JSXInternal.Element}
 *  The `<Fieldset />` component.
 */
export default function (props: Partial<iFieldset>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    allowMultiple,
    values,
    selectedValues,
    legend,
    fwd,
    ...p
  } = setup(
    props,
  );

  return (
    <div {...fwd.container} class={c.container}>
      <fieldset
        ref={fref}
        name={p.name ? p.name : 'undefined-fieldset'}
        class={c.fieldset}
        {...p}
      >
        {legend === '' ? null : (
          <legend class={c.legend} {...fwd.legend}>
            {legend}
          </legend>
        )}
        {values.map((inputValue) => (
          <Input
            type={allowMultiple ? 'checkbox' : 'radio'}
            label={inputValue}
            name={p.name ? p.name : 'undefined-fieldset'}
            checked={selectedValues.includes(inputValue)}
            data-label={inputValue}
            {...fwd.input}
            fwd={{ container: { class: c.input } }}
          />
        ))}
      </fieldset>
    </div>
  );
}
