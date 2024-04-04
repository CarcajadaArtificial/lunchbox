//   ___      _   _              ___      _
//  | _ )_  _| |_| |_ ___ _ _   / __| ___| |_ _  _ _ __
//  | _ \ || |  _|  _/ _ \ ' \  \__ \/ -_)  _| || | '_ \
//  |___/\_,_|\__|\__\___/_||_| |___/\___|\__|\_,_| .__/
//                                                |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../../utils.ts';
import { type ButtonTypes } from '../../../enums.ts';
import { iComponent } from '../../../types.ts';
import { transition } from '../../../styles.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Properties of the `<Button />` component.
 *
 * `maxWidth` (boolean):
 *    If true, expands the width of the button up to its maximum width.
 *
 * `compact` (boolean):
 *    If true, the button's paddings will be shorter.
 *
 * `large` (boolean):
 *    If true, the button's paddings will be larger.
 *
 * `type` (ButtonTypes):
 *    Changes the button's style depending on the property.
 *    - **disabled:** Adds `cursor: not-allowed` and makes it look unavailable.
 *    - **error:** Makes it the standard red color.
 *    - **panel:** Gives a panel background to the button. If placed on top of a `<Panel />` component,
 *       it gives a page background instead, simulating a "hole" in the panel.
 *    - **transparent:** Makes the button's background transparent.
 */
export type iButton = iComponent<HTMLButtonElement> & {
  maxWidth: boolean;
  compact: boolean;
  large: boolean;
  type: ButtonTypes;
};

/** Default values of the `<Button />` component's props. */
const defaults: iButton = {
  maxWidth: false,
  compact: false,
  large: false,
  type: 'default',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = partializeClasses({
    button: opt(
      cn(
        styles,
        transition.interaction.outline,
        p.type === 'default' ? 'button__style' : `button__style--${p.type}`,
        p.compact
          ? 'button__padding--compact'
          : p.large
          ? 'button__padding--large'
          : 'button__padding',
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
