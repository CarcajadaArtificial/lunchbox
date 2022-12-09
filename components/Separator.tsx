import { iSeparator } from "../src/types/props.ts";
import setup from "../src/setup/Separator.ts";

export default function (props: Partial<iSeparator>) {
  const { c, ...p } = setup(props);

  return <div {...p} class={c.separator}></div>;
}
