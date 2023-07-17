import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';

export type iCard = iComponent<HTMLDivElement> & {
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
    gradient: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCard = {
  fwd: {},
};

export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const { wrapper, gradient } = p.fwd;

  const classes = partializeClasses({
    card: opt(cn('comp-card clr-bg-panel'), p.class, p.nostyle),
    wrapper: opt(cn('comp-card_wrapper'), wrapper?.class, wrapper?.nostyle),
    gradient: opt(
      cn('comp-card_gradient comp-gradient comp-gradient_zigzag'),
      gradient?.class,
      gradient?.nostyle
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
