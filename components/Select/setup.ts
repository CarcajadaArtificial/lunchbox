import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iOption =
  | string
  | {
      value: string;
      name: string;
    }
  | iExtendedElement<HTMLOptionElement>;

export type iSelect = iExtendedElement<HTMLSelectElement> & {
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
      cn('comp-select', p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'),
      p.class,
      p.nostyle
    ),
    text: cn(text?.class),
    option: cn(option?.class),
    label: opt(cn('comp-select_label'), label?.class, label?.nostyle),
    error: opt(cn('comp-select_error clr-txt-error'), error?.class, error?.nostyle),
    required: opt(cn('comp-select_required'), required?.class, required?.nostyle),
    container: opt(
      cn('comp-select_container comp-input_box', p.maxWidth ? 'w-full' : null),
      container?.class,
      container?.nostyle
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
