//   ___                _    ___ _           _    ___           _
//  |_ _|_ _  _ __ _  _| |_ / __| |_  ___ __| |__/ __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _| (__| ' \/ -_) _| / / (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|\___|_||_\___\__|_\_\\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/InputCheckCombo
 */
import { type iAtom, Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputCheckCombo {
  label: string;
  error: string;
  fwd: iAtom<HTMLInputElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputCheckCombo = {
  label: '',
  error: '',
  fwd: {},
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iInputCheckCombo>): JSX.Element {
  const p = apDef(d, props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Check {...p.fwd} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </div>
  );
}
