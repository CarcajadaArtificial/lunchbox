import { iText } from '../src/types/props.ts';
import setup from '../src/setup/Text.ts';

export default function (props: Partial<iText>) {
  const { c, fref, type, compact, single, indent, noMargins, children, inheritColor, ...p } =
    setup(props);

  return (
    <span ref={fref} class={c.span} {...p}>
      {children}
    </span>
  );
}
