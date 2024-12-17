import {
  Code,
  InputCheckCombo,
  InputFieldCombo,
  InputRadioCombo,
  InputSelectCombo,
  InputTextareaCombo,
  Page,
  Text,
} from "../../../mod.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function () {
  return (
    <>
      <Page.Header>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <Text.Title>Molecules</Text.Title>
          <Text.Base>
            <span>The code for this page is located here</span>{" "}
            <Code.Inline>
              <Code.Content>./routes/molecules.tsx</Code.Content>
            </Code.Inline>{" "}
            <span>and it is server side rendered.</span>
          </Text.Base>
        </div>
      </Page.Header>
      <Navbar />
      <Page.Main>
        <div class="col-h-full md:col-full mb-double">
          <Text.Title>Inputs</Text.Title>
        </div>
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">InputField</Text.Head>
          <InputFieldCombo />
          <InputFieldCombo label="label" />
          <InputFieldCombo error="error" />
        </div>
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">Textarea</Text.Head>
          <InputTextareaCombo />
          <InputTextareaCombo label="label" />
          <InputTextareaCombo error="error" />
        </div>
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">Select</Text.Head>
          <InputSelectCombo />
          <InputSelectCombo label="label" />
          <InputSelectCombo error="error" />
        </div>
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">Check & Radio</Text.Head>
          <InputCheckCombo label="check" />
          <InputCheckCombo label="check" error="error" />
          <InputRadioCombo label="radio" />
        </div>
      </Page.Main>
      <Footer />
    </>
  );
}
