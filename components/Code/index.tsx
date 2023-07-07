import setup, { iCode } from './setup.ts';

/**
 * @todo [ ] Click to copy to clipboard.
 */
export default function (props: Partial<iCode>) {
  const { c, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper}>
      <code ref={fref} {...p} class={c.code}>
        {children}
      </code>
    </div>
  );
}
