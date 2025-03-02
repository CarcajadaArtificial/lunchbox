import { Details, type iAtom } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { ComponentChildren } from 'preact';
import type { JSX } from 'preact';

interface iFieldsetCheck {
  summary: string;
  name: string;
  open: boolean;
  children: ComponentChildren;
  fwd: iAtom<HTMLDetailsElement>;
}

const d: iFieldsetCheck = {
  summary: '',
  open: false,
  name: 'undefined',
  children: undefined,
  fwd: {},
};

const setup = (p: Partial<iFieldsetCheck>) => apDef(d, p);

export default function (props: Partial<iFieldsetCheck>): JSX.Element {
  const p = setup(props);

  return (
    <Details.Container open={p.open} name={p.name} {...p.fwd}>
      <Details.Summary>{p.summary}</Details.Summary>
      {p.children}
    </Details.Container>
  );
}
