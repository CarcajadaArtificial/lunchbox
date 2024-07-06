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
import { ComponentChild } from 'preact';
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles, transition } from '../../src/styles.ts';
import { styles } from './styles.ts';
import { iText } from '../Text/setup.ts';

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
  fieldIcon: ComponentChild | null;
  fwd: Partial<{
    text: Partial<iText>;
    label: iFwd<HTMLLabelElement>;
    error: Partial<iText>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
    iconContainer: iFwd<HTMLDivElement>;
  }>;
};

/** Default values of the `<TextArea />` component's props. */
const defaults: iTextArea = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  noResize: false,
  fieldIcon: null,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<TextArea />` component. */
export default (props: Partial<iTextArea>) => {
  const p = apDef<iTextArea>(defaults, props);

  const classes = part({
    input: o(
      [
        'input__abstract',
        transition.interaction.outline,
        styles,
        p.noResize ? 'resize-none' : null,
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
        'input--box',
        p.maxWidth ? 'input--max-width' : null,
      ],
      { ...p.fwd.container },
    ),
    text: o('input__text select-none', { ...p.fwd.text }),
    error: o('input__error-msg', { ...p.fwd.error }),
    required: o('input__required', { ...p.fwd.required }),
    iconContainer: o('input__icon-container', { ...p.fwd.iconContainer }),
  });

  delete p.class;
  return { c: classes, ...p };
};
