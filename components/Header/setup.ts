import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent, iFwd } from 'types';
import { GRADIENT_PATTERNS, LAYOUT_TYPES } from 'enums';
import { iLayout } from '../Layout/setup.ts';
import { iPanel } from '../Panel/setup.ts';
import { iGradient } from '../Gradient/setup.ts';

export type iHeader = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  banner: boolean;
  gradient_pattern: GRADIENT_PATTERNS | null;
  fwd: Partial<{
    layout: iLayout;
    panel: iPanel;
    wrapper: iFwd<HTMLDivElement>;
    gradient: iGradient;
  }>;
};

const defaults: iHeader = {
  layout_type: null,
  banner: false,
  gradient_pattern: null,
  fwd: {},
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const { layout, panel, wrapper, gradient } = p.fwd;

  const classes = partializeClasses({
    header: opt(cn('comp-header'), p.class, p.nostyle || p.nostyleAll),
    layout: cn(layout?.class),
    wrapper: cn(wrapper?.class),
    gradient: cn(gradient?.class),
    panel: opt(
      cn(p.banner ? 'comp-header_banner' : null),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
