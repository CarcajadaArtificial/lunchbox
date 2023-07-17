import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iCard = iExtendedElement<HTMLDivElement> & {
  fwd: Partial<{
    panel: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCard = {
  fwd: {},
};

export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const { panel } = p.fwd;

  const classes = partializeClasses({
    card: opt(cn('comp-card clr-bg-panel'), p.class, p.nostyle),
    panel: cn(panel?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
