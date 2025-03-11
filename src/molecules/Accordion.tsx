//     _                    _ _
//    /_\  __ __ ___ _ _ __| (_)___ _ _
//   / _ \/ _/ _/ _ \ '_/ _` | / _ \ ' \
//  /_/ \_\__\__\___/_| \__,_|_\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module molecules/Accordion
 */
import { Details } from '../atoms.tsx';
import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * (description)
 */
interface iFieldsetCheck {
  summary: string;
  name: string;
  open: boolean;
  children: ComponentChildren;
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
};

// =====================================================================================================
/**
 * (description)
 */
export default function (props: Partial<iFieldsetCheck>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Details.Container open={p.open} name={p.name}>
      <Details.Summary>{p.summary}</Details.Summary>
      {p.children}
    </Details.Container>
  );
}
