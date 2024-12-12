import { useState } from 'preact/hooks';
import { ComponentChild } from 'preact';
import { iAtom, Link } from '../atoms.tsx';
import { apDef } from '../../deps.ts';

export type iRevealer = {
  actuator: ComponentChild;
  fwd: iAtom<HTMLDivElement>;
};

const d: iRevealer = {
  actuator: <Link>Read more</Link>,
  fwd: {},
};

export const setup = (props: Partial<iRevealer>): iRevealer =>
  apDef<iRevealer>(d, props);

export default function (props: Partial<iRevealer>) {
  const { fwd, actuator } = setup(props);
  const [isRevealed, setRevealed] = useState<boolean>(false);

  return (
    <div {...fwd}>
      {!isRevealed && <div onClick={() => setRevealed(true)}>{actuator}</div>}
      <div>{isRevealed && fwd.children}</div>
    </div>
  );
}
