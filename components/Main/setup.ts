import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iMain = iExtendedElement & {
  layout_type: LAYOUT_TYPES | null;
};

const defaults: iMain = {
  layout_type: null,
};

export default (props: Partial<iMain>) => {
  const p = applyDefaults<iMain>(defaults, props);

  const classes = {
    main: cn('comp-main clr-bg-page'),
  };

  return { c: classes, ...p };
};
