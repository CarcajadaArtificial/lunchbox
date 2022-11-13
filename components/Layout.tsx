import { iLayout } from "../src/types/props.ts";
import setup from "../src/setup/Layout.ts";

export default function (props: Partial<iLayout>) {
  const { c, type, margin, children, ...p } = setup(props);

  return (
    <div {...p} class={c.layout}>
      {Array.isArray(children)
        ? children.map((child) => <div class="layout-block">{child}</div>)
        : <div class="layout-block">{children}</div>}
    </div>
  );
}
