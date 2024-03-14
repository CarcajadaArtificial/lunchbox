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
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles, transition } from '../../src/styles.ts';

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
/**
 * Properties of the `<Select />` component.
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
 * `placeholder` (string):
 *    Creates an `<option value='' selected hidden>` HTMLElement that acts as a placeholder.
 *
 * `options` (iOption[]):
 *    The array of available options in the component.
 */
export type iSelect = iComponent<HTMLSelectElement> & {
  label: string;
  error: string | null;
  placeholder: string;
  maxWidth: boolean;
  options: iOption[] | [];
  fwd: Partial<{
    text: iFwd<HTMLSpanElement>;
    label: iFwd<HTMLLabelElement>;
    error: iFwd<HTMLSpanElement>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
    option: iFwd<HTMLOptionElement>;
  }>;
};

/** Default values of the `<Select />` component's props. */
const defaults: iSelect = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  placeholder: '',
  options: [],
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Select />` component. */
export default (props: Partial<iSelect>) => {
  const p = applyDefaults<iSelect>(defaults, props);

  const { text, label, option, error, required, container } = p.fwd;

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
    option: cn(option?.class),
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
        'input--box',
        p.maxWidth ? 'input--max-width' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
