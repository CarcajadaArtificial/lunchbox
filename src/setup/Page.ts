import { applyDefaults, cn } from '../../deps.ts';
import { iPage } from '../types/props.ts';

export default (props: Partial<iPage>) => {
  const defaults: iPage = {
    children: undefined,
  };

  const p = applyDefaults<iPage>(defaults, props);

  const classes = {
    page: cn('comp-page'),
  };

  return { c: classes, ...p };
};
