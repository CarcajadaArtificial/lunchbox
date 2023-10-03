import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';
import { css } from 'resin';

export type iNavigation = iComponent & {
  fixed: boolean;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    panel: Partial<iPanel>;
    layout: Partial<iLayout>;
  }>;
};

const defaults: iNavigation = {
  fixed: false,
  fwd: {},
};

const style = {
  nav: css`
    padding: var(--s-single) 0;
  `,
  wrapper: css`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  `,
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const { wrapper, panel, layout } = p.fwd;

  const classes = partializeClasses({
    nav: opt(cn(style.nav), p.class, p.nostyle || p.nostyleAll),
    wrapper: opt(
      cn(style.wrapper),
      wrapper?.class,
      wrapper?.nostyle || p.nostyleAll,
    ),
    panel: cn(panel?.class),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
