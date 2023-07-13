import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iLayout = iExtendedElement<HTMLDivElement> & {
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

  const classes = partializeClasses({
    layout: cn(`comp-grid comp-layout-${p.type}`, p.class),
    module: cn('comp-layout-module', p.fwd.module?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
