import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import * as Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputRadio` molecule. */
export interface iInputRadio {
  /**
   * The input's title. It is built using the `<label/>` element already without the need of linking
   * them with the ids.
   */
  label: string;

  /**
   * The identifier that must be shared by other radio inputs inside so that they're related in the
   * form's context.
   */
  name: string;

  /**
   * Makes this input required during form submission.
   */
  required: boolean;
}

/** Default properties of the `InputRadio` molecule. */
const d: iInputRadio = {
  label: '',
  name: '',
  required: false,
};

// =====================================================================================================
/**
 * A radio input component that allows users to select one option from a set of related options. This component is built using the `<Input.Radio/>` atom and is designed to be used within a form. The `InputRadio` component requires a `label` for display, a `name` to group related radio inputs, and a `required` flag to enforce validation during form submission. The `name` prop ensures that all radio buttons with the same name are treated as a single group, allowing only one selection at a time. This component is closely related to the `Input` atom, which provides the underlying structure and functionality for the radio input and label elements.
 *
 * @example Usage
 * ```ts
 * import { InputRadio } from 'lunchbox/molecules';
 *
 * function MyForm() {
 *   return (
 *     <form>
 *       <InputRadio label="Option 1" name="options" required={true} />
 *       <InputRadio label="Option 2" name="options" required={true} />
 *     </form>
 *   );
 * }
 * ```
 */
export default function (props: Partial<iInputRadio>): JSX.Element {
  const p = apDef(d, props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Radio name={p.name} required={p.required} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
    </div>
  );
}
