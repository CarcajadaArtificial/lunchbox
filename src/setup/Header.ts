import { applyDefaults, cn } from '../../deps.ts';
import { iHeader } from '../types/props.ts';

export default (props: Partial<iHeader>) => {
  const defaults: iHeader = {
    children: undefined,
  };

  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('comp-header'),
  };

  return { c: classes, ...p };
};
