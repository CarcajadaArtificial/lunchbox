//     _  _
//    /_\| |_ ___ _ __  ___
//   / _ \  _/ _ \ '  \(_-<
//  /_/ \_\__\___/_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is module manages the base of the hierarchy of the components of this library. The definition
 * of an Atom is a component made up of a single HTML element, because of this, they must be declared
 * using the type @see iAtom that links them to the properties of a single HTML element. The rendered
 * element will contain a list of tailwind classes that give the element it's style.
 *
 * Some atoms are made up of "particles" that are smaller and more abstract things. These particles
 * don't even represent an HTML element in particular. They are a list of classes that group common
 * styles among atoms. These can easily be added to classes of user-created elements that aren't an
 * atom. Additionally, particles commonly come from tailwind theme settings.
 *
 * @module
 */
import { JSX, Ref } from 'preact';
import { cn } from '@vyn/cn';
import { KATEX_CSS } from '@deno/gfm';

// =====================================================================================================
/**
 * This is a dictionary of particles that represent color styles for text, background, border, and
 * outline. They already contain the dark mode classes, so you don't need to add `dark:` to the
 * class name.
 *
 * @todo Update to new shading syntax in the new tailwind version.
 */
export const clr = {
  /** The default for text, border, and outline. As a background it is a multi-purpose utility. */
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

  /** A representation of the brand's personality and identity. */
  brand: {
    txt: 'text-brand-hc dark:text-d-brand-hc',
    txt_25: 'text-brand-hc-25 dark:text-d-brand-hc-25',
    txt_10: 'text-brand-hc-10 dark:text-d-brand-hc-10',
    bg: 'bg-brand-lc dark:bg-d-brand-lc',
    bg_60: 'bg-brand-lc-60 dark:bg-d-brand-lc-60',
    bg_45: 'bg-brand-lc-45 dark:bg-d-brand-lc-45',
    bg_30: 'bg-brand-lc-30 dark:bg-d-brand-lc-30',
  },

  /** "Red-ish" colors errors. */
  error: {
    txt: 'text-error-hc dark:text-d-error-hc',
    bg: 'bg-error-lc dark:bg-d-error-lc',
    bg_50: 'bg-error-lc-50 dark:bg-d-error-lc-50',
  },

  /** The default background of the page. */
  page: {
    bg: 'bg-page dark:bg-d-page',
    bg_50: 'bg-page-50 dark:bg-d-page-50',
  },

  /** A background that feels as a physical section for panels. */
  panel: {
    bg: 'bg-panel dark:bg-d-panel',
    bg_50: 'bg-panel-50 dark:bg-d-panel-50',
    bg_35: 'bg-panel-35 dark:bg-d-panel-35',
    bg_15: 'bg-panel-15 dark:bg-d-panel-15',
  },
};

// =====================================================================================================
/**
 * This is a dictionary of particles that represent parts of inputs that repeat accross multiple atoms.
 */
export const input = {
  /** The standard required indicator (`*`) with a contrasting color. */
  required: cn(
    'after:content-["*"] after:font-mono',
    'after:text-error-hc dark:after:text-d-error-hc',
    'after:ml-quarter',
  ),

  /** The background of an invalid input. */
  invalid: cn(
    'invalid:bg-error-lc-50 invalid:dark:bg-d-error-lc-50',
  ),

  /** The background of an invalid input. */
  error: cn(
    clr.error.bg_50,
  ),

  /** An abstract particle shared in many input atoms. */
  abstract: cn(
    'border-none',
  ),
};

// =====================================================================================================
/**
 * This particle contains the styles that are common between the `<Page.Header/>` and
 * `<Page.Footer/>` atoms.
 */
export const area = cn(
  clr.panel.bg,
  'py-triple',
);

// =====================================================================================================
/**
 * This is particle contains the styles for the library's grid system container. Children of elements
 * containing this styles should use the extended tailwind `gridColumn` settings.
 */
export const layout = cn(
  'grid',
  'grid-cols-6 md:grid-cols-12',
  'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
  'w-auto lg:min-w-min',
  'px-[0.8503100088rem] md:px-[calc(23.13871222%-134.488008342px)] lg:px-auto',
);

// =====================================================================================================
/** This particle contains the styles for any element's focus state. */
export const focus = cn(
  clr.neutral.outline,
  'focus:outline-1',
  'outline-offset-2',
);

// =====================================================================================================
/** This particle contains the styles that are common in button atoms. */
export const btn = cn(
  'px-three-quarters py-quarter',
  'rounded',
);

// =====================================================================================================
/** This type defines the extent of the parameters contained in an atom rendering function. */
export type iAtom<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>
  & {
    ref?: Ref<T>;
  };

// =====================================================================================================
/** This dictionary contains the atoms that render text. */
export const Text = {
  /** The text with the largest font size. For aesthetic or branding purposes. */
  Display: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'text-display',
        'font-bold',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** The standard text with the largest font size. sed for page titles. */
  Title: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'text-title',
        'font-bold',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** Short for "heading", this text is for section titles. */
  Head: (p: iAtom<HTMLSpanElement>) => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'text-head',
        clr.brand.txt,
        p.class,
      )}
    />
  ),

  /** Short for "subheading", this text is for sub-section titles. */
  Subhead: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('block text-subhead', p.class)} />
  ),

  /** The standard text for paragraphs, labels, and other body text. */
  Base: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('block text-base', p.class)} />
  ),

  /** The smallest text size, is slightly less accessible and can be used for subtle details. */
  Small: (p: iAtom<HTMLSpanElement>) => (
    <span {...p} class={cn('block text-small', p.class)} />
  ),
};

// =====================================================================================================
/**
 * This dictionary contains the atoms that render the page's main semantic sections.
 *
 * @todo Finish documentation
 */
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

// =====================================================================================================
/**
 * This dictionary contains the atoms that render all different button variants.
 *
 * @todo Finish documentation
 */
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

// =====================================================================================================
/** This dictionary contains the atoms that render lists. */
export const List = {
  /** A simple unordered list. */
  ul: (p: iAtom<HTMLUListElement>) => (
    <ul
      {...p}
      class={cn(
        'list-disc',
        'ml-single my-quarter',
        p.class,
      )}
    />
  ),

  /** A simple ordered list. */
  ol: (p: iAtom<HTMLUListElement>) => (
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

// =====================================================================================================
/**
 * This dictionary contains the atoms that render codeblocks. This component is usually made up of two
 * atoms, a content atom and a container atom.
 */
export const Code = {
  /** The content part of the codeblock. Must be a child of the container atom. */
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

  /**
   * The container part of an inline codeblock, used inside of a paragraph. It must contain a content
   * atom.
   */
  Inline: (p: iAtom<HTMLDivElement>) => (
    <div
      {...p}
      class={cn(
        clr.panel.bg_35,
        clr.brand.txt,
        'inline-block',
        'pt-[3px] pb-[1px] px-[0.5ch]',
        'rounded',
        p.class,
      )}
    />
  ),

  /**
   * The container part of a block codeblock, not to be used inside of a paragraph because it occupies
   * the full width of the parent element. It must contain a content atom.
   *
   * @todo Implement this component.
   *
   * @ignore
   */
  Block: (p: iAtom<HTMLDivElement>) => (
    <div
      class={cn(
        p.class,
      )}
      {...p}
    />
  ),
};

// =====================================================================================================
/**
 * This dictionary contains the atoms that render inputs. Using this atoms as building blocks one
 * could build any type of customized input component. It is recommended to check out the input
 * molecules as they are standard components that are built using these atoms.
 *
 * @todo Finish documentation
 */
export const Input = {
  /** */
  Field: (p: iAtom<HTMLInputElement>) => (
    <input
      {...p}
      class={cn(
        p.class,
        focus,
        clr.neutral.bg_10,
        input.invalid,
        'rounded',
        'px-half py-px',
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
        'appearance-none',
        clr.neutral.bg_10,
        focus,
        input.invalid,
        'rounded-full',
        'h-single w-single',
        'checked:before:content-["●"]',
        'grid place-content-center',
        p.class,
      )}
    />
  ),

  /** */
  Fieldset: (p: iAtom<HTMLFieldSetElement>) => (
    <fieldset
      {...p}
      class={cn(
        'px-half pb-half pt-quarter',
        clr.panel.bg_35,
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
        'appearance-none',
        clr.neutral.bg_10,
        focus,
        input.invalid,
        'rounded',
        'h-single w-single',
        'checked:before:content-["✓"]',
        'grid place-content-center',
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
        clr.neutral.bg_10,
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
        clr.neutral.bg_10,
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

// =====================================================================================================
/**
 * This dictionary contains the atoms that render secondary sections of content made using the
 * `<aside/>` element, usually for types of sidebars.
 *
 * @todo Finish documentation
 */
export const Aside = {
  /** */
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

// =====================================================================================================
/**
 * This dictionary contains the atoms that render different types of navigation components.
 */
export const Nav = {
  /** The sticky navbar stays on the top of the page when scrolling. */
  Sticky: (p: iAtom) => (
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

// =====================================================================================================
/**
 * This dictionary contains the atoms that make up the `<details/>` element. A custom one could be
 * built using this atoms, but for most cases the @see Accordion molecule is a standard solution.
 */
export const Details = {
  /** The container for the details element that is shown/hidden when a summary atom is clicked. */
  Container: (p: iAtom<HTMLDetailsElement>) => (
    <details
      {...p}
      class={cn(
        clr.panel.bg_35,
        'rounded',
        'mb-half',
        'px-half py-quarter',
        p.class,
      )}
    />
  ),

  /** The summary element that prompts the user to click to show/hide a container atom. */
  Summary: (p: iAtom) => (
    <summary
      {...p}
      class={cn(
        'py-quarter px-half',
        p.class,
      )}
    />
  ),
};

// =====================================================================================================
/**
 * This atom renders a horizontal rule, replacing the `<hr/>` element.
 */
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

// =====================================================================================================
/**
 * This atom renders a link element, replacing the `<a/>` element.
 */
export const Link = (p: iAtom<HTMLAnchorElement>) => (
  <a
    class={cn(
      'text-[inherit]',
      'hocus:text-brand-hc dark:hocus:text-d-brand-hc',
      'underline',
      'cursor-pointer',
      'rounded',
      focus,
    )}
    {...p}
  />
);

// =====================================================================================================
/**
 * This atom renders a keyboard key, replacing the `<kbd/>` element.
 */
export const Kbd = (p: iAtom) => (
  <kbd
    {...p}
    class={cn(
      clr.neutral.bg_10,
      clr.neutral.border_25,
      'txt-small',
      'relative bottom-eighth',
      'py-quarter px-third',
      'border-b-[1px]',
      'rounded',
    )}
  />
);

// =====================================================================================================
/**
 * This atom contains style settings for the `@tailwind/typeography` plugin and works with the
 * `deno-gfm` package to render markdown content. It can be used by itself, but using the @see Markdown
 * molecule is highly recommended to avoid redundancies.
 */
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

// =====================================================================================================
/**
 * This atom renders the CSS styles necessary for the `deno-gfm` package to render LaTeX.
 */
export const KatexStyles = (p: iAtom<HTMLStyleElement>) => (
  <style {...p}>{KATEX_CSS}</style>
);
