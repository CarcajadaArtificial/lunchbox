import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iFooter = iExtendedElement & {
  madeWithFresh: boolean;
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: iFwd<HTMLDivElement>;
    panel: iFwd<HTMLDivElement>;
    badge_link: iFwd<HTMLAnchorElement>;
    badge_light: iFwd<HTMLImageElement>;
    badge_dark: iFwd<HTMLImageElement>;
  }>;
};

const defaults: iFooter = {
  madeWithFresh: false,
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iFooter>) => {
  props.children = props.children
    ? Array.isArray(props.children)
      ? props.children
      : [props.children]
    : [];

  const p = applyDefaults<iFooter>(defaults, props);

  const classes = {
    footer: cn('comp-footer', p.class),
    layout: cn('', p.fwd.layout?.class),
    panel: cn('', p.fwd.panel?.class),
    badge_link: cn('made-with-fresh', p.fwd.badge_link?.class),
    badge_light: cn('fresh-badge light', p.fwd.badge_light?.class),
    badge_dark: cn('fresh-badge dark', p.fwd.badge_dark?.class),
  };

  return { c: classes, ...p };
};
