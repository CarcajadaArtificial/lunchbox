//    ___ _    _      ___      _        _             _
//   / __| |_ (_)_ __/ __| ___| |___ __| |_   ___ ___| |_ _  _ _ __
//  | (__| ' \| | '_ \__ \/ -_) / -_) _|  _| (_-</ -_)  _| || | '_ \
//   \___|_||_|_| .__/___/\___|_\___\__|\__| /__/\___|\__|\_,_| .__/
//              |_|                                           |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<ChipSelect />` island.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import type { iChip } from '../../components/Chip/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<ChipSelect />` island. */
export type iChipSelect = iComponent<HTMLUListElement> & {
  initialChips: Partial<iChip>[];
  onChipSelected: null | ((chip: iChip, chips: iChip[]) => void);
  onChipDeselected: null | ((chip: iChip, chips: iChip[]) => void);
  fwd: Partial<{
    chip: iChip;
  }>;
};

/** These are the default values of the `<ChipSelect />` island's props. */
const defaults: iChipSelect = {
  initialChips: [],
  onChipSelected: null,
  onChipDeselected: null,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<ChipSelect />` islabd. */
export default (props: Partial<iChipSelect>) => {
  const p = apDef<iChipSelect>(defaults, props);

  const c = part({
    chipSelect: o([
      styles,
      'chip-select',
    ], { ...p }),
  }, p.nostyleAll);

  delete p.class;
  return { c, ...p };
};
