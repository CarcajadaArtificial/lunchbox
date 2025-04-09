import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import * as Input from '../atoms/Input.tsx';
import input from '../particles/input.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputSelect` molecule. */
export interface iInputSelect {
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
   * Makes this input required during form submission.
   */
  required: boolean;

  /**
   * This property helps add options to the select field.
   */
  children: ComponentChildren;
}

/** Default properties of the `InputSelect` molecule. */
const d: iInputSelect = {
  label: '',
  error: '',
  children: undefined,
  required: false,
};

// =====================================================================================================
/**
 * The `InputSelect` molecule is a customizable select input component that allows users to choose from a list of options. It integrates with the `Input` atom to provide a consistent styling and behavior across form elements. This component accepts a label, an error message, and a required flag to enhance user experience and form validation. The `InputSelect` molecule utilizes the `Input` atom for rendering the label, select, and error message. This ensures that the styling and functionality are consistent with other input components in the library.
 *
 * @todo [DEV] Implement the special functionality for `default` and `placeholder` properties.
 * @todo [DEV] Implement an `<Input.Option>` atom for this molecule's children.
 *
 * @example
 * ```ts
 * import { InputSelect } from 'lunchbox/molecules';
 *
 * const MyForm = () => (
 *   <InputSelect label="Choose an option" error="This field is required" required>
 *     <option value="option1">Option 1</option>
 *     <option value="option2">Option 2</option>
 *   </InputSelect>
 * );
 * ```
 */
export default function (props: Partial<iInputSelect>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Label class='flex-col'>
        {p.label
          ? (
            <Input.Text class={p.required ? input.required : undefined}>
              {p.label}
            </Input.Text>
          )
          : null}
        <Input.Select required={p.required}>{props.children}</Input.Select>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
