import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';
import { GRADIENT_PATTERNS } from 'enums';

export type iGradient = iComponent<HTMLDivElement> & {
  gradient_pattern: GRADIENT_PATTERNS | null;
  flip: boolean;
};

const defaults: iGradient = {
  gradient_pattern: null,
  flip: false,
};

export default (props: Partial<iGradient>) => {
  const p = applyDefaults<iGradient>(defaults, props);

  const classes = partializeClasses({
    gradient: opt(
      cn(
        'comp-gradient',
        p.gradient_pattern ? `comp-gradient_${p.gradient_pattern}` : null,
        p.flip ? 'flip' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
