import setup, { iButton } from './setup.ts';

/**
 * @todo [!] Add a boolean property for icon buttons, these have different paddings.
 * @todo [!] Add a boolean property for smaller buttons.
 */
export default function (props: Partial<iButton>) {
  const { c, nostyle, nostyleAll, fref, children, type, ...p } = setup(props);

  return (
    <button ref={fref} class={c.button} {...p}>
      {children}
    </button>
  );
}
