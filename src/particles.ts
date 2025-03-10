//   ___          _   _    _
//  | _ \__ _ _ _| |_(_)__| |___ ___
//  |  _/ _` | '_|  _| / _| / -_|_-<
//  |_| \__,_|_|  \__|_\__|_\___/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the particles for the Lunchbox UI library.
 *
 * @module
 */
import { cn } from '@vyn/cn';

// =====================================================================================================
/**
 * This is a dictionary of particles that represent color styles for text, background, border, and
 * outline. They already contain the dark mode classes, so you don't need to add `dark:` to the
 * class name.
 *
 * - `neutral`: The default for text, border, and outline. As a background it is a multi-purpose
 *   utility.
 * - `brand`: A representation of the brand's personality and identity.
 * - `error`: "Red-ish" colors errors.
 * - `page`: The default background of the page.
 * - `panel`: A background that feels as a physical section for panels.
 *
 * ```tsx
 * import { clr } from '@lunchbox/ui';
 *
 * <div class={clr.neutral.bg}>Example background</div>
 * <div class={clr.neutral.txt}>Example text</div>
 * ```
 *
 * @todo Update to new shading syntax in the new tailwind version.
 */
export const clr = {
  neutral: {
    txt: 'text-neutral dark:text-d-neutral',
    txt_10: 'text-neutral-10 dark:text-d-neutral-10',
    txt_25: 'text-neutral-25 dark:text-d-neutral-25',
    bg: 'bg-neutral dark:bg-d-neutral',
    bg_10: 'bg-neutral-10 dark:bg-d-neutral-10',
    bg_25: 'bg-neutral-25 dark:bg-d-neutral-25',
    border: 'border-neutral dark:border-d-neutral',
    border_25: 'border-neutral-25 dark:border-d-neutral-25',
    outline: 'outline-neutral dark:outline-d-neutral',
  },
  brand: {
    txt: 'text-brand-hc dark:text-d-brand-hc',
    txt_25: 'text-brand-hc-25 dark:text-d-brand-hc-25',
    txt_10: 'text-brand-hc-10 dark:text-d-brand-hc-10',
    bg: 'bg-brand-lc dark:bg-d-brand-lc',
    bg_60: 'bg-brand-lc-60 dark:bg-d-brand-lc-60',
    bg_45: 'bg-brand-lc-45 dark:bg-d-brand-lc-45',
    bg_30: 'bg-brand-lc-30 dark:bg-d-brand-lc-30',
  },
  error: {
    txt: 'text-error-hc dark:text-d-error-hc',
    bg: 'bg-error-lc dark:bg-d-error-lc',
    bg_50: 'bg-error-lc-50 dark:bg-d-error-lc-50',
  },
  page: {
    bg: 'bg-page dark:bg-d-page',
    bg_50: 'bg-page-50 dark:bg-d-page-50',
  },
  panel: {
    bg: 'bg-panel dark:bg-d-panel',
    bg_50: 'bg-panel-50 dark:bg-d-panel-50',
    bg_35: 'bg-panel-35 dark:bg-d-panel-35',
    bg_15: 'bg-panel-15 dark:bg-d-panel-15',
  },
};

// =====================================================================================================
/**
 * This is a dictionary of particles that represent parts of inputs that repeat accross multiple atoms
 * or molecules.
 *
 * - `required`: The standard required indicator (`*`) with a contrasting color.
 * - `invalid`: The background of an invalid input.
 * - `abstract`: An abstract particle shared in many input atoms.
 *
 * ```tsx
 * import { input } from '@lunchbox/ui';
 *
 * // Required input label
 * <label class={input.required}>Label text</label>
 * // Usage of the abstract particle
 * <input class={input.abstract} />
 * // Invalid input
 * <input class={input.invalid} />
 * ```
 */
export const input: Record<string, string> = {
  required: cn(),
  invalid: cn(
    'invalid:bg-error-lc-50 invalid:dark:bg-d-error-lc-50',
  ),
  abstract: cn(
    'border-none',
  ),
};

// =====================================================================================================
/**
 * This is a dictionary of particles that represent the different text sizes and line heights. These
 * are used in the @see Text atoms along with other standarized styles. In most cases, the
 * `<Text.Base/>` atom is recommended over the `txt.base` particle.
 *
 * ```tsx
 * import { txt } from '@lunchbox/ui';
 *
 * <span class={txt.base}>Base text</span>
 * ```
 */
export const txt: Record<string, string> = {
  display: 'text-[3.8146972656rem]/[4.5rem]',
  title: 'text-[3.0517578125rem]/[4.5rem]',
  head: 'text-[2.44140625rem]/[3rem]',
  subhead: 'text-[1.5625rem]/[3rem]',
  base: 'text-[1rem]/[1.5rem]',
};

// =====================================================================================================
/**
 * This particle contains the styles that are common between the `<Page.Header/>` and
 * `<Page.Footer/>` atoms.
 *
 * ```tsx
 * import { area } from '@lunchbox/ui';
 *
 * <section class={area}>...</section>
 * ```
 */
export const area: string = cn(
  clr.panel.bg,
  'py-3/1',
);

// =====================================================================================================
/**
 * This is particle contains the styles for the library's grid system container. Children of elements
 * containing this styles should use the extended tailwind `gridColumn` settings.
 *
 * ```tsx
 * import { layout } from '@lunchbox/ui';
 *
 * <div class={layout}>
 *  <div class="grid-cols-12">...</div>
 * </div>
 * ```
 */
export const layout: string = cn(
  'grid',
  'grid-cols-6 md:grid-cols-12',
  'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
  'w-auto lg:min-w-min',
  'px-[0.8503100088rem] md:px-[calc(23.13871222%-134.488008342px)] lg:px-auto',
);

// =====================================================================================================
/**
 * This particle contains the styles for any element's focus state.
 *
 * ```tsx
 * import { focus } from '@lunchbox/ui';
 *
 * <div tabIndex={0} class={focus}>{...</div>
 * ```
 */
export const focus: string = cn(
  clr.neutral.outline,
  'focus:outline-1',
  'outline-offset-2',
);

// =====================================================================================================
/**
 * This particle contains the styles that are common in button atoms.
 *
 * ```tsx
 * import { btn } from '@lunchbox/ui';
 *
 * <button class={btn}>Button</button>
 * ```
 */
export const btn: string = cn(
  'px-3/4 py-1/4',
  'rounded',
);
