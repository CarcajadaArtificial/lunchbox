import setup, { iHeader } from './setup.ts';
import Layout from '../../atoms/Layout/index.tsx';
import Panel from '../../atoms/Panel/index.tsx';
import Gradient from '../../../../components/Gradient/index.tsx';

export default function (props: Partial<iHeader>) {
  const {
    c,
    fref,
    nostyle,
    nostyleAll,
    fwd,
    banner,
    children,
    gradient_pattern,
    layout_type,
    ...p
  } = setup(
    props,
  );

  return (
    <>
      <Panel nostyleAll={nostyleAll} fref={fwd.panel?.fref} class={c.panel}>
        <header ref={fref} {...p} class={c.header}>
          {layout_type
            ? (
              <Layout
                fref={fwd.layout?.fref}
                type={layout_type}
                class={c.layout}
                nostyleAll={nostyleAll}
              >
                {children}
              </Layout>
            )
            : <>{children}</>}
        </header>
      </Panel>
      {gradient_pattern
        ? (
          <Gradient
            fref={fwd.gradient?.fref}
            class={c.gradient}
            gradient_pattern={gradient_pattern}
            nostyleAll={nostyleAll}
          />
        )
        : null}
    </>
  );
}
