import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iLink } from '../Link/setup.ts';
import { iText } from '../Text/setup.ts';

export type iLinkmapitem = {
  name: string;
  url?: string;
  children?: iLinkmapitem[];
};

export type iLinkmap = iComponent<HTMLDivElement> & {
  links: iLinkmapitem[] | [];
  fwd: Partial<{
    list: iFwd<HTMLUListElement>;
    item: iFwd<HTMLLIElement>;
    link: iLink;
    text: iText;
  }>;
};

const defaults: iLinkmap = {
  links: [],
  fwd: {},
};

export default (props: Partial<iLinkmap>) => {
  const p = applyDefaults<iLinkmap>(defaults, props);

  const { list } = p.fwd;

  const classes = partializeClasses({
    linkmap: opt(cn('comp-linkmap'), p.class, p.nostyle),
    list: opt(cn('comp-linkmap_list'), list?.class, list?.nostyle),
    item: cn(p.fwd.item?.class),
    link: cn(p.fwd.link?.class),
    text: cn(p.fwd.text?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
