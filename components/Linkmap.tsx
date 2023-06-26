import { ItemLink } from '../src/types/utils.ts';
import { iLinkmap } from '../src/types/props.ts';
import setup from '../src/setup/Linkmap.ts';
import Link from './Link.tsx';
import Text from './Text.tsx';

export default function (props: Partial<iLinkmap>) {
  const { c, links, ...p } = setup(props);

  const renderRecursiveLinks = (links: ItemLink[]) => (
    <ul class={c.list}>
      {links.map((link) => (
        <li>
          {link.url ? <Link href={link.url}>{link.name}</Link> : <Text noMargins>{link.name}</Text>}
          {link.children && link.children.length >= 0 ? renderRecursiveLinks(link.children) : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div {...p} class={c.component}>
      {renderRecursiveLinks(links)}
    </div>
  );
}
