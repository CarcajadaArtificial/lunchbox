//   ___ _    _     _                ___      _
//  / __(_)__| |___| |__  __ _ _ _  / __| ___| |_ _  _ _ __
//  \__ \ / _` / -_) '_ \/ _` | '_| \__ \/ -_)  _| || | '_ \
//  |___/_\__,_\___|_.__/\__,_|_|   |___/\___|\__|\_,_| .__/
//                                                    |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Sidebar />` island.
 *
 * @module
 */
import { apDef, o, part } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';
import type { iLinkmap, iLinkmapitem } from '../../components/Linkmap/setup.ts';
import { ComponentChildren } from 'preact';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Sidebar />` island. */
export type iSidebar = iComponent & {
  children: ComponentChildren;
  links: iLinkmapitem[] | [];
  fwd: Partial<{
    linkmap: Partial<iLinkmap>;
  }>;
};

/** These are the default values of the `<Sidebar />` island's props. */
const defaults: iSidebar = {
  children: null,
  links: [],
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Sidebar />` islabd. */
export default (props: Partial<iSidebar>) => {
  const p = apDef<iSidebar>(defaults, props);

  const c = part({
    sidebar: o([styles, 'sidebar'], { ...p }),
    linkmap: o('sidebar__linkmap', { ...p.fwd.linkmap }),
  }, p.nostyleAll);

  delete p.class;
  return { c, ...p };
};
