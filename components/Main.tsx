import { iMain } from "../src/types/props.ts";
import setup from "../src/setup/Main.ts";

export default function (props: Partial<iMain>) {
  const { c, children, ...p } = setup(props);

  return (
    <main {...p} class={c.main}>
      {children}
    </main>
  );
}
