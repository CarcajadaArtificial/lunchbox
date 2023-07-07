import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iOption =
  | string
  | {
      value: string;
      name: string;
    }
  | iExtendedElement<HTMLOptionElement>;

export type iSelect = iExtendedElement<HTMLSelectElement> & {
  label?: string;
  error?: string;
  placeholder: string;
  maxWidth: boolean;
  options: iOption[] | [];
};

const defaults: iSelect = {
  required: false,
  maxWidth: false,
  placeholder: '',
  options: [],
  children: null,
};

export default (props: Partial<iSelect>) => {
  const p = applyDefaults<iSelect>(defaults, props);

  const classes = {
    input: cn('comp-select', p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'),
    text: cn(''),
    label: cn('comp-select_label'),
    error: cn('comp-select_error clr-txt-error'),
    required: cn('comp-select_required'),
    container: cn('comp-select_container comp-input_box', p.maxWidth ? 'w-full' : null),
  };

  return { c: classes, ...p };
};
