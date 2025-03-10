//   ___                _   ___      _        _    ___           _
//  |_ _|_ _  _ __ _  _| |_/ __| ___| |___ __| |_ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _\__ \/ -_) / -_) _|  _| (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|___/\___|_\___\__|\__|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/InputSelectCombo
 */
import { input } from '../particles.ts';
import { type iAtom, Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { ComponentChildren, JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputFieldCombo {
  label: string;
  error: string;
  children: ComponentChildren;
  fwd: iAtom<HTMLSelectElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputFieldCombo = {
  label: '',
  error: '',
  children: undefined,
  fwd: {},
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iInputFieldCombo>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Label class='flex-col'>
        {p.label
          ? (
            <Input.Text class={p.fwd.required ? input.required : undefined}>
              <>{p.label}</>
            </Input.Text>
          )
          : null}
        <Input.Select {...p.fwd}>{props.children}</Input.Select>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
