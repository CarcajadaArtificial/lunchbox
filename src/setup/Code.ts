import { applyDefaults, cn } from '../../deps.ts';
import { iCode } from '../types/props.ts';

export default (props: Partial<iCode>) => {
  const defaults: iCode = {
    children: undefined,
  };

  const p = applyDefaults<iCode>(defaults, props);

  const classes = {
    code: cn(
      'block clr-bg-primary px-4 pt-2 pb-3 clr-heading rounded border-b-2 clr-border'
    ),
    wrapper: cn('code-wrapper grid py-4'),
  };

  return { c: classes, ...p };
};
