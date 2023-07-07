import { applyDefaults, cn } from '../../deps.ts';
import { iExtendedElement } from '../../src/element.ts';

export type iCode = iExtendedElement;

const defaults: iCode = {
  children: undefined,
};

export default (props: Partial<iCode>) => {
  const p = applyDefaults<iCode>(defaults, props);

  const classes = {
    code: cn('comp-code clr-txt-personality'),
    wrapper: cn('comp-code_wrapper clr-bg-panel'),
  };

  return { c: classes, ...p };
};