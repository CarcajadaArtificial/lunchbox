import { Code, Link, Markdown, Nav, Page, Text } from "../../../mod.ts";

const CONTENT_PATH = new URL("../static/content.md", import.meta.url);

export default async function () {
  const markdown = await (await fetch(CONTENT_PATH)).text();
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
      <Nav.Bar>Navigation</Nav.Bar>
      <Page.Main>
        <div class="col-h-full md:col-full h-full">
          <Markdown content={markdown} />
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
