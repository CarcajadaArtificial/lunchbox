import type { JSX } from 'preact';
import { cn } from '@vyn/cn';
import type { iAtom } from '@lunchbox/ui';
import btn from '../particles/btn.ts';
import clr from '../particles/clr.ts';

/**
 * Primary call-to-action button using brand colors. Use for main form submissions, key conversion points, and primary user flows where you want to direct user attention.
 *
 * @example Usage
 * ```ts
 * import * as Button from 'lunchbox/atoms/Button.tsx';
 *
 * <Button.Brand onClick={handleClick}>
 *   Click me!
 * </Button.Brand>
 * ```
 */
export const Brand = (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
);

/**
 * Contextual button that provides subtle contrast on pages but stands out on panels. Perfect for secondary actions, navigation elements, and interactive components within panel containers.
 *
 * @example Usage
 * ```ts
 * import * as Button from 'lunchbox/atoms/Button.tsx';
 *
 * <Button.Page onClick={handleClick}>
 *   Click me!
 * </Button.Page>
 * ```
 */
export const Page = (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
);

/**
 * Contextual button that blends with panels but contrasts against pages. Ideal for toolbar actions, filter controls, and situations where multiple buttons need to work together visually.
 *
 * @example Usage
 * ```ts
 * import * as Button from 'lunchbox/atoms/Button.tsx';
 *
 * <Button.Panel onClick={handleClick}>
 *   Click me!
 * </Button.Panel>
 * ```
 */
export const Panel = (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
);

/**
 * Warning button using error colors for destructive or irreversible actions. Essential for account deletion, permanent data removal, or any action requiring explicit user caution.
 *
 * @example Usage
 * ```ts
 * import * as Button from 'lunchbox/atoms/Button.tsx';
 *
 * <Button.Error onClick={handleClick}>
 *   Click me!
 * </Button.Error>
 * ```
 */
export const Error = (p: iAtom<HTMLButtonElement>): JSX.Element => (
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
);
