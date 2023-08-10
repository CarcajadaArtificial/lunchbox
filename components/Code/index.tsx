import setup, { iCode } from './setup.ts';

/**
 * @todo [ ] Click to copy to clipboard.
 * @todo [?] Implement the possibility of large code blocks. That can use real code and parse it with a
 *           markdown component and a property for the language for syntax highlighting.
 */
export default function (props: Partial<iCode>) {
  const { c, nostyle, nostyleAll, fref, fwd, children, ...p } = setup(props);

  return (
    <div ref={fwd.wrapper?.ref} class={c.wrapper}>
      <code ref={fref} {...p} class={c.code}>
        {children}
      </code>
    </div>
  );
}
