import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iPanel } from '../Panel/setup.ts';
import { iLayout } from '../Layout/setup.ts';
import { iLink } from '../Link/setup.ts';
import { css } from '../../deps.ts';

export type iFooter = iComponent & {
  madeWithFresh: boolean;
  layout_type: LayoutTypes | null;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
    badge_link: Partial<iLink>;
    badge_light: iFwd<HTMLImageElement>;
    badge_dark: iFwd<HTMLImageElement>;
  }>;
};

const defaults: iFooter = {
  madeWithFresh: false,
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

  const p = apDef<iFooter>(defaults, props);

  const classes = part({
    footer: o(style.footer, { ...p }),
    wrapper: o('', { ...p.fwd.wrapper }),
    layout: o('', { ...p.fwd.layout }),
    panel: o('', { ...p.fwd.panel }),
    gradient: o('', { ...p.fwd.panel }),
    badge_link: o('', { ...p.fwd.badge_link }),
    badge_light: o([style.footer_fresh_badge, 'lbx-fresh-badge-light'], {
      ...p.fwd.badge_light,
    }),
    badge_dark: o([style.footer_fresh_badge, 'lbx-fresh-badge-dark'], {
      ...p.fwd.badge_dark,
    }),
  });

  delete p.class;
  return { c: classes, ...p };
};
