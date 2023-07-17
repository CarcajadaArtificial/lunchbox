import setup, { iMain } from './setup.ts';
import Layout from '../Layout/index.tsx';

export default function (props: Partial<iMain>) {
  const { c, fref, fwd, children, layout_type, ...p } = setup(props);

  return (
    <main ref={fref} {...p} class={c.main}>
      {layout_type ? (
        <Layout type={layout_type} class={c.layout} fref={fwd.layout?.fref}>
          {children}
        </Layout>
      ) : (
        <>{children}</>
      )}
    </main>
  );
}
