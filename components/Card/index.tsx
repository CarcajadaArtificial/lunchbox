import setup, { iCard } from './setup.ts';
import Panel from '../Panel/index.tsx';

export default function (props: Partial<iCard>) {
  const {
    c,
    fref,
    fwd,
    nostyle,
    nostyleAll,
    children,
    imageUrl,
    ...p
  } = setup(props);

  return (
    <div ref={fref} class={c.card} {...p}>
      <Panel
        nostyleAll={nostyleAll}
        fref={fwd.panel?.ref}
        class={c.panel}
      >
        {imageUrl === '' ? undefined : (
          <div
            class={c.image}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        <div class={c.section}>
          {children}
        </div>
      </Panel>
    </div>
  );
}
