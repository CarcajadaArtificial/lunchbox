import {
  clr,
  Input,
  input,
  InputCheckCombo,
  InputFieldCombo,
  InputRadioCombo,
  InputSelectCombo,
  InputTextareaCombo,
} from 'lunchbox';
// import { useReducer } from "preact/hooks";

export default function Form() {
  return (
    <form class={`p-1/1 my-1/1 rounded max-w-96 ${clr.panel.bg_50}`}>
      <InputFieldCombo
        label='username'
        fwd={{
          required: true,
        }}
      />
      <Input.Fieldset required>
        <Input.Legend class={input.required}>Select your species</Input.Legend>
        <InputRadioCombo
          label='human'
          fwd={{
            name: 'species',
            value: 1,
          }}
        />
        <InputRadioCombo
          label='machine'
          fwd={{
            name: 'species',
            value: 2,
          }}
        />
      </Input.Fieldset>
      <Input.Fieldset>
        <Input.Legend>Check</Input.Legend>
        <InputCheckCombo
          label='human'
          fwd={{
            name: 'species',
            value: 'h',
          }}
        />
        <InputCheckCombo
          label='machine'
          fwd={{
            name: 'species',
            value: 'm',
          }}
        />
      </Input.Fieldset>
      <InputTextareaCombo
        label='write about yourself'
        fwd={{
          required: true,
        }}
      />
      <InputSelectCombo
        label='username'
        fwd={{
          required: true,
        }}
      >
        <option>Test</option>
      </InputSelectCombo>
      <Input.Submit />
    </form>
  );
}
