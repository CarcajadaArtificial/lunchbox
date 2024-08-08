import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iButton } from '../../components/Button/setup.ts';

export type iMenu = iComponent<HTMLDivElement> & {
  closed: boolean;
  fwd: Partial<{
    container: iFwd<HTMLDivElement>;
    button: Partial<iButton>;
    option: Partial<iButton>;
  }>;
};

const defaults: iMenu = {
  closed: false,
  fwd: {},
};

export default (props: Partial<iMenu>) => {
  const p = apDef<iMenu>(defaults, props);

  const classes = part({
    menu: o('menu', { ...p }),
    button: o('menu__button', { ...p.fwd.button }),
    container: o('menu__container', { ...p.fwd.container }),
  });

  delete p.class;
  return { c: classes, ...p };
};
