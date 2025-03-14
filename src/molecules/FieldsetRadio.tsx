//   ___ _     _    _         _   ___         _ _
//  | __(_)___| |__| |___ ___| |_| _ \__ _ __| (_)___
//  | _|| / -_) / _` (_-</ -_)  _|   / _` / _` | / _ \
//  |_| |_\___|_\__,_/__/\___|\__|_|_\__,_\__,_|_\___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `FieldsetRadio` molecule.
 * @module molecules/FieldsetRadio
 */
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import { input } from '../particles.ts';
import { Input } from '../atoms.tsx';
import InputRadioCombo from './InputRadioCombo.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `FieldsetRadio` molecule. */
export interface iFieldsetRadio {
  /**
   * This property represents the values available for selection.
   */
  values: string[];

  /**
   * The title for the group of radio inputs.
   */
  legend: string;

  /**
   * An error message to be displayed relative to this fieldset. It also alters the appearance of the
   * component, giving it contrast against other parts of the form.
   */
  error: string;

  /**
   * The identifier that must be shared by all radio inputs inside this fieldset so that they're related
   * in the form's context.
   */
  name: string;

  /**
   * This adds the `required` tag to the first radio input of the fieldset, this natively makes the
   * whole fieldset required for submission.
   */
  required: boolean;
}

/** Default properties of the `FieldsetRadio` molecule. */
const d: iFieldsetRadio = {
  values: [],
  legend: '',
  error: '',
  name: '',
  required: false,
};

// =====================================================================================================
/**
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 * @todo [DOC] Explain the relationship this molecule has with the InputRadioCombo molecule.
 * @todo [DEV] Add errors if values.length is 0 or if name is an empty string.
 *
 * @example
 * ```ts
 * import { FieldsetRadio } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iFieldsetRadio>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Fieldset>
        {p.legend
          ? (
            <Input.Legend>
              <Input.Text class={p.required ? input.required : undefined}>
                {p.legend}
              </Input.Text>
            </Input.Legend>
          )
          : null}
        {p.values.map((value, index) => (
          <InputRadioCombo
            required={p.required && index === 0}
            label={value}
            name={p.name}
          />
        ))}
      </Input.Fieldset>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
