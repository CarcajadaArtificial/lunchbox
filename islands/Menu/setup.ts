//   __  __                ___      _
//  |  \/  |___ _ _ _  _  / __| ___| |_ _  _ _ __
//  | |\/| / -_) ' \ || | \__ \/ -_)  _| || | '_ \
//  |_|  |_\___|_||_\_,_| |___/\___|\__|\_,_| .__/
//                                          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Menu />` island.
 *
 * @module
 */
import { ComponentChild } from 'preact';
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iButton } from '../../components/Button/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Menu />` island. */
export type iMenu = iComponent<HTMLUListElement> & {
  open: boolean;
  hardToggle: boolean;
  button: ComponentChild;
  fwd: Partial<iMenuFwd>;
};

type iMenuFwd = {
  container: iFwd<HTMLDivElement>;
  floater: iFwd<HTMLDivElement>;
  button: Partial<iButton>;
  option: Partial<iButton>;
};

/** These are the default values of the `<Menu />` island's props. */
const defaults: iMenu = {
  open: false,
  button: undefined,
  hardToggle: false,
  fwd: {
    container: {},
    floater: {},
    button: {
      type: 'panel',
    },
    option: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Menu />` island. */
export default (props: Partial<iMenu>) => {
  const p = apDef<iMenu>(defaults, props);

  p.class = o('menu', { ...p });

  p.fwd = forward({
    button: 'menu__button',
    floater: 'menu__floater',
    container: ['menu__container', styles],
    option: 'menu__option',
  }, p.fwd);

  return p;
};
