import { cn } from '../../deps.ts';

export const boxInput = (
  maxWidth: boolean,
  disabled?: boolean,
  error?: string
) =>
  cn(
    'px-2 py-1 rounded clr-text',
    disabled
      ? 'clr-disabled clr-placeholder cursor-not-allowed'
      : error
      ? 'clr-error-bg clr-error-placeholder'
      : 'clr-bg-secondary clr-placeholder',
    maxWidth ? 'w-full' : 'w-80'
  );

export const button = (disabled?: boolean, error?: string) =>
  cn(
    'w-max px-3 py-1 rounded clr-text',
    disabled
      ? 'clr-disabled cursor-not-allowed'
      : error
      ? 'clr-error-bg'
      : 'clr-bg-secondary'
  );

export const nonboxInput = (disabled?: boolean) =>
  cn(disabled ? 'cursor-not-allowed' : 'h-min');
