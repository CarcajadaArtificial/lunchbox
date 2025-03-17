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
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 * @todo [DEV] Handle dates an times in useful notations.
 *
 * @example
 * ```ts
 * import { InputField } from 'lunchbox/molecules';
 *
 * (example code)
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
