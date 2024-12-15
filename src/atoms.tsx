import { JSX, Ref } from 'preact';
import { cn } from '../deps.ts';
import { KATEX_CSS } from 'jsr:@deno/gfm@^0.10.0';

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
    txt_15: 'text-brand-hc-15 dark:text-d-brand-hc-15',
    bg: 'bg-brand-lc dark:bg-d-brand-lc',
    bg_60: 'bg-brand-lc-60 dark:bg-d-brand-lc-60',
    bg_45: 'bg-brand-lc-45 dark:bg-d-brand-lc-45',
    bg_30: 'bg-brand-lc-30 dark:bg-d-brand-lc-30',
  },

  error: {
    txt: 'text-error-hc dark:text-error-d-hc',
    bg: 'bg-error-lc dark:bg-error-d-lc',
    bg_50: 'bg-error-lc-50 dark:bg-error-d-lc-50',
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

export const area = cn(
  clr.panel.bg,
  'py-triple',
);

export const layout = cn(
  'grid',
  'grid-cols-6 md:grid-cols-12 lg:grid-cols-lg',
  'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
  'w-auto lg:min-w-min',
  'px-[0.8503100088rem] md:px-[calc(23.13871222%-134.488008342px)] lg:px-auto',
);

export const focus = cn(
  clr.neutral.outline,
  'focus:outline-1',
  'outline-offset-2',
);

export const btn = cn(
  'px-three-quarters py-quarter',
  'rounded',
);

export const required = cn(
  'after:content-["*"] after:font-mono',
  'after:text-error-hc, dark:after:text-d-error-hc',
  'after:ml-quarter',
);

export type iAtom<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>
  & {
    ref?: Ref<T>;
  };

/** */
export const Text = {
  /** */
  Display: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'font-heading',
        'text-display',
        'font-bold',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** */
  Title: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'font-heading',
        'text-title',
        'font-bold',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** */
  Head: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'font-heading',
        'text-head',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** */
  Subhead: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('txt-subhead', p.class)} />
  ),

  /** */
  Base: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('txt-base', p.class)} />
  ),

  /** */
  Small: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('txt-small', p.class)} />
  ),
};

/** */
export const Page = {
  /** */
  Body: (p: iAtom<HTMLBodyElement>) => (
    <body
      {...p}
      class={cn(
        'font-base',
        'txt-base',
        clr.panel.bg,
        clr.neutral.txt,
        p.class,
      )}
    />
  ),

  /** */
  Main: (p: iAtom) => (
    <main
      {...p}
      class={cn(
        clr.page.bg,
        layout,
        'py-triple',
        'w-full',
        p.class,
      )}
    />
  ),

  /** */
  Header: (p: iAtom) => (
    <header
      {...p}
      class={cn(
        area,
        layout,
        'min-h-banner',
        p.class,
      )}
    />
  ),

  /** */
  Footer: (p: iAtom) => (
    <footer
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  ),
};

/** */
export const Button = {
  /** */
  Brand: (p: iAtom<HTMLButtonElement>) => (
    <button
      {...p}
      class={cn(
        clr.brand.bg_45,
        'hocus:bg-brand-lc-60 dark:hocus:bg-d-brand-lc-60',
        btn,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Page: (p: iAtom<HTMLButtonElement>) => (
    <button
      {...p}
      class={cn(
        clr.page.bg,
        'hocus:bg-panel-35 dark:hocus:bg-d-panel-35',
        btn,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Panel: (p: iAtom<HTMLButtonElement>) => (
    <button
      {...p}
      class={cn(
        clr.panel.bg,
        'hocus:bg-panel-50 dark:hocus:bg-d-panel-50',
        btn,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Error: (p: iAtom<HTMLButtonElement>) => (
    <button
      {...p}
      class={cn(
        clr.error.bg,
        'hocus:bg-error-lc-50 dark:hocus:bg-d-error-lc-50',
        btn,
        focus,
        p.class,
      )}
    />
  ),
};

/** */
export const List = {
  /** */
  Unordered: (p: iAtom<HTMLUListElement>) => (
    <ul
      {...p}
      class={cn(
        'list-disc',
        'ml-single my-quarter',
        p.class,
      )}
    />
  ),

  /** */
  Ordered: (p: iAtom<HTMLUListElement>) => (
    <ul
      {...p}
      class={cn(
        'list-decimal',
        'ml-single my-quarter',
        p.class,
      )}
    />
  ),
};

/** */
export const Code = {
  /** */
  Content: (p: iAtom) => (
    <code
      {...p}
      class={cn(
        clr.brand.txt,
        'leading-[calc(100%-1px)]',
        p.class,
      )}
    />
  ),

  /** */
  Inline: (p: iAtom<HTMLDivElement>) => (
    <div
      {...p}
      class={cn(
        clr.panel.bg_35,
        'inline',
        'pt-[3px] pb-[1px] px-[0.5ch]',
        'rounded',
        p.class,
      )}
    />
  ),
  // Block: (p:  iAtom<HTMLDivElement>) => <div class={s.code.block} {...p} />
};

/** */
export const Input = {
  /** */
  Field: (p: iAtom<HTMLInputElement>) => (
    <input
      {...p}
      class={cn(
        'rounded',
        'px-half py-px',
        clr.panel.bg_50,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Label: (p: iAtom<HTMLLabelElement>) => (
    <label
      {...p}
      class={cn('w-full flex', p.class)}
    />
  ),

  /** */
  Container: (p: iAtom<HTMLDivElement>) => (
    <div
      {...p}
      class={cn('mb-half', p.class)}
    />
  ),

  /** */
  Text: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'pl-half break-all',
        p.class,
      )}
    />
  ),

  /** */
  Error: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(clr.error.txt, 'pl-half', p.class)}
    />
  ),

  /** */
  Required: (p: iAtom<HTMLSpanElement>) => (
    <span
      title={'Required'}
      {...p}
      class={cn(
        clr.error.txt,
        'font-mono',
        'pl-quarter',
        p.class,
      )}
    >
      {p.children ? p.children : '*'}
    </span>
  ),

  /** */
  Radio: (p: iAtom<HTMLInputElement>) => (
    <input
      type='radio'
      {...p}
      class={cn(
        'rounded-full',
        'h-single w-single',
        'checked:before:content-["●"]',
        'grid place-content-center',
        clr.brand.bg_30,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Fieldset: (p: iAtom<HTMLFieldSetElement>) => (
    <fieldset
      {...p}
      class={cn(
        'px-half pb-half pt-quarter mb-half',
        clr.panel.bg_50,
        p.class,
      )}
    />
  ),

  /** */
  Legend: (p: iAtom<HTMLLegendElement>) => (
    <legend
      {...p}
      class={cn(p.class)}
    />
  ),

  /** */
  Check: (p: iAtom<HTMLInputElement>) => (
    <input
      type='checkbox'
      {...p}
      class={cn(
        'rounded',
        'h-single w-single',
        'checked:before:content-["✓"]',
        'grid place-content-center',
        clr.brand.bg_30,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Textarea: (p: iAtom<HTMLTextAreaElement>) => (
    <textarea
      {...p}
      class={cn(
        'rounded',
        'px-half py-px',
        clr.panel.bg_50,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Select: (p: iAtom<HTMLSelectElement>) => (
    <select
      {...p}
      class={cn(
        'rounded',
        'px-half py-px',
        'h-one-and-half',
        clr.panel.bg_50,
        focus,
        p.class,
      )}
    />
  ),

  /** */
  Submit: (p: iAtom<HTMLInputElement>) => (
    <input
      type='submit'
      {...p}
      class={cn(
        clr.brand.bg_45,
        'hocus:bg-brand-lc-60 dark:hocus:bg-d-brand-lc-60',
        'mt-half mx-auto',
        btn,
        focus,
        p.class,
      )}
    />
  ),
};

/** */
export const Aside = {
  Sticky: (p: iAtom) => (
    <aside
      {...p}
      class={cn(
        'sticky',
        'top-triple',
        p.class,
      )}
    />
  ),
};

/** */
export const Nav = {
  Bar: (p: iAtom) => (
    <nav
      {...p}
      class={cn(
        'sticky',
        'top-0',
        'py-quarter',
        'z-[16]',
        clr.panel.bg,
        layout,
        p.class,
      )}
    />
  ),
};

/** */
export const Separator = (p: iAtom<HTMLHRElement>) => (
  <hr
    class={cn(
      clr.neutral.border,
      'w-full',
      'mt-one-and-half',
      'h-one-and-half',
    )}
    {...p}
  />
);

/** */
export const Link = (p: iAtom<HTMLAnchorElement>) => (
  <a
    class={cn(
      clr.neutral.txt,
      'hocus:text-brand-hc dark:hocus:text-d-brand-hc',
      'underline',
      'cursor-pointer',
      'rounded',
      focus,
    )}
    {...p}
  />
);

/** */
export const Kbd = (p: iAtom) => (
  <kbd
    {...p}
    class={cn(
      clr.page.bg_50,
      clr.neutral.border_25,
      'txt-small',
      'relative bottom-eighth',
      'py-quarter px-third',
      'border-b-[1px]',
      'rounded',
    )}
  />
);

/** */
export const Markdown = (p: iAtom<HTMLDivElement>) => (
  <div
    {...p}
    class={cn(
      'prose dark:prose-invert',
      'prose-h1:font-heading prose-h1:text-title prose-h1:mb-one-and-half',
      'prose-h2:font-heading prose-h2:text-head prose-h2:mb-single prose-h2:mt-triple',
      'prose-h3:text-subhead prose-h3:mb-half prose-h3:mt-one-and-half',
      'prose-a:has-[.anchor]:*:hidden',
      'prose-a:outline-neutral prose-a:dark:outline-d-neutral prose-a:outline-offset-2 prose-a:inline-block',
      'prose-p:mb-half',
      'prose-pre:my-half',
      'prose-li:my-quarter',
      'prose-ul:mb-half prose-ol:mb-half',
      'prose-tr:grid md:prose-tr:table-row',
      'prose-hr:my-double',
      'prose-td:py-eighth prose-td:px-half prose-th:py-eighth prose-th:px-half',
      'prose-img:my-0 prose-img:text-center prose-img:mx-auto',
      'prose-figure:my-single prose-figure:text-center',
      'prose-figcaption:mt-quarter prose-figcaption:text-center',
      p.class,
    )}
  />
);

/** */
export const KatexStyles = (p: iAtom<HTMLStyleElement>) => (
  <style {...p}>{KATEX_CSS}</style>
);
