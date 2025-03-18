import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import input from '../particles/input.ts';
import * as Input from '../atoms/Input.tsx';
import InputRadio from './InputRadio.tsx';

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
 * The `FieldsetRadio` component is a wrapper for a group of radio inputs, allowing users to select one option from a set.It is designed to enhance accessibility and usability by grouping related radio buttons under a common legend. This component utilizes the `Input` atom for styling and structure, ensuring a consistent look and feel across forms.The `InputRadio` molecule is used for each individual radio button, which allows for easy customization and management of radio inputs.
 *
 * @example
 * ```ts
 * import { FieldsetRadio } from 'lunchbox/molecules';
 *
 * <FieldsetRadio
 *   values={['Option 1', 'Option 2', 'Option 3']}
 *   legend="Choose an option"
 *   error="This field is required"
 *   name="options"
 *   required={true}
 * />
 * ```
 * @todo [DEV] Add errors if values.length is 0 or if name is an empty string.
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
          <InputRadio
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
