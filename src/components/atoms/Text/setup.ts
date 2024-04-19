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
import { TextTypes } from '../../../enums.ts';
import { iComponent } from '../../../types.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Button />` component. */
export type iText = iComponent<HTMLSpanElement> & {
  type: TextTypes;
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
