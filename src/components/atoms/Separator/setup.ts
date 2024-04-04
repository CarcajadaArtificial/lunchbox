//   ___                          _                     _
//  / __| ___ _ __  __ _ _ _ __ _| |_ ___ _ _   ___ ___| |_ _  _ _ __
//  \__ \/ -_) '_ \/ _` | '_/ _` |  _/ _ \ '_| (_-</ -_)  _| || | '_ \
//  |___/\___| .__/\__,_|_| \__,_|\__\___/_|   /__/\___|\__|\_,_| .__/
//           |_|                                                |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Separator />` component.
 *
 * @module
 */
import { cn, opt, partializeClasses } from '../../../utils.ts';
import { iComponent } from '../../../types.ts';
import { styles } from './styles.ts';

/** Properties of the `<Separator />` component. */
export type iSeparator = iComponent<HTMLHRElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Separator />` component. */
export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = partializeClasses({
    separator: opt(
      cn(styles, 'separator'),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
