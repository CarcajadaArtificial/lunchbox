import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from 'resin';
import { DateTime, datetime } from 'ptera';

export type iTime = iComponent<HTMLTimeElement> & {
  dateObject: DateTime;
  format: string;
  fwd: Partial<{
    colon: iFwd<HTMLSpanElement>;
  }>;
};

const defaults: iTime = {
  dateObject: datetime(new Date()),
  format: 'www, d MMM YYYY - h:mm a',
  fwd: {},
};

const style = {
  time: css``,
  colon: css``,
};

export default (props: Partial<iTime>) => {
  const p = applyDefaults<iTime>(defaults, props);

  const classes = partializeClasses({
    time: opt(cn(style.time), p.class, p.nostyle || p.nostyleAll),
    colon: opt(cn(style.colon), p.class, p.nostyle || p.nostyleAll),
  });

  delete p.class;
  return { c: classes, ...p };
};
