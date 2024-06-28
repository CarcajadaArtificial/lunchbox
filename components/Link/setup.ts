//   _    _      _             _
//  | |  (_)_ _ | |__  ___ ___| |_ _  _ _ __
//  | |__| | ' \| / / (_-</ -_)  _| || | '_ \
//  |____|_|_||_|_\_\ /__/\___|\__|\_,_| .__/
//                                     |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Link />` component.
 *
 * @module
 */
import { o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Link />` component. */
export type iLink = iComponent<HTMLAnchorElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Link />` component. */
export default (props: Partial<iLink>) => {
  const p = props;

  const classes = part({
    link: o([styles, transition.interaction.outline], { ...p }),
  });

  delete p.class;
  return { c: classes, ...p };
};
