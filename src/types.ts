//   _____
//  |_   _|  _ _ __  ___ ___
//    | || || | '_ \/ -_|_-<
//    |_| \_, | .__/\___/__/
//        |__/|_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains auxiliary types.
 *
 * @module
 */
import { JSX, Ref } from 'preact';

/**
 * This type is used for standarizing all components. By design every component must have a protagonic
 * HTMLElement that inherits its attributes, the GenericComponent properties, Aria atributes, and Event
 * Handlers. [See more](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * `fref?` (Ref<T>):
 *    Short for "Forwarded Reference". This prop allows the component to receive a preact reference
 *    that points to the protagonist HTMLElement in the component.
 *
 * `nostyle?` (boolean):
 *    This prop removes the default styles of the component.
 *
 * `nostyleAll?` (boolean):
 *    This prop removes the default styles and the class names of all HTMLElements in the component.
 */
export type iComponent<T extends EventTarget = HTMLElement> =
  & iElement<T>
  & {
    fref?: Ref<T>;
    nostyle?: boolean;
    nostyleAll?: boolean;
  };

/**
 * This type is a shorthand for an extension of `JSX.HTMLAttributes<T>`, `Partial<ARIAMixin>`, and
 * `Partial<GlobalEventHandlers>`. It gives all attributes that come native to a particular HTMLElement.
 */
export type iElement<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>;

/**
 * This type is a shorthand that helps in forwarding props and references to a component's part. This
 * type points to every secondary HTMLElement in a component.
 *
 * `ref?` (Ref<T>):
 *    Stores a reference that points to this HTMLElement.
 *
 * `nostyle?` (boolean):
 *    If true, removes the default class name of this HTMLElement.
 */
export type iFwd<T extends EventTarget = HTMLElement> = iElement<T> & {
  ref?: Ref<T>;
  nostyle?: boolean;
};

/**
 * This type is a shorthand of `Record<string | number | symbol, never>` that
 * `deno-lint(ban-types) recommends as the correct way to express the type of an empty object.`.
 */
export type EmptyObject = Record<string | number | symbol, never>;
