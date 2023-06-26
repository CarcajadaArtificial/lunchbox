import { applyDefaults, cn } from '../../deps.ts';
import { iNavigation } from '../types/props.ts';

const defaults: iNavigation = {
  children: null,
  fixed: false,
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const classes = {
    wrapper: cn('comp-navigation_wrapper'),
    nav: cn('comp-navigation'),
  };

  return { c: classes, ...p };
};
