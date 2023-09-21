import Text from '../Text/index.tsx';
import setup, { iChip } from './setup.ts';

export default function (props: Partial<iChip>) {
  const { c, fwd, nostyle, nostyleAll, fref, children, onRemove, ...p } = setup(
    props,
  );

  return (
    <li ref={fref} class={c.chip} {...p}>
      <Text class={c.content}>{children}</Text>
      {onRemove
        ? (
          <button
            onClick={onRemove}
            onKeyPress={(ev) => {
              if (onRemove && (ev.key === 'Enter' || ev.key === 'Space')) {
                onRemove!(ev);
              }
            }}
            class={c.remove_button}
          >
            ×
          </button>
        )
        : null}
    </li>
  );
}
