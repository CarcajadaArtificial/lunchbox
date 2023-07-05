import { applyDefaults, cn } from '../../deps.ts';
import { iCard } from '../types/props.ts';

export default (props: Partial<iCard>) => {
  const defaults: iCard = {
    children: undefined,
    fwd: {},
  };

  const p = applyDefaults<iCard>(defaults, props);

  const classes = {
    card: cn('comp-card clr-bg-panel', props.class),
    panel: cn('', props.fwd?.panel?.class),
  };

  return { c: classes, ...p };
};
