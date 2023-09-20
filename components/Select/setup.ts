import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';

export type iOption =
  | string
  | {
    value: string;
    name: string;
  }
  | iComponent<HTMLOptionElement>;

export type iSelect = iComponent<HTMLSelectElement> & {
  label: string;
  error: string | null;
  placeholder: string;
  maxWidth: boolean;
  options: iOption[] | [];
  fwd: Partial<{
    text: iFwd<HTMLSpanElement>;
    label: iFwd<HTMLLabelElement>;
    error: iFwd<HTMLSpanElement>;
    required: iFwd;
    container: iFwd<HTMLDivElement>;
    option: iFwd<HTMLOptionElement>;
  }>;
};

const defaults: iSelect = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  placeholder: '',
  options: [],
  fwd: {},
};

export default (props: Partial<iSelect>) => {
  const p = applyDefaults<iSelect>(defaults, props);

  const { text, label, option, error, required, container } = p.fwd;

  const classes = partializeClasses({
    input: opt(
      cn(
        'comp-select',
        p.error ? 'comp-select-bg_error' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    text: cn(text?.class),
    option: cn(option?.class),
    label: opt(
      cn('comp-select_label'),
      label?.class,
      label?.nostyle || p.nostyleAll,
    ),
    error: opt(
      cn('comp-select_error clr-txt-error'),
      error?.class,
      error?.nostyle || p.nostyleAll,
    ),
    required: opt(
      cn('comp-select_required'),
      required?.class,
      required?.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(
        'comp-select_container comp-input_box',
        p.maxWidth ? 'comp-input_maxwidth' : null,
      ),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
