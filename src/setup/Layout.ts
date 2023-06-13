import { applyDefaults, cn } from '../../deps.ts';
import { iLayout } from '../types/props.ts';
import { LAYOUT_TYPES } from '../types/enums.ts';

const defaults: iLayout = {
  type: LAYOUT_TYPES.FULL,
  children: [],
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const classes = {
    layout: cn(`grid layout-${p.type}`),
    blocks: cn('layout-mdoule'),
  };

  return { c: classes, ...p };
};
