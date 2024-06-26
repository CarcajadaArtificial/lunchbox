import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { MENU_POSITIONS } from '../../src/enums.ts';
import { css } from '../../deps.ts';
import { iButton } from '../../components/Button/setup.ts';
import { JSX } from 'preact';

type MenuOption = string | (() => void);

export type iMenu = iComponent<HTMLDivElement> & {
  closed: boolean;
  menuPosition: MENU_POSITIONS;
  menuOptions: Record<string, MenuOption>;
  customOption?: (option: MenuOption, key: string) => JSX.Element;
  fwd: Partial<{
    container: iFwd<HTMLDivElement>;
    button: Partial<iButton>;
    option: Partial<iButton>;
  }>;
};

const defaults: iMenu = {
  closed: false,
  menuPosition: 'static',
  menuOptions: {},
  fwd: {},
};

const style = {
  menu: css`
    display: grid;
    width: 16rem;
    gap: var(--s-quarter);
    padding: var(--s-quarter);
    margin: var(--s-quarter) 0 var(--s-single) 0;
    background-color: var(--clr-bg-panel-50);
    border-radius: var(--s-quarter);
    backdrop-filter: blur(var(--s-three-quarters)) brightness(75%);
    -webkit-backdrop-filter: blur(var(--s-three-quarters)) brightness(75%);
    box-shadow: 0px var(--s-eighth) var(--s-quarter) var(--s-eighth) rgba(0, 0, 0, 0.1);
  `,
  container: css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: min-content;
  `,
  option: css`
    min-width: 100%;
    text-align: left;
    background-color: transparent;
  `,
  absolute: css`
    position: absolute;
    z-index: 1;
  `,
};

const stylePositions: Record<MENU_POSITIONS, string> = {
  'static': css`
    position: static;
  `,
  'top-left': css`
    bottom: 100%;
    right: 0;
  `,
  'top-right': css`
    bottom: 100%;
    left: 0;
  `,
  'bottom-left': css`
    top: 100%;
    right: 0;
  `,
  'bottom-right': css`
    top: 100%;
    left: 0;
  `,
};

export default (props: Partial<iMenu>) => {
  const p = applyDefaults<iMenu>(defaults, props);

  const { container, button, option } = p.fwd;

  const classes = partializeClasses({
    menu: opt(
      cn(
        style.menu,
        stylePositions[p.menuPosition],
        p.menuPosition !== 'static' ? style.absolute : undefined,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    container: opt(
      cn(style.container),
      container?.class,
      container?.nostyle || p.nostyleAll,
    ),
    option: opt(
      cn(style.option),
      option?.class,
      option?.nostyle || p.nostyleAll,
    ),
    button: cn(button?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
