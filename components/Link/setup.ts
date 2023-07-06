import { applyDefaults, cn } from '../../deps.ts';
import { iLink } from '../../src/props.ts';

export default (props: Partial<iLink>) => {
  const defaults: iLink = {
    children: undefined,
    nostyle: false,
  };

  const p = applyDefaults<iLink>(defaults, props);

  const classes = {
    link: cn(p.nostyle ? null : 'comp-link clr-txt-personality', p.class),
  };

  return { c: classes, ...p };
};
