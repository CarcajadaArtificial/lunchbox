//   ___                _  _____        _                      ___           _
//  |_ _|_ _  _ __ _  _| ||_   _|____ _| |_ __ _ _ _ ___ __ _ / __|___ _ __ | |__  ___
//   | || ' \| '_ \ || |  _|| |/ -_) \ /  _/ _` | '_/ -_) _` | (__/ _ \ '  \| '_ \/ _ \
//  |___|_||_| .__/\_,_|\__||_|\___/_\_\\__\__,_|_| \___\__,_|\___\___/_|_|_|_.__/\___/
//           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/InputTextareaCombo
 */
import type { JSX } from 'preact';
import { apDef } from '@lunchbox/ui';
import { input } from '../particles.ts';
import { Input } from '../atoms.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iInputFieldCombo {
  label: string;
  error: string;
  required: boolean;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iInputFieldCombo = {
  label: '',
  error: '',
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
        <Input.Textarea required={p.required} />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
