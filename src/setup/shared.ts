import { cn } from '../../deps.ts';
import { BUTTON_TYPES } from '../types/enums.ts';

export const boxInput = (_maxWidth: boolean, disabled?: boolean, error?: string) =>
  cn(
    'px-2 py-1 rounded clr-txt-base',
    disabled ? 'clr-bg-disabled cursor-not-allowed' : error ? 'clr-bg-error' : 'clr-bg-input'
  );

export const button = (type?: BUTTON_TYPES) =>
  cn(
    'comp-button',
    type === BUTTON_TYPES.CONTRAST
      ? 'clr-bg-input'
      : type === BUTTON_TYPES.ERROR
      ? 'clr-bg-error'
      : `btn-${type}`
  );

export const nonboxInput = (disabled?: boolean) => cn(disabled ? 'cursor-not-allowed' : 'h-min');
