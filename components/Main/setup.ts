import { applyDefaults, cn } from '../../deps.ts';
import { iMain } from '../../src/props.ts';

export default (props: Partial<iMain>) => {
  const defaults: iMain = {
    children: undefined,
  };

  const p = applyDefaults<iMain>(defaults, props);

  const classes = {
    main: cn('comp-main clr-bg-page'),
  };

  return { c: classes, ...p };
};
