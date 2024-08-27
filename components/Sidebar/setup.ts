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
import { apDef, forward, o } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { styles } from './styles.ts';
import { ComponentChildren } from 'preact';
import type { iFwd } from '../../src/types.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Properties of the `<Sidebar />` island. */
export type iSidebar = iComponent & {
  sticky: boolean;
  children: ComponentChildren;
  fwd: Partial<iSidebarFwd>;
};

type iSidebarFwd = {
  container: iFwd<HTMLDivElement>;
};

/** These are the default values of the `<Sidebar />` island's props. */
const defaults: iSidebar = {
  children: null,
  sticky: false,
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Sidebar />` islabd. */
export default (props: Partial<iSidebar>) => {
  const p = apDef<iSidebar>(defaults, props);

  p.class = o(['sidebar', p.sticky ? 'sidebar--sticky' : null], { ...p });
  p.fwd = forward({
    container: [styles, 'sidebar__container'],
  }, p.fwd);

  return p;
};
