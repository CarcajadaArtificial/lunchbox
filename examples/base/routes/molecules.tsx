import {
  Accordion,
  Code,
  FieldsetCheck,
  FieldsetRadio,
  InputCheckCombo,
  InputFieldCombo,
  InputRadioCombo,
  InputSelectCombo,
  InputTextareaCombo,
  Page,
  Text,
} from "lunchbox";
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
      <Page.Main class="gap-y-double">
        <div class="col-h-full md:col-full">
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
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">Fieldset</Text.Head>
          <FieldsetCheck
            values={["Foo", "Bar"]}
            legend="Fieldset Check"
            fwd={{ name: "fieldset_check_a" }}
          />
          <FieldsetCheck
            values={["Foo", "Bar"]}
            legend="Fieldset Check"
            error="error"
            fwd={{ name: "fieldset_check_b" }}
          />
          <FieldsetRadio
            values={["Foo", "Bar"]}
            legend="Fieldset Radio"
            fwd={{ name: "fieldset_radio_a" }}
          />
          <FieldsetRadio
            values={["Foo", "Bar"]}
            legend="Fieldset Radio"
            error="error"
            fwd={{ name: "fieldset_radio_b" }}
          />
        </div>
        <div class="col-h-full md:col-md">
          <Text.Head class="mb-single">Accordion</Text.Head>
          <Accordion open name="accordion" summary="Foo">
            <Text.Base>Example content</Text.Base>
          </Accordion>
          <Accordion name="accordion" summary="Bar">
            <Text.Base>Example content</Text.Base>
          </Accordion>
        </div>
      </Page.Main>
      <Footer />
    </>
  );
}
