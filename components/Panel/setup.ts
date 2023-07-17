import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iPanel = iExtendedElement<HTMLDivElement>;

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = partializeClasses({
    panel: opt(cn('comp-panel clr-bg-panel'), p.class, p.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
