import { iNavigation } from '../../src/props.ts';
import setup from './setup.ts';
import Layout from '../Layout.tsx';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import Panel from '../Panel/index.tsx';

/**
 * @todo [!] Add a property `scroll-height` that makes the menu appear after scrolling until that height.
 * @todo [!] Add an animation when the navigation appears.
 */
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
