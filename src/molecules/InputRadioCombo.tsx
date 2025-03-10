//   ___                _   ___         _ _      ___           _
//  |_ _|_ _  _ __ _  _| |_| _ \__ _ __| (_)___ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _|   / _` / _` | / _ \ (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|_|_\__,_\__,_|_\___/\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/InputRadioCombo
 */
import { type iAtom, Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputRadioCombo {
  label: string;
  fwd: iAtom<HTMLInputElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputRadioCombo = {
  label: '',
  fwd: {},
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
        <Input.Radio {...p.fwd} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
    </div>
  );
}
