import { applyDefaults, cn } from '../../deps.ts';
import { iHeader } from '../types/props.ts';

export default (props: Partial<iHeader>) => {
  const defaults: iHeader = {
    type: undefined,
  };

  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('pt-20 pb-10 border-b-1 clr-border'),
    container: cn('clr-bg-secondary'),
  };

  return { c: classes, ...p };
};
