//   __  __              ___ _               ___      _
//  |  \/  |___ _ _ _  _|_ _| |_ ___ _ __   / __| ___| |_ _  _ _ __
//  | |\/| / -_) ' \ || || ||  _/ -_) '  \  \__ \/ -_)  _| || | '_ \
//  |_|  |_\___|_||_\_,_|___|\__\___|_|_|_| |___/\___|\__|\_,_| .__/
//                                                            |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<MenuItem />` component.
 *
 * @module
 */
import { iComponent } from '../../src/types.ts';
import { o } from '../../src/utils.ts';
import { styles } from './styles.ts';

export type iMenuItem = iComponent<HTMLLIElement>;

export default (props: Partial<iMenuItem>) => {
  const p = props;

  p.class = o(['menuItem', styles], { ...p });

  return p;
};
