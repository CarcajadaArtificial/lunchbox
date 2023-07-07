import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iMain = iExtendedElement & {
  layout_type?: LAYOUT_TYPES;
};

export default (props: Partial<iMain>) => {
  const defaults: iMain = {
    children: undefined,
  };

  const p = applyDefaults<iMain>(defaults, props);

  const classes = {
    main: cn('comp-main clr-bg-page'),
  };

  return { c: classes, ...p };
};
