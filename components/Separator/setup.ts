// import { applyDefaults, cn } from '../../deps.ts';
import { cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iSeparator = iExtendedElement<HTMLHRElement>;

// const defaults: iSeparator = {};

export default (props: Partial<iSeparator>) => {
  const p = props;
  // const p = applyDefaults<iSeparator>(defaults, props);

  const classes = {
    separator: cn('comp-separator'),
  };

  return { c: classes, ...p };
};
