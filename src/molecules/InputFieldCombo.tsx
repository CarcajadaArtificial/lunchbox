import { iAtom, Input, input } from '../atoms.tsx';
import { apDef, cn } from '../../deps.ts';

interface iInputFieldCombo {
  label: string;
  error: string;
  fwd: iAtom<HTMLInputElement>;
}

const d: iInputFieldCombo = {
  label: '',
  error: '',
  fwd: {},
};

const setup = (p: Partial<iInputFieldCombo>) => apDef(d, p);

export default function (props: Partial<iInputFieldCombo>) {
  const p = setup(props);

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
        <Input.Field
          class={cn(p.error ? input.error : p.fwd.class)}
          {...p.fwd}
        />
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </Input.Container>
  );
}
