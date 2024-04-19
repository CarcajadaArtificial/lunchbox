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
/** Properties of the `<Button />` component. */
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
