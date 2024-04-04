//   _    _      _             _
//  | |  (_)_ _ | |__  ___ ___| |_ _  _ _ __
//  | |__| | ' \| / / (_-</ -_)  _| || | '_ \
//  |____|_|_||_|_\_\ /__/\___|\__|\_,_| .__/
//                                     |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { cn, opt, partializeClasses } from '../../utils.ts';
import { iComponent } from '../../types.ts';
import { transition } from '../../styles.ts';
import { styles } from './styles.ts';

/** Properties of the `<Button />` component. */
export type iLink = iComponent<HTMLAnchorElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iLink>) => {
  const p = props;

  const classes = partializeClasses({
    link: opt(
      cn(styles, transition.interaction.outline),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
