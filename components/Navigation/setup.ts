////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Navigation />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Navigation />` component. */
export type iNavigation = iComponent & {
  fwd: Partial<{
    container: iFwd<HTMLDivElement>;
    panel: Partial<iPanel>;
  }>;
};

/** Default values of the `<Navigation />` component's props. */
const defaults: iNavigation = {
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Navigation />` component. */
export default (props: Partial<iNavigation>) => {
  const p = apDef<iNavigation>(defaults, props);

  const classes = part({
    navigation: o('navigation', { ...p }),
    container: o([styles, 'navigation__container'], { ...p.fwd.container }),
    panel: o('', { ...p.fwd.panel }),
  });

  delete p.class;
  return { c: classes, ...p };
};
