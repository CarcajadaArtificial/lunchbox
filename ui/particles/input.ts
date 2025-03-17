import { cn } from '@vyn/cn';

/**
 * This is a dictionary of particles that represent parts of inputs that repeat accross multiple atoms
 * or molecules.
 *
 * - `required`: The standard required indicator (`*`) with a contrasting color.
 * - `invalid`: The background of an invalid input.
 * - `abstract`: An abstract particle shared in many input atoms.
 *
 * @example Usage
 * ```ts
 * import input from 'lunchbox/particles/input.ts';
 *
 * // Required input label
 * <label class={input.required}>Label text</label>
 * // Usage of the abstract particle
 * <input class={input.abstract} />
 * // Invalid input
 * <input class={input.invalid} />
 * ```
 */
const input: Record<string, string> = {
  required: cn(),
  invalid: cn(
    'invalid:bg-error-lc-50 invalid:dark:bg-d-error-lc-50',
  ),
  abstract: cn(
    'border-none',
  ),
};

export default input;
