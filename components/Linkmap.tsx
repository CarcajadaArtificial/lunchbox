import { ItemLink } from "../src/types/utils.ts";
import { iLinkmap } from "../src/types/props.ts";
import setup from "../src/setup/Linkmap.ts";
import Link from "./Link.tsx";
import Text from "./Text.tsx";

const renderRecursiveLinks = (links: ItemLink[]) => (
  <ul class="pl-4">
    {links.map((link) => (
      <li>
        {link.url
          ? <Link href={link.url}>{link.name}</Link>
          : <Text noMargins compact class="mt-2">{link.name}</Text>}

        {link.children && link.children.length >= 0
          ? renderRecursiveLinks(link.children)
          : null}
      </li>
    ))}
  </ul>
);

export default function (props: Partial<iLinkmap>) {
  const { c, links, ...p } = setup(props);

  return (
    <div {...p} class={c.main}>
      {renderRecursiveLinks(links)}
    </div>
  );
}
