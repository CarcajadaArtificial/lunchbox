import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles, transition } from '../../src/styles.ts';

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
        'input__abstract',
        transition.interaction.outline,
        p.noResize ? 'resize-none' : null,
        p.error ? 'input__error-bg' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    text: opt('select-none', text?.class, text?.nostyle || p.nostyleAll),
    label: opt('input__label', label?.class, label?.nostyle || p.nostyleAll),
    error: opt(
      'input__error-msg',
      error?.class,
      error?.nostyle || p.nostyleAll,
    ),
    required: opt(
      'input__required',
      required?.class,
      required?.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(
        inputStyles,
        'input--box',
        p.maxWidth ? 'input--max-width' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
