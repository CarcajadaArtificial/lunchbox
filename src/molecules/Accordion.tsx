//     _                    _ _
//    /_\  __ __ ___ _ _ __| (_)___ _ _
//   / _ \/ _/ _/ _ \ '_/ _` | / _ \ ' \
//  /_/ \_\__\__\___/_| \__,_|_\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 * @module molecules/Accordion
 */
import { Details, type iAtom } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import type { ComponentChildren } from 'preact';
import type { JSX } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iFieldsetCheck {
  summary: string;
  name: string;
  open: boolean;
  children: ComponentChildren;
  fwd: iAtom<HTMLDetailsElement>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
const d: iFieldsetCheck = {
  summary: '',
  open: false,
  name: 'undefined',
  children: undefined,
  fwd: {},
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iFieldsetCheck>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Details.Container open={p.open} name={p.name} {...p.fwd}>
      <Details.Summary>{p.summary}</Details.Summary>
      {p.children}
    </Details.Container>
  );
}
