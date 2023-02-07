import { iHeader } from "../src/types/props.ts";
import setup from "../src/setup/Header.ts";
import Layout from "./Layout.tsx";
import Panel from "./Panel.tsx";

export default function (props: Partial<iHeader>) {
  const { c, children, layout_type, ...p } = setup(props);

  return (
    <Panel onlyBottom>
      <header {...p} class={c.header}>
        <Layout type={layout_type}>
          {children}
        </Layout>
      </header>
    </Panel>
  );
}
