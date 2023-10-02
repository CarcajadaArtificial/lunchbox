import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from 'resin';

export type iCode = iComponent & {
  fwd: Partial<{
    wrapper: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCode = {
  fwd: {},
};

const style = {
  code: css`
    line-break: strict;
    line-height: calc(100% - 1px);
    color: var(--clr-txt-personality);
  `,
  wrapper: css`
    display: inline;
    padding: 3px 0.5ch 1px 0.5ch;
    margin: 0 0.5ch;
    background-color: var(--clr-bg-panel);
    border-radius: var(--s-quarter);
  `,
};

export default (props: Partial<iCode>) => {
  const p = applyDefaults<iCode>(defaults, props);

  const { wrapper } = p.fwd;

  const classes = partializeClasses({
    code: opt(
      cn(style.code),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    wrapper: opt(
      cn(style.wrapper),
      wrapper?.class,
      wrapper?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
