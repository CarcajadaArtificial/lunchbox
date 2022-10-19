import { iPage } from "../src/types/props.ts";
import setup from "../src/setup/Page.ts";

export default function (props: Partial<iPage>) {
  const { c, children } = setup(props);

  return (
    <div class={c.wrapper}>
      {children}
    </div>
  );
}
