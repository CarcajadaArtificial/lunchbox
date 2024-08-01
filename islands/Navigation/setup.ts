import { apDef, o, part } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { iPanel } from '../../components/Panel/setup.ts';
import { styles } from './styles.ts';

export type iNavigation = iComponent & {
  fwd: Partial<{
    container: iFwd<HTMLDivElement>;
    panel: Partial<iPanel>;
  }>;
};

const defaults: iNavigation = {
  fwd: {},
};

export default (props: Partial<iNavigation>) => {
  const p = apDef<iNavigation>(defaults, props);

  const classes = part({
    navigation: o('navigation', { ...p }),
    container: o([styles, 'navigation__container'], { ...p.fwd.container }),
    panel: o('', { ...p.fwd.panel }),
  });

  delete p.class;
  return { c: classes, ...p };
};
