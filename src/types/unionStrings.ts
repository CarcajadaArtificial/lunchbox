//   _   _      _            ___ _       _
//  | | | |_ _ (_)___ _ _   / __| |_ _ _(_)_ _  __ _ ___
//  | |_| | ' \| / _ \ ' \  \__ \  _| '_| | ' \/ _` (_-<
//   \___/|_||_|_\___/_||_| |___/\__|_| |_|_||_\__, /__/
//                                             |___/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains all types that are unions of strings.
 * @module
 */

export type ButtonTypes = 'default' | 'outline';

export type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'main'
  | 'error'
  | 'disabled';

export type LayoutTypes =
  | 'full'
  | 'center'
  | 'focus'
  | 'halves'
  | 'thirds'
  | 'quarters'
  | 'right'
  | 'left';

export type LayoutMargins = 'full' | 'single' | 'none';

export type TextTypes =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'heading'
  | 'subheading'
  | 'paragraph'
  | 'label'
  | 'small';

export type PageTheme = 'newspaper' | 'candyland' | 'dusthorizon';
