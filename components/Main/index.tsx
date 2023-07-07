import setup, { iMain } from './setup.ts';
import Layout from '../Layout/index.tsx';

export default function (props: Partial<iMain>) {
  const { c, children, layout_type, ...p } = setup(props);

  return (
    <main {...p} class={c.main}>
      {layout_type ? <Layout type={layout_type}>{children}</Layout> : <>{children}</>}
    </main>
  );
}
