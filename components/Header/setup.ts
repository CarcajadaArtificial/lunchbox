import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { iPanel } from '../Panel/setup.ts';

import { css } from '../../deps.ts';

export type iHeader = iComponent & {
  layout_type: LayoutTypes;
  banner: boolean;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iHeader = {
  layout_type: 'default',
  banner: false,
  fwd: {},
};

const style = {
  header: css`
    padding: var(--s-triple) 0;
  `,

  header_banner: css`
    min-height: 90dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const { layout, panel, wrapper } = p.fwd;

  const classes = partializeClasses({
    header: opt(cn(style.header), p.class, p.nostyle || p.nostyleAll),
    layout: cn(layout?.class),
    wrapper: cn(wrapper?.class),
    panel: opt(
      cn(p.banner ? style.header_banner : null),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
