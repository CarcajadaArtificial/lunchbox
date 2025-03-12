//     _  _
//    /_\| |_ ___ _ __  ___
//   / _ \  _/ _ \ '  \(_-<
//  /_/ \_\__\___/_|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module manages the base of the hierarchy of the components of this library. The definition
 * of an Atom is a component made up of an HTMLElement, because of this, they must be declared
 * using the type iAtom that links them to the properties of an HTMLElement. The rendered
 * element will contain a list of tailwind classes that give the element it's style.
 *
 * Atoms use {@linkcode /particles | "Particles"}  to style themselves. Particles are smaller and more
 * abstract things that don't represent HTML elements, they are lists of classes that group common
 * styles. These particle classes can also be used directly in user-created elements that aren't atoms.
 * The particles module contains these style definitions which commonly come from tailwind theme settings.
 *
 * @module atoms
 */
import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import { KATEX_CSS } from '@deno/gfm';
import type { iAtom, iAtomRecord } from '@lunchbox/ui';
import { area, btn, clr, focus, input, layout, txt } from './particles.ts';

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
 * This dictionary provides semantic HTML elements for structuring a page's layout. These atoms help
 * maintain consistent styling and proper document structure while following web standards. Each
 * element maps to its corresponding HTML5 semantic tag:
 *
 * @example Usage
 * ```ts
 * import { Page } from 'lunchbox/atoms';
 *
 * <Page.Body>
 *  <Page.Header>{...}</Page.Header>
 *  <Page.Main>{...}</Page.Main>
 *  <Page.Footer>{...}</Page.Footer>
 * </Page.Body>
 * ```
 */
export const Page = {
  /**
   * The Body atom is essential for establishing a consistent theming foundation across your app.
   * Without it, you'd need to manually handle dark mode transitions, font inheritance, and color
   * schemes on every page. By using this atom at your app's root, you ensure all nested components
   * inherit the correct theme context and base styles.
   */
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
  /**
   * The Main atom enforces a consistent content structure across your application. Rather than
   * letting each page define its own layout rules, this atom ensures your primary content always
   * follows accessibility best practices and maintains visual consistency with the rest of the app.
   */
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
  /**
   * The Header atom standardizes navigation placement and branding across your app. Instead of
   * building custom headers for each page, this atom provides a semantic container that maintains
   * your app's visual hierarchy and ensures consistent user navigation patterns.
   */
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
  /**
   * The Footer atom creates a predictable location for important site-wide information and secondary
   * navigation. By using this atom instead of a generic container, you maintain semantic HTML structure
   * while ensuring footer content is consistently positioned and styled across all pages.
   */
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
 * This dictionary contains contextual button variations that adapt their visual hierarchy based on
 * their surroundings rather than fixed primary/secondary patterns. Each button's prominence shifts
 * naturally  through color relationships with its container.
 *
 * The buttons use semantic color palettes to communicate purpose - Brand buttons drive primary actions,
 * Page/Panel buttons handle navigation and secondary actions, and Error buttons signal destructive
 * operations.
 *
 * @example Usage
 * ```ts
 * import { Button } from 'lunchbox/atoms';
 *
 * <Button.Brand onClick={handleClick}>
 *   Primary Action
 * </Button.Brand>
 *
 * <Button.Error onClick={handleDelete}>
 *   Delete Item
 * </Button.Error>
 * ```
 */
export const Button = {
  /**
   * Primary call-to-action button using brand colors. Use for main form submissions, key conversion
   * points, and primary user flows where you want to direct user attention.
   */
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
  /**
   * Contextual button that provides subtle contrast on pages but stands out on panels. Perfect for
   * secondary actions, navigation elements, and interactive components within panel containers.
   */
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
  /**
   * Contextual button that blends with panels but contrasts against pages. Ideal for toolbar actions,
   * filter controls, and situations where multiple buttons need to work together visually.
   */
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
  /**
   * Warning button using error colors for destructive or irreversible actions. Essential for account
   * deletion, permanent data removal, or any action requiring explicit user caution.
   */
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
 * A collection of semantic list components for organizing hierarchical content. Provides both
 * marker-based and numerical list variants while maintaining proper HTML semantics and accessibility.
 * Extends with custom classes through the standard atom interface.
 *
 * @example Usage
 * ```ts
 * import { List } from 'lunchbox/atoms';
 *
 * <List.ul>
 *   <li>First bullet point</li>
 *   <li>Second bullet point</li>
 * </List.ul>
 *
 * <List.ol>
 *   <li>First numbered item</li>
 *   <li>Second numbered item</li>
 * </List.ol>
 * ```
 */
export const List = {
  /**
   * Unordered list component that uses bullet points. Essential for presenting related items where
   * order doesn't matter. Commonly used in feature lists, navigation menus, and content hierarchies.
   */
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
  /**
   * Ordered list component that uses numbers. Critical for sequences, instructions, and prioritized
   * content where order matters.
   */
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
 * A specialized component system for displaying code with proper syntax highlighting and formatting.
 * The architecture enforces semantic structure through required parent-child relationships.
 *
 * @example Usage (Inline)
 * ```ts
 * import { Code } from 'lunchbox/atoms';
 *
 * <p>
 *   Use the{" "}
 *   <Code.Inline>
 *     <Code.Content>
 *       npm install
 *     </Code.Content>
 *   </Code.Inline>
 *   {" "}command.
 * </p>
 * ```
 *
 * @example Usage (Block) - WIP
 * ```ts
 * import { Code } from 'lunchbox/atoms';
 *
 * <Code.Block>
 *   <Code.Content>
 *     const greeting = 'Hello World';
 *     console.log(greeting);
 *   </Code.Content>
 * </Code.Block>
 * ```
 *
 * @todo Implement the `<Code.Block/>` atom.
 */
export const Code = {
  /**
   * The innermost component that holds the actual code. It requires a container parent component to
   * function properly.
   */
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
  /**
   * Creates a single-line code display optimized for technical terms and commands within flowing text.
   * Provides the styling context that Content components need for inline presentation.
   */
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
  /**
   * Creates a multi-line code display with features like line numbers and copy buttons. Like Inline,
   * provides styling context for Content, but with additional functionality for larger code samples.
   */
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
 * This dictionary contains atoms designed to build input components in a standardized way. Each atom
 * represents a fundamental piece that, when combined, allows the creation of any type of input
 * interface - from simple text fields to complex multi-select forms.
 *
 * The atoms handle core styling concerns like focus states, error highlighting, and spacing
 * consistency, while remaining flexible enough to be customized through class props.
 *
 * @example Usage
 * ```ts
 * import { Input } from 'lunchbox/atoms';
 *
 * <Input.Container>
 *   <Input.Label>
 *     <Input.Text>Username</Input.Text>
 *     <Input.Field type="text" required />
 *   </Input.Label>
 *   <Input.Error>This field is required</Input.Error>
 * </Input.Container>
 * ```
 */
export const Input = {
  /**
   * The standard single-line text input element that users are most familiar with. It represents the HTML `<input>` element for text, numbers, email, etc. For a complete input field with label and error handling, use the {@linkcode /molecules/~/InputFieldCombo | InputFieldCombo} molecule.
   */
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
  /**
   * Container that wraps an input and its label text, ensuring proper semantic HTML by creating the necessary association between them. This is crucial for accessibility as screen readers will announce the label when the input is focused.
   */
  Label: (p: iAtom<HTMLLabelElement>): JSX.Element => (
    <label
      {...p}
      class={cn('w-full flex', p.class)}
    />
  ),
  /**
   * A wrapper component that maintains consistent vertical spacing between input groups. This helps create visual hierarchy and improves form readability by ensuring inputs don't feel cramped or too spread out.
   */
  Container: (p: iAtom<HTMLDivElement>): JSX.Element => (
    <div
      {...p}
      class={cn('mb-1/2', p.class)}
    />
  ),
  /**
   * Renders text content specifically styled for form contexts like labels, help text, and descriptions. Uses standardized styling to maintain consistency across all text elements in forms.
   */
  Text: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(
        'pl-1/2 break-all',
        p.class,
      )}
    />
  ),
  /**
   * Displays validation error messages with distinct error styling (typically red text/borders). Positioned below the input field to provide clear feedback when form validation fails.
   */
  Error: (p: iAtom<HTMLSpanElement>): JSX.Element => (
    <span
      {...p}
      class={cn(clr.error.txt, 'pl-1/2', p.class)}
    />
  ),
  /**
   * Styled radio button input for single-choice selections. For a complete radio input group, use the {@linkcode /molecules/~/FieldsetRadio | FieldsetRadio} molecule, or for a single radio button with label use {@linkcode /molecules/~/InputRadioCombo | InputRadioCombo}
   */
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
  /**
   * Groups related form controls together both semantically and visually. Adds a subtle border and background to create visual separation between different sections of a form. Essential for organizing complex forms with multiple related inputs. For complete fieldset components, see {@linkcode /molecules/~/FieldsetCheck | FieldsetCheck} for checkboxes or {@linkcode /molecules/~/FieldsetRadio | FieldsetRadio} for radio buttons. */
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
  /**
   * Provides a title or description for a fieldset, helping users understand the purpose of grouped form controls. Styled to stand out from regular labels while maintaining visual harmony.
   */
  Legend: (p: iAtom<HTMLLegendElement>): JSX.Element => (
    <legend
      {...p}
      class={cn(p.class)}
    />
  ),
  /**
   * Styled checkbox input for multi-choice selections. For a complete checkbox group, use the {@linkcode /molecules/~/FieldsetCheck | FieldsetCheck} molecule, or for a single checkbox with label use {@linkcode /molecules/~/InputCheckCombo | InputCheckCombo}
   */
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
  /**
   * Multi-line text input for longer form content. For a complete textarea with label and error handling, use the {@linkcode /molecules/~/InputTextareaCombo | InputTextareaCombo} molecule.
   */
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
  /**
   * Dropdown select input for choosing from predefined options. For a complete select input with label and error handling, use the {@linkcode /molecules/~/InputSelectCombo | InputSelectCombo} molecule.
   */
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
  /**
   * Submit button with brand styling that looks like {@linkcode /atoms/~/Button | Button.Brand} while maintaining the functionality of an `<input type="submit">` element.
   */
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
 * @example Usage
 * ```ts
 * import { Aside } from 'lunchbox/atoms';
 *
 * <Aside.Sticky>
 *   <p>Hello</p>
 * </Aside.Sticky>
 * ```
 */
export const Aside = {
  /**
   * A sticky sidebar component optimized for desktop layouts, commonly used for page-level navigation
   * like tables of contents that follow the user's scroll position. While it can be used on mobile,
   * the limited horizontal space often makes this pattern less practical on smaller screens. The
   * sticky behavior keeps the content accessible while scrolling through the main content area.
   */
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
 * This dictionary contains atoms for building consistent navigation structures across your application.
 * Navigation is a critical part of any web application's information architecture, and these atoms
 * ensure users can always find their way around, regardless of viewport size or scroll position.
 *
 * The navigation components are designed to work seamlessly with the {@linkcode /atoms/~/Page | Page}
 * atoms, particularly within the `Page.Header` component for site-wide navigation.
 *
 * @example Usage
 * ```tsx
 * import { Nav, Page } from '@lunchbox/ui';
 *
 * <Page.Header>
 *   <Nav.Sticky>
 *     <a href="/">Home</a>
 *     <a href="/about">About</a>
 *   </Nav.Sticky>
 * </Page.Header>
 * ```
 */
export const Nav = {
  /**
   * A navigation container that maintains its position at the top of the viewport while scrolling.
   * Essential for ensuring critical navigation links remain accessible throughout the user's journey,
   * particularly on longer pages or in single-page applications.
   */
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
 * built using this atoms, but for most cases the {@linkcode /molecules/~/Accordion | Accordion
 * molecule} is a standard solution.
 *
 * - `Container`: The container for the details element that is shown/hidden when a summary atom is
 *    clicked.
 * - `Summary`: The summary element that prompts the user to click to show/hide a container atom.
 *
 * @example Usage
 * ```ts
 * import { Details } from 'lunchbox/atoms';
 *
 * <Details.Container open={p.open}>
 *   <Details.Summary>{p.summary}</Details.Summary>
 * </Details.Container>
 * ```
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
 * Creates visual separation between content sections with a neutral-colored horizontal line. Useful for
 * breaking up long content into logical segments while maintaining visual hierarchy.
 *
 * @example Usage
 * ```ts
 * import { Separator } from '@lunchbox/ui';
 *
 * <Separator />
 * ```
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
 * Provides consistent link styling and behavior across the application, with built-in hover states and
 * focus indicators. Essential for navigation and content references.
 *
 * @example Usage
 * ```ts
 * import { Link } from '@lunchbox/ui';
 *
 * <Link href="/about">About Us</Link>
 * ```
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
 * Displays keyboard shortcuts and key combinations in a visually distinct way. Particularly useful in
 * documentation, tutorials, and command references.
 *
 * @example Usage
 * ```ts
 * import { Kbd } from '@lunchbox/ui';
 *
 * <p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy</p>
 * ```
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
 * `deno-gfm` package to render markdown content. It can be used by itself, but using the
 * {@linkcode /molecules/~/Markdown | Markdown} molecule is highly recommended to avoid redundancies.
 *
 * @example Usage
 * ```ts
 * import { Prose } from 'lunchbox/atoms';
 *
 * <Prose>
 *   <p>Hello</p>
 * </Prose>
 * ```
 */
export const Prose = (p: iAtom<HTMLDivElement>): JSX.Element => (
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
 * This atom renders the CSS styles necessary for the `deno-gfm` package to render LaTeX equations in
 * markdown content. Works in conjunction with the {@linkcode /atoms/~/Prose | Prose} atom which
 * handles the actual markdown rendering.
 *
 * @example Usage
 * ```ts
 * import { KatexStyles, Prose } from 'lunchbox/atoms';
 *
 * <head>
 *   <KatexStyles />
 * </head>
 * <body>
 *   <Prose>
 *     {LaTeX content}
 *   </Prose>
 * </body>
 * ```
 */
export const KatexStyles = (p: iAtom<HTMLStyleElement>): JSX.Element => (
  <style {...p}>{KATEX_CSS}</style>
);
