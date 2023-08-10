import setup, { iGradient } from './setup.ts';

export default function (props: Partial<iGradient>) {
  const { c, nostyle, nostyleAll, fref, ...p } = setup(props);

  return <div ref={fref} class={c.gradient} {...p} />;
}
