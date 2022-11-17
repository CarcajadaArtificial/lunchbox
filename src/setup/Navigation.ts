import { applyDefaults, cn } from '../../deps.ts';
import { iNavigation } from '../types/props.ts';

const defaults: iNavigation = {
  children: null,
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const classes = {
    wrapper: cn('h-10 relative z-10'),
    nav: cn('py-2 w-full clr-bg-primary fixed border-b-1 clr-border'),
    title: cn('flex justify-between'),
  };

  return { c: classes, ...p };
};
