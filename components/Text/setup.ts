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
import { apDef, o, part } from '../../src/utils.ts';
import { TextTypes } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
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
  const p = apDef<iText>(defaults, props);

  const classes = part({
    span: o(
      [
        styles,
        `text--${p.type}`,
        p.noMargins ? 'no-margins' : null,
        p.indent ? 'indent' : null,
        p.inheritColor ? 'inherit-color' : null,
      ],
      { ...p },
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
