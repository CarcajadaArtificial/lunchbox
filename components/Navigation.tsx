import { iNavigation } from "../src/types/props.ts";
import setup from "../src/setup/Navigation.ts";
import Layout from "./Layout.tsx";
import Link from "./Link.tsx";
import Menu from "../islands/Menu.tsx";

export default function (props: Partial<iNavigation>) {
  const { c, logo, links, title, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <nav {...p} class={c.nav}>
        <Layout type="right">
          <Link nostyle href="/">{logo}</Link>
          <div class={c.title}>
            {title}
            <Menu links={links}>☰</Menu>
          </div>
        </Layout>
      </nav>
    </div>
  );
}
