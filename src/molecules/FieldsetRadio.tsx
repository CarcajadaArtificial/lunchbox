//   ___ _     _    _         _   ___         _ _
//  | __(_)___| |__| |___ ___| |_| _ \__ _ __| (_)___
//  | _|| / -_) / _` (_-</ -_)  _|   / _` / _` | / _ \
//  |_| |_\___|_\__,_/__/\___|\__|_|_\__,_\__,_|_\___/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/FieldsetRadio
 */
import { input } from '../particles.ts';
import { type iAtom, Input } from '../atoms.tsx';
import InputRadioCombo from './InputRadioCombo.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iFieldsetRadio {
  values: string[];
  legend: string;
  error: string;
  fwd: iAtom<HTMLFieldSetElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iFieldsetRadio = {
  values: [],
  legend: '',
  error: '',
  fwd: {},
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iFieldsetRadio>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Input.Container>
      <Input.Fieldset {...p.fwd}>
        {p.legend
          ? (
            <Input.Legend>
              <Input.Text class={p.fwd.required ? input.required : undefined}>
                <>{p.legend}</>
              </Input.Text>
            </Input.Legend>
          )
          : null}
        {p.values.map((value) => (
          <InputRadioCombo
            label={value}
            fwd={{
              value,
              name: p.fwd.name,
            }}
          />
        ))}
      </Input.Fieldset>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
