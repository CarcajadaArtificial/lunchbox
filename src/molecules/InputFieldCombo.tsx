//   ___                _   ___ _     _    _  ___           _
//  |_ _|_ _  _ __ _  _| |_| __(_)___| |__| |/ __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _| _|| / -_) / _` | (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__|_| |_\___|_\__,_|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/InputFieldCombo
 */
import { input } from '../particles.ts';
import { Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import { cn } from '@vyn/cn';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputFieldCombo {
  label: string;
  error: string;
  name: string;
  required: boolean;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputFieldCombo = {
  label: '',
  error: '',
  name: '',
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
        <Input.Field
          name={p.name}
          required={p.required}
          class={cn(p.error ? input.invalid : null)}
        />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
