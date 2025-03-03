import {
  area,
  btn,
  clr,
  Code,
  iAtom,
  input,
  layout,
  Page,
  Text,
} from "lunchbox";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const BackgroundColor = (props: iAtom<HTMLDivElement>) => (
  <div {...props} class={`min-h-2/1 p-1/2 rounded ${props.class}`} />
);

export default function () {
  return (
    <>
      <Page.Header>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <Text.Title>Particles</Text.Title>
          <Text.Base>
            <span>The code for this page is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./routes/particles.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>and it is server side rendered.</span>
          </Text.Base>
        </div>
      </Page.Header>
      <Navbar />
      <Page.Main>
        <div class="col-h-full md:col-full">
          <Text.Title>Colors</Text.Title>
        </div>
        <div class="col-h-full md:col-md flex flex-col gap-1/2">
          <div>
            <Text.Base>Neutral</Text.Base>
            <BackgroundColor class={clr.neutral.bg} />
          </div>
          <div>
            <Text.Base>Neutral 25%</Text.Base>
            <BackgroundColor class={clr.neutral.bg_25} />
          </div>
          <div>
            <Text.Base>Neutral 10%</Text.Base>
            <BackgroundColor class={clr.neutral.bg_10} />
          </div>
          <div>
            <Text.Base>Brand</Text.Base>
            <BackgroundColor class={clr.brand.bg} />
          </div>
          <div>
            <Text.Base>Brand 60%</Text.Base>
            <BackgroundColor class={clr.brand.bg_60} />
          </div>
          <div>
            <Text.Base>Brand 45%</Text.Base>
            <BackgroundColor class={clr.brand.bg_45} />
          </div>
          <div>
            <Text.Base>Brand 30%</Text.Base>
            <BackgroundColor class={clr.brand.bg_30} />
          </div>
          <div>
            <Text.Base>Error</Text.Base>
            <BackgroundColor class={clr.error.bg} />
          </div>
          <div>
            <Text.Base>Error 50%</Text.Base>
            <BackgroundColor class={clr.error.bg_50} />
          </div>
          <div>
            <Text.Base>Panel</Text.Base>
            <BackgroundColor class={clr.panel.bg} />
          </div>
          <div>
            <Text.Base>Panel 50%</Text.Base>
            <BackgroundColor class={clr.panel.bg_50} />
          </div>
          <div>
            <Text.Base>Panel 35%</Text.Base>
            <BackgroundColor class={clr.panel.bg_35} />
          </div>
          <div>
            <Text.Base>Panel 15%</Text.Base>
            <BackgroundColor class={clr.panel.bg_15} />
          </div>
          <BackgroundColor class={clr.panel.bg}>
            <div class="mb-1/2">
              <Text.Base>Page</Text.Base>
              <BackgroundColor class={clr.page.bg} />
            </div>
            <div>
              <Text.Base>Page 50%</Text.Base>
              <BackgroundColor class={clr.page.bg_50} />
            </div>
          </BackgroundColor>
        </div>
        <div class="col-h-full md:col-md flex flex-col gap-1/2">
          <div class="flex flex-col">
            <Text.Base class={clr.neutral.txt}>Neutral</Text.Base>
            <Text.Base class={clr.neutral.txt_25}>Neutral 25%</Text.Base>
            <Text.Base class={clr.neutral.txt_10}>Neutral 10%</Text.Base>
          </div>
          <div class="flex flex-col">
            <Text.Base class={clr.brand.txt}>Brand</Text.Base>
            <Text.Base class={clr.brand.txt_25}>Brand 25%</Text.Base>
            <Text.Base class={clr.brand.txt_10}>Brand 15%</Text.Base>
          </div>
          <Text.Base class={clr.error.txt}>Error</Text.Base>
          <BackgroundColor class={`border-2 ${clr.neutral.border}`}>
            <Text.Base>Neutral Border</Text.Base>
          </BackgroundColor>
          <BackgroundColor class={`border-2 ${clr.neutral.border_25}`}>
            <Text.Base>Neutral Border 25%</Text.Base>
          </BackgroundColor>
          <Text.Head class="mt-2/1 mb-1/1">Misc.</Text.Head>
          <Text.Base class={input.required}>
            Required input indicator as a pseudoelement:
          </Text.Base>
          <Text.Base>
            Abstraction of a button without specific styles, but is interactible
            and displays the Neutral Outline color:
            <button class={`mx-1/2 ${clr.neutral.outline} ${btn}`}>
              Button
            </button>
            This particle will then be adapted to the different button atoms.
          </Text.Base>
        </div>
      </Page.Main>
      <div class={`${area} ${layout}`}>
        <div class="col-h-full md:col-full">
          <Text.Head class="mb-1/1">Area</Text.Head>
          <Text.Base>
            This is an abstraction of a page section, it is used in the{" "}
            <Code.Inline>{"<Header/>"}</Code.Inline>
            and <Code.Inline>{"<Footer/>"}</Code.Inline> components.
          </Text.Base>
        </div>
      </div>
      <div class={`${layout} ${clr.page.bg} py-3/1 gap-y-1/1`}>
        <div class="col-h-full md:col-full">
          <Text.Head>Layout</Text.Head>
        </div>
        <BackgroundColor class={`col-h-full md:col-full ${clr.panel.bg}`}>
          col-h-full, md:col-full
        </BackgroundColor>
        <BackgroundColor class={`col-h-xl md:col-xl ${clr.panel.bg}`}>
          col-h-full, md:col-xl
        </BackgroundColor>
        <BackgroundColor class={`col-h-xs md:col-xs ${clr.panel.bg}`}>
          col-h-full, md:col-xs
        </BackgroundColor>
        <BackgroundColor class={`col-h-lg md:col-lg ${clr.panel.bg}`}>
          col-h-full, md:col-lg
        </BackgroundColor>
        <BackgroundColor class={`col-h-sm md:col-sm ${clr.panel.bg}`}>
          col-h-full, md:col-sm
        </BackgroundColor>
        <BackgroundColor class={`col-h-md md:col-md ${clr.panel.bg}`}>
          col-h-full, md:col-md
        </BackgroundColor>
        <BackgroundColor class={`col-h-md md:col-md ${clr.panel.bg}`}>
          col-h-full, md:col-md
        </BackgroundColor>
      </div>
      <Footer />
    </>
  );
}
