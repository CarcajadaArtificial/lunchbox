import { cn } from '../../deps.ts';
import { BUTTON_COLORS } from '../types/enums.ts';

export const boxInput = (
  _maxWidth: boolean,
  disabled?: boolean,
  error?: string
) =>
  cn(
    'px-2 py-1 rounded clr-text',
    disabled
      ? 'clr-bg-disabled clr-placeholder cursor-not-allowed'
      : error
      ? 'clr-error-bg clr-error-placeholder'
      : 'clr-bg-tertiary clr-placeholder'
  );

export const button = (color?: BUTTON_COLORS, outline?: boolean) =>
  cn(
    'w-max px-3 py-1 rounded clr-text',
    color === BUTTON_COLORS.ERROR ? 'clr-error-bg' : `clr-bg-${color}`,
    outline ? 'border border-1 clr-border' : '',
    color === BUTTON_COLORS.DISABLED ? 'cursor-not-allowed' : 'cursor-pointer'
  );

export const nonboxInput = (disabled?: boolean) =>
  cn(disabled ? 'cursor-not-allowed' : 'h-min');
