import { applyDefaults, cn } from '../../deps.ts';
import { iSelect } from '../types/props.ts';
import { boxInput } from './shared.ts';

const defaults: iSelect = {
  required: false,
  maxWidth: false,
  placeholder: '',
  options: [],
  children: null,
};

export default (props: Partial<iSelect>) => {
  const p = applyDefaults<iSelect>(defaults, props);

  const classes = {
    input: cn(
      // Applies to all inputs
      'outline-cobalto',
      boxInput(p.maxWidth, p.disabled, p.error)
    ),
    text: cn('px-2'),
    label: cn(
      'flex',
      p.type === 'radio' || p.type === 'checkbox'
        ? 'flex-row-reverse justify-end'
        : 'flex-col'
    ),
    error: cn('px-2 clr-error-text'),
    required: cn('clr-error-text ml-1 mb-1'),
    container: cn('select'),
  };

  return { c: classes, ...p };
};
