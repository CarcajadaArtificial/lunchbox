import { applyDefaults, cn } from '../../deps.ts';
import { iMenu } from '../types/props.ts';

export default (props: Partial<iMenu>) => {
  const defaults: iMenu = {
    children: undefined,
    links: [],
  };

  const p = applyDefaults<iMenu>(defaults, props);

  const classes = {
    menu: cn(
      'w-80 p-2 mt-1',
      'absolute right-0',
      'bg-blanco border-1 border-hierro',
      'flex flex-col gap-1'
    ),
    door: cn('px-1.5 pb-0.5 border-1 border-hierro rounded-sm cursor-pointer'),
    wrapper: cn('relative'),
  };

  return { c: classes, ...p };
};
