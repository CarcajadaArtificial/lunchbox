//   ___
//  | __|_ _ _  _ _ __  ___
//  | _|| ' \ || | '  \(_-<
//  |___|_||_\_,_|_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains all enum types
 * @module
 */

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

export type BUTTON_TYPES =
  | 'error'
  | 'disabled'
  | 'contrast'
  | 'panel'
  | 'invisible';

export type GRADIENT_PATTERNS = 'cloud' | 'zigzag' | 'wave';

export type MENU_POSITIONS =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';
