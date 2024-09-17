//   _    _      _
//  | |  (_)_ _ | |___ __  __ _ _ __
//  | |__| | ' \| / / '  \/ _` | '_ \
//  |____|_|_||_|_\_\_|_|_\__,_| .__/
//                             |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * ### Linkmap
 * *Molecule*
 *
 * This module contains the render function for the `<Linkmap />` component.
 *
 * @module
 */
import setup, { iLinkmap, iLinkmapitem } from './setup.ts';
import Link from '../Link/index.tsx';
import Text from '../Text/index.tsx';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Render function for the [`<Linkmap/ >`](/x/lunchbox/components/Linkmap/setup.ts?s=iLinkmap)
 * component.
 *
 * [Component properties are partial](https://deno.land/x/lunchbox#configure-anything-easily)
 *
 * @prop {iLinkmapitem[] | []} links
 *    The structure of links that recursively build the linkmap.
 *
 * @returns {JSXInternal.Element}
 *  The `<Linkmap />` component.
 */
export default function (props: Partial<iLinkmap>) {
  const { fwd, links, ...p } = setup(props);

  const RenderRecursiveLinks = (props: { links: iLinkmapitem[] }) => (
    <ul {...fwd.list}>
      {props.links.map((link) => (
        <li {...fwd.item}>
          {link.href
            ? <Link href={link.href} {...fwd.link}>{link.name}</Link>
            : <Text {...fwd.text}>{link.name}</Text>}
          {link.children && link.children.length >= 0
            ? <RenderRecursiveLinks links={link.children} />
            : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div {...p}>
      <RenderRecursiveLinks links={links} />
    </div>
  );
}
