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
import { apDef, o, part } from '../../src/utils.ts';
import { type ButtonTypes } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
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
  const p = apDef<iButton>(defaults, props);

  const classes = part({
    button: o(
      [
        styles,
        transition.interaction.outline,
        p.type === 'default' ? 'button__style' : `button__style--${p.type}`,
        p.compact
          ? 'button__padding--compact'
          : p.large
          ? 'button__padding--large'
          : 'button__padding',
      ],
      { ...p },
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
