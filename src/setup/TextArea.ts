import { applyDefaults, cn } from '../../deps.ts';
import { iTextArea } from '../types/props.ts';
import { boxInput } from './shared.ts';

const inputDefaults: iTextArea = {
  required: false,
};

export default (props: Partial<iTextArea>) => {
  const p = applyDefaults<iTextArea>(inputDefaults, props);

  const inputClassnames = {
    input: cn(
      // Applies to all inputs
      'outline-cobalto',
      boxInput(p.disabled, p.error)
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

  return { c: inputClassnames, ...p };
};
