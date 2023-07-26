import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';
import Gradient from '../Gradient/index.tsx';
import Text from '../Text/index.tsx';
import Linkmap from '../Linkmap/index.tsx';

export default function (props: Partial<iCard>) {
  const {
    c,
    fref,
    fwd,
    children,
    card_title,
    top_gradient_pattern,
    bottom_gradient_pattern,
    ...p
  } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref!} class={c.wrapper}>
      {top_gradient_pattern
        ? (
          <Gradient
            fref={fwd.top_gradient?.fref}
            class={c.top_gradient}
            flip
            gradient_pattern={top_gradient_pattern}
          />
        )
        : null}
      <Panel fref={fref} class={c.card} {...p}>
        {card_title ? <Text type='subheading'>{card_title}</Text> : null}
        <div class='comp-card_content'>{children}</div>
      </Panel>
      {bottom_gradient_pattern
        ? (
          <Gradient
            fref={fwd.bottom_gradient?.fref}
            class={c.bottom_gradient}
            gradient_pattern={bottom_gradient_pattern}
          />
        )
        : null}
    </div>
  );
}
