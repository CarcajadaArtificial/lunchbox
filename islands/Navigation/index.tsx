import setup, { iNavigation } from './setup.ts';
import Panel from '../../components/Panel/index.tsx';

export default function (props: Partial<iNavigation>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(
    props,
  );

  return (
    <div class={c.container} {...fwd.container}>
      <Panel class={c.panel} {...fwd.panel}>
        <nav class={c.navigation} {...p}>
          {children}
        </nav>
      </Panel>
    </div>
  );
}
