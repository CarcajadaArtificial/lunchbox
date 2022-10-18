import { iTextArea } from "../src/types/props.ts";
import setup from "../src/setup/TextArea.ts";

export default function TextArea(props: Partial<iTextArea>) {
  const { c, label, error, ...textareaProps } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <span class={c.span}>
          {label}
          {textareaProps.required
            ? <sup title="Required" class={c.required}>*</sup>
            : null}
        </span>
        <textarea class={c.input} {...textareaProps} />
      </label>
      {error ? <span class={c.error}>{error}</span> : null}
    </div>
  );
}
