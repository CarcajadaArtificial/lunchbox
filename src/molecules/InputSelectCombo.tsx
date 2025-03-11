//   ___                _   ___      _        _    ___           _
//  |_ _|_ _  _ __ _  _| |_/ __| ___| |___ __| |_ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _\__ \/ -_) / -_) _|  _| (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|___/\___|_\___\__|\__|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/InputSelectCombo
 */
import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import { Input } from '../atoms.tsx';
import { input } from '../particles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputFieldCombo {
  label: string;
  error: string;
  children: ComponentChildren;
  required: boolean;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputFieldCombo = {
  label: '',
  error: '',
  children: undefined,
  required: false,
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
            <Input.Text class={p.required ? input.required : undefined}>
              <>{p.label}</>
            </Input.Text>
          )
          : null}
        <Input.Select required={p.required}>{props.children}</Input.Select>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
