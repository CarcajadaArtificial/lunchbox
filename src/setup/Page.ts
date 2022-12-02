import { applyDefaults, cn } from '../../deps.ts';
import { iPage } from '../types/props.ts';

export default (props: Partial<iPage>) => {
  const defaults: iPage = {
    children: undefined,
    theme: 'newspaper',
    darkMode: false,
  };

  const p = applyDefaults<iPage>(defaults, props);

  const classes = {
    wrapper: cn(
      'page font-mono flex flex-col',
      p.darkMode ? 'dark' : 'light',
      p.theme
    ),
  };

  return { c: classes, ...p };
};
