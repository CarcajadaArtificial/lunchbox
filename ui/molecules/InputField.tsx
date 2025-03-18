import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import { apDef } from '@lunchbox/ui';
import input from '../particles/input.ts';
import * as Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputField` molecule. */
export interface iInputField {
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

/** Default properties of the `InputField` molecule. */
const d: iInputField = {
  label: '',
  error: '',
  required: false,
};

// =====================================================================================================
/**
 * A molecule component that renders an input field with a label and optional error message. This component is designed to be used in forms where user input is required. It integrates with the `Input` atom to provide a consistent styling and behavior for input elements. The `InputField` allows you to specify a label, an error message, and whether the input is required. If an error message is provided, the input field will visually indicate an error state.
 *
 * @example
 * ```ts
 * import { InputField } from 'lunchbox/molecules';
 *
 * function MyForm() {
 *   return (
 *     <form>
 *       <InputField
 *         label="Username"
 *         error="This field is required."
 *         required={true}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
export default function (props: Partial<iInputField>): JSX.Element {
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
        <Input.Field
          required={p.required}
          class={cn(p.error ? input.invalid : null)}
        />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
