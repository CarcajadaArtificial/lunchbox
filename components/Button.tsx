import { iButton } from '../src/types/props.ts';
import setup from '../src/setup/Button.ts';

/**
 * @todo [!!] Add a boolean property for icon buttons, these have different paddings.
 * @todo [!!] Add a boolean property for smaller buttons.
 */
export default function (props: Partial<iButton>) {
  const { c, children, type, ...p } = setup(props);

  return (
    <button {...p} class={c.button}>
      {children}
    </button>
  );
}
