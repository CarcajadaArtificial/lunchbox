import setup, { iChiplist } from './setup.ts';
import Chip from '../Chip/index.tsx';

export default function (props: Partial<iChiplist>) {
  const { c, nostyle, nostyleAll, fref, fwd, values, onRemove, ...p } = setup(
    props,
  );

  return (
    <ul ref={fref} class={c.list} {...p}>
      {values.map((value) => (
        <Chip
          class={c.chip}
          onRemove={onRemove}
          fwd={{
            remove_button: {
              class: c.remove_button,
            },
          }}
        >
          {value}
        </Chip>
      ))}
    </ul>
  );
}
