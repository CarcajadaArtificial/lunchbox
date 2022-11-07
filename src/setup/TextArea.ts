import { applyDefaults, cn } from '../../deps.ts';
import { iTextArea } from '../types/props.ts';
import { boxInput } from './shared.ts';

const defaults: iTextArea = {
  required: false,
  maxWidth: false,
};

export default (props: Partial<iTextArea>) => {
  const p = applyDefaults<iTextArea>(defaults, props);

  const classes = {
    input: cn(
      // Applies to all inputs
      'outline-cobalto',
      boxInput(p.maxWidth, p.disabled, p.error)
    ),
    span: cn('px-2 text-obsidiana w-full'),
    label: cn(
      'flex',
      p.type === 'radio' || p.type === 'checkbox'
        ? 'flex-row-reverse justify-end'
        : 'flex-col'
    ),
    error: cn('px-2 text-xs text-chicle'),
    required: cn('text-chicle ml-1 mb-1'),
    container: cn('textarea'),
  };

  return { c: classes, ...p };
};
