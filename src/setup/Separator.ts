import { applyDefaults, cn } from '../../deps.ts';
import { iSeparator } from '../types/props.ts';

export default (props: Partial<iSeparator>) => {
  const defaults: iSeparator = {
    children: undefined,
  };

  const p = applyDefaults<iSeparator>(defaults, props);

  const classes = {
    separator: cn('separator border-b-1 clr-border mt-8 mb-10'),
  };

  return { c: classes, ...p };
};
