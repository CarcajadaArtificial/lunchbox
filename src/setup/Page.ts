import { applyDefaults, cn } from '../../deps.ts';
import { iPage } from '../types/props.ts';

export default (props: Partial<iPage>) => {
  const defaults: iPage = {
    children: undefined,
  };

  const p = applyDefaults<iPage>(defaults, props);

  const classes = {
    wrapper: cn('page font-mono'),
  };

  return { c: classes, ...p };
};
