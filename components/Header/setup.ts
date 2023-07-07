import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iHeader = iExtendedElement & {
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: iFwd<HTMLDivElement>;
    panel: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iHeader = {
  layout_type: null,
  fwd: {},
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('comp-header', p.class),
    layout: cn('', p.fwd.layout?.class),
    panel: cn('', p.fwd.panel?.class),
  };

  return { c: classes, ...p };
};
