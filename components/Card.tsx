import { iCard } from "../src/types/props.ts";
import setup from "../src/setup/Card.ts";
import Panel from "./Panel.tsx";

export default function (props: Partial<iCard>) {
  const { c, children, ...p } = setup(props);

  return (
    <Panel>
      <div {...p} class={c.card}>
        {children}
      </div>
    </Panel>
  );
}
