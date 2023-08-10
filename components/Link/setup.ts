import { cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';

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
