import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';
import Gradient from '../Gradient/index.tsx';

export default function (props: Partial<iCard>) {
  const { c, fref, fwd, children, top_gradient_pattern, bottom_gradient_pattern, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref!} class={c.wrapper}>
      {top_gradient_pattern ? (
        <Gradient
          fref={fwd.top_gradient?.fref}
          class={c.top_gradient}
          flip
          gradient_pattern={top_gradient_pattern}
        />
      ) : null}
      <Panel fref={fref} class={c.card} {...p}>
        {children}
      </Panel>
      {bottom_gradient_pattern ? (
        <Gradient
          fref={fwd.bottom_gradient?.fref}
          class={c.bottom_gradient}
          gradient_pattern={bottom_gradient_pattern}
        />
      ) : null}
    </div>
  );
}
