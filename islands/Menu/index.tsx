import setup, { iMenu } from './setup.ts';
import Button from '../../components/Button/index.tsx';
import Link from '../../components/Link/index.tsx';

export default function (props: Partial<iMenu>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    fwd,
    children,
    closed,
    menuPosition,
    menuOptions,
    customOption,
    ...p
  } = setup(props);

  const MenuOption = (
    menuOptionKey: string,
    menuOption: string | (() => void),
  ) => (
    <Link
      tabIndex={-1}
      nostyleAll
      href={typeof menuOption === 'string' ? menuOption : undefined}
    >
      <Button
        // OnExtendedClick={typeof menuOption === 'string'
        //   ? undefined
        //   : menuOption}
        type='transparent'
        class={c.option}
        compact
      >
        {customOption
          ? customOption(menuOptions[menuOptionKey], menuOptionKey)
          : menuOptionKey}
      </Button>
    </Link>
  );

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <Button type='panel' fref={fwd.button?.ref} class={c.button}>
        {children}
      </Button>
      {closed ? undefined : (
        <div ref={fref} {...p} class={c.menu}>
          {Object.keys(menuOptions).map((menuOptionKey) =>
            MenuOption(menuOptionKey, menuOptions[menuOptionKey])
          )}
        </div>
      )}
    </div>
  );
}
