import { applyDefaults, cn } from '../../deps.ts';
import { iLinkmap } from '../types/props.ts';

export default (props: Partial<iLinkmap>) => {
  const defaults: iLinkmap = {
    links: [],
  };

  const p = applyDefaults<iLinkmap>(defaults, props);

  const classes = {
    main: cn(''),
  };

  return { c: classes, ...p };
};
