//   ___      _        _     ___      _
//  / __| ___| |___ __| |_  / __| ___| |_ _  _ _ __
//  \__ \/ -_) / -_) _|  _| \__ \/ -_)  _| || | '_ \
//  |___/\___|_\___\__|\__| |___/\___|\__|\_,_| .__/
//                                            |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Select />` component.
 *
 * @module
 */
import { ComponentChild } from 'preact';
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles, transition } from '../../src/styles.ts';
import { styles } from './styles.ts';
import { iText } from '../Text/setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This type simplifies the usage of `<option/>` elements inside the component. There are three degrees
 * of fineness of configuration:
 * - **string**: Appends a `<option value={string}>{string}</option>` element.
 * - **value/name pair**: Appends a `<option value={value}>{name}</option>` element.
 * - **`<option/>` element**: Appends the element as it is.
 */
export type iOption =
  | string
  | {
    value: string;
    name: string;
  }
  | iComponent<HTMLOptionElement>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Select />` component. */
export type iSelect = iComponent<HTMLSelectElement> & {
  label: string;
  error: string | null;
  placeholder: string;
  maxWidth: boolean;
  options: iOption[] | [];
  fieldIcon: ComponentChild | null;
  fwd: Partial<iSelectFwd>;
};

type iSelectFwd = {
  text: Partial<iText>;
  label: iFwd<HTMLLabelElement>;
  error: Partial<iText>;
  required: iFwd;
  container: iFwd<HTMLDivElement>;
  option: iFwd<HTMLOptionElement>;
  iconContainer: iFwd<HTMLDivElement>;
};

/** Default values of the `<Select />` component's props. */
const defaults: iSelect = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  placeholder: '',
  fieldIcon: null,
  options: [],
  fwd: {
    text: {
      noMargins: true,
    },
    label: {},
    error: {
      noMargins: true,
      inheritColor: true,
      type: 'small',
    },
    required: {
      title: 'Required',
    },
    container: {},
    option: {},
    iconContainer: {},
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Select />` component. */
export default (props: Partial<iSelect>) => {
  const p = apDef<iSelect>(defaults, props);

  p.class = o(
    [
      'input__abstract',
      transition.interaction.outline,
      styles,
      p.error ? 'input__error-bg' : null,
    ],
    { ...p },
  );

  p.fwd = forward({
    label: ['input__label', p.fieldIcon ? 'input--has-icon' : null],
    container: [
      inputStyles,
      'input--box',
      p.maxWidth ? 'input--max-width' : null,
    ],
    iconContainer: 'input__icon-container',
    text: 'input__text select-none',
    option: 'input__option',
    error: 'input__error-msg',
    required: 'input__required',
  }, p.fwd);

  return p;
};
