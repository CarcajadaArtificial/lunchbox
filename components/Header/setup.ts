import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { LayoutTypes } from '../../src/enums.ts';
import { iLayout } from '../Layout/setup.ts';
import { iPanel } from '../Panel/setup.ts';
import { css } from '../../deps.ts';

export type iHeader = iComponent & {
  layout_type: LayoutTypes;
  banner: boolean;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iHeader = {
  layout_type: 'default',
  banner: false,
  fwd: {},
};

const style = {
  header: css`
    padding: var(--s-triple) 0;
  `,

  header_banner: css`
    min-height: 90dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

export default (props: Partial<iHeader>) => {
  const p = apDef<iHeader>(defaults, props);

  const classes = part({
    header: o(style.header, { ...p }),
    layout: o('', { ...p.fwd.layout }),
    wrapper: o('', { ...p.fwd.wrapper }),
    panel: o(p.banner ? style.header_banner : '', { ...p.fwd.panel }),
  });

  delete p.class;
  return { c: classes, ...p };
};
