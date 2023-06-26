import { cn } from '../../deps.ts';
import { iPanel } from '../types/props.ts';

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = {
    panel: cn('comp-panel clr-bg-panel', p.class),
  };

  return { c: classes, ...p };
};
