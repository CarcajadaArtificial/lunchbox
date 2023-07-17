import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { GRADIENT_PATTERNS, LAYOUT_TYPES } from '../../src/enums.ts';
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
    header: opt(cn('comp-header'), p.class, p.nostyle),
    layout: cn(layout?.class),
    wrapper: cn(wrapper?.class),
    gradient: cn(gradient?.class),
    panel: opt(cn(p.banner ? 'comp-header_banner' : null), panel?.class, panel?.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
