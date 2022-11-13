import { iMenu } from "../src/types/props.ts";
import Link from "../components/Link.tsx";
import setup from "../src/setup/Menu.ts";

export default function (props: Partial<iMenu>) {
  const { c, isOpen, children, links, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <div {...p} class={c.door}>
        {children}
      </div>
      {isOpen
        ? (
          <div class={c.menu}>
            {links.map((link) => <Link href={link.href}>{link.label}</Link>)}
          </div>
        )
        : null}
    </div>
  );
}
