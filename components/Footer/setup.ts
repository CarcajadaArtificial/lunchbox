//   ___         _             ___      _
//  | __|__  ___| |_ ___ _ _  / __| ___| |_ _  _ _ __
//  | _/ _ \/ _ \  _/ -_) '_| \__ \/ -_)  _| || | '_ \
//  |_|\___/\___/\__\___|_|   |___/\___|\__|\_,_| .__/
//                                              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Footer />` component.
 *
 * @module
 */
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Footer />` component. */
export type iFooter = Omit<iComponent, 'layout'> & {
  fwd: Partial<iFooterFwd>;
};

type iFooterFwd = {
  panel: Partial<iPanel>;
};

/** These are the default values of the `<Footer />` component's props. */
const defaults: iFooter = {
  fwd: {
    panel: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Footer />` component. */
export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children) ? props.children : [props.children]
    : [];

  const p = apDef<iFooter>(defaults, props);

  p.class = o('footer', { ...p });
  p.fwd = forward({ panel: styles }, p.fwd);

  return p;
};
