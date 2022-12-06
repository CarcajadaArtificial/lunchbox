//   ___ _                   _
//  | __| |___ _ __  ___ _ _| |_
//  | _|| / -_) '  \/ -_) ' \  _|
//  |___|_\___|_|_|_\___|_||_\__|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains auxiliary types related to HTML Elements and their properties.
 * @module
 */

import { JSX } from 'preact';

/**
 * This type is a shorthand for an extension of `JSX.HTMLAttributes<T>`, `Partial<ARIAMixin>`, and ` Partial<GlobalEventHandlers>`.
 */
export type iExtendedElement<T extends EventTarget = HTMLElement> =
  JSX.HTMLAttributes<T> & Partial<ARIAMixin> & Partial<GlobalEventHandlers>;
