//   ___
//  | __|_ _ _  _ _ __  ___
//  | _|| ' \ || | '  \(_-<
//  |___|_||_\_,_|_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains all "enum" types. I really prefer union strings compared to true typescript
 * enums, because they are less verbose when using them on JSX. For exmple:
 *
 *      `<div thing='foobar'>...</div>`     vs      `<div thing={ENUM_NAME.FOOBAR}>...</div>`
 *
 * This module manages arrays of string constants and string union types produced from them.
 *
 * @module
 */

export const LAYOUT_TYPES_ARRAY = [
  'empty',
  'full',
  'center',
  'focus',
  'halves',
  'thirds',
  'right',
  'left',
] as const;

export type LAYOUT_TYPES =
  | 'empty'
  | 'full'
  | 'center'
  | 'focus'
  | 'halves'
  | 'thirds'
  | 'right'
  | 'left';

export type TEXT_TYPES =
  | 'display'
  | 'title'
  | 'heading'
  | 'subheading'
  | 'paragraph'
  | 'small';

/** @todo Write documentation */
export const BUTTON_TYPES = [
  'disabled',
  'error',
  'panel',
  'transparent',
] as const;

/** @todo Write documentation */
export type ButtonTypes = WithDefault<(typeof BUTTON_TYPES)[number]>;

export type GRADIENT_PATTERNS = 'cloud' | 'zigzag' | 'wave';

export type MENU_POSITIONS =
  | 'static'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

/** @todo Write documentation */
export type WithDefault<T> = T | 'default';
