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
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 *
 * ```ts
 * import { InputRadio } from 'lunchbox/molecules';
 *
 * (example code)
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
