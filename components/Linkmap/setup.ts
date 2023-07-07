import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iLinkmapitem = {
  name: string;
  url?: string;
  children?: iLinkmapitem[];
};

export type iLinkmap = iExtendedElement<HTMLDivElement> & {
  links: iLinkmapitem[] | [];
};

export default (props: Partial<iLinkmap>) => {
  const defaults: iLinkmap = {
    links: [],
  };

  const p = applyDefaults<iLinkmap>(defaults, props);

  const classes = {
    component: cn('comp-linkmap'),
    list: cn('comp-linkmap_list'),
  };

  return { c: classes, ...p };
};
