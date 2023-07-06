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

export enum LAYOUT_TYPES {
  FULL = 'full',
  CENTER = 'center',
  FOCUS = 'focus',
  HALVES = 'halves',
  THIRDS = 'thirds',
  QUARTERS = 'quarters',
  RIGHT = 'right',
  LEFT = 'left',
}

export enum LAYOUT_MARGINS {
  FULL = 'full',
  SINGLE = 'single',
  NONE = 'none',
}

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

export enum PAGE_THEME {
  NEWSPAPER = 'newspaper',
  CANDYLAND = 'candyland',
  DUSTHORIZON = 'dusthorizon',
  TEST = 'test',
}
