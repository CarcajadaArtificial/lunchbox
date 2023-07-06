import { iHeader } from '../../src/props.ts';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import Panel from '../Panel/index.tsx';

export default function (props: Partial<iHeader>) {
  const { c, children, layout_type, ...p } = setup(props);

  return (
    <Panel>
      <header {...p} class={c.header}>
        {layout_type ? <Layout type={layout_type}>{children}</Layout> : <>{children}</>}
      </header>
    </Panel>
  );
}
