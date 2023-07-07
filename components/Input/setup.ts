import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/element.ts';

export type iInput = iExtendedElement<HTMLInputElement> & {
  label?: string;
  error?: string;
  maxWidth: boolean;
  fwd: Partial<{
    text: iFwd<HTMLSpanElement>;
    label: iFwd<HTMLLabelElement>;
    error: iFwd<HTMLSpanElement>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iInput = {
  required: false,
  maxWidth: false,
  fwd: {},
};

export default (props: Partial<iInput>) => {
  const p = applyDefaults<iInput>(defaults, props);

  const classes = {
    input: cn('comp-input', p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'),
    text: cn('select-none'),
    label: cn('comp-input_label'),
    error: cn('comp-input_error clr-txt-error'),
    required: cn('comp-input_required clr-txt-error'),
    container: cn(
      'comp-input_container',
      p.maxWidth
        ? 'w-full'
        : p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
        ? 'comp-input_button'
        : p.type && ['radio', 'checkbox'].includes(p.type)
        ? 'comp-input_bool'
        : p.type && ['datetime-local', 'date', 'month', 'time', 'week'].includes(p.type)
        ? 'comp-input_date'
        : 'comp-input_box'
    ),
  };

  return { c: classes, ...p };
};
