import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { css } from '../../deps.ts';

export type iKbd = iComponent;

const style = {
  kbd: css`
    background-color: var(--clr-bg-panel-50);
    padding: var(--s-quarter) var(--s-three-eights);
    position: relative;
    bottom: var(--s-eighth);
    border-radius: var(--s-eighth);
    border-bottom: var(--s-eighth) solid var(--clr-bg-panel);
  `,
};

export default (props: Partial<iKbd>) => {
  const p = props;

  const classes = partializeClasses({
    kbd: opt(
      cn(style.kbd, 'txt-small'),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
