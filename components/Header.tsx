import { iHeader } from "../src/types/props.ts";
import setup from "../src/setup/Header.ts";
import Layout from "./Layout.tsx";

export default function (props: Partial<iHeader>) {
  const { c, children, ...p } = setup(props);

  return (
    <div class={c.container}>
      <header {...p} class={c.header}>
        <Layout>
          {children}
        </Layout>
      </header>
    </div>
  );
}
