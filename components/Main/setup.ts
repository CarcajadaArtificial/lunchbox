import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';
import { LAYOUT_TYPES } from 'enums';
import { iLayout } from '../Layout/setup.ts';

export type iMain = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: iLayout;
  }>;
};

const defaults: iMain = {
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iMain>) => {
  const p = applyDefaults<iMain>(defaults, props);

  const { layout } = p.fwd;

  const classes = partializeClasses({
    main: opt(cn('comp-main clr-bg-page'), p.class, p.nostyle || p.nostyleAll),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
