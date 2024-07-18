import Panel from '../../components/Panel/index.tsx';
import Layout from '../../components/Layout/index.tsx';
import setup, { iDialog } from './setup.ts';

export default function (props: Partial<iDialog>) {
  const {
    c,
    fref,
    fwd,
    nostyle,
    nostyleAll,
    children,
    open,
    ...p
  } = setup(props);

  if (!open) {
    return <></>;
  }

  return (
    <div ref={fref} class={c.dialog} {...p}>
      <Layout type='focus' class={c.layout} ref={fwd.layout?.ref}>
        <Panel class={c.panel} ref={fwd.panel?.ref}>{children}</Panel>
      </Layout>
    </div>
  );
}
