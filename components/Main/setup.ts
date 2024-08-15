//   __  __      _        ___      _
//  |  \/  |__ _(_)_ _   / __| ___| |_ _  _ _ __
//  | |\/| / _` | | ' \  \__ \/ -_)  _| || | '_ \
//  |_|  |_\__,_|_|_||_| |___/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Main />` component.
 *
 * @module
 */
import { o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Main />` component. */
export type iMain = iComponent;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Main />` component. */
export default (props: Partial<iMain>) => {
  props.class = o(styles, { ...props });

  return props;
};
