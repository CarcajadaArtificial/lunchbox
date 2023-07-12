import { cn } from '../../deps.ts';
import { partializeClasses } from '../../src/utils.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iSeparator = iExtendedElement<HTMLHRElement>;

// const defaults: iSeparator = {};

export default (props: Partial<iSeparator>) => {
  const p = props;
  // const p = applyDefaults<iSeparator>(defaults, props);

  const classes = partializeClasses({
    separator: cn('comp-separator'),
  });

  delete p.class;
  return { c: classes, ...p };
};
