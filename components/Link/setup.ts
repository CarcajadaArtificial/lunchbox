import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iLink = iExtendedElement<HTMLAnchorElement>;

export default (props: Partial<iLink>) => {
  const p = props;

  const classes = partializeClasses({
    link: opt(cn('comp-link clr-txt-personality'), p.class, p.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
