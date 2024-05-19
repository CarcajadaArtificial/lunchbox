//    ___ _    _                _
//   / __| |_ (_)_ __   ___ ___| |_ _  _ _ __
//  | (__| ' \| | '_ \ (_-</ -_)  _| || | '_ \
//   \___|_||_|_| .__/ /__/\___|\__|\_,_| .__/
//              |_|                     |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Chip />` component.
 *
 * @module
 */
import { ComponentChild } from 'preact';
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import type { iText } from '../Text/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Chip />` component. */
export type iChip = Omit<iComponent<HTMLLIElement>, 'icon'> & {
  content: string;
  icon: null | ComponentChild;
  onRemove: null | ((ev: Event) => void);
  onActivate: null | ((ev: Event) => void);
  fwd: Partial<{
    content: iText;
    remove: iFwd<HTMLButtonElement>;
    removeIcon: Omit<iFwd<SVGSVGElement>, 'size'>;
    icon: Omit<iFwd<SVGSVGElement>, 'size'>;
  }>;
};

/** These are the default values of the `<Chip />` component's props. */
const defaults: iChip = {
  content: 'test',
  icon: null,
  onRemove: null,
  onActivate: null,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Card />` component. */
export default (props: Partial<iChip>) => {
  const p = apDef<iChip>(defaults, props);

  const c = part({
    chip: o([
      styles,
      'chip',
      p.onActivate ? 'chip--activable' : null,
      p.onRemove ? 'chip--removable' : null,
      p.icon ? 'chip--has-icon' : null,
    ], { ...p }),
    remove: o([
      'chip__remove',
      transition.interaction.outline,
    ], { ...p.fwd.remove }),
    removeIcon: o('chip__remove-icon', { ...p.fwd.removeIcon }),
    content: o('chip__content', { ...p.fwd.content }),
    icon: o('chip__icon', { ...p.fwd.icon }),
  }, p.nostyleAll);

  delete p.class;
  return { c, ...p };
};
