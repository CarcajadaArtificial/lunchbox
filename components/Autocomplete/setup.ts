//     _       _                          _     _         ___      _
//    /_\ _  _| |_ ___  __ ___ _ __  _ __| |___| |_ ___  / __| ___| |_ _  _ _ __
//   / _ \ || |  _/ _ \/ _/ _ \ '  \| '_ \ / -_)  _/ -_) \__ \/ -_)  _| || | '_ \
//  /_/ \_\_,_|\__\___/\__\___/_|_|_| .__/_\___|\__\___| |___/\___|\__|\_,_| .__/
//                                  |_|                                    |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Autocomplete />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';

export type iAutocomplete = iComponent<HTMLDivElement> & {
  options: string[];
};

const defaults: iAutocomplete = {
  options: [],
};

export default (props: Partial<iAutocomplete>) => {
  const p = applyDefaults<iAutocomplete>(defaults, props);

  const classes = partializeClasses({});

  delete p.class;

  return { c: classes, ...p };
};
