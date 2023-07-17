import setup, { iHeader } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';

export default function (props: Partial<iHeader>) {
  const { c, fref, fwd, children, layout_type, ...p } = setup(props);

  return (
    <Panel fref={fwd.panel?.fref} class={c.panel}>
      <header ref={fref} {...p} class={c.header}>
        {layout_type ? (
          <Layout fref={fwd.layout?.fref} type={layout_type} class={c.layout}>
            {children}
          </Layout>
        ) : (
          <>{children}</>
        )}
      </header>
    </Panel>
  );
}
