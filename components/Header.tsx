import { iHeader } from '../src/types/props.ts';
import setup from '../src/setup/Header.ts';
import Layout from './Layout.tsx';
import Panel from './Panel.tsx';

/**
 * @todo [!!] change the prop "layout_type" to be optional, and places no layout when undefined
 */
export default function (props: Partial<iHeader>) {
  const { c, children, layout_type, ...p } = setup(props);

  return (
    <Panel>
      <header {...p} class={c.header}>
        <Layout type={layout_type}>{children}</Layout>
      </header>
    </Panel>
  );
}
