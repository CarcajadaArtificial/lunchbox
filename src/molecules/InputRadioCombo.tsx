import { type iAtom, Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

interface iInputRadioCombo {
  label: string;
  fwd: iAtom<HTMLInputElement>;
}

const d: iInputRadioCombo = {
  label: '',
  fwd: {},
};

const setup = (p: Partial<iInputRadioCombo>) => apDef(d, p);

export default function (props: Partial<iInputRadioCombo>): JSX.Element {
  const p = setup(props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Radio {...p.fwd} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
    </div>
  );
}
