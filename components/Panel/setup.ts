import { cn } from '../../deps.ts';
import { iPanel } from '../../src/props.ts';

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = {
    panel: cn('comp-panel clr-bg-panel', p.class),
  };

  return { c: classes, ...p };
};
