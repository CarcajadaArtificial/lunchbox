import { iPanel } from '../src/types/props.ts';
import setup from '../src/setup/Panel.ts';

export default function (props: Partial<iPanel>) {
  const { c, fref, children, ...p } = setup(props);

  return (
    <div ref={fref} class={c.panel} {...p}>
      {children}
    </div>
  );
}
