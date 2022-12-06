//   ___
//  | _ \_ _ ___ _ __ ___
//  |  _/ '_/ _ \ '_ (_-<
//  |_| |_| \___/ .__/__/
//              |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the types for all of the components in the library.
 * @module
 */

import { iExtendedElement } from './element.ts';

/**
 * Input component's type that extends the `<input>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
 */
export type iInput = iExtendedElement<HTMLInputElement> & {
  label?: string;
  error?: string;
  maxWidth: boolean;
};

/**
 * Textarea component's type that extends the `<textarea>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 */
export type iTextArea = iExtendedElement<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  maxWidth: boolean;
};

/**
 * Select component's type that extends the `<select>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 */
export type iSelect = iExtendedElement<HTMLSelectElement> & {
  label?: string;
  error?: string;
  placeholder: string;
  maxWidth: boolean;
  options:
    | {
        value: string;
        name: string;
      }[]
    | string[]
    | [];
};

/**
 * Layout component's type that extends the `<div>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 */
export type iLayout = iExtendedElement<HTMLDivElement> & {
  type:
    | 'full'
    | 'center'
    | 'focus'
    | 'halves'
    | 'thirds'
    | 'quarters'
    | 'right'
    | 'left';
  margin: 'full' | 'single' | 'none';
};

/**
 * Navigation component's type that extends the generic `HTMLElement`.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 */
export type iNavigation = iExtendedElement & {
  fixed: boolean;
};

/**
 * Page component's type that extends the `<div>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 */
export type iPage = iExtendedElement<HTMLDivElement> & {
  theme?: 'newspaper';
  darkMode?: boolean;
};

/**
 * Text component's type that extends the `<span>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)
 */
export type iText = iExtendedElement<HTMLSpanElement> & {
  type:
    | 'display'
    | 'title'
    | 'subtitle'
    | 'heading'
    | 'subheading'
    | 'paragraph'
    | 'label'
    | 'small';
  inheritColor: boolean;
};

/**
 * Link component's type that extends the `<a>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
 */
export type iLink = iExtendedElement<HTMLAnchorElement> & {
  nostyle: boolean;
};

/**
 * Footer component's type that extends the generic `HTMLElement`.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 */
export type iFooter = iExtendedElement & {
  madeWithFresh: boolean;
};

/**
 * Menu component's type that extends the `<div>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 */
export type iMenu = iExtendedElement<HTMLDivElement> & {
  isOpen: boolean;
  links: { label: string; href: string }[] | [];
};

/**
 * Card component's type that extends the `<div>` element.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 */
export type iCard = iExtendedElement<HTMLDivElement>;

/**
 * Main component's type that extends the generic `HTMLElement`.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 */
export type iMain = iExtendedElement;

/**
 * Header component's type that extends the generic `HTMLElement`.
 *
 * - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 */
export type iHeader = iExtendedElement;
