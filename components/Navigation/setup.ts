import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iNavigation = iExtendedElement & {
  fixed: boolean;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    panel: iFwd<HTMLDivElement>;
    layout: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iNavigation = {
  fixed: false,
  fwd: {},
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const classes = {
    nav: cn('comp-navigation', p.class),
    wrapper: cn('comp-navigation_wrapper', p.fwd.wrapper?.class),
    panel: cn('', p.fwd.panel?.class),
    layout: cn('', p.fwd.layout?.class),
  };

  return { c: classes, ...p };
};
