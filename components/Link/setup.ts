import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';

export type iLink = iComponent<HTMLAnchorElement>;

export default (props: Partial<iLink>) => {
  const p = props;

  const classes = partializeClasses({
    link: opt(
      cn('comp-link'),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
