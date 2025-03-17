//   _____
//  |_   _|  _ _ __  ___ ___
//    | || || | '_ \/ -_|_-<
//    |_| \_, | .__/\___/__/
//        |__/|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * (description)
 *
 * @module types
 */
import type { JSX } from 'preact';

// =====================================================================================================
/**
 * This type defines the extent of the parameters contained in an atom rendering function.
 */
export type iAtom<T extends EventTarget = EventTarget> = JSX.AllHTMLAttributes<
  T
>;

// =====================================================================================================
/**
 * Defines an atom rendering function.
 */
export type iAtomRender<T extends EventTarget = EventTarget> = (
  p: iAtom<T>,
) => JSX.Element;

// =====================================================================================================
/**
 * Defines a dictionary of atom rendering functions.
 */
export type iAtomRecord = Record<string, iAtomRender>;
