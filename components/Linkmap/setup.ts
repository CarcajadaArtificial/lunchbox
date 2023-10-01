import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iLink } from '../Link/setup.ts';
import { iText } from '../Text/setup.ts';
import { css } from 'resin';

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
    link: Partial<iLink>;
    text: Partial<iText>;
  }>;
};

const defaults: iLinkmap = {
  links: [],
  fwd: {},
};

const style = {
  linkmap: css`
    margin-bottom: var(--s-one-and-half);
  `,
  linkmap_list: css`
    margin-left: var(--s-single);
  `,
};

export default (props: Partial<iLinkmap>) => {
  const p = applyDefaults<iLinkmap>(defaults, props);

  const { list } = p.fwd;

  const classes = partializeClasses({
    linkmap: opt(cn(style.linkmap), p.class, p.nostyle || p.nostyleAll),
    list: opt(
      cn(style.linkmap_list),
      list?.class,
      list?.nostyle || p.nostyleAll,
    ),
    item: cn(p.fwd.item?.class),
    link: cn(p.fwd.link?.class),
    text: cn(p.fwd.text?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
