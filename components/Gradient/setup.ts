import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { GRADIENT_PATTERNS } from '../../src/enums.ts';

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
      p.nostyle,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
