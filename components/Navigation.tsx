import { iNavigation } from '../src/types/props.ts';
import setup from '../src/setup/Navigation.ts';
import Layout from './Layout.tsx';
import { LAYOUT_TYPES } from '../mod.ts';
import Panel from './Panel.tsx';

export default function (props: Partial<iNavigation>) {
  const { c, children, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <Panel>
        <nav class={c.nav} {...p}>
          <Layout type={LAYOUT_TYPES.RIGHT}>{children}</Layout>
        </nav>
      </Panel>
    </div>
  );
}
