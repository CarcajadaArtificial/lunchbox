import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { inputStyles } from '../../src/styles.ts';

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
        'lbx-textarea',
        inputStyles.part.input,
        p.noResize ? 'resize-none' : null,
        p.error ? inputStyles.part.bgError : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    text: opt(cn('select-none'), text?.class, text?.nostyle || p.nostyleAll),
    label: opt(
      cn('lbx-input-label', inputStyles.part.label),
      label?.class,
      label?.nostyle || p.nostyleAll,
    ),
    error: opt(
      cn(inputStyles.part.error),
      error?.class,
      error?.nostyle || p.nostyleAll,
    ),
    required: opt(
      cn(inputStyles.part.required),
      required?.class,
      required?.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(
        inputStyles.part.container,
        [inputStyles.kind.box, 'lbx-input_box'],
        p.maxWidth ? 'lbx-input_maxwidth' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
