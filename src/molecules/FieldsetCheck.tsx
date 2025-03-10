//   ___ _     _    _         _    ___ _           _
//  | __(_)___| |__| |___ ___| |_ / __| |_  ___ __| |__
//  | _|| / -_) / _` (_-</ -_)  _| (__| ' \/ -_) _| / /
//  |_| |_\___|_\__,_/__/\___|\__|\___|_||_\___\__|_\_\
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/FieldsetCheck
 */
import { input } from '../particles.ts';
import { type iAtom, Input } from '../atoms.tsx';
import InputCheckCombo from './InputCheckCombo.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iFieldsetCheck {
  values: string[];
  legend: string;
  error: string;
  fwd: iAtom<HTMLFieldSetElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iFieldsetCheck = {
  values: [],
  legend: '',
  error: '',
  fwd: {},
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iFieldsetCheck>): JSX.Element {
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
          <InputCheckCombo
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
