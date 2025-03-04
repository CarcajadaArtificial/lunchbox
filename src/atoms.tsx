//     _  _
//    /_\| |_ ___ _ __  ___
//   / _ \  _/ _ \ '  \(_-<
//  /_/ \_\__\___/_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This is module manages the base of the hierarchy of the components of this library. The definition
 * of an Atom is a component made up of a 1/1 HTML element, because of this, they must be declared
 * using the type @see iAtom that links them to the properties of a 1/1 HTML element. The rendered
 * element will contain a list of tailwind classes that give the element it's style.
 *
 * Some atoms are made up of "particles" that are smaller and more abstract things. These particles
 * don't even represent an HTML element in particular. They are a list of classes that group common
 * styles among atoms. These can easily be added to classes of user-created elements that aren't an
 * atom. Additionally, particles commonly come from tailwind theme settings.
 *
 * @module
 */
import type { JSX, Ref } from 'preact';
import { cn } from '@vyn/cn';
import { KATEX_CSS } from '@deno/gfm';

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
  required: cn(
    'after:content-["*"] after:font-mono',
    'after:text-error-hc dark:after:text-d-error-hc',
    'after:ml-1/4',
  ),
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

// =====================================================================================================
/**
 * This type defines the extent of the parameters contained in an atom rendering function.
 */
export type iAtom<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>
  & {
    ref?: Ref<T>;
  };

// =====================================================================================================
/**
 * Defines an atom rendering function.
 */
export type iAtomRender = (p: iAtom) => JSX.Element;

// =====================================================================================================
/**
 * Defines a dictionary of atom rendering functions.
 */
export type iAtomRecord = Record<string, iAtomRender>;

// =====================================================================================================
/**
 * This dictionary contains the atoms that render text.
 *
 * - `Display`: The text with the largest font size. For aesthetic or branding purposes.
 * - `Title`: The standard text with the largest font size. sed for page titles.
 * - `Head`: Short for "heading", this text is for section titles.
 * - `Subhead`: Short for "subheading", this text is for sub-section titles.
 * - `Base`: The standard text for paragraphs, labels, and other body text.
 * - `Small`: The smallest text size, is slightly less accessible and can be used for subtle details.
 *
 * ```tsx
 * import { Text } from '@lunchbox/ui';
 *
 * <Text.Display>Display text</Text.Display>
 * <Text.Title>Title text</Text.Title>
 * <Text.Head>Head text</Text.Head>
 * <Text.Subhead>Subhead text</Text.Subhead>
 * <Text.Base>Base text</Text.Base>
 * <Text.Small>Small text</Text.Small>
 * ```
 *
 * @todo Why where these the selection for text types?
 * @todo Remove the `Text` dictionary in favor of individual atoms for non base text, include h1,
 *    h2, and h3 for the Title, Head, and Subhead atoms.
 */
export const Text: iAtomRecord = {
  Display: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.display,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Title: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        'font-bold',
        txt.title,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Head: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        'font-heading',
        txt.head,
        clr.brand.txt,
        p.class,
      )}
    />
  ),
  Subhead: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        txt.subhead,
        p.class,
      )}
    />
  ),
  Base: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        txt.base,
        p.class,
      )}
    />
  ),
  Small: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'block',
        txt.small,
        p.class,
      )}
    />
  ),
};

// =====================================================================================================
/**
 * This dictionary contains the atoms that render the page's main semantic sections.
 *
 * - `Body`: The entire page's content.
 * - `Main`: The main content section of the page.
 * - `Header`: The page's header.
 * - `Footer`: The page's footer.
 *
 * ```tsx
 * import { Page } from '@lunchbox/ui';
 *
 * <Page.Body>
 *  <Page.Header>{...}</Page.Header>
 *  <Page.Main>{...}</Page.Main>
 *  <Page.Footer>{...}</Page.Footer>
 * </Page.Body>
 * ```
 */
export const Page = {
  Body: (p: iAtom<HTMLBodyElement>): JSX.Element => (
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
  Main: (p: iAtom): JSX.Element => (
    <main
      {...p}
      class={cn(
        clr.page.bg,
        layout,
        'py-3/1',
        'w-full',
        p.class,
      )}
    />
  ),
  Header: (p: iAtom): JSX.Element => (
    <header
      {...p}
      class={cn(
        area,
        layout,
        p.class,
      )}
    />
  ),
  Footer: (p: iAtom): JSX.Element => (
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
 * (description)
 *
 * - `Brand`: (description)
 * - `Page`: (description)
 * - `Panel`: (description)
 * - `Error`: (description)
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Button = {
  Brand: (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
  Page: (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
  Panel: (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
  Error: (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
/**
 * description)
 *
 * - `ul`: (description)
 * - `ol`: (description)
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const List = {
  ul: (p: iAtom<HTMLUListElement>): JSX.Element => (
    <ul
      {...p}
      class={cn(
        'list-disc',
        'ml-1/1 my-1/4',
        p.class,
      )}
    />
  ),
  ol: (p: iAtom<HTMLUListElement>): JSX.Element => (
    <ul
      {...p}
      class={cn(
        'list-decimal',
        'ml-1/1 my-1/4',
        p.class,
      )}
    />
  ),
};

// =====================================================================================================
/**
 * This dictionary contains the atoms that render codeblocks. This component is usually made up of two
 * atoms, a content atom and a container atom.
 *
 * - `Content`: The content part of the codeblock. Must be a child of the container atom.
 * - `Inline`: The container part of an inline codeblock, used inside of a paragraph. It must contain
 *    a content atom.
 * - `Block`: (IN PROGRESS) The container part of a block codeblock, not to be used inside of a
 *    paragraph because it occupies the full width of the parent element. It must contain a content
 *    atom.
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 * @todo Implement the `<Code.Block/>` atom. (ignore this for now)
 */
export const Code = {
  Content: (p: iAtom): JSX.Element => (
    <code
      {...p}
      class={cn(
        clr.brand.txt,
        'leading-[calc(100%-1px)]',
        p.class,
      )}
    />
  ),
  Inline: (p: iAtom<HTMLDivElement>): JSX.Element => (
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
  Block: (p: iAtom<HTMLDivElement>): JSX.Element => (
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
 * - `Field`:  (description)
 * - `Label`:  (description)
 * - `Container`:  (description)
 * - `Text`:  (description)
 * - `Error`:  (description)
 * - `Required`:  (description)
 * - `Radio`:  (description)
 * - `Fieldset`:  (description)
 * - `Legend`:  (description)
 * - `Check`:  (description)
 * - `Textarea`:  (description)
 * - `Select`:  (description)
 * - `Submit`:  (description)
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Input = {
  Field: (p: iAtom<HTMLInputElement>): JSX.Element => (
    <input
      {...p}
      class={cn(
        p.class,
        focus,
        clr.neutral.bg_10,
        input.invalid,
        'rounded',
        'px-1/2 py-px',
      )}
    />
  ),
  Label: (p: iAtom<HTMLLabelElement>): JSX.Element => (
    <label
      {...p}
      class={cn('w-full flex', p.class)}
    />
  ),
  Container: (p: iAtom<HTMLDivElement>): JSX.Element => (
    <div
      {...p}
      class={cn('mb-1/2', p.class)}
    />
  ),
  Text: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'pl-1/2 break-all',
        p.class,
      )}
    />
  ),
  Error: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(clr.error.txt, 'pl-1/2', p.class)}
    />
  ),
  Radio: (p: iAtom<HTMLInputElement>): JSX.Element => (
    <input
      type='radio'
      {...p}
      class={cn(
        'appearance-none',
        clr.neutral.bg_10,
        focus,
        input.invalid,
        'rounded-full',
        'h-1/1 w-1/1',
        'checked:before:content-["●"]',
        'grid place-content-center',
        p.class,
      )}
    />
  ),
  Fieldset: (p: iAtom<HTMLFieldSetElement>): JSX.Element => (
    <fieldset
      {...p}
      class={cn(
        'px-1/2 pb-1/2 pt-1/4',
        clr.panel.bg_35,
        p.class,
      )}
    />
  ),
  Legend: (p: iAtom<HTMLLegendElement>): JSX.Element => (
    <legend
      {...p}
      class={cn(p.class)}
    />
  ),
  Check: (p: iAtom<HTMLInputElement>): JSX.Element => (
    <input
      type='checkbox'
      {...p}
      class={cn(
        'appearance-none',
        clr.neutral.bg_10,
        focus,
        input.invalid,
        'rounded',
        'h-1/1 w-1/1',
        'checked:before:content-["✓"]',
        'grid place-content-center',
        p.class,
      )}
    />
  ),
  Textarea: (p: iAtom<HTMLTextAreaElement>): JSX.Element => (
    <textarea
      {...p}
      class={cn(
        'rounded',
        'px-1/2 py-px',
        clr.neutral.bg_10,
        focus,
        p.class,
      )}
    />
  ),
  Select: (p: iAtom<HTMLSelectElement>): JSX.Element => (
    <select
      {...p}
      class={cn(
        'rounded',
        'px-1/2 py-px',
        'h-3/2',
        clr.neutral.bg_10,
        focus,
        p.class,
      )}
    />
  ),
  Submit: (p: iAtom<HTMLInputElement>): JSX.Element => (
    <input
      type='submit'
      {...p}
      class={cn(
        clr.brand.bg_45,
        'hocus:bg-brand-lc-60 dark:hocus:bg-d-brand-lc-60',
        'mt-1/2 mx-auto',
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
 * - `Sticky`: (description)
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Aside = {
  Sticky: (p: iAtom): JSX.Element => (
    <aside
      {...p}
      class={cn(
        'sticky',
        'top-3/1',
        p.class,
      )}
    />
  ),
};

// =====================================================================================================
/**
 * This dictionary contains the atoms that render different types of navigation components.
 *
 * - `Sticky`: The sticky navbar stays on the top of the page when scrolling.
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Nav = {
  Sticky: (p: iAtom): JSX.Element => (
    <nav
      {...p}
      class={cn(
        'sticky',
        'top-0',
        'py-1/4',
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
 *
 * - `Container`: The container for the details element that is shown/hidden when a summary atom is
 *    clicked.
 * - `Summary`: The summary element that prompts the user to click to show/hide a container atom.
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Details = {
  Container: (p: iAtom<HTMLDetailsElement>): JSX.Element => (
    <details
      {...p}
      class={cn(
        clr.panel.bg_35,
        'rounded',
        'mb-1/2',
        'px-1/2 py-1/4',
        p.class,
      )}
    />
  ),
  Summary: (p: iAtom): JSX.Element => (
    <summary
      {...p}
      class={cn(
        'py-1/4 px-1/2',
        p.class,
      )}
    />
  ),
};

// =====================================================================================================
/**
 * This atom renders a horizontal rule, replacing the `<hr/>` element.
 *
 * ```tsx
 * import { Separator } from '@lunchbox/ui';
 *
 * <Separator />
 * ```
 *
 * @todo Finish documentation
 */
export const Separator = (p: iAtom<HTMLHRElement>): JSX.Element => (
  <hr
    class={cn(
      clr.neutral.border,
      'w-full',
      'mt-3/2',
      'h-3/2',
    )}
    {...p}
  />
);

// =====================================================================================================
/**
 * This atom renders a link element, replacing the `<a/>` element.
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Link = (p: iAtom<HTMLAnchorElement>): JSX.Element => (
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
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Kbd = (p: iAtom): JSX.Element => (
  <kbd
    {...p}
    class={cn(
      clr.neutral.bg_10,
      clr.neutral.border_25,
      'txt-small',
      'relative bottom-1/8',
      'py-1/4 px-1/3',
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
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const Markdown = (p: iAtom<HTMLDivElement>): JSX.Element => (
  <div
    {...p}
    class={cn(
      'prose dark:prose-invert',
      'prose-h1:font-heading prose-h1:text-title prose-h1:mb-3/2',
      'prose-h2:font-heading prose-h2:text-head prose-h2:mb-1/1 prose-h2:mt-3/1',
      'prose-h3:text-subhead prose-h3:mb-1/2 prose-h3:mt-3/2',
      'prose-a:has-[.anchor]:*:hidden',
      'prose-a:outline-neutral prose-a:dark:outline-d-neutral prose-a:outline-offset-2 prose-a:inline-block',
      'prose-p:mb-1/2',
      'prose-pre:my-1/2',
      'prose-li:my-1/4',
      'prose-ul:mb-1/2 prose-ol:mb-1/2',
      'prose-tr:grid md:prose-tr:table-row',
      'prose-hr:my-2/1',
      'prose-td:py-1/8 prose-td:px-1/2 prose-th:py-1/8 prose-th:px-1/2',
      'prose-img:my-0 prose-img:text-center prose-img:mx-auto',
      'prose-figure:my-1/1 prose-figure:text-center',
      'prose-figcaption:mt-1/4 prose-figcaption:text-center',
      p.class,
    )}
  />
);

// =====================================================================================================
/**
 * This atom renders the CSS styles necessary for the `deno-gfm` package to render LaTeX.
 *
 * ```tsx
 * (example code)
 * ```
 *
 * @todo Finish documentation
 */
export const KatexStyles = (p: iAtom<HTMLStyleElement>): JSX.Element => (
  <style {...p}>{KATEX_CSS}</style>
);
