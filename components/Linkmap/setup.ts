//   _    _      _                     ___      _
//  | |  (_)_ _ | |___ __  __ _ _ __  / __| ___| |_ _  _ _ __
//  | |__| | ' \| / / '  \/ _` | '_ \ \__ \/ -_)  _| || | '_ \
//  |____|_|_||_|_\_\_|_|_\__,_| .__/ |___/\___|\__|\_,_| .__/
//                             |_|                      |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Linkmap />` component.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import type { iLink } from '../Link/setup.ts';
import { iText } from '../Text/setup.ts';
import { styles } from './styles.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Linkmap />` component. */
export type iLinkmap = iComponent<HTMLDivElement> & {
  links: iLinkmapitem[] | [];
  fwd: Partial<{
    list: iFwd<HTMLUListElement>;
    item: iFwd<HTMLLIElement>;
    link: Partial<iLink>;
    text: Partial<iText>;
  }>;
};

/** Linkmap item interface */
export type iLinkmapitem = {
  name: string;
  url?: string;
  children?: iLinkmapitem[];
};

/** These are the default values of the `<Linkmap />` component's props. */
const defaults: iLinkmap = {
  links: [],
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Linkmap />` component. */
export default (props: Partial<iLinkmap>) => {
  const p = apDef<iLinkmap>(defaults, props);

  const classes = part({
    linkmap: o(styles, { ...p }),
    list: o('linkmap__list', { ...p.fwd.list }),
    item: o('linkmap__item', { ...p.fwd.item }),
    link: o('linkmap__link', { ...p.fwd.link }),
    text: o('linkmap__text', { ...p.fwd.text }),
  });

  delete p.class;
  return { c: classes, ...p };
};
