import setup, { iLink } from './setup.ts';

/**
 * @todo [!] Add hover animation.
 */
export default function (props: Partial<iLink>) {
  const { c, nostyle, nostyleAll, fref, children, ...p } = setup(props);

  return (
    <a ref={fref} tabIndex={p.tabIndex ? p.tabIndex : 0} class={c.link} {...p}>
      {children}
    </a>
  );
}
