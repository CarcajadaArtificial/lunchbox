import { iPage } from "../src/types/props.ts";
import setup from "../src/setup/Page.ts";

export default function (props: Partial<iPage>) {
  const { c, id, children, ...p } = setup(props);

  return (
    <div id="page-wrapper" {...p} class={c.wrapper}>
      {children}
    </div>
  );
}
