import setup, { iButton } from './setup.ts';

/**
 * @todo [!] Add a boolean property for icon buttons, these have different paddings.
 * @todo [!] Add a boolean property for smaller buttons.
 */
export default function (props: Partial<iButton>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    children,
    compact,
    type,
    OnExtendedClick,
    ...p
  } = setup(
    props,
  );

  return (
    <button
      onClick={OnExtendedClick}
      onTouchEnd={OnExtendedClick}
      onKeyUp={OnExtendedClick
        ? (ev) => {
          if (ev.code === 'Space') {
            OnExtendedClick();
          }
        }
        : undefined}
      ref={fref}
      class={c.button}
      {...p}
    >
      {children}
    </button>
  );
}
