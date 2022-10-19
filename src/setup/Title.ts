import { applyDefaults, cn } from '../../deps.ts';
import { iTitle } from '../types/props.ts';

export default (props: Partial<iTitle>) => {
  const defaults: iTitle = {
    children: undefined,
  };

  const p = applyDefaults<iTitle>(defaults, props);

  const classes = {
    span: cn('text-obsidiana text-6xl font-bold min-h-80'),
  };

  return { c: classes, ...p };
};
