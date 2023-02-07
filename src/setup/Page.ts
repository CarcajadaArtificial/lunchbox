import { applyDefaults, cn } from '../../deps.ts';
import { PAGE_THEME } from '../types/enums.ts';
import { iPage } from '../types/props.ts';

export default (props: Partial<iPage>) => {
  const defaults: iPage = {
    children: undefined,
    theme: PAGE_THEME.NEWSPAPER,
    darkMode: false,
  };

  const p = applyDefaults<iPage>(defaults, props);

  const classes = {
    wrapper: cn('page flex flex-col', p.theme),
  };

  return { c: classes, ...p };
};
