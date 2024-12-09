import { iAtom, Input } from '../src/atoms.tsx';
import { apDef } from '../deps.ts';

interface iInputRadioCombo {
  label: string;
  error: string;
  fwd: iAtom<HTMLInputElement>;
}

const d: iInputRadioCombo = {
  label: '',
  error: '',
  fwd: {},
};

const setup = (p: Partial<iInputRadioCombo>) => apDef(d, p);

export default function (props: Partial<iInputRadioCombo>) {
  const p = setup(props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Radio {...p.fwd} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </div>
  );
}
