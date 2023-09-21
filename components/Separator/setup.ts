import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { css } from 'resin';

export type iSeparator = iComponent<HTMLHRElement>;

const style = {
  separator: css`
    margin-top: var(--s-one-and-half);
    height: var(--s-one-and-half);
  `,
};

export default (props: Partial<iSeparator>) => {
  const p = props;

  const classes = partializeClasses({
    separator: opt(cn(style.separator), p.class, p.nostyle || p.nostyleAll),
  });

  delete p.class;
  return { c: classes, ...p };
};
