//   ___                _    ___ _           _    ___           _
//  |_ _|_ _  _ __ _  _| |_ / __| |_  ___ __| |__/ __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _| (__| ' \/ -_) _| / / (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|\___|_||_\___\__|_\_\\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module is for the `InputCheck` molecule.
 * @module molecules/InputCheck
 */
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import Input from '../atoms/Input.tsx';

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
 * (description)
 *
 * @todo [DOC] Add a description and code example of how to propertly use this component.
 * @todo [DOC] Explain the relationship this molecule has with the Input atom.
 *
 * @example
 * ```ts
 * import { InputCheck } from 'lunchbox/molecules';
 *
 * (example code)
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
