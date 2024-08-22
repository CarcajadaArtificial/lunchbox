//    ___ _    _      ___      _        _             _
//   / __| |_ (_)_ __/ __| ___| |___ __| |_   ___ ___| |_ _  _ _ __
//  | (__| ' \| | '_ \__ \/ -_) / -_) _|  _| (_-</ -_)  _| || | '_ \
//   \___|_||_|_| .__/___/\___|_\___\__|\__| /__/\___|\__|\_,_| .__/
//              |_|                                           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Autocomplete />` island.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iFwd } from '../../src/types.ts';
import type { iInput } from '../../components/Input/setup.ts';
import { styles } from './styles.ts';
import { relativeContainer, transition } from '../../src/styles.ts';
import { iText } from '../../components/Text/setup.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Autocomplete />` island. */
export type iAutocomplete = Partial<iInput> & {
  initialValues: string[];
  onSubmit: (inputValue: string) => void;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    relativeContainer: iFwd<HTMLDivElement>;
    menuWrapper: iFwd<HTMLDivElement>;
    menuOption: iFwd<HTMLDivElement>;
    menuOptionText: Partial<iText>;
    selectedOption: iFwd<HTMLSpanElement>;
    selectionsWrapper: iFwd<HTMLDivElement>;
  }>;
};

/** These are the default values of the `<Autocomplete />` island's props. */
const defaults: iAutocomplete = {
  initialValues: [],
  onSubmit: () => {},
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Autocomplete />` islabd. */
export default (props: Partial<iAutocomplete>) => {
  const p = apDef<iAutocomplete>(defaults, props);

  const c = part({
    autocomplete: o('autocomplete', { ...p }),
    wrapper: o([styles, 'autocomplete__wrapper'], { ...p.fwd.wrapper }),
    relativeContainer: o([
      'autocomplete__relative-container',
      relativeContainer,
    ], {
      ...p.fwd.relativeContainer,
    }),
    menuWrapper: o('autocomplete__menu-wrapper', { ...p.fwd.menuWrapper }),
    menuOption: o(
      ['autocomplete__menu-option', transition.interaction.outline],
      { ...p.fwd.menuOption },
    ),
    menuOptionText: o('autocomplete__menu-option-text', {
      ...p.fwd.menuOptionText,
    }),
    selectedOption: o('autocomplete__selected-option', {
      ...p.fwd.selectedOption,
    }),
    selectionsWrapper: o('autocomplete__selections-wrapper', {
      ...p.fwd.selectedOption,
    }),
  }, p.nostyleAll);

  delete p.class;
  return { c, ...p };
};
