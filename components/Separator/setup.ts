import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iSeparator = iExtendedElement<HTMLHRElement>;

export default (props: Partial<iSeparator>) => {
  const defaults: iSeparator = {
    children: undefined,
  };

  const p = applyDefaults<iSeparator>(defaults, props);

  const classes = {
    separator: cn('comp-separator'),
  };

  return { c: classes, ...p };
};
