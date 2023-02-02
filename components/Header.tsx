import { iHeader } from "../src/types/props.ts";
import setup from "../src/setup/Header.ts";
import Layout from "./Layout.tsx";

export default function (props: Partial<iHeader>) {
  const { c, children, layout_type, ...p } = setup(props);

  return (
    <div class={c.container}>
      <header {...p} class={c.header}>
        <Layout type={layout_type}>
          <div>
            {children}
          </div>
        </Layout>
      </header>
    </div>
  );
}
