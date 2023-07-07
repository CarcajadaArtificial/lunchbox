import setup, { iNavigation } from './setup.ts';
import { LAYOUT_TYPES } from '../../src/enums.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';

/**
 * @todo [!] Add a property `scroll-height` that makes the menu appear after scrolling until that height.
 * @todo [!] Add an animation when the navigation appears.
 */
export default function (props: Partial<iNavigation>) {
  const { c, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper}>
      <Panel fref={fwd.panel?.ref} class={c.panel}>
        <nav ref={fref} class={c.nav} {...p}>
          <Layout fref={fwd.layout?.ref} type={LAYOUT_TYPES.RIGHT} class={c.layout}>
            {children}
          </Layout>
        </nav>
      </Panel>
    </div>
  );
}
