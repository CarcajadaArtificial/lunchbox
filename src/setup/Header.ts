import { applyDefaults, cn } from '../../deps.ts';
import { iHeader } from '../types/props.ts';

export default (props: Partial<iHeader>) => {
  const defaults: iHeader = {
    type: undefined,
  };

  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('mt-20 mb-10'),
  };

  return { c: classes, ...p };
};
