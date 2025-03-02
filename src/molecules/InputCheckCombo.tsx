import { type iAtom, Input } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { JSX } from 'preact';

interface iInputCheckCombo {
  label: string;
  error: string;
  fwd: iAtom<HTMLInputElement>;
}

const d: iInputCheckCombo = {
  label: '',
  error: '',
  fwd: {},
};

const setup = (p: Partial<iInputCheckCombo>) => apDef(d, p);

export default function (props: Partial<iInputCheckCombo>): JSX.Element {
  const p = setup(props);

  return (
    <div>
      <Input.Label class='items-center'>
        <Input.Check {...p.fwd} />
        <Input.Text>{p.label}</Input.Text>
      </Input.Label>
      {p.error ? <Input.Error>{p.error}</Input.Error> : null}
    </div>
  );
}
