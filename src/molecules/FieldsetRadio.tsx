import { iAtom, Input, input } from '../atoms.tsx';
import InputRadioCombo from './InputRadioCombo.tsx';
import { apDef } from '../utils.ts';

interface iFieldsetRadio {
  values: string[];
  legend: string;
  error: string;
  fwd: iAtom<HTMLFieldSetElement>;
}

const d: iFieldsetRadio = {
  values: [],
  legend: '',
  error: '',
  fwd: {},
};

const setup = (p: Partial<iFieldsetRadio>) => apDef(d, p);

export default function (props: Partial<iFieldsetRadio>) {
  const p = setup(props);

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
