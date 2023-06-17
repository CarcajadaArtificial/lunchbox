import { iPanel } from '../src/types/props.ts';
import setup from '../src/setup/Panel.ts';

export default function (props: Partial<iPanel>) {
  const { c, children, ...p } = setup(props);

  return (
    <div {...p} class={c.panel}>
      {children}
    </div>
  );
}
