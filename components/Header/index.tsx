import setup, { iHeader } from './setup.ts';
import Layout from '../Layout/index.tsx';
import Panel from '../Panel/index.tsx';
import Gradient from '../Gradient/index.tsx';

export default function (props: Partial<iHeader>) {
  const { c, fref, fwd, children, gradient_pattern, layout_type, ...p } = setup(props);

  return (
    <div>
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
      {gradient_pattern ? (
        <Gradient fref={fwd.gradient?.fref} class={c.gradient} gradient_pattern={gradient_pattern} />
      ) : null}
    </div>
  );
}
