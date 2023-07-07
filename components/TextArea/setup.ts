import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iTextArea = iExtendedElement<HTMLTextAreaElement> & {
  label: string;
  error: string | null;
  maxWidth: boolean;
  noResize: boolean;
};

const defaults: iTextArea = {
  label: '',
  error: null,
  required: false,
  maxWidth: false,
  noResize: false,
};

export default (props: Partial<iTextArea>) => {
  const p = applyDefaults<iTextArea>(defaults, props);

  const classes = {
    input: cn(
      'comp-textarea',
      p.noResize ? 'resize-none' : null,
      p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'
    ),
    text: cn(''),
    label: cn('comp-textarea_label'),
    error: cn('comp-textarea_error clr-txt-error'),
    required: cn('comp-textarea_required clr-txt-error'),
    container: cn('comp-textarea_container comp-input_box', p.maxWidth ? 'w-full' : null),
  };

  return { c: classes, ...p };
};
