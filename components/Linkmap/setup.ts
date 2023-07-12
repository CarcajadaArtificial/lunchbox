import { cn } from '../../deps.ts';
import { applyDefaults } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iLinkmapitem = {
  name: string;
  url?: string;
  children?: iLinkmapitem[];
};

export type iLinkmap = iExtendedElement<HTMLDivElement> & {
  links: iLinkmapitem[] | [];
  fwd: Partial<{
    list: iFwd<HTMLUListElement>;
    item: iFwd<HTMLLIElement>;
    link: iFwd<HTMLAnchorElement>;
    text: iFwd<HTMLSpanElement>;
  }>;
};

const defaults: iLinkmap = {
  links: [],
  fwd: {},
};

export default (props: Partial<iLinkmap>) => {
  const p = applyDefaults<iLinkmap>(defaults, props);

  const classes = {
    linkmap: cn('comp-linkmap', p.class),
    list: cn('comp-linkmap_list', p.fwd.list?.class),
    item: cn('', p.fwd.item?.class),
    link: cn('', p.fwd.link?.class),
    text: cn('', p.fwd.text?.class),
  };

  return { c: classes, ...p };
};
