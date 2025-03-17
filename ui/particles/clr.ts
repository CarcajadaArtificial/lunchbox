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
 * @example Usage
 * ```ts
 * import clr from 'lunchbox/particles/clr.ts';
 *
 * <div class={clr.neutral.bg}>Example background</div>
 * <div class={clr.neutral.txt}>Example text</div>
 * ```
 *
 * @todo Update to new shading syntax in the tailwind v4 version.
 */
const clr: Record<string, Record<string, string>> = {
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

export default clr;
