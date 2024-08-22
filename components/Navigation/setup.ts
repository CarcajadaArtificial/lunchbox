//   _  _          _           _   _            ___      _
//  | \| |__ ___ _(_)__ _ __ _| |_(_)___ _ _   / __| ___| |_ _  _ _ __
//  | .` / _` \ V / / _` / _` |  _| / _ \ ' \  \__ \/ -_)  _| || | '_ \
//  |_|\_\__,_|\_/|_\__, \__,_|\__|_\___/_||_| |___/\___|\__|\_,_| .__/
//                  |___/                                        |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Navigation />` component.
 *
 * @module
 */
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Navigation />` component. */
export type iNavigation = iComponent & {
  fwd: Partial<iNavigationFwd>;
};

type iNavigationFwd = {
  container: iFwd<HTMLDivElement>;
  panel: Partial<iPanel>;
};

/** Default values of the `<Navigation />` component's props. */
const defaults: iNavigation = {
  fwd: {
    container: {},
    panel: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Navigation />` component. */
export default (props: Partial<iNavigation>) => {
  const p = apDef<iNavigation>(defaults, props);

  p.class = o('navigation', { ...p });
  p.fwd = forward({
    container: [styles, 'navigation__container'],
    panel: '',
  }, p.fwd);

  return p;
};
