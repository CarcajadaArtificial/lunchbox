//   ___                  _           ___      _
//  | _ \_____ _____ __ _| |___ _ _  / __| ___| |_ _  _ _ __
//  |   / -_) V / -_) _` | / -_) '_| \__ \/ -_)  _| || | '_ \
//  |_|_\___|\_/\___\__,_|_\___|_|   |___/\___|\__|\_,_| .__/
//                                                     |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Revealer />` island.
 *
 * @module
 */
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import Link from '../../components/Link/index.tsx';
import { ComponentChild } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Revealer />` island. */
export type iRevealer = iComponent<HTMLDivElement> & {
  actuator: ComponentChild;
  fwd: Partial<iRevealerFwd>;
};

type iRevealerFwd = {
  revelation: iFwd<HTMLDivElement>;
};

/** These are the default values of the `<Revealer />` island's props. */
const defaults: iRevealer = {
  actuator: Link({ children: 'Read more' }),
  fwd: {
    revelation: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Revealer />` island. */
export default (props: Partial<iRevealer>) => {
  const p = apDef<iRevealer>(defaults, props);

  p.class = o('revealer', { ...p });

  p.fwd = forward({
    revelation: 'revealer__revelation',
  }, p.fwd);

  return p;
};
