import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import btn from '../particles/btn.ts';
import clr from '../particles/clr.ts';

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
export default {
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
