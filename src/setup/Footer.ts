import { applyDefaults, cn } from '../../deps.ts';
import { iFooter } from '../types/props.ts';

export default (props: Partial<iFooter>) => {
  const defaults: iFooter = {
    children: undefined,
    madeWithFresh: true,
  };

  const p = applyDefaults<iFooter>(defaults, props);

  const classes = {
    footer: cn('pt-4 pb-4 mt-10 border-t-1 clr-border'),
  };

  return { c: classes, ...p };
};
