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
import { o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Separator />` component. */
export type iSeparator = iComponent<HTMLHRElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Separator />` component. */
export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = part({
    separator: o(styles, { ...p }),
  });

  delete p.class;
  return { c: classes, ...p };
};
