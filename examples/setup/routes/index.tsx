import { useSignal } from "@preact/signals";
import { Code, Header, Layout, Main, Module, Text } from "lunchbox";
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
              Try updating this message in the <Code>./routes/index.tsx</Code>
              {" "}
              file, and refresh.
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
