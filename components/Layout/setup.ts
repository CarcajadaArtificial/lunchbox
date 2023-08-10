import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent, iFwd } from 'types';
import { LAYOUT_TYPES } from 'enums';

export type iLayout = iComponent<HTMLDivElement> & {
  type: LAYOUT_TYPES;
  fwd: Partial<{
    module: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iLayout = {
  type: 'full',
  fwd: {},
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const { module } = p.fwd;

  const classes = partializeClasses({
    layout: opt(
      cn(`comp-grid comp-layout-${p.type}`),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    module: opt(
      cn('comp-layout-module'),
      module?.class,
      module?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
