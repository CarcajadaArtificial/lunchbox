import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { BUTTON_TYPES } from '../../src/enums.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iButton = iExtendedElement<HTMLButtonElement> & {
  type: BUTTON_TYPES;
  maxWidth: boolean;
};

const defaults: iButton = {
  maxWidth: false,
  type: BUTTON_TYPES.CONTRAST,
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = partializeClasses({
    button: cn(
      'comp-button',
      props.type === BUTTON_TYPES.DISABLED
        ? 'clr-bg-disabled'
        : props.type === BUTTON_TYPES.ERROR
        ? 'clr-bg-error'
        : props.type === BUTTON_TYPES.INVISIBLE
        ? null
        : props.type === BUTTON_TYPES.PANEL
        ? 'comp-button_panel'
        : props.type === BUTTON_TYPES.CONTRAST
        ? 'clr-bg-input'
        : 'clr-bg-input',
      props.class
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
