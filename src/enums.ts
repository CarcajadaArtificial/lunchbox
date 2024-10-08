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

export const ICON_SIZES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as const;

export type IconSizes = (typeof ICON_SIZES)[number];

export const ICON_COLORS = [
  'personality',
  'base',
  'error',
  'subtle',
] as const;

export type IconColors = (typeof ICON_COLORS)[number];

export const MODULE_SIZES = [
  'none',
  'full',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
] as const;

export type ModuleSizes = WithDefault<(typeof MODULE_SIZES)[number]>;

export const TEXT_TYPES = [
  'display',
  'title',
  'heading',
  'subheading',
  'paragraph',
  'small',
] as const;

export type TextTypes = (typeof TEXT_TYPES)[number];

/** @todo Write documentation */
export const BUTTON_TYPES = [
  'disabled',
  'error',
  'panel',
  'transparent',
] as const;

/** @todo Write documentation */
export type ButtonTypes = WithDefault<(typeof BUTTON_TYPES)[number]>;

export const BUTTON_PADDINGS = [
  'large',
  'compact',
] as const;

/** @todo Write documentation */
export type ButtonPaddings = WithDefault<(typeof BUTTON_PADDINGS)[number]>;

export const PATTERN_TYPES = [
  'cloud',
  'zigzag',
  'wave',
] as const;

export type PatternTypes = WithDefault<(typeof PATTERN_TYPES)[number]>;

export type GRADIENT_PATTERNS = 'cloud' | 'zigzag' | 'wave';

export type MENU_POSITIONS =
  | 'static'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

/** @todo Write documentation */
export type WithDefault<T> = T | 'default';
