import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';

export type iPanel = iComponent<HTMLDivElement>;

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = partializeClasses({
    panel: opt(
      cn('comp-panel clr-bg-panel'),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
