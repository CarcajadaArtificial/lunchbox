import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iMain = iExtendedElement & {
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iMain = {
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iMain>) => {
  const p = applyDefaults<iMain>(defaults, props);

  const classes = partializeClasses({
    main: cn('comp-main clr-bg-page', p.class),
    layout: cn(p.fwd.layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
