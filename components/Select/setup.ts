import { cn } from '../../deps.ts';
import { applyDefaults } from '../../src/utils.ts';
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

  const classes = {
    input: cn(
      'comp-select',
      p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input',
      p.class
    ),
    text: cn('', p.fwd.text?.class),
    option: cn('', p.fwd.option?.class),
    label: cn('comp-select_label', p.fwd.label?.class),
    error: cn('comp-select_error clr-txt-error', p.fwd.error?.class),
    required: cn('comp-select_required', p.fwd.required?.class),
    container: cn(
      'comp-select_container comp-input_box',
      p.maxWidth ? 'w-full' : null,
      p.fwd.container?.class
    ),
  };

  return { c: classes, ...p };
};
