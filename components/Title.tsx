import { iTitle } from "../src/types/props.ts";
import setup from "../src/setup/Title.ts";

export default function (props: Partial<iTitle>) {
  // Prop values
  const { c, children, ...p } = setup(props);

  return (
    <span {...p} class={c.span}>
      {children}
    </span>
  );
}
