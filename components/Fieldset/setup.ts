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
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Fieldset />` component. */
export type iFieldset = iComponent<HTMLFieldSetElement> & {
  legend: string;
  maxWidth: boolean;
  fwd: Partial<iFieldsetFwd>;
};

type iFieldsetFwd = {
  legend: iFwd<HTMLLegendElement>;
  container: iFwd<HTMLDivElement>;
};

/** Default values of the `<Fieldset />` component's props. */
const defaults: iFieldset = {
  legend: '',
  maxWidth: false,
  fwd: {
    legend: {},
    container: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Fieldset />` component. */
export default (props: Partial<iFieldset>) => {
  const p = apDef<iFieldset>(defaults, props);

  if (p.name === undefined || p.name === '') {
    p.name = 'undefined-fieldset';
  }

  p.class = o('fieldset', { ...p });

  p.fwd = forward({
    container: [
      'fieldset__container',
      p.maxWidth ? 'fieldset--max-width' : null,
      styles,
    ],
    legend: 'fieldset__legend',
  }, p.fwd);

  return p;
};
