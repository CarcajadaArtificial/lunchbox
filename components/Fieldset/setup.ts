//   ___ _     _    _         _     ___      _
//  | __(_)___| |__| |___ ___| |_  / __| ___| |_ _  _ _ __
//  | _|| / -_) / _` (_-</ -_)  _| \__ \/ -_)  _| || | '_ \
//  |_| |_\___|_\__,_/__/\___|\__| |___/\___|\__|\_,_| .__/
//                                                   |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Fieldset />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import type { iInput } from '../Input/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Fieldset />` component. */
export type iFieldset = iComponent<HTMLFieldSetElement> & {
  allowMultiple: boolean;
  values: string[];
  selectedValues: string[];
  legend: string;
  maxWidth: boolean;
  fwd: Partial<{
    legend: iFwd<HTMLLegendElement>;
    container: iFwd<HTMLDivElement>;
    input: Partial<iInput>;
  }>;
};

/** Default values of the `<Fieldset />` component's props. */
const defaults: iFieldset = {
  allowMultiple: false,
  values: [],
  selectedValues: [],
  legend: '',
  maxWidth: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Fieldset />` component. */
export default (props: Partial<iFieldset>) => {
  const p = apDef<iFieldset>(defaults, props);

  const classes = part({
    container: o([
      'fieldset__container',
      p.maxWidth ? 'fieldset--max-width' : null,
      styles,
    ], { ...p.fwd.container }),
    fieldset: o('fieldset', { ...p }),
    legend: o('fieldset__legend', { ...p.fwd.legend }),
    input: o('fieldset__input-container', { ...p.fwd.input }),
  });

  delete p.class;
  return { c: classes, ...p };
};
