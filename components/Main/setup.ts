import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { css } from '../../deps.ts';

export type iMain = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  fwd: Partial<{
    layout: Partial<iLayout>;
  }>;
};

const defaults: iMain = {
  layout_type: null,
  fwd: {},
};

const style = {
  main: css`
    padding: var(--s-triple) 0;
    background-color: var(--clr-bg-page);
  `,
};

export default (props: Partial<iMain>) => {
  const p = applyDefaults<iMain>(defaults, props);

  const { layout } = p.fwd;

  const classes = partializeClasses({
    main: opt(cn(style.main), p.class, p.nostyle || p.nostyleAll),
    layout: cn(layout?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
