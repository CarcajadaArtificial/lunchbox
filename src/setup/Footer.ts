import { applyDefaults, cn } from '../../deps.ts';
import { LAYOUT_TYPES } from '../types/enums.ts';
import { iFooter } from '../types/props.ts';

export default (props: Partial<iFooter>) => {
  const defaults: iFooter = {
    children: undefined,
    madeWithFresh: true,
    layout_type: LAYOUT_TYPES.LEFT,
  };

  const p = applyDefaults<iFooter>(defaults, props);

  const classes = {
    footer: cn('pt-4 pb-4 clr-bg-secondary border-t-1 clr-border'),
  };

  return { c: classes, ...p };
};
