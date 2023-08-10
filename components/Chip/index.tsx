import setup, { iChip } from './setup.ts';

export default function (props: Partial<iChip>) {
  const { c, nostyle, nostyleAll, fref, children, ...p } = setup(props);

  return (
    <li ref={fref} class={c.chip} {...p}>
      <>{children}</>
      <button class={c.remove_button}>×</button>
    </li>
  );
}
