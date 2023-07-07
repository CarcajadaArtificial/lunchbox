// import { applyDefaults, cn } from '../../deps.ts';
import { cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iPanel = iExtendedElement<HTMLDivElement>;

// const defaults: iPanel = {};

export default (props: Partial<iPanel>) => {
  const p = props;
  // const p = applyDefaults<iSeparator>(defaults, props);

  const classes = {
    panel: cn('comp-panel clr-bg-panel', p.class),
  };

  return { c: classes, ...p };
};
