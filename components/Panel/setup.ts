import { cn } from '../../deps.ts';
import { partializeClasses } from '../../src/utils.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iPanel = iExtendedElement<HTMLDivElement>;

// const defaults: iPanel = {};

export default (props: Partial<iPanel>) => {
  const p = props;
  // const p = applyDefaults<iSeparator>(defaults, props);

  const classes = partializeClasses({
    panel: cn('comp-panel clr-bg-panel', p.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
