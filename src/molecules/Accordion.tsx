//     _                    _ _
//    /_\  __ __ ___ _ _ __| (_)___ _ _
//   / _ \/ _/ _/ _ \ '_/ _` | / _ \ ' \
//  /_/ \_\__\__\___/_| \__,_|_\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * A collapsible section that toggles content visibility when its header is clicked.
 *
 * @module molecules/Accordion
 */
import { Details } from '../atoms.tsx';
import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `Accordion` molecule. */
interface iFieldsetCheck {
  /**
   * The text content of the summary element that toggles the disclosure box open/closed when clicked.
   */
  summary: string;
  /** Whether the disclosure box is initially open or closed */
  open: boolean;
  /** The content that will be shown/hidden in the disclosure box */
  children: ComponentChildren;
}

/** Default properties of the `Accordion` molecule. */
const d: iFieldsetCheck = {
  summary: '',
  open: false,
  children: undefined,
};

// =====================================================================================================
/**
 * (description)
 *
 * ```tsx
 * import { Accordion } from 'lunchbox/molecules';
 *
 * <Accordion summary='Click me'>
 *   <p>Hello</p>
 * </Accordion>
 * ```
 */
export default function (props: Partial<iFieldsetCheck>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Details.Container open={p.open}>
      <Details.Summary>{p.summary}</Details.Summary>
      {p.children}
    </Details.Container>
  );
}
