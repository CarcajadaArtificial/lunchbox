import { iText } from "../src/types/props.ts";
import setup from "../src/setup/Text.ts";

export default function (props: Partial<iText>) {
  const {
    c,
    type,
    compact,
    single,
    indent,
    noMargins,
    children,
    inheritColor,
    ...p
  } = setup(props);

  return (
    <span {...p} class={c.span}>
      {children}
    </span>
  );
}
