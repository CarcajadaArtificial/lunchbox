import { cn } from '../../deps.ts';

export const boxInput = (
  maxWidth: boolean,
  disabled?: boolean,
  error?: string
) =>
  cn(
    'px-2 py-1 rounded text-obsidiana',
    disabled
      ? 'border-acero bg-acero placeholder-hierro cursor-not-allowed'
      : error
      ? 'border-bombon bg-bombon placeholder-papel'
      : 'border-papel bg-papel placeholder-hierro',
    maxWidth ? 'w-full' : 'w-80'
  );

export const button = (disabled?: boolean, error?: string) =>
  cn(
    'w-max px-3 py-1 rounded',
    disabled
      ? 'bg-acero text-hierro cursor-not-allowed'
      : error
      ? 'bg-bombon text-papel'
      : 'bg-papel text-obsidiana'
  );

export const nonboxInput = (disabled?: boolean) =>
  cn(disabled ? 'cursor-not-allowed' : 'h-min');
