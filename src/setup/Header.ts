import { applyDefaults, cn } from '../../deps.ts';
import { LAYOUT_TYPES } from '../types/enums.ts';
import { iHeader } from '../types/props.ts';

export default (props: Partial<iHeader>) => {
  const defaults: iHeader = {
    children: undefined,
    layout_type: LAYOUT_TYPES.LEFT,
  };

  const p = applyDefaults<iHeader>(defaults, props);

  const classes = {
    header: cn('pt-20 pb-10 border-b-1 clr-border'),
    container: cn('clr-bg-secondary'),
  };

  return { c: classes, ...p };
};
