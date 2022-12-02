import { iCard } from "../src/types/props.ts";
import setup from "../src/setup/Card.ts";

export default function (props: Partial<iCard>) {
  const { c, children, ...p } = setup(props);

  return (
    <div {...p} class={c.card}>
      {children}
    </div>
  );
}
