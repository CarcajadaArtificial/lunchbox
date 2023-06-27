import { iCode } from '../src/types/props.ts';
import setup from '../src/setup/Code.ts';

/**
 * @todo [] Click to copy to clipboard.
 */
export default function (props: Partial<iCode>) {
  const { c, children, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <code {...p} class={c.code}>
        {children}
      </code>
    </div>
  );
}
