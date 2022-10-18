import { iInput } from "../src/types/props.ts";
import setup from "../src/setup/Input.ts";

export default function Input(props: Partial<iInput>) {
  const { c, label, error, ...inputProps } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <span class={c.span}>
          {label}
          {inputProps.required
            ? <sup title="Required" class={c.required}>*</sup>
            : null}
        </span>
        <input class={c.input} {...inputProps} />
      </label>
      {error ? <span class={c.error}>{error}</span> : null}
    </div>
  );
}
