import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { GRADIENT_PATTERNS } from '../../src/enums.ts';
import { iGradient } from '../Gradient/setup.ts';

export type iCard = iComponent<HTMLDivElement> & {
  card_title: string | null;
  top_gradient_pattern: GRADIENT_PATTERNS | null;
  bottom_gradient_pattern: GRADIENT_PATTERNS | null;
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    gradient: iFwd<HTMLDivElement>;
    top_gradient: iGradient;
    bottom_gradient: iGradient;
  }>;
};

const defaults: iCard = {
  card_title: null,
  top_gradient_pattern: null,
  bottom_gradient_pattern: null,
  fwd: {},
};

export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const { wrapper, gradient, top_gradient, bottom_gradient } = p.fwd;

  const classes = partializeClasses({
    card: opt(cn('comp-card clr-bg-panel'), p.class, p.nostyle),
    wrapper: opt(cn('comp-card_wrapper'), wrapper?.class, wrapper?.nostyle),
    top_gradient: opt(
      cn('comp-card_gradient'),
      top_gradient?.class,
      top_gradient?.nostyle,
    ),
    bottom_gradient: opt(
      cn('comp-card_gradient'),
      bottom_gradient?.class,
      bottom_gradient?.nostyle,
    ),
    gradient: opt(
      cn('comp-card_gradient comp-gradient comp-gradient_zigzag'),
      gradient?.class,
      gradient?.nostyle,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
