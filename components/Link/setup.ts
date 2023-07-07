import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iLink = iExtendedElement<HTMLAnchorElement> & {
  nostyle: boolean;
};

const defaults: iLink = {
  nostyle: false,
};

export default (props: Partial<iLink>) => {
  const p = applyDefaults<iLink>(defaults, props);

  const classes = {
    link: cn(p.nostyle ? null : 'comp-link clr-txt-personality', p.class),
  };

  return { c: classes, ...p };
};
