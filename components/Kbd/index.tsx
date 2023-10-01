import setup, { iKbd } from './setup.ts';

export default function (props: Partial<iKbd>) {
  const { c, nostyle, nostyleAll, fref, children, ...p } = setup(props);

  return <kbd class={c.kbd}>{children}</kbd>;
}
