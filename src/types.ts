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
 * This is a utility type that contains properties that all components must have.
 * [See more](https://deno.land/x/lunchbox#configure-anything-easily)
 */
export type GenericComponent<T> = {
  /**
   * Short for "Forwarded Reference". This prop allows the component to receive a preact reference
   * that points to the protagonist HTMLElement in the component.
   */
  fref?: Ref<T>;
  /** This prop removes the default styles for the component. */
  nostyle?: boolean;
  /** This prop removes the default styles and all class names for the component. */
  nostyleAll?: boolean;
};

/**
 * This type is used for standarizing all components. By design every component must have a protagonic
 * HTMLElement that inherits its attributes, the GenericComponent properties, Aria atributes, and Event
 * Handlers.
 */
export type iComponent<T extends EventTarget = HTMLElement> =
  & iElement<T>
  & GenericComponent<T>;

/**
 * This type is a shorthand for an extension of `JSX.HTMLAttributes<T>`, `Partial<ARIAMixin>`, and
 * `Partial<GlobalEventHandlers>`.
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
 * This type is a shorthand of `Record<string | number | symbol, never>` that
 * `deno-lint(ban-types) recommends as the correct way to express the type of an empty object.`.
 */
export type EmptyObject = Record<string | number | symbol, never>;
