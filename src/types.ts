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

import { MutableRef } from 'preact/hooks';
import { JSX, Ref } from 'preact';

export type iComponent<T extends EventTarget = HTMLElement> = iElement<T> & {
  fref?: MutableRef<T | undefined>;
  nostyle?: boolean;
  nostyleAll?: boolean;
};

/**
 * This type is a shorthand for an extension of `JSX.HTMLAttributes<T>`, `Partial<ARIAMixin>`, and ` Partial<GlobalEventHandlers>`.
 */
export type iElement<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>;
/**
 *  This type is a shorthand that helps in forwarding props and references to a component's part.
 */
export type iFwd<T extends EventTarget = HTMLElement> = iElement<T> & {
  ref?: Ref<T>;
  nostyle?: boolean;
};

/**
 * This type is a shorthand of `Record<string | number | symbol, never>` that `deno-lint(ban-types) recommends as the correct way to express the type of an empty object.`.
 */
export type EmptyObject = Record<string | number | symbol, never>;
