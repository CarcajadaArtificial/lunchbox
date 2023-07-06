import { applyDefaults, cn } from '../../deps.ts';
import { iLinkmap } from '../../src/props.ts';

export default (props: Partial<iLinkmap>) => {
  const defaults: iLinkmap = {
    links: [],
  };

  const p = applyDefaults<iLinkmap>(defaults, props);

  const classes = {
    component: cn('comp-linkmap'),
    list: cn('comp-linkmap_list'),
  };

  return { c: classes, ...p };
};
