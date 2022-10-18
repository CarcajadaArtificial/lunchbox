import { applyDefaults, cn } from '../../deps.ts';
import { iLayout } from '../types/props.ts';

const layoutDefaults: iLayout = {
  type: 'full',
  margin: 'full',
  children: [],
};

export default (props: Partial<iLayout>) => {
  const p = applyDefaults<iLayout>(layoutDefaults, props);

  const layoutClassnames = {
    layout: cn(`layout-${p.type} layout-margin-${p.margin}`),
    blocks: cn('layout-block'),
  };

  return { c: layoutClassnames, ...p };
};
