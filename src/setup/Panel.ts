import { applyDefaults, cn } from '../../deps.ts';
import { iPanel } from '../types/props.ts';

export default (props: Partial<iPanel>) => {
  const defaults: iPanel = {
    onlyTop: false,
    onlyBottom: false,
    doubleLeft: false,
    doubleRight: false,
  };

  const p = applyDefaults<iPanel>(defaults, props);

  const classes = {
    panel: cn(
      'panel',
      {
        onlyTop: p.onlyTop,
        onlyBottom: p.onlyBottom,
        doubleLeft: p.doubleLeft,
        doubleRight: p.doubleRight,
      },
      p.class
    ),
  };

  return { c: classes, ...p };
};
