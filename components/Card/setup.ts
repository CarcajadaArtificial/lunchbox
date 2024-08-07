//    ___             _           _
//   / __|__ _ _ _ __| |  ___ ___| |_ _  _ _ __
//  | (__/ _` | '_/ _` | (_-</ -_)  _| || | '_ \
//   \___\__,_|_| \__,_| /__/\___|\__|\_,_| .__/
//                                        |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Card />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { styles } from './styles.ts';
import { iPanel } from '../Panel/setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Card />` component. */
export type iCard = iComponent<HTMLDivElement> & {
  imageUrl: string;
  fwd: Partial<{
    panel: Partial<iPanel>;
    image: iFwd<HTMLDivElement>;
  }>;
};

/** These are the default values of the `<Card />` component's props. */
const defaults: iCard = {
  imageUrl: '',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Card />` component. */
export default (props: Partial<iCard>) => {
  const p = apDef<iCard>(defaults, props);

  const classes = part({
    card: o([styles, 'card'], { ...p }),
    image: o('card__image', { ...p.fwd.image }),
    panel: o('card__panel', { ...p.fwd.panel }),
  });

  delete p.class;
  return { c: classes, ...p };
};
