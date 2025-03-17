/**
 * This module will contain all the global utility classes of the package.
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
