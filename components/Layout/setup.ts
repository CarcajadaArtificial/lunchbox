import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
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

  const { module } = p.fwd;

  const classes = partializeClasses({
    layout: opt(cn(`comp-grid comp-layout-${p.type}`), p.class, p.nostyle),
    module: opt(cn('comp-layout-module'), module?.class, module?.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
