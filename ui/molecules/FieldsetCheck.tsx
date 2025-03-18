import * as Input from '../atoms/Input.tsx';
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import InputCheck from './InputCheck.tsx';

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
 * The `FieldsetCheck` molecule renders a group of checkboxes within a fieldset, allowing users to select multiple options. This component is designed to work with the `Input` atom and the `InputCheck` molecule, providing a structured way to present checkbox inputs in a form. Each checkbox is associated with a shared name, which is crucial for form submission and accessibility. Note that there isn't a "required" prop for this component because native HTML behaviors do not support marking a fieldset of
 * checkboxes as required. Instead, validation should be handled externally.
 *
 * @example
 * ```ts
 * import { FieldsetCheck } from 'lunchbox/molecules';
 *
 * <FieldsetCheck
 *   values={['Option 1', 'Option 2']}
 *   legend="Select Options"
 *   error="Please select at least one option."
 *   name="options"
 * />
 * ```
 * @todo [DEV] Add errors if values.length is 0 or if name is an empty string.
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
          <InputCheck
            label={value}
            name={p.name}
          />
        ))}
      </Input.Fieldset>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
