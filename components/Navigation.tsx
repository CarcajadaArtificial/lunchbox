import { iNavigation } from "../src/types/props.ts";
import setup from "../src/setup/Navigation.ts";
import Layout from "./Layout.tsx";
import { LAYOUT_TYPES } from "../mod.ts";

export default function (props: Partial<iNavigation>) {
  const { c, children, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <nav {...p} class={c.nav}>
        <Layout type={LAYOUT_TYPES.RIGHT}>
          {children}
        </Layout>
      </nav>
    </div>
  );
}
