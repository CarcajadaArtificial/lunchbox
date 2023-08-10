import { cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';

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
