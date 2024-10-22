//   _  _              _ _
//  | || |__ _ _ _  __| | |___ _ _ ___
//  | __ / _` | ' \/ _` | / -_) '_(_-<
//  |_||_\__,_|_||_\__,_|_\___|_| /__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains all functions that help handle event listeners in islands.
 *
 * @module EventListeners
 */

/**
 * This function is a shorthand for the onClick and onKeyDown ("Enter" key) event listeners.
 *
 * @param cb
 *  The function that will be executed when clicking or pressing the "Enter" key.
 *
 * @returns
 *  An object containing the two event listener functions it is meant to be passed as spread attributes
 *  of an element. `<div {...handleInteraction(() => console.log("Interacted"))} />`.
 */
export const handleInteraction = (cb: null | ((ev: Event) => void)) => {
  if (cb === null) {
    return {};
  }
  return {
    onClick: (ev: MouseEvent) => cb(ev),
    onKeyDown: (ev: KeyboardEvent) => {
      if (ev.key === 'Enter') {
        cb(ev);
      }
    },
  };
};

/**
 * Determines if the current operating system is macOS.
 *
 * This utility function checks the user agent string of the browser to identify if the user is running
 * macOS. This is particularly useful for handling  `onkeydown` events where keyboard key differences
 * between Windows and macOS need to be taken into account.
 *
 * In keyboard event handling, the 'Control' key and 'Meta' key behave  differently across operating
 * systems:
 * - On Windows: 'Control' is typically used for shortcuts.
 * - On macOS: 'Command' (Meta) is used in place of 'Control' for most shortcuts.
 *
 * @example
 * ```ts
 * const handleKeyDown = (event: KeyboardEvent) => {
 *   const isMac = isMacOS();
 *   if (event.key === 'Control' && !isMac) {
 *     // Handle Control key for Windows
 *   } else if (event.key === 'Meta' && isMac) {
 *     // Handle Command key for macOS
 *   }
 * };
 * ```
 *
 * @returns {boolean}
 *  True if the current OS is macOS, false otherwise.
 */
const isMacOS = () => /Mac/.test(window.navigator.userAgent);

/**
 * A utility object to easily check if certain keys are being pressed during `onkeydown` events. This
 * object provides methods to check for common special keys like Enter, Backspace, Shift, etc., and
 * also includes methods to handle modifier keys specific to different operating systems (Windows and
 * macOS).
 *
 * Each method takes a `KeyboardEvent` object and returns a boolean indicating whether the
 * corresponding key is being pressed.
 */
export const Key = {
  /** Checks if the Enter key is pressed. */
  Enter: (ev: KeyboardEvent): boolean => ev.key === 'Enter',

  /** Checks if the Backspace key is pressed. */
  Backspace: (ev: KeyboardEvent): boolean => ev.key === 'Backspace',

  /** Checks if the Shift key is pressed. */
  Shift: (ev: KeyboardEvent): boolean => ev.key === 'Shift',

  /** Checks if the Escape key is pressed. */
  Escape: (ev: KeyboardEvent): boolean => ev.key === 'Escape',

  /** Checks if the Tab key is pressed. */
  Tab: (ev: KeyboardEvent): boolean => ev.key === 'Tab',

  /** Checks if the Control key is pressed (Windows). */
  Control: (ev: KeyboardEvent): boolean => ev.key === 'Control',

  /** Checks if the Meta key is pressed (Windows). */
  Meta: (ev: KeyboardEvent): boolean => ev.key === 'Meta',

  /** Checks if the Alt key is pressed. */
  Alt: (ev: KeyboardEvent): boolean => ev.key === 'Alt',

  /** Checks if the Spacebar is pressed. */
  Spacebar: (ev: KeyboardEvent): boolean => ev.key === ' ',

  /** Checks if the Arrow Up key is pressed. */
  Up: (ev: KeyboardEvent): boolean => ev.key === 'ArrowUp',

  /** Checks if the Arrow Down key is pressed. */
  Down: (ev: KeyboardEvent): boolean => ev.key === 'ArrowDown',

  /** Checks if the Arrow Left key is pressed. */
  Left: (ev: KeyboardEvent): boolean => ev.key === 'ArrowLeft',

  /** Checks if the Arrow Right key is pressed. */
  Right: (ev: KeyboardEvent): boolean => ev.key === 'ArrowRight',

  /**
   * Checks if the Control key (Windows) is pressed.
   *
   * @see {@link isMacOS}
   */
  CtrlWin: (ev: KeyboardEvent): boolean => ev.key === 'Control' && !isMacOS(),

  /**
   * Checks if the Windows key is pressed.
   *
   * @see {@link isMacOS}
   */
  WindowsKey: (ev: KeyboardEvent): boolean => ev.key === 'Meta' && !isMacOS(),

  /**
   * Checks if the Control key (macOS) is pressed.
   *
   * @see {@link isMacOS}
   */
  CtrlMac: (ev: KeyboardEvent): boolean => ev.key === 'Control' && isMacOS(),

  /**
   * Checks if the Command key (macOS) is pressed.
   *
   * @see {@link isMacOS}
   */
  Command: (ev: KeyboardEvent): boolean => ev.key === 'Meta' && isMacOS(),

  /**
   * Checks if either Control (Windows) or Meta (macOS) key is pressed.
   *
   * @see {@link isMacOS}
   */
  mod1: (ev: KeyboardEvent): boolean =>
    (ev.key === 'Control' && !isMacOS()) || (ev.key === 'Meta' && isMacOS()),

  /**
   * Checks if either Control (macOS) or Meta (Windows) key is pressed.
   *
   * @see {@link isMacOS}
   */
  mod2: (ev: KeyboardEvent): boolean =>
    (ev.key === 'Control' && isMacOS()) || (ev.key === 'Meta' && !isMacOS()),
};

/**
 * Interface representing a keystroke combination and its associated callback. Contains an array of
 * keys to be pressed, an array of keys to be excluded, and a callback function to be executed when the
 * keystroke combination is detected.
 */
interface iKeystroke {
  keys: ((ev: KeyboardEvent) => boolean)[];
  except: ((ev: KeyboardEvent) => boolean)[];
  cb: (ev: KeyboardEvent) => void;
}

/**
 * Function to check if a given keystroke combination is detected. It verifies that all keys in the
 * `keys` array are pressed and all keys in the `except` array are not pressed.
 *
 * @param {iKeystroke} keystroke
 *  The keystroke combination to check.
 *
 * @param {KeyboardEvent} ev
 *  The keyboard event to evaluate.
 *
 * @returns {boolean}
 *  True if the keystroke combination is detected, false otherwise.
 */
const isKeyStroked = (keystroke: iKeystroke, ev: KeyboardEvent) =>
  keystroke.keys.reduce<boolean>(
    (accumulator, currentValue) => accumulator && currentValue(ev),
    true,
  ) && keystroke.except.reduce<boolean>(
    (accumulator, currentValue) => accumulator && !currentValue(ev),
    true,
  );

/**
 * Function to handle keyboard events based on an array of keystroke combinations. It checks each
 * keystroke combination and executes the associated callback if the combination is detected.
 *
 * @param {iKeystroke[]} keystrokes
 *  An array of keystroke combinations to handle.
 *
 * @returns
 *  A function that processes keyboard events.
 */
export const handleKeyboard =
  (keystrokes: iKeystroke[]) => (ev: KeyboardEvent) =>
    keystrokes.forEach((keystroke) => {
      if (isKeyStroked(keystroke, ev)) {
        keystroke.cb(ev);
      }
    });
