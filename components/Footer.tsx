import { iFooter } from "../src/types/props.ts";
import setup from "../src/setup/Footer.ts";
import Layout from "./Layout.tsx";
import Panel from "./Panel.tsx";
import Link from "./Link.tsx";

export default function (props: Partial<iFooter>) {
  const { c, children, layout_type, madeWithFresh, ...p } = setup(props);

  return (
    <Panel onlyTop>
      <footer {...p} class={c.footer}>
        <Layout type={layout_type}>
          {children}
          {madeWithFresh
            ? (
              <Link href="https://fresh.deno.dev">
                <img
                  width="197"
                  height="37"
                  src="https://fresh.deno.dev/fresh-badge.svg"
                  alt="Made with Fresh"
                />
              </Link>
            )
            : null}
        </Layout>
      </footer>
    </Panel>
  );
}
