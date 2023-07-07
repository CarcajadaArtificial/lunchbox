import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

export type iLayout = iExtendedElement<HTMLDivElement> & {
  type: LAYOUT_TYPES;
};

const defaults: iLayout = {
  type: LAYOUT_TYPES.FULL,
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const classes = {
    layout: cn(`grid layout-${p.type}`),
    module: cn('layout-module'),
  };

  return { c: classes, ...p };
};
