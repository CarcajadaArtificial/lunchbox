import {
  applyDefaults,
  cn,
  opt,
  partializeClasses,
} from '../../../../src/utils.ts';
import { iComponent, iFwd } from '../../../../src/types.ts';
import { iPanel } from '../../../../src/components/atoms/Panel/setup.ts';
import { iLayout } from '../../../../src/components/atoms/Layout/setup.ts';
import { css } from 'resin';

export type iNavigation = iComponent & {
  fixed: boolean;
  compact: boolean;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    panel: Partial<iPanel>;
    layout: Partial<iLayout>;
  }>;
};

const defaults: iNavigation = {
  fixed: false,
  compact: false,
  fwd: {},
};

const style = {
  nav: css`
    padding: var(--s-single) 0;
  `,
  compact: css`
    padding: var(--s-half) 0;
  `,
  wrapper: css`
    top: 0;
    width: 100%;
    z-index: 20;
  `,
};

export default (props: Partial<iNavigation>) => {
  const p = applyDefaults<iNavigation>(defaults, props);

  const { wrapper, panel, layout } = p.fwd;

  const classes = partializeClasses({
    nav: opt(
      cn(p.compact ? style.compact : style.nav),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    wrapper: opt(
      cn(style.wrapper, p.fixed ? 'fixed' : null),
      wrapper?.class,
      wrapper?.nostyle || p.nostyleAll,
    ),
    panel: cn(panel?.class),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
