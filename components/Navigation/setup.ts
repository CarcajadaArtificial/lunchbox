import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iNavigation = iExtendedElement & {
  fixed: boolean;
};

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
