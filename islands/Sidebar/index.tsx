//   ___ _    _     _
//  / __(_)__| |___| |__  __ _ _ _
//  \__ \ / _` / -_) '_ \/ _` | '_|
//  |___/_\__,_\___|_.__/\__,_|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Sidebar
 * *Organism*
 *
 * This module contains the render function for the `<Sidebar />` island.
 *
 * @module
 */
import setup, { iSidebar } from './setup.ts';
import Linkmap from '../../components/Linkmap/index.tsx';

export default function Sidebar(props: Partial<iSidebar>) {
  const {
    c,
    fwd,
    links,
    nostyle,
    children,
    nostyleAll,
    ...p
  } = setup(props);

  console.log(c.container);

  return (
    <div {...fwd.container} class={c.container}>
      <aside class={c.sidebar} {...p}>
        {links && links.length > 0
          ? <Linkmap links={links} {...fwd.linkmap} class={c.linkmap} />
          : null}
        {children}
      </aside>
    </div>
  );
}
