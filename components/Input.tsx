import Text from "./Text.tsx";
import { iInput } from "../src/types/props.ts";
import setup from "../src/setup/Input.ts";

/**
 * @todo Add custom classes support
 */
export default function (props: Partial<iInput>) {
  const { c, maxWidth, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <Text type="label" class={c.text}>
          {label}
          {p.required ? <sup title="Required" class={c.required}>*</sup> : null}
        </Text>
        <input class={c.input} {...p} />
      </label>
      {error
        ? <Text inheritColor type="small" class={c.error}>{error}</Text>
        : null}
    </div>
  );
}
