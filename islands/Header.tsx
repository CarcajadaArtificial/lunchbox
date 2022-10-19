import { iHeader } from "../src/types/props.ts";
import setup from "../src/setup/Header.ts";
import Title from "../components/Title.tsx";
import Layout from "../components/Layout.tsx";

export default function (props: Partial<iHeader>) {
  const { c, children } = setup(props);

  return (
    <header class={c.header}>
      <Layout>
        <Title>
          {children}
        </Title>
      </Layout>
    </header>
  );
}
