import { iFooter } from '../src/types/props.ts';
import setup from '../src/setup/Footer.ts';
import Layout from './Layout.tsx';
import Panel from './Panel.tsx';
import Link from './Link.tsx';

/**
 * @todo [!!!] Move arrayChildren to `setup/Footer.ts` and make it replace the default children prop.
 * @todo [!!] change the prop "layout_type" to be optional, and places no layout when undefined
 * @todo [ ] Lazy load the `made-with-fresh` images.
 * @todo [?] Replace an src image with an inline SVG.
 */
export default function (props: Partial<iFooter>) {
  const { c, children, layout_type, madeWithFresh, ...p } = setup(props);

  const arrayChildren = children ? (Array.isArray(children) ? children : [children]) : [];

  if (madeWithFresh) {
    arrayChildren.push(
      <Link class="made-with-fresh" href="https://fresh.deno.dev">
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge.svg"
          alt="Made with Fresh"
          class="fresh-badge light"
        />
        <img
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
          class="fresh-badge dark"
        />
      </Link>
    );
  }

  return (
    <Panel>
      <footer {...p} class={c.footer}>
        <Layout type={layout_type}>{arrayChildren}</Layout>
      </footer>
    </Panel>
  );
}
