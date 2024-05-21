//    ___ _    _      ___      _        _
//   / __| |_ (_)_ __/ __| ___| |___ __| |_
//  | (__| ' \| | '_ \__ \/ -_) / -_) _|  _|
//   \___|_||_|_| .__/___/\___|_\___\__|\__|
//              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### ChipSelect
 * *Organism*
 *
 * This module contains the render function for the `<ChipSelect />` island.
 *
 * @module
 */
import setup, { iChipSelect } from './setup.ts';
import Chip from '../../components/Chip/index.tsx';
import type { iChip } from '../../components/Chip/setup.ts';
import { useEffect, useState } from 'preact/hooks';

function updateChipsByIndex(
  chips: Partial<iChip>[],
  chip: Partial<iChip>,
  index: number,
) {
  const updatedChips = [...chips];
  updatedChips[index] = { ...updatedChips[index], ...chip };
  return updatedChips;
}

export default function ChipSelect(props: Partial<iChipSelect>) {
  const {
    initialChips,
    c,
    fwd,
    nostyle,
    nostyleAll,
    ...p
  } = setup(props);

  const [chips, setChips] = useState(initialChips);

  const chipInteraction = (chip: Partial<iChip>, index: number) =>
    setChips(
      updateChipsByIndex(chips, { selected: !chip.selected }, index),
    );

  return (
    <div>
      <ul class={c.chipSelect} {...p}>
        {chips.map((chip, index) => (
          <Chip
            onInteraction={() => chipInteraction(chip, index)}
            {...chip}
          />
        ))}
      </ul>
    </div>
  );
}
