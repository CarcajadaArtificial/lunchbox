import { useSignal } from "@preact/signals";
import Header from "lunchbox/components/Header/index.tsx";
import Main from "lunchbox/components/Main/index.tsx";
import Text from "lunchbox/components/Text/index.tsx";
import Code from "lunchbox/components/Code/index.tsx";
import Layout from "lunchbox/components/Layout/index.tsx";
import Module from "lunchbox/components/Module/index.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Header>
        <Layout whitespace>
          <Module size="full">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <Text type="heading">Welcome to Fresh</Text>
            <Text>
              Try updating this message in the
              <Code>./routes/index.tsx</Code> file, and refresh.
            </Text>
          </Module>
        </Layout>
      </Header>
      <Main>
        <Layout whitespace>
          <Module size="full">
            <Counter count={count} />
          </Module>
        </Layout>
      </Main>
    </>
  );
}
