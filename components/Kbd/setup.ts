//   _  ___        _   ___      _
//  | |/ / |__  __| | / __| ___| |_ _  _ _ __
//  | ' <| '_ \/ _` | \__ \/ -_)  _| || | '_ \
//  |_|\_\_.__/\__,_| |___/\___|\__|\_,_| .__/
//                                      |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Kbd />` component.
 *
 * @module
 */
import { o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Kbd />` component. */
export type iKbd = iComponent;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Kbd />` component. */
export default (props: Partial<iKbd>) => {
  props.class = o([styles, 'kbd'], { ...props });

  return props;
};
