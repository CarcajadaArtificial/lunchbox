//   _____        _     _                  ___      _
//  |_   _|____ _| |_  /_\  _ _ ___ __ _  / __| ___| |_ _  _ _ __
//    | |/ -_) \ /  _|/ _ \| '_/ -_) _` | \__ \/ -_)  _| || | '_ \
//    |_|\___/_\_\\__/_/ \_\_| \___\__,_| |___/\___|\__|\_,_| .__/
//                                                          |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<TextArea />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles, transition } from '../../src/styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<TextArea />` component.
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
 * `noResize` (boolean):
 *    If true, adds a `resize-none` css style fully preventing resizing.
 */
export type iTextArea = iComponent<HTMLTextAreaElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  noResize: boolean;
  fwd: Partial<{
    text: iFwd<HTMLSpanElement>;
    label: iFwd<HTMLLabelElement>;
    error: iFwd<HTMLSpanElement>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<TextArea />` component's props. */
const defaults: iTextArea = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  noResize: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<TextArea />` component. */
export default (props: Partial<iTextArea>) => {
  const p = applyDefaults<iTextArea>(defaults, props);

  const { text, label, error, required, container } = p.fwd;

  const classes = partializeClasses({
    input: opt(
      cn(
        'input__abstract',
        transition.interaction.outline,
        p.noResize ? 'resize-none' : null,
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
