import { useSignal } from "@preact/signals";
import { Code, Link, Page, Sidebar, Text } from "../../../mod.ts";
import Counter from "../islands/Counter.tsx";
import Form from "../islands/Form.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Page.Header>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <Text.Title>Welcome to Fresh</Text.Title>
          <div>
            <span>The code for this page is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./routes/index.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>and it is server side rendered.</span>
          </div>
        </div>
      </Page.Header>
      <Page.Main>
        <div class="col-h-full md:col-sm h-full">
          <Sidebar.Aside>
            Sidebar
          </Sidebar.Aside>
        </div>
        <div class="col-h-full md:col-lg">
          <Text.Head>Counter</Text.Head>
          <div class="mt-half">
            <span>The code for this island is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./islands/Counter.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>it is updated in the client.</span>
          </div>
          <Counter count={count} />

          <Text.Head>Form</Text.Head>
          <div class="mt-half">
            <span>The code for this island is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./islands/Form.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>it is updated in the client.</span>
          </div>
          <Form />
          <div class="h-dvh"></div>
          <div class="h-dvh"></div>
        </div>
      </Page.Main>
      <Page.Footer>
        <div class="col-h-full md:col-full">
          <Link>GitHub</Link>
        </div>
      </Page.Footer>
    </>
  );
}
