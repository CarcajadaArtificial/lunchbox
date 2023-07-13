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
  | 'full'
  | 'center'
  | 'focus'
  | 'halves'
  | 'thirds'
  | 'quarters'
  | 'right'
  | 'left';

export enum TEXT_TYPES {
  DISPLAY = 'display',
  TITLE = 'title',
  HEADING = 'heading',
  SUBHEADING = 'subheading',
  PARAGRAPH = 'paragraph',
  SMALL = 'small',
}

export enum BUTTON_TYPES {
  ERROR = 'error',
  DISABLED = 'disabled',
  CONTRAST = 'contrast',
  PANEL = 'panel',
  INVISIBLE = 'invisible',
}
