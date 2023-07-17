import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iSeparator = iExtendedElement<HTMLHRElement>;

export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = partializeClasses({
    separator: opt(cn('comp-separator'), p.class, p.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
