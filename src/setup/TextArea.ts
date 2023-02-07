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
    input: cn(boxInput(p.maxWidth, p.disabled, p.error)),
    text: cn('px-2 w-full select-none'),
    label: cn('flex flex-col select-none'),
    error: cn('px-2 clr-txt-error'),
    required: cn('clr-txt-error ml-1'),
    container: cn('mb-4', p.maxWidth ? 'w-full' : 'max-w-sm'),
  };

  return { c: classes, ...p };
};
