import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { iPanel } from '../Panel/setup.ts';

export type iCard = iComponent<HTMLDivElement> & {
  fwd: Partial<{
    panel: iPanel;
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
