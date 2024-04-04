import {
  applyDefaults,
  cn,
  opt,
  partializeClasses,
} from '../../../../src/utils.ts';
import { iComponent, iFwd } from '../../../../src/types.ts';
import { GRADIENT_PATTERNS, LAYOUT_TYPES } from '../../../../src/enums.ts';
import { iLayout } from '../../../../src/components/atoms/Layout/setup.ts';
import { iPanel } from '../../../../src/components/atoms/Panel/setup.ts';
import { iGradient } from '../../../../components/Gradient/setup.ts';
import { css } from '../../../../deps.ts';

export type iHeader = iComponent & {
  layout_type: LAYOUT_TYPES | null;
  banner: boolean;
  gradient_pattern: GRADIENT_PATTERNS | null;
  fwd: Partial<{
    layout: Partial<iLayout>;
    panel: Partial<iPanel>;
    wrapper: iFwd<HTMLDivElement>;
    gradient: Partial<iGradient>;
  }>;
};

const defaults: iHeader = {
  layout_type: null,
  banner: false,
  gradient_pattern: null,
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
  const p = applyDefaults<iHeader>(defaults, props);

  const { layout, panel, wrapper, gradient } = p.fwd;

  const classes = partializeClasses({
    header: opt(cn(style.header), p.class, p.nostyle || p.nostyleAll),
    layout: cn(layout?.class),
    wrapper: cn(wrapper?.class),
    gradient: cn(gradient?.class),
    panel: opt(
      cn(p.banner ? style.header_banner : null),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
