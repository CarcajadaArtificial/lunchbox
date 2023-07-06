import { iPanel } from '../../src/props.ts';
import setup from './setup.ts';

export default function (props: Partial<iPanel>) {
  const { c, fref, children, ...p } = setup(props);

  return (
    <div ref={fref} class={c.panel} {...p}>
      {children}
    </div>
  );
}
