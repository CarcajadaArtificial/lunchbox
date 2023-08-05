import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';

export type iSeparator = iComponent<HTMLHRElement>;

export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = partializeClasses({
    separator: opt(cn('comp-separator'), p.class, p.nostyle || p.nostyleAll),
  });

  delete p.class;
  return { c: classes, ...p };
};
