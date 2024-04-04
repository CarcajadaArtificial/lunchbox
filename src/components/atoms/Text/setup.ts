//   _____        _             _
//  |_   _|____ _| |_   ___ ___| |_ _  _ _ __
//    | |/ -_) \ /  _| (_-</ -_)  _| || | '_ \
//    |_|\___/_\_\\__| /__/\___|\__|\_,_| .__/
//                                      |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../../utils.ts';
import { TEXT_TYPES } from '../../../enums.ts';
import { iComponent } from '../../../types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Button />` component.
 *
 * `type` (TEXT_TYPES):
 *    Changes the style of the text.
 *    - **paragraph:** The default base text.
 *    - **small:** A smaller variation of the paragraph and smallest of all the types.
 *    - **title:** The standard large heading in the document
 *    - **display:** A larger version of the title and largest of all the types. It should be used for
 *        specific aesthetic purposes, it's too large to be readable on smaller screens.
 *    - **heading:** A smaller version of the title, used for sections within it.
 *    - **subheading:** The smaller heading type, has a unique style for smaller sections within
 *        headings.
 *
 * `inheritColor` (boolean):
 *    (todo) If true, the default text color will be avoided and instead it will inherit it.
 *
 * `noMargins` (boolean):
 *    If true, removes the default margins from the text.
 *
 * `indent` (boolean):
 *    (todo) If true, adds a default indentation to the text.
 */
export type iText = iComponent<HTMLSpanElement> & {
  type: TEXT_TYPES;
  inheritColor: boolean;
  noMargins: boolean;
  indent: boolean;
};

/** Default values of the `<Button />` component's props. */
const defaults: iText = {
  type: 'paragraph',
  inheritColor: false,
  noMargins: false,
  indent: false,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iText>) => {
  const p = applyDefaults<iText>(defaults, props);

  const classes = partializeClasses({
    span: opt(
      cn(
        styles,
        `text--${p.type}`,
        p.noMargins ? 'no-margins' : null,
        p.indent ? 'indent' : null,
        p.inheritColor ? 'inherit-color' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
