import { applyDefaults, cn } from '../../deps.ts';
import { iCard } from '../types/props.ts';

export default (props: Partial<iCard>) => {
  const defaults: iCard = {
    children: undefined,
  };

  const p = applyDefaults<iCard>(defaults, props);

  const classes = {
    card: cn('card p-10'),
  };

  return { c: classes, ...p };
};
