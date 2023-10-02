import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { css } from '../../deps.ts';

export type iPanel = iComponent<HTMLDivElement>;

const style = {
  panel: css`
    background-color: var(--clr-bg-panel);

    .lbx-btn-invisible {
      background-color: var(--clr-bg-panel);
    }

    .lbx-btn-panel {
      background-color: var(--clr-bg-page);
    }
  `,
};

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = partializeClasses({
    panel: opt(
      cn(style.panel),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
