import { useState } from "preact/hooks";
import { iMenu } from "../src/types/props.ts";
import Link from "../components/Link.tsx";
import setup from "../src/setup/Menu.ts";

export default function (props: Partial<iMenu>) {
  const { c, children, links, ...p } = setup(props);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div class={c.wrapper}>
      <div class={c.door} onClick={() => setOpen(!isOpen)}>
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
