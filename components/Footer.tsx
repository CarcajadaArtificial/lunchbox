import { ComponentChild } from 'preact';
import { iFooter } from '../src/types/props.ts';
import setup from '../src/setup/Footer.ts';
import Layout from './Layout.tsx';
import Panel from './Panel.tsx';
import Link from './Link.tsx';

/**
 * @todo [!!] change the prop "layout_type" to be optional, and places no layout when undefined
 * @todo [ ] Lazy load the `made-with-fresh` images.
 * @todo [?] Replace an src image with an inline SVG.
 */
export default function (props: Partial<iFooter>) {
  const { c, children, layout_type, madeWithFresh, ...p } = setup(props);

  if (madeWithFresh) {
    (children as [ComponentChild]).push(
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
        <Layout type={layout_type}>{children}</Layout>
      </footer>
    </Panel>
  );
}
