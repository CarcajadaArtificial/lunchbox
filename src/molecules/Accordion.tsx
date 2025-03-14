//     _                    _ _
//    /_\  __ __ ___ _ _ __| (_)___ _ _
//   / _ \/ _/ _/ _ \ '_/ _` | / _ \ ' \
//  /_/ \_\__\__\___/_| \__,_|_\___/_||_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Module for the `Accordion` molecule
 * @module molecules/Accordion
 */
import { Details } from '../atoms.tsx';
import type { ComponentChildren, JSX } from 'preact';
import { apDef } from '@lunchbox/ui';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property interface for the `Accordion` molecule. */
export interface iAccordion {
  /**
   * The text content of the summary element that toggles the disclosure box open/closed when clicked.
   */
  summary: string;

  /**
   * Whether the disclosure box is initially open or closed. This property does not control the opening
   * and closing of the Accordion and should not be used in client reactivity.
   */
  open: boolean;

  /**
   * This property names multiple Accordion molecules and allows for an exclusive expansion behavior,
   * where opening an Accordion the one that is open and has the same name. This functionality is native
   * to HTML and does not require client reactivity to function.
   */
  name: string;

  /**
   * The content that will be shown/hidden in the disclosure box
   */
  children: ComponentChildren;
}

/** Default properties of the `Accordion` molecule. */
const d: iAccordion = {
  summary: '',
  name: '',
  open: false,
  children: undefined,
};

// =====================================================================================================
/**
 * A a visual container for content segments that typically expands and collapses vertically, one at a
 * time. Often used for FAQs, information sections, settings/preferences, or any situation where
 * presenting information in a manageable, space-saving way is desired.
 *
 * @see {@linkcode iAccordion}
 *
 * @todo [DOC] Mention the relationship this molecule has with the Details atoms.
 * @todo [TST] Make sure the component is keyboard accessible.
 * @todo [DEV] Manage appropriate aria roles for the parts of this molecule.
 * @todo [DEV] Implement additional visual hierarchies in the component's design.
 * @todo [DEV] Add simple CSS animations that improve the feeling of use.
 *
 * @example
 * ```ts
 * import { Accordion } from 'lunchbox/molecules';
 *
 * <Accordion summary='Click me'>
 *   <p>Hello</p>
 * </Accordion>
 * ```
 */
export default function (props: Partial<iAccordion>): JSX.Element {
  const p = apDef(d, props);

  return (
    <Details.Container open={p.open} name={p.name}>
      <Details.Summary>{p.summary}</Details.Summary>
      {p.children}
    </Details.Container>
  );
}
