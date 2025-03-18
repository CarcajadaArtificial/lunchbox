import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import input from '../particles/input.ts';
import * as Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputTextarea` molecule. */
export interface iInputTextarea {
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
}

/** Default properties of the `InputTextarea` molecule. */
const d: iInputTextarea = {
  label: '',
  error: '',
  required: false,
};

// =====================================================================================================
/**
 * A textarea input component that allows users to enter multi-line text. This component is built using the `Input` atom, which provides the basic structure and styling for input elements. The `InputTextarea` molecule enhances the `Input` atom by adding features such as a label, error messaging, and required field validation. The `InputTextarea` is designed to be flexible and can be used in various forms where multi-line text input is needed. It automatically handles the display of error messages and can indicate whether the field is required for form submission.
 *
 * @example
 * ```ts
 * import { InputTextarea } from 'lunchbox/molecules';
 *
 * <InputTextarea
 *   label="Description"
 *   error="This field is required."
 *   required={true}
 * />
 * ```
 */
export default function (props: Partial<iInputTextarea>): JSX.Element {
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
        <Input.Textarea required={p.required} />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
