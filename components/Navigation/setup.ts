import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';

export type iNavigation = iComponent & {
  fixed: boolean;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    panel: iPanel;
    layout: iLayout;
  }>;
};

const defaults: iNavigation = {
  fixed: false,
  fwd: {},
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const { wrapper, panel, layout } = p.fwd;

  const classes = partializeClasses({
    nav: opt(cn('comp-navigation'), p.class, p.nostyle || p.nostyleAll),
    wrapper: opt(
      cn('comp-navigation_wrapper'),
      wrapper?.class,
      wrapper?.nostyle || p.nostyleAll,
    ),
    panel: cn(panel?.class),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
