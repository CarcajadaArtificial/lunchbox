//   ___                _   ___         _ _      ___           _
//  |_ _|_ _  _ __ _  _| |_| _ \__ _ __| (_)___ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _|   / _` / _` | / _ \ (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|_|_\__,_\__,_|_\___/\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/InputRadioCombo
 */
import { Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputRadioCombo {
  label: string;
  name: string;
  required: boolean;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputRadioCombo = {
  label: '',
  name: '',
  required: false,
};

// =====================================================================================================
/**
 * (description)
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
