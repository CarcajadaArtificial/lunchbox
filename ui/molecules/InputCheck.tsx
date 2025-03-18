import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import * as Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputCheck` molecule. */
export interface iInputCheck {
  /**
   * The input's title. It is built using the `<label/>` element already without the need of linking
   * them with the ids.
   */
  label: string;

  /**
   * An error message to be displayed relative to this input. It also alters the appearance of the
   * component, giving it contrast against other parts of the form.
   */
  error: string;

  /**
   * The identifier that must be shared by other checkbox inputs inside so that they're related in the
   * form's context.
   */
  name: string;

  /**
   * Makes this input required during form submission.
   */
  required: boolean;
}

/** Default properties of the `InputCheck` molecule. */
const d: iInputCheck = {
  label: '',
  error: '',
  name: '',
  required: false,
};

// =====================================================================================================
/**
 * A checkbox input component that allows users to select one or more options. This component is built using the `<Input />` atom, which provides the underlying functionality for the checkbox and its label. The `InputCheck` molecule manages the relationship between multiple checkboxes through the `name` property, ensuring that they are grouped correctly in the form's context.
 *
 * @example Usage
 * ```ts
 * import { InputCheck } from 'lunchbox/molecules';
 *
 * <InputCheck
 *   label="Accept Terms and Conditions"
 *   error="You must accept the terms."
 *   name="terms"
 *   required={true}
 * />
 * ```
 */
export default function (props: Partial<iInputCheck>): JSX.Element {
  const p = apDef(d, props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Check name={p.name} required={p.required} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </div>
  );
}
