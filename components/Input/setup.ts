//   ___                _     ___      _
//  |_ _|_ _  _ __ _  _| |_  / __| ___| |_ _  _ _ __
//   | || ' \| '_ \ || |  _| \__ \/ -_)  _| || | '_ \
//  |___|_||_| .__/\_,_|\__| |___/\___|\__|\_,_| .__/
//           |_|                               |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Input />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iText } from '../Text/setup.ts';
import { inputStyles, transition } from '../../src/styles.ts';
import Styles from './styles.ts';
import { ComponentChild } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Input />` component. */
export type iInput = iComponent<HTMLInputElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  fieldIcon: ComponentChild | null;
  fwd: Partial<{
    text: Partial<iText>;
    label: iFwd<HTMLLabelElement>;
    error: Partial<iText>;
    required: Partial<iFwd>;
    container: iFwd<HTMLDivElement>;
    iconContainer: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<Input />` component's props. */
const defaults: iInput = {
  label: '',
  error: null,
  fieldIcon: null,
  required: false,
  maxWidth: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Input />` component. */
export default (props: Partial<iInput>) => {
  const p = apDef<iInput>(defaults, props);

  p.type = typeof p.type === 'string' ? p.type : p.type?.value;

  const classes = part({
    input: o(
      [
        'input__abstract',
        transition.interaction.outline,
        p.error ? 'input__error-bg' : null,
      ],
      { ...p },
    ),
    label: o(
      ['input__label', p.fieldIcon ? 'input--has-icon' : null],
      { ...p.fwd.label },
    ),
    container: o(
      [
        inputStyles,
        Styles(p.type),
        p.maxWidth ? 'input--max-width' : null,
      ],
      { ...p.fwd.container },
    ),
    text: o('select-none', { ...p.fwd.text }),
    error: o('input__error-msg', { ...p.fwd.error }),
    required: o('input__required', { ...p.fwd.required }),
    iconContainer: o('input__icon-container', { ...p.fwd.iconContainer }),
  });

  delete p.class;
  return { c: classes, ...p };
};
