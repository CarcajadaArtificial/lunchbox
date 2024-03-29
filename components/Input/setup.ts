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
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iText } from '../Text/setup.ts';
import { inputStyles, transition } from '../../src/styles.ts';
import Styles from './styles.ts';
import { ComponentChild } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Input />` component.
 *
 * `label` (string):
 *    This property will add a `<Text />` component inside the `<label/>` element and links it to the
 *    by nesting it inside the label as well.
 *
 * `error` (string | null):
 *    This string creates a standarized error message linked individually to the component.
 *
 * `maxWidth` (boolean):
 *    If true, overrides the default max width and makes it adjust to the parent container's width.
 *
 * `fieldIcon` (ComponentChild | null):
 *    A component that will be placed next to the input field.
 */
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
  const p = applyDefaults<iInput>(defaults, props);

  const { text, label, error, required, container, iconContainer } = p.fwd;

  p.type = typeof p.type === 'string' ? p.type : p.type?.value;

  const classes = partializeClasses({
    input: opt(
      cn(
        'input__abstract',
        transition.interaction.outline,
        p.error ? 'input__error-bg' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    text: opt('select-none', text?.class, text?.nostyle || p.nostyleAll),
    label: opt(
      cn('input__label', p.fieldIcon ? 'input--has-icon' : null),
      label?.class,
      label?.nostyle || p.nostyleAll,
    ),
    error: opt(
      'input__error-msg',
      error?.class,
      error?.nostyle || p.nostyleAll,
    ),
    required: opt(
      'input__required',
      required?.class,
      required?.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(
        inputStyles,
        Styles(p.type),
        p.maxWidth ? 'input--max-width' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
    iconContainer: opt(
      'input__icon-container',
      iconContainer?.class,
      iconContainer?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
