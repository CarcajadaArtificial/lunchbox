import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';

export type iTextArea = iComponent<HTMLTextAreaElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  noResize: boolean;
  fwd: Partial<{
    text: iFwd<HTMLSpanElement>;
    label: iFwd<HTMLLabelElement>;
    error: iFwd<HTMLSpanElement>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iTextArea = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  noResize: false,
  fwd: {},
};

export default (props: Partial<iTextArea>) => {
  const p = applyDefaults<iTextArea>(defaults, props);

  const { text, label, error, required, container } = p.fwd;

  const classes = partializeClasses({
    input: opt(
      cn(
        'comp-textarea',
        p.noResize ? 'resize-none' : null,
        p.error
          ? 'clr-bg-error'
          : p.disabled
          ? 'clr-bg-disabled'
          : 'clr-bg-input',
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    text: cn(text?.class),
    label: opt(
      cn('comp-textarea_label'),
      label?.class,
      label?.nostyle || p.nostyleAll,
    ),
    error: opt(
      cn('comp-textarea_error clr-txt-error'),
      error?.class,
      error?.nostyle || p.nostyleAll,
    ),
    required: opt(
      cn('comp-textarea_required clr-txt-error'),
      required?.class,
      required?.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(
        'comp-textarea_container comp-input_box',
        p.maxWidth ? 'w-full' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
