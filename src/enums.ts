//   ___
//  | __|_ _ _  _ _ __  ___
//  | _|| ' \ || | '  \(_-<
//  |___|_||_\_,_|_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains all union types representing different design-related options.
 * Instead of using TypeScript enums, we prefer union strings as they are less verbose when used in JSX.
 *
 * For example:
 * ```tsx
 * <div thing="foobar" />
 * ```
 * vs
 * ```tsx
 * <div thing={ENUM_NAME.FOOBAR} />
 * ```
 *
 * This module manages arrays of string constants and their corresponding union types.
 *
 * @module
 */

/**
 * A utility type that adds a 'default' option to any given union type.
 * Useful for providing a fallback value for various UI types.
 *
 * @typeParam T - The original union type.
 */
export type WithDefault<T> = T | 'default';

/**
 * Defines the available icon sizes as a string constant array and a corresponding union type.
 * These sizes can be used to set the size of icons in the UI.
 *
 * @example Setting an icon size
 * ```ts
 * const size: IconSizes = 'sm';
 * ```
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

/**
 * A union type of available icon sizes, based on the ICON_SIZES array.
 * Represents the allowed values for icon sizes.
 *
 * @example
 * ```ts
 * const size: IconSizes = 'lg';
 * ```
 *
 * @typeParam IconSizes
 */
export type IconSizes = (typeof ICON_SIZES)[number];

/**
 * Defines the available icon colors as a string constant array and a corresponding union type.
 * These colors can be used to set the appearance of icons in the UI.
 *
 * @example Setting an icon color
 * ```ts
 * const color: IconColors = 'base';
 * ```
 *
 * @module
 */
export const ICON_COLORS = [
  'personality',
  'base',
  'error',
  'subtle',
] as const;

/**
 * A union type of available icon colors, based on the ICON_COLORS array.
 * Represents the allowed values for icon colors.
 *
 * @example
 * ```ts
 * const color: IconColors = 'personality';
 * ```
 *
 * @typeParam IconColors
 */
export type IconColors = (typeof ICON_COLORS)[number];

/**
 * Defines the available module sizes as a string constant array and a corresponding union type.
 * These sizes are used to control the layout or sizing of modules in the UI.
 *
 * @example Setting a module size
 * ```ts
 * const size: ModuleSizes = 'full';
 * ```
 *
 * @module
 */
export const MODULE_SIZES = [
  'none',
  'full',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
] as const;

/**
 * A union type of available module sizes, based on the MODULE_SIZES array.
 * Also includes a 'default' value to represent a fallback size.
 *
 * @typeParam ModuleSizes
 */
export type ModuleSizes = WithDefault<(typeof MODULE_SIZES)[number]>;

/**
 * Defines the available text types as a string constant array and a corresponding union type.
 * These types represent different styles of text, such as headings and paragraphs, for use in the UI.
 *
 * @example Setting a text type
 * ```ts
 * const textType: TextTypes = 'heading';
 * ```
 *
 * @module
 */
export const TEXT_TYPES = [
  'display',
  'title',
  'heading',
  'subheading',
  'paragraph',
  'small',
] as const;

/**
 * A union type of available text types, based on the TEXT_TYPES array.
 * Represents the allowed values for text styles in the UI.
 *
 * @typeParam TextTypes
 */
export type TextTypes = (typeof TEXT_TYPES)[number];

/**
 * Defines the available button types as a string constant array and a corresponding union type.
 * Button types specify the visual style or state of a button in the UI.
 *
 * @example Setting a button type
 * ```ts
 * const buttonType: ButtonTypes = 'panel';
 * ```
 *
 * @module
 */
export const BUTTON_TYPES = [
  'disabled',
  'error',
  'panel',
  'transparent',
] as const;

/**
 * A union type of available button types, based on the BUTTON_TYPES array.
 * Includes a 'default' option to represent a fallback state for buttons.
 *
 * @typeParam ButtonTypes
 */
export type ButtonTypes = WithDefault<(typeof BUTTON_TYPES)[number]>;

/**
 * Defines the available button paddings as a string constant array and a corresponding union type.
 * Button paddings specify how much padding is applied to a button's interior.
 *
 * @example Setting button padding
 * ```ts
 * const buttonPadding: ButtonPaddings = 'compact';
 * ```
 *
 * @module
 */
export const BUTTON_PADDINGS = [
  'large',
  'compact',
] as const;

/**
 * A union type of available button paddings, based on the BUTTON_PADDINGS array.
 * Includes a 'default' option to represent a fallback padding value.
 *
 * @typeParam ButtonPaddings
 */
export type ButtonPaddings = WithDefault<(typeof BUTTON_PADDINGS)[number]>;

/**
 * Defines the available pattern types as a string constant array and a corresponding union type.
 * Pattern types represent decorative patterns that can be applied in the UI.
 *
 * @example Setting a pattern type
 * ```ts
 * const pattern: PatternTypes = 'zigzag';
 * ```
 *
 * @module
 */
export const PATTERN_TYPES = [
  'cloud',
  'zigzag',
  'wave',
] as const;

/**
 * A union type of available pattern types, based on the PATTERN_TYPES array.
 * Includes a 'default' option to represent a fallback pattern.
 *
 * @typeParam PatternTypes
 */
export type PatternTypes = WithDefault<(typeof PATTERN_TYPES)[number]>;

/**
 * A union type representing available gradient pattern options.
 * Used to define gradient patterns in the UI.
 *
 * @example
 * ```ts
 * const gradientPattern: GRADIENT_PATTERNS = 'wave';
 * ```
 *
 * @typeParam GRADIENT_PATTERNS
 */
export type GRADIENT_PATTERNS = 'cloud' | 'zigzag' | 'wave';

/**
 * A union type representing possible positions for a menu in the UI.
 *
 * @example
 * ```ts
 * const menuPosition: MENU_POSITIONS = 'top-right';
 * ```
 *
 * @typeParam MENU_POSITIONS
 */
export type MENU_POSITIONS =
  | 'static'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';
