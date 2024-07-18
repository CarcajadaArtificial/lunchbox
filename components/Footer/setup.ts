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
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';
import { iLink } from '../Link/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Footer />` component. */
export type iFooter = Omit<iComponent, 'layout'> & {
  layout: LayoutTypes;
  madeWithFresh: boolean;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    badge_link: Partial<iLink>;
    badge_light: iFwd<HTMLImageElement>;
    badge_dark: iFwd<HTMLImageElement>;
  }>;
};

/** These are the default values of the `<Footer />` component's props. */
const defaults: iFooter = {
  layout: 'default',
  madeWithFresh: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Footer />` component. */
export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children) ? props.children : [props.children]
    : [];

  const p = apDef<iFooter>(defaults, props);

  const classes = part({
    footer: o('footer', { ...p }),
    layout: o('', { ...p.fwd.layout }),
    panel: o(styles, { ...p.fwd.panel }),
    gradient: o('', { ...p.fwd.panel }),
    badge_link: o('', { ...p.fwd.badge_link }),
    badge_light: o(
      ['footer__fresh-badge', 'footer__fresh-badge--light'],
      { ...p.fwd.badge_light },
    ),
    badge_dark: o(
      ['footer__fresh-badge', 'footer__fresh-badge--dark'],
      { ...p.fwd.badge_dark },
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
