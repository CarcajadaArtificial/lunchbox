import setup, { iText } from './setup.ts';

/**
 * @todo [!] Add scroll-padding-top to headings.
 * @todo [!] Impleent the prop `compact`.
 * @todo [!] Impleent the prop `single`.
 * @todo [!] Impleent the prop `noMargins`.
 * @todo [!] Impleent the prop `indent`.
 * @todo [!] Impleent the prop `inheritColor`.
 */
export default function (props: Partial<iText>) {
  const {
    c,
    fref,
    type,
    compact,
    single,
    indent,
    noMargins,
    children,
    inheritColor,
    ...p
  } = setup(props);

  return (
    <span ref={fref} class={c.span} {...p}>
      {children}
    </span>
  );
}
