import { iPage } from "../src/types/props.ts";
import setup from "../src/setup/Page.ts";

export default function (props: Partial<iPage>) {
  const { c, children, ...p } = setup(props);

  return (
    <div {...p} class={c.wrapper}>
      {children}
    </div>
  );
}
