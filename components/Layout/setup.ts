import { cn } from '../../deps.ts';
import { applyDefaults } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iLayout = iExtendedElement<HTMLDivElement> & {
  type: LAYOUT_TYPES;
  fwd: Partial<{
    module: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iLayout = {
  type: LAYOUT_TYPES.FULL,
  fwd: {},
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const classes = {
    layout: cn(`comp-grid comp-layout-${p.type}`, p.class),
    module: cn('comp-layout-module', p.fwd.module?.class),
  };

  return { c: classes, ...p };
};
