import { Input } from "../../islands.ts";
import { Page } from "../../components.ts";

export default function input() {
  return (
    <Page title="Input">
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Text Input States</p>
        <div class="grid gap-4">
          <Input />
          <Input label="Input with label" />
          <Input label="Input with placeholder" placeholder="placeholder" />
          <Input label="Required input" placeholder="placeholder" required />
          <Input
            label="Input with error message"
            placeholder="placeholder"
            required
            error="Error message."
          />
          <Input
            label="Disabled input"
            placeholder="placeholder"
            disabled
          />
          <Input
            label="Disbaled input with error message"
            placeholder="placeholder"
            disabled
            error="Error message."
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Date and time inputs</p>
        <div class="grid gap-4">
          <Input label="Date" type="date" />
          <Input label="Datetime-local" type="datetime-local" />
          <Input label="Month" type="month" />
          <Input label="Time" type="time" />
          <Input label="Week" type="week" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Other text inputs</p>
        <div class="grid gap-4">
          <Input label="Number" type="number" />
          <Input label="Search" type="search" />
          <Input label="Tel" type="tel" />
          <Input label="Url" type="url" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Checkbox options</p>
        <div class="grid gap-4">
          <Input label="Checkbox" type="checkbox"></Input>
          <Input label="Checkbox required" required type="checkbox"></Input>
          <Input
            label="Checkbox with error message"
            error="Error message."
            type="checkbox"
          />
          <Input label="Checkbox disabled" disabled type="checkbox"></Input>
          <Input
            label="Checkbox disabled with error message"
            disabled
            type="checkbox"
            error="Error message."
          >
          </Input>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Radio options</p>
        <div class="grid gap-4">
          <Input name="radio-fieldset" label="Radio" type="radio"></Input>
          <Input
            name="radio-fieldset"
            label="Radio required"
            required
            type="radio"
          >
          </Input>
          <Input
            name="radio-fieldset"
            label="Radio with error message"
            error="Error message."
            type="radio"
          />
          <Input
            name="radio-fieldset"
            label="Radio disabled"
            disabled
            type="radio"
          >
          </Input>
          <Input
            name="radio-fieldset"
            label="Radio disabled with error message"
            disabled
            type="radio"
            error="Error message."
          >
          </Input>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Button Inputs</p>
        <div class="grid gap-4">
          <Input type="button" value="button" />
          <Input type="button" value="reset" />
          <Input
            type="image"
            value="image button"
          />
          <Input type="button" value="button" label="Button with label" />
          <Input
            type="button"
            value="button"
            error="Error message."
            label="Button with error message"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <p>Other Inputs</p>
        <div class="grid gap-4">
          <Input type="color" label="Color input" />
          <Input type="color" label="Disabled color input" disabled />
          <Input
            type="color"
            label="Color input with error message"
            error="Error message."
          />
          <Input type="range" label="Range input" />
          <Input type="range" label="Disabled range input" disabled />
          <Input
            type="range"
            label="Range input with error message"
            error="Error message."
          />
        </div>
      </div>
    </Page>
  );
}
