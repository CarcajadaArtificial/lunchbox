//   ___                  _           ___      _
//  | _ \_____ _____ __ _| |___ _ _  / __| ___| |_ _  _ _ __
//  |   / -_) V / -_) _` | / -_) '_| \__ \/ -_)  _| || | '_ \
//  |_|_\___|\_/\___\__,_|_\___|_|   |___/\___|\__|\_,_| .__/
//                                                     |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type definitions, default values, and setup function
 * for the `<Revealer />` island component.
 *
 * @module RevealerSetup
 */

import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import Link from '../../components/Link/index.tsx';
import { ComponentChild } from 'preact';

/**
 * Properties of the `<Revealer />` island.

 * @typedef {Object} iRevealer
 * @property {ComponentChild} actuator - The actuator element that triggers the reveal.
 * @property {Partial<iRevealerFwd>} fwd - Forwarded ref properties.
 * @property {...iComponent<HTMLDivElement>} [otherProps] - Additional properties inherited from iComponent.
 */
export type iRevealer = iComponent<HTMLDivElement> & {
  actuator: ComponentChild;
  fwd: Partial<iRevealerFwd>;
};

/**
 * Forwarded ref properties for the `<Revealer />` island.
 *
 * @typedef {Object} iRevealerFwd
 * @property {iFwd<HTMLDivElement>} revelation - Forwarded ref for the revelation element.
 */
type iRevealerFwd = {
  revelation: iFwd<HTMLDivElement>;
};

/** Default values for the `<Revealer />` island's props. */
const defaults: iRevealer = {
  actuator: Link({ children: 'Read more' }),
  fwd: {
    revelation: {},
  },
};

/**
 * Setup function for the `<Revealer />` island.
 *
 * @param {Partial<iRevealer>} props - The properties passed to the component.
 * @returns {iRevealer} The processed properties with defaults applied.
 */
export default function setup(props: Partial<iRevealer>): iRevealer {
  const p = apDef<iRevealer>(defaults, props);

  p.class = o('revealer', { ...p });

  p.fwd = forward({ revelation: 'revealer__revelation' }, p.fwd);

  return p;
}
