import { iCard } from '../src/types/props.ts';
import setup from '../src/setup/Card.ts';
import Panel from './Panel.tsx';

export default function (props: Partial<iCard>) {
  const { c, fref, fwd, children, ...p } = setup(props);

  return (
    <Panel fref={fwd?.panel?.fref!}>
      <div ref={fref} class={c.card} {...p}>
        {children}
      </div>
    </Panel>
  );
}
