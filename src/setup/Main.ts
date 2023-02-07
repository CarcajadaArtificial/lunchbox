import { applyDefaults, cn } from '../../deps.ts';
import { iMain } from '../types/props.ts';

export default (props: Partial<iMain>) => {
  const defaults: iMain = {
    children: undefined,
  };

  const p = applyDefaults<iMain>(defaults, props);

  const classes = {
    main: cn('flex-1 flex flex-col gap-8 py-8 clr-bg-page'),
  };

  return { c: classes, ...p };
};
