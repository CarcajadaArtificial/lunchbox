import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iHeader = iExtendedElement & {
  layout_type: LAYOUT_TYPES | null;
};

const defaults: iHeader = {
  layout_type: null,
};

export default (props: Partial<iHeader>) => {
  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('comp-header'),
  };

  return { c: classes, ...p };
};