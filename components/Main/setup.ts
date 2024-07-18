import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { css } from '../../deps.ts';

export type iMain = iComponent & {
  layout_type: LayoutTypes;
  fwd: Partial<{
    layout: Partial<iLayout>;
  }>;
};

const defaults: iMain = {
  layout_type: 'default',
  fwd: {},
};

const style = {
  main: css`
    padding: var(--s-triple) 0;
    background-color: var(--clr-bg-page);
  `,
};

export default (props: Partial<iMain>) => {
  const p = apDef<iMain>(defaults, props);

  const classes = part({
    main: o(style.main, { ...p }),
    layout: o('', { ...p.fwd.layout }),
  });

  delete p.class;
  return { c: classes, ...p };
};
