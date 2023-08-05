import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { GRADIENT_PATTERNS, LAYOUT_TYPES } from '../../src/enums.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';
import { iLink } from '../Link/setup.ts';
import { iGradient } from '../Gradient/setup.ts';

export type iFooter = iComponent & {
  madeWithFresh: boolean;
  layout_type: LAYOUT_TYPES | null;
  gradient_pattern: GRADIENT_PATTERNS | null;
  fwd: Partial<{
    layout: iLayout;
    panel: iPanel;
    wrapper: iFwd<HTMLDivElement>;
    gradient: iGradient;
    badge_link: iLink;
    badge_light: iFwd<HTMLImageElement>;
    badge_dark: iFwd<HTMLImageElement>;
  }>;
};

const defaults: iFooter = {
  madeWithFresh: false,
  gradient_pattern: null,
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children) ? props.children : [props.children]
    : [];

  const p = applyDefaults<iFooter>(defaults, props);

  const { layout, wrapper, panel, badge_link, badge_dark, badge_light } = p.fwd;

  const classes = partializeClasses({
    footer: opt(cn('comp-footer'), p.class, p.nostyle || p.nostyleAll),
    wrapper: cn(wrapper?.class),
    layout: cn(layout?.class),
    panel: cn(panel?.class),
    gradient: cn(panel?.class),
    badge_link: opt(
      cn('made-with-fresh'),
      badge_link?.class,
      badge_link?.nostyle || p.nostyleAll,
    ),
    badge_light: opt(
      cn('fresh-badge light'),
      badge_light?.class,
      badge_light?.nostyle || p.nostyleAll,
    ),
    badge_dark: opt(
      cn('fresh-badge dark'),
      badge_dark?.class,
      badge_dark?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
