import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement, iFwd } from '../../src/element.ts';

export type iCard = iExtendedElement<HTMLDivElement> & {
  fwd?: Partial<{
    panel: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCard = {
  children: undefined,
  fwd: {},
};

export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const classes = {
    card: cn('comp-card clr-bg-panel', props.class),
    panel: cn('', props.fwd?.panel?.class),
  };

  return { c: classes, ...p };
};
