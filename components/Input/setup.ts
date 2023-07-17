import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
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

  const { text, label, error, required, container } = p.fwd;

  const classes = partializeClasses({
    input: opt(
      cn('comp-input', p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'),
      p.class,
      p.nostyle
    ),
    text: opt(cn('select-none'), text?.class, text?.nostyle),
    label: opt(cn('comp-input_label'), label?.class, label?.nostyle),
    error: opt(cn('comp-input_error clr-txt-error'), error?.class, error?.nostyle),
    required: opt(cn('comp-input_required clr-txt-error'), required?.class, required?.nostyle),
    container: opt(
      cn(
        'comp-input_container',
        p.type && ['button', 'image', 'reset', 'submit'].includes(p.type)
          ? 'comp-input_button'
          : p.type && ['radio', 'checkbox'].includes(p.type)
          ? 'comp-input_bool'
          : p.type && ['datetime-local', 'date', 'month', 'time', 'week'].includes(p.type)
          ? 'comp-input_date'
          : 'comp-input_box',
        p.maxWidth ? 'comp-input_maxwidth' : null
      ),
      container?.class,
      container?.nostyle
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
