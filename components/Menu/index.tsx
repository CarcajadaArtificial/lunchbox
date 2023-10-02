import setup, { iMenu } from './setup.ts';
import Button from '../Button/index.tsx';
import Link from '../Link/index.tsx';

export default function (props: Partial<iMenu>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    children,
    open,
    menuPosition,
    menuOptions,
    ...p
  } = setup(props);

  function MenuOption(
    menuOptionKey: string,
    menuOption: string | ((ev: Event) => void),
  ) {
    if (typeof menuOption === 'string') {
      return (
        <Link nostyleAll href={menuOption}>
          <Button type='invisible' class={c.option}>
            {menuOptionKey}
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          type='invisible'
          onClick={menuOption}
          class={c.option}
        >
          {menuOptionKey}
        </Button>
      );
    }
  }

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <Button type='panel' fref={fwd.button?.ref} class={c.button}>
        {children}
      </Button>
      {open
        ? (
          <div ref={fref} {...p} class={c.menu}>
            {Object.keys(menuOptions).map((menuOptionKey) =>
              MenuOption(menuOptionKey, menuOptions[menuOptionKey])
            )}
          </div>
        )
        : undefined}
    </div>
  );
}
