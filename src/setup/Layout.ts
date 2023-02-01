import { applyDefaults, cn } from '../../deps.ts';
import { iLayout } from '../types/props.ts';
import { LAYOUT_MARGINS, LAYOUT_TYPES } from '../types/enums.ts';

const defaults: iLayout = {
  type: LAYOUT_TYPES.FULL,
  margin: LAYOUT_MARGINS.FULL,
  children: [],
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(defaults, props);

  const classes = {
    layout: cn(`h-full layout-${p.type} layout-margin-${p.margin}`),
    blocks: cn('layout-block'),
  };

  return { c: classes, ...p };
};
