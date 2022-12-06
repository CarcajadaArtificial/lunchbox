import Text from "./Text.tsx";
import { iTextArea } from "../src/types/props.ts";
import setup from "../src/setup/TextArea.ts";

/**
 * @todo Choose a standard color for placeholders.
 */
export default function TextArea(props: Partial<iTextArea>) {
  const { c, maxWidth, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <Text type="label" class={c.text}>
          {label}
          {p.required ? <sup title="Required" class={c.required}>*</sup> : null}
        </Text>
        <textarea class={c.input} {...p} />
      </label>
      {error
        ? <Text inheritColor type="small" class={c.error}>{error}</Text>
        : null}
    </div>
  );
}
