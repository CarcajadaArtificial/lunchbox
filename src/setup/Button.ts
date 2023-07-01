import { applyDefaults, cn } from '../../deps.ts';
import { BUTTON_TYPES } from '../types/enums.ts';
import { iButton } from '../types/props.ts';

const defaults: iButton = {
  maxWidth: false,
  type: BUTTON_TYPES.CONTRAST,
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = {
    button: cn(
      'comp-button',
      props.type === BUTTON_TYPES.CONTRAST
        ? 'clr-bg-input'
        : props.type === BUTTON_TYPES.ERROR
        ? 'clr-bg-error'
        : null,
      props.class
    ),
  };

  return { c: classes, ...p };
};
