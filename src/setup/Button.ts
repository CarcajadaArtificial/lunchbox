import { applyDefaults, cn } from '../../deps.ts';
import { iButton } from '../types/props.ts';
import { button } from './shared.ts';

const defaults: iButton = {
  maxWidth: false,
  type: 'default',
  color: 'primary',
  outline: true,
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = {
    button: cn(button(p.color, p.outline)),
  };

  return { c: classes, ...p };
};
