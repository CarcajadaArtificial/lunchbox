import setup, { iLinkmap, iLinkmapitem } from './setup.ts';
import Link from '../Link/index.tsx';
import Text from '../Text/index.tsx';

export default function (props: Partial<iLinkmap>) {
  const { c, nostyle, nostyleAll, fref, fwd, links, ...p } = setup(props);

  const renderRecursiveLinks = (links: iLinkmapitem[]) => (
    <ul ref={fwd.list?.ref} class={c.list}>
      {links.map((link) => (
        <li ref={fwd.item?.ref} class={c.item}>
          {link.url
            ? (
              <Link
                nostyleAll={nostyleAll}
                fref={fwd.link?.fref}
                href={link.url}
                class={c.link}
              >
                {link.name}
              </Link>
            )
            : (
              <Text
                nostyleAll={nostyleAll}
                fref={fwd.text?.fref}
                noMargins
                class={c.text}
              >
                {link.name}
              </Text>
            )}
          {link.children && link.children.length >= 0
            ? renderRecursiveLinks(link.children)
            : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={fref} {...p} class={c.linkmap}>
      {renderRecursiveLinks(links)}
    </div>
  );
}
