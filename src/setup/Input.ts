import { applyDefaults, cn } from '../../deps.ts';
import { BUTTON_TYPES } from '../types/enums.ts';
import { iInput } from '../types/props.ts';
import { boxInput, nonboxInput, button } from './shared.ts';

const defaults: iInput = {
  required: false,
  maxWidth: false,
};

export default (props: Partial<iInput>) => {
  const p = applyDefaults<iInput>(defaults, props);

  const classes = {
    input: cn(
      p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
        ? button(
            p.error
              ? BUTTON_TYPES.ERROR
              : p.disabled
              ? BUTTON_TYPES.DISABLED
              : BUTTON_TYPES.CONTRAST
          )
        : p.type === 'radio' || p.type === 'checkbox' || p.type === 'slider'
        ? nonboxInput(p.disabled)
        : boxInput(p.maxWidth, p.disabled, p.error)
    ),
    text: cn('px-2 select-none'),
    label: cn(
      'flex',
      p.type === 'radio' || p.type === 'checkbox'
        ? 'flex-row-reverse justify-end items-center w-max'
        : p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
        ? 'flex-col w-max'
        : 'flex-col'
    ),
    error: cn('px-2 clr-txt-error'),
    required: cn('clr-txt-error ml-1'),
    container: cn(
      'mb-4',
      p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
        ? 'w-min'
        : p.maxWidth
        ? 'w-full'
        : 'max-w-sm'
    ),
  };

  return { c: classes, ...p };
};
