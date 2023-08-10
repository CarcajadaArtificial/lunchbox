import setup, { iSeparator } from './setup.ts';

/**
 * @todo [!] Add a gradient property that creates a custom gradient separator.
 */
export default function (props: Partial<iSeparator>) {
  const { c, nostyle, nostyleAll, fref, ...p } = setup(props);

  return <hr ref={fref} class={c.separator} {...p} />;
}
