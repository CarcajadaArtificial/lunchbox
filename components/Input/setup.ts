import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iInput = iExtendedElement<HTMLInputElement> & {
  label: string;
  error: string | null;
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
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  fwd: {},
};

export default (props: Partial<iInput>) => {
  const p = applyDefaults<iInput>(defaults, props);

  const classes = partializeClasses({
    input: cn(
      'comp-input',
      p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input',
      p.class
    ),
    text: cn('select-none', p.fwd.text?.class),
    label: cn('comp-input_label', p.fwd.label?.class),
    error: cn('comp-input_error clr-txt-error', p.fwd.error?.class),
    required: cn('comp-input_required clr-txt-error', p.fwd.text?.class),
    container: cn(
      'comp-input_container',
      p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
        ? 'comp-input_button'
        : p.type && ['radio', 'checkbox'].includes(p.type)
        ? 'comp-input_bool'
        : p.type && ['datetime-local', 'date', 'month', 'time', 'week'].includes(p.type)
        ? 'comp-input_date'
        : 'comp-input_box',
      p.maxWidth ? 'comp-input_maxwidth' : null,
      p.fwd.container?.class
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
