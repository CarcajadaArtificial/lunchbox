import { cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iPanel = iExtendedElement<HTMLDivElement>;

export default (props: Partial<iPanel>) => {
  const p = props;

  const classes = {
    panel: cn('comp-panel clr-bg-panel', p.class),
  };

  return { c: classes, ...p };
};
