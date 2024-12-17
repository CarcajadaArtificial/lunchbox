import {
  Button,
  clr,
  Code,
  Kbd,
  Link,
  List,
  Page,
  Separator,
  Text,
} from "../../../mod.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function () {
  const card_module = `col-h-full md:col-half rounded p-half ${clr.panel.bg}`;
  return (
    <>
      <Page.Header>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <Text.Title>Atoms</Text.Title>
          <Text.Base>
            <span>The code for this page is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./routes/atoms.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>and it is server side rendered.</span>
          </Text.Base>
        </div>
      </Page.Header>
      <Navbar />
      <Page.Main>
        <div class="col-h-full md:col-full">
          <Text.Title>Text</Text.Title>
        </div>
        <div class="col-h-full md:col-half text-center">
          <Text.Display>Display</Text.Display>
          <Text.Title>Title</Text.Title>
          <Text.Head>Head</Text.Head>
          <Text.Subhead>Subhead</Text.Subhead>
          <Text.Base>Base</Text.Base>
          <Text.Small>Small</Text.Small>
        </div>
        <div class={`text-center ${card_module}`}>
          <Text.Display>Display</Text.Display>
          <Text.Title>Title</Text.Title>
          <Text.Head>Head</Text.Head>
          <Text.Subhead>Subhead</Text.Subhead>
          <Text.Base>Base</Text.Base>
          <Text.Small>Small</Text.Small>
        </div>
        <div class="col-h-full md:col-full mt-double">
          <Text.Title>Link</Text.Title>
        </div>
        <div class="col-h-full md:col-half text-center">
          <Text.Display>
            <Link>Display</Link>
          </Text.Display>
          <Text.Title>
            <Link>Title</Link>
          </Text.Title>
          <Text.Head>
            <Link>Head</Link>
          </Text.Head>
          <Text.Subhead>
            <Link>Subhead</Link>
          </Text.Subhead>
          <Text.Base>
            <Link>Base</Link>
          </Text.Base>
          <Text.Small>
            <Link>Small</Link>
          </Text.Small>
        </div>
        <div class={`text-center ${card_module}`}>
          <Text.Display>
            <Link>Display</Link>
          </Text.Display>
          <Text.Title>
            <Link>Title</Link>
          </Text.Title>
          <Text.Head>
            <Link>Head</Link>
          </Text.Head>
          <Text.Subhead>
            <Link>Subhead</Link>
          </Text.Subhead>
          <Text.Base>
            <Link>Base</Link>
          </Text.Base>
          <Text.Small>
            <Link>Small</Link>
          </Text.Small>
        </div>
        <div class="col-h-full md:col-full mt-double">
          <Text.Title>Kbd</Text.Title>
        </div>
        <div class="col-h-full md:col-half flex flex-col items-center gap-half">
          <Text.Display>
            <Kbd>Display</Kbd>
          </Text.Display>
          <Text.Title>
            <Kbd>Title</Kbd>
          </Text.Title>
          <Text.Head>
            <Kbd>Head</Kbd>
          </Text.Head>
          <Text.Subhead>
            <Kbd>Subhead</Kbd>
          </Text.Subhead>
          <Text.Base>
            <Kbd>Base</Kbd>
          </Text.Base>
          <Text.Small>
            <Kbd>Small</Kbd>
          </Text.Small>
        </div>
        <div class={`flex flex-col items-center gap-half ${card_module}`}>
          <Text.Display>
            <Kbd>Display</Kbd>
          </Text.Display>
          <Text.Title>
            <Kbd>Title</Kbd>
          </Text.Title>
          <Text.Head>
            <Kbd>Head</Kbd>
          </Text.Head>
          <Text.Subhead>
            <Kbd>Subhead</Kbd>
          </Text.Subhead>
          <Text.Base>
            <Kbd>Base</Kbd>
          </Text.Base>
          <Text.Small>
            <Kbd>Small</Kbd>
          </Text.Small>
        </div>
        <div class="col-h-full md:col-full mt-double">
          <Text.Title>OL</Text.Title>
        </div>
        <div class="col-h-full md:col-half">
          <Text.Display>
            <List.ol>
              <li>Display</li>
              <li>Display</li>
              <li>Display</li>
            </List.ol>
          </Text.Display>
          <Text.Title>
            <List.ol>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </List.ol>
          </Text.Title>
          <Text.Head>
            <List.ol>
              <li>Head</li>
              <li>Head</li>
              <li>Head</li>
            </List.ol>
          </Text.Head>
          <Text.Subhead>
            <List.ol>
              <li>Subhead</li>
              <li>Subhead</li>
              <li>Subhead</li>
            </List.ol>
          </Text.Subhead>
          <Text.Base>
            <List.ol>
              <li>Base</li>
              <li>Base</li>
              <li>Base</li>
            </List.ol>
          </Text.Base>
          <Text.Small>
            <List.ol>
              <li>Small</li>
              <li>Small</li>
              <li>Small</li>
            </List.ol>
          </Text.Small>
        </div>
        <div class={card_module}>
          <Text.Display>
            <List.ol>
              <li>Display</li>
              <li>Display</li>
              <li>Display</li>
            </List.ol>
          </Text.Display>
          <Text.Title>
            <List.ol>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </List.ol>
          </Text.Title>
          <Text.Head>
            <List.ol>
              <li>Head</li>
              <li>Head</li>
              <li>Head</li>
            </List.ol>
          </Text.Head>
          <Text.Subhead>
            <List.ol>
              <li>Subhead</li>
              <li>Subhead</li>
              <li>Subhead</li>
            </List.ol>
          </Text.Subhead>
          <Text.Base>
            <List.ol>
              <li>Base</li>
              <li>Base</li>
              <li>Base</li>
            </List.ol>
          </Text.Base>
          <Text.Small>
            <List.ol>
              <li>Small</li>
              <li>Small</li>
              <li>Small</li>
            </List.ol>
          </Text.Small>
        </div>

        <div class="col-h-full md:col-full mt-double">
          <Text.Title>UL</Text.Title>
        </div>
        <div class="col-h-full md:col-half">
          <Text.Display>
            <List.ul>
              <li>Display</li>
              <li>Display</li>
              <li>Display</li>
            </List.ul>
          </Text.Display>
          <Text.Title>
            <List.ul>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </List.ul>
          </Text.Title>
          <Text.Head>
            <List.ul>
              <li>Head</li>
              <li>Head</li>
              <li>Head</li>
            </List.ul>
          </Text.Head>
          <Text.Subhead>
            <List.ul>
              <li>Subhead</li>
              <li>Subhead</li>
              <li>Subhead</li>
            </List.ul>
          </Text.Subhead>
          <Text.Base>
            <List.ul>
              <li>Base</li>
              <li>Base</li>
              <li>Base</li>
            </List.ul>
          </Text.Base>
          <Text.Small>
            <List.ul>
              <li>Small</li>
              <li>Small</li>
              <li>Small</li>
            </List.ul>
          </Text.Small>
        </div>
        <div class={card_module}>
          <Text.Display>
            <List.ul>
              <li>Display</li>
              <li>Display</li>
              <li>Display</li>
            </List.ul>
          </Text.Display>
          <Text.Title>
            <List.ul>
              <li>Title</li>
              <li>Title</li>
              <li>Title</li>
            </List.ul>
          </Text.Title>
          <Text.Head>
            <List.ul>
              <li>Head</li>
              <li>Head</li>
              <li>Head</li>
            </List.ul>
          </Text.Head>
          <Text.Subhead>
            <List.ul>
              <li>Subhead</li>
              <li>Subhead</li>
              <li>Subhead</li>
            </List.ul>
          </Text.Subhead>
          <Text.Base>
            <List.ul>
              <li>Base</li>
              <li>Base</li>
              <li>Base</li>
            </List.ul>
          </Text.Base>
          <Text.Small>
            <List.ul>
              <li>Small</li>
              <li>Small</li>
              <li>Small</li>
            </List.ul>
          </Text.Small>
        </div>

        <div class="col-h-full md:col-full mt-double">
          <Text.Title>Misc</Text.Title>
          <Separator />
          <div class="flex gap-single mt-double">
            <div
              class={`${clr.page.bg} ${clr.neutral.border} p-half rounded border-2 flex flex-col items-start gap-half`}
            >
              <Button.Brand>Button.Brand</Button.Brand>
              <Button.Error>Button.Error</Button.Error>
              <Button.Page>Button.Page</Button.Page>
              <Button.Panel>Button.Panel</Button.Panel>
            </div>
            <div
              class={`${clr.panel.bg} ${clr.neutral.border} p-half rounded border-2 flex flex-col items-start gap-half`}
            >
              <Button.Brand>Button.Brand</Button.Brand>
              <Button.Error>Button.Error</Button.Error>
              <Button.Page>Button.Page</Button.Page>
              <Button.Panel>Button.Panel</Button.Panel>
            </div>
          </div>
        </div>
      </Page.Main>
      <Footer />
    </>
  );
}
