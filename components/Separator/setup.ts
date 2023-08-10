import { cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';

export type iSeparator = iComponent<HTMLHRElement>;

export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = partializeClasses({
    separator: opt(cn('comp-separator'), p.class, p.nostyle || p.nostyleAll),
  });

  delete p.class;
  return { c: classes, ...p };
};
