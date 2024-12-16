import { Code, Markdown, Page, Text } from "../../../mod.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const CONTENT_PATH = new URL("../static/content.md", import.meta.url);

export default async function () {
  const markdown = await (await fetch(CONTENT_PATH)).text();
  return (
    <>
      <Page.Header>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <Text.Title>Markdown</Text.Title>
          <div>
            <span>The code for this page is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./routes/markdown.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>and it is server side rendered.</span>
          </div>
        </div>
      </Page.Header>
      <Navbar />
      <Page.Main>
        <div class="col-h-full md:col-full">
          <Markdown content={markdown} />
        </div>
      </Page.Main>
      <Footer />
    </>
  );
}
