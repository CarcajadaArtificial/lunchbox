import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iTextArea = iExtendedElement<HTMLTextAreaElement> & {
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

  const classes = partializeClasses({
    input: cn(
      'comp-textarea',
      p.noResize ? 'resize-none' : null,
      p.error ? 'clr-bg-error' : p.disabled ? 'clr-bg-disabled' : 'clr-bg-input'
    ),
    text: cn(p.fwd.text?.class),
    label: cn('comp-textarea_label', p.fwd.label?.class),
    error: cn('comp-textarea_error clr-txt-error', p.fwd.error?.class),
    required: cn('comp-textarea_required clr-txt-error', p.fwd.required?.class),
    container: cn(
      'comp-textarea_container comp-input_box',
      p.maxWidth ? 'w-full' : null,
      p.fwd.container?.class
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
