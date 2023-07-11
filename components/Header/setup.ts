import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iHeader = iExtendedElement & {
  layout_type: LAYOUT_TYPES | null;
  banner: boolean;
  fwd: Partial<{
    layout: iFwd<HTMLDivElement>;
    panel: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iHeader = {
  layout_type: null,
  banner: false,
  fwd: {},
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('comp-header', p.class),
    layout: cn(p.fwd.layout?.class),
    panel: cn(p.banner ? 'comp-header_banner' : null, p.fwd.panel?.class),
  };

  return { c: classes, ...p };
};
