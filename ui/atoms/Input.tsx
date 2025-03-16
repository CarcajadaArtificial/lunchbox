import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import input from '../particles/input.ts';
import clr from '../particles/clr.ts';
import btn from '../particles/btn.ts';
import focus from '../particles/focus.ts';

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
export default {
  /**
   * The standard single-line text input element that users are most familiar with. It represents the HTML `<input>` element for text, numbers, email, etc. For a complete input field with label and error handling, use the {@linkcode InputFieldCombo} molecule.
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
   * Styled radio button input for single-choice selections. For a complete radio input group, use the {@linkcode FieldsetRadio} molecule, or for a single radio button with label use {@linkcode InputRadioCombo}
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
   * Groups related form controls together both semantically and visually. Adds a subtle border and background to create visual separation between different sections of a form. Essential for organizing complex forms with multiple related inputs. For complete fieldset components, see {@linkcode FieldsetCheck} for checkboxes or {@linkcode FieldsetRadio} for radio buttons. */
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
   * Styled checkbox input for multi-choice selections. For a complete checkbox group, use the {@linkcode FieldsetCheck} molecule, or for a single checkbox with label use {@linkcode InputCheckCombo}
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
   * Multi-line text input for longer form content. For a complete textarea with label and error handling, use the {@linkcode InputTextareaCombo} molecule.
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
   * Dropdown select input for choosing from predefined options. For a complete select input with label and error handling, use the {@linkcode InputSelectCombo} molecule.
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
   * Submit button with brand styling that looks like {@linkcode /@lunchbox/ui/doc/atoms/~/Button | Button.Brand} while maintaining the functionality of an `<input type="submit">` element.
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
