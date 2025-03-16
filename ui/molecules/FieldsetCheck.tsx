//   ___ _     _    _         _    ___ _           _
//  | __(_)___| |__| |___ ___| |_ / __| |_  ___ __| |__
//  | _|| / -_) / _` (_-</ -_)  _| (__| ' \/ -_) _| / /
//  |_| |_\___|_\__,_/__/\___|\__|\___|_||_\___\__|_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `FieldsetCheck` molecule
 * @module molecules/FieldsetCheck
 */
import Input from '../atoms/Input.tsx';
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import InputCheckCombo from './InputCheckCombo.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `FieldsetCheck` molecule. */
export interface iFieldsetCheck {
  /**
   * This property represents the values available for selection.
   */
  values: string[];

  /**
   * The title for the fieldset of checkboxes.
   */
  legend: string;

  /**
   * An error message to be displayed relative to this fieldset. It also alters the appearance of the
   * component, giving it contrast against other parts of the form.
   */
  error: string;

  /**
   * The identifier that must be shared by all checkbox inputs inside this fieldset so that they're
   * related in the form's context.
   */
  name: string;
}

/** Default properties of the `FieldsetCheck` molecule. */
const d: iFieldsetCheck = {
  values: [],
  legend: '',
  error: '',
  name: '',
};

// =====================================================================================================
/**
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 * @todo [DOC] Explain the relationship this molecule has with the InputCheckCombo molecule.
 * @todo [DOC] Explain that there isn't a "required" prop because there aren't native HTML behaviors that allow for a fieldset of checkboxes to "be required" in a form.
 * @todo [DEV] Add errors if values.length is 0 or if name is an empty string.
 *
 * @example
 * ```ts
 * import { FieldsetCheck } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iFieldsetCheck>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Fieldset>
        {p.legend
          ? (
            <Input.Legend>
              <Input.Text>{p.legend}</Input.Text>
            </Input.Legend>
          )
          : null}
        {p.values.map((value) => (
          <InputCheckCombo
            label={value}
            name={p.name}
          />
        ))}
      </Input.Fieldset>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
