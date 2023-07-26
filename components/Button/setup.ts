import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { BUTTON_TYPES } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';

export type iButton = iComponent<HTMLButtonElement> & {
  type: BUTTON_TYPES;
  maxWidth: boolean;
};

const defaults: iButton = {
  maxWidth: false,
  type: 'contrast',
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = partializeClasses({
    button: opt(
      cn(
        'comp-button',
        props.type === 'disabled'
          ? 'clr-bg-disabled'
          : props.type === 'error'
          ? 'clr-bg-error'
          : props.type === 'invisible'
          ? 'comp-button_invisible'
          : props.type === 'panel'
          ? 'comp-button_panel'
          : props.type === 'contrast'
          ? 'clr-bg-input'
          : 'clr-bg-input',
      ),
      p.class,
      p.nostyle,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
