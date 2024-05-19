import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { GRADIENT_PATTERNS, LayoutTypes } from '../../src/enums.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';
import { iLink } from '../Link/setup.ts';
import { iGradient } from '../Gradient/setup.ts';
import { css } from '../../deps.ts';

export type iFooter = iComponent & {
  madeWithFresh: boolean;
  layout_type: LayoutTypes | null;
  gradient_pattern: GRADIENT_PATTERNS | null;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
    gradient: Partial<iGradient>;
    badge_link: Partial<iLink>;
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

const style = {
  footer: css`
    padding: var(--s-one-and-half) 0;
  `,

  footer_fresh_badge: css`
    margin: var(--s-third) 0;

    @media (prefers-color-scheme: dark) {
      &.lbx-fresh-badge-light {
        display: none;
      }
    }
    @media (prefers-color-scheme: light) {
      &.lbx-fresh-badge-dark {
        display: none;
      }
    }
  `,
};

export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children) ? props.children : [props.children]
    : [];

  const p = applyDefaults<iFooter>(defaults, props);

  const { layout, wrapper, panel, badge_link, badge_dark, badge_light } = p.fwd;

  const classes = partializeClasses({
    footer: opt(cn(style.footer), p.class, p.nostyle || p.nostyleAll),
    wrapper: cn(wrapper?.class),
    layout: cn(layout?.class),
    panel: cn(panel?.class),
    gradient: cn(panel?.class),
    badge_link: cn(badge_link?.class),
    badge_light: opt(
      cn(style.footer_fresh_badge, 'lbx-fresh-badge-light'),
      badge_light?.class,
      badge_light?.nostyle || p.nostyleAll,
    ),
    badge_dark: opt(
      cn(style.footer_fresh_badge, 'lbx-fresh-badge-dark'),
      badge_dark?.class,
      badge_dark?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
