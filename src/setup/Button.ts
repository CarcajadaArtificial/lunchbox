import { applyDefaults, cn } from '../../deps.ts';
import { BUTTON_COLORS } from '../types/enums.ts';
import { iButton } from '../types/props.ts';
import { button } from './shared.ts';

const defaults: iButton = {
  maxWidth: false,
  color: BUTTON_COLORS.PRIMARY,
  outline: true,
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = {
    button: cn(button(p.color, p.outline), props.class),
  };

  return { c: classes, ...p };
};
