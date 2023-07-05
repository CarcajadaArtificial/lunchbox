import { iSeparator } from '../src/types/props.ts';
import setup from '../src/setup/Separator.ts';

/**
 * @todo [!] Add a gradient property that creates a custom gradient separator.
 */
export default function (props: Partial<iSeparator>) {
  const { c, fref, ...p } = setup(props);

  return <hr ref={fref} class={c.separator} {...p} />;
}
