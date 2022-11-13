import { iNavigation } from "../src/types/props.ts";
import setup from "../src/setup/Navigation.ts";
import Layout from "./Layout.tsx";

export default function (props: Partial<iNavigation>) {
  const { c, children, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <nav {...p} class={c.nav}>
        <Layout type="right">
          {children}
        </Layout>
      </nav>
    </div>
  );
}
