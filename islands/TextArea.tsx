import { iTextArea } from "../src/types/props.ts";
import setup from "../src/setup/TextArea.ts";

export default function TextArea(props: Partial<iTextArea>) {
  const { c, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <span class={c.span}>
          {label}
          {p.required ? <sup title="Required" class={c.required}>*</sup> : null}
        </span>
        <textarea class={c.input} {...p} />
      </label>
      {error ? <span class={c.error}>{error}</span> : null}
    </div>
  );
}
