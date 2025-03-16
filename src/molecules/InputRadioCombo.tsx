//   ___                _   ___         _ _      ___           _
//  |_ _|_ _  _ __ _  _| |_| _ \__ _ __| (_)___ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _|   / _` / _` | / _ \ (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|_|_\__,_\__,_|_\___/\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `InputRadioCombo` molecule.
 * @module molecules/InputRadioCombo
 */
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import Input from '../atoms/Input.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `InputRadioCombo` molecule. */
export interface iInputRadioCombo {
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

/** Default properties of the `InputRadioCombo` molecule. */
const d: iInputRadioCombo = {
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
 * import { InputRadioCombo } from 'lunchbox/molecules';
 *
 * (example code)
 * ```
 */
export default function (props: Partial<iInputRadioCombo>): JSX.Element {
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
