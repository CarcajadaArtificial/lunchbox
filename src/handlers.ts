import { StateUpdater } from 'preact/hooks';

/**
 * This function contains the basic needs for a `<Chiplist/>` component's state. This handler is made for the `onRemove` property.
 *
 * @param {Event} ev
 *  The event triggered by the mouse or keyboard on the `remove_button` in the `<Chip/>` component.
 *
 * @param {string[]} values
 *  The list of values that make up the chiplist.
 *
 * @param {StateUpdater<string[]>} setValues
 *  The state updater function for the list of values.
 */
export const removeChiplistValue = (
  ev: Event,
  values: string[],
  setValues: StateUpdater<string[]>,
): void => {
  const target = ev.target as HTMLButtonElement;
  const chipValue = (target.previousSibling as HTMLElement).innerHTML;
  setValues(values.filter((value) => value !== chipValue));
};

export const certainKeyPressed = (
  ev: Event,
  keys: string[],
  cb: (ev: Event) => void,
) => {
  if (keys.includes((ev as KeyboardEvent).key)) {
    cb(ev);
  }
};
