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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Input />` component.
 *
 * `label` (string):
 *    This property will add a `<Text />` component inside the `<label/>` element and links it to the
 *    by nesting it inside the label as well.
 *
 * `error` (string | null):
 *    This string creates a standarized error message linked individually to the input component.
 *
 * `maxWidth` (boolean):
 *    If true, overrides the default max width and makes it adjust to the parent container's width.
 */
export type iInput = iComponent<HTMLInputElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  fwd: Partial<{
    text: Partial<iText>;
    label: iFwd<HTMLLabelElement>;
    error: Partial<iText>;
    required: Partial<iFwd>;
    container: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<Input />` component's props. */
const defaults: iInput = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Input />` component. */
export default (props: Partial<iInput>) => {
  const p = applyDefaults<iInput>(defaults, props);

  const { text, label, error, required, container } = p.fwd;

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
    label: opt('input__label', label?.class, label?.nostyle || p.nostyleAll),
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
        p.type === undefined
          ? 'input--box'
          : ['button', 'image', 'reset', 'submit'].includes(p.type)
          ? 'input--button'
          : ['radio', 'checkbox'].includes(p.type)
          ? 'input--bool'
          : ['datetime-local', 'date', 'month', 'time', 'week'].includes(p.type)
          ? 'input--box input--date'
          : p.type === 'range'
          ? 'input--range'
          : p.type === 'color'
          ? 'input--color'
          : p.type === 'file'
          ? 'input--file'
          : 'input--box',
        p.maxWidth ? 'input--max-width' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
