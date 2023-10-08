import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iText } from '../Text/setup.ts';
import { inputStyles, transition } from '../../src/styles.ts';

export type iInput = iComponent<HTMLInputElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  fwd: Partial<{
    text: Partial<iText>;
    label: iFwd<HTMLLabelElement>;
    error: Partial<iText>;
    required: Partial<iFwd>;
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

  p.type = typeof p.type === 'string' ? p.type : p.type?.value;

  const classes = partializeClasses({
    input: opt(
      cn(
        'lbx-input',
        inputStyles.part.input,
        transition.interaction.outline,
        p.error ? [inputStyles.part.bgError, 'lbx-input_error'] : null,
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
        p.type === undefined
          ? [inputStyles.kind.box, 'lbx-input_box']
          : ['button', 'image', 'reset', 'submit'].includes(p.type)
          ? inputStyles.kind.button
          : ['radio', 'checkbox'].includes(p.type)
          ? inputStyles.kind.bool
          : ['datetime-local', 'date', 'month', 'time', 'week'].includes(p.type)
          ? [inputStyles.kind.date, 'lbx-input_box']
          : p.type === 'range'
          ? [inputStyles.kind.range, 'lbx-input_range']
          : p.type === 'color'
          ? [inputStyles.kind.color, 'lbx-input_color']
          : p.type === 'file'
          ? [inputStyles.kind.file, 'lbx-input_file']
          : [inputStyles.kind.box, 'lbx-input_box'],
        p.maxWidth ? 'lbx-input_maxwidth' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
