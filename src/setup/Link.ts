import { applyDefaults, cn } from '../../deps.ts';
import { iLink } from '../types/props.ts';

export default (props: Partial<iLink>) => {
  const defaults: iLink = {
    children: undefined,
    nostyle: false,
  };

  const p = applyDefaults<iLink>(defaults, props);

  const classes = {
    link: cn(p.nostyle ? null : 'clr-txt-contrast underline'),
  };

  return { c: classes, ...p };
};
