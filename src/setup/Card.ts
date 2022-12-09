import { applyDefaults, cn } from '../../deps.ts';
import { iCard } from '../types/props.ts';

export default (props: Partial<iCard>) => {
  const defaults: iCard = {
    children: undefined,
  };

  const p = applyDefaults<iCard>(defaults, props);

  const classes = {
    card: cn('card clr-bg-secondary p-10 border border-1 clr-border'),
  };

  return { c: classes, ...p };
};
