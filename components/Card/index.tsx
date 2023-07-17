import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';

export default function (props: Partial<iCard>) {
  const { c, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref!} class={c.wrapper}>
      <Panel fref={fref} class={c.card} {...p}>
        {children}
      </Panel>
      {/* <div ref={fwd.gradient?.ref!} class={c.gradient} /> */}
    </div>
  );
}
