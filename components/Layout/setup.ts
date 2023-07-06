import { applyDefaults, cn } from '../../deps.ts';
import { iLayout } from '../../src/props.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';

const defaults: iLayout = {
  type: LAYOUT_TYPES.FULL,
  children: [],
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const classes = {
    layout: cn(`grid layout-${p.type}`),
    module: cn('layout-module'),
  };

  return { c: classes, ...p };
};
