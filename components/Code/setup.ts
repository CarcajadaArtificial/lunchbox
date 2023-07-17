import { cn, opt, applyDefaults, partializeClasses } from '../../src/utils.ts';
import { iExtendedElement, iFwd } from '../../src/types.ts';

export type iCode = iExtendedElement & {
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCode = {
  fwd: {},
};

export default (props: Partial<iCode>) => {
  const p = applyDefaults<iCode>(defaults, props);

  const { wrapper } = p.fwd;

  const classes = partializeClasses({
    code: opt(cn('comp-code clr-txt-personality', p.class), p.nostyle),
    wrapper: opt(cn('comp-code_wrapper clr-bg-panel', wrapper?.class), wrapper?.nostyle),
  });

  delete p.class;
  return { c: classes, ...p };
};
