import { applyDefaults, cn } from '../../deps.ts';
import { iMenu } from '../types/props.ts';

export default (props: Partial<iMenu>) => {
  const defaults: iMenu = {
    children: '☰',
    links: [],
    isOpen: false,
  };

  const p = applyDefaults<iMenu>(defaults, props);

  const classes = {
    menu: cn(
      'w-80 p-2 mt-1',
      'absolute right-0',
      'clr-bg-primary border-1 clr-border',
      'flex flex-col gap-1'
    ),
    door: cn('menu-door'),
    wrapper: cn('relative'),
  };

  return { c: classes, ...p };
};
