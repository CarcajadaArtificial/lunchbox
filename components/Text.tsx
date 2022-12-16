import { iText } from "../src/types/props.ts";
import setup from "../src/setup/Text.ts";

/**
 * @todo Styles for prose, and better y-margins.
 * @todo Change size classes from tailwind's in favor of custom sizes.
 */
export default function (props: Partial<iText>) {
  const { c, type, noMargins, children, inheritColor, ...p } = setup(props);

  return (
    <span {...p} class={c.span}>
      {children}
    </span>
  );
}
