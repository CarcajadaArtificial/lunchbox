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
import { applyDefaults, opt, partializeClasses } from '../../../utils.ts';
import { iComponent, iFwd } from '../../../types.ts';
import { styles } from './styles.ts';
import { iPanel } from '../../atoms/Panel/setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Card />` component. */
export type iCard = iComponent<HTMLDivElement> & {
  imageUrl: string;
  fwd: Partial<{
    panel: Partial<iPanel>;
    section: iFwd<HTMLDivElement>;
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
  const p = applyDefaults<iCard>(defaults, props);

  const { panel, section, image } = p.fwd;

  const classes = partializeClasses({
    card: opt(styles, p.class, p.nostyle || p.nostyleAll),
    image: opt('card__image', image?.class, image?.nostyle || p.nostyleAll),
    panel: opt('card__panel', panel?.class, panel?.nostyle || p.nostyleAll),
    section: opt(
      'card__section',
      section?.class,
      section?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
