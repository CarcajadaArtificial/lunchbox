import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent, iFwd } from 'types';

export type iChip = iComponent<HTMLLIElement> & {
  onRemove?: (ev: Event) => void;
  fwd: Partial<{
    content: iFwd<HTMLSpanElement>;
    remove_button: iFwd<HTMLButtonElement>;
  }>;
};

const defaults: iChip = {
  fwd: {},
};

export default (props: Partial<iChip>) => {
  const p = applyDefaults<iChip>(defaults, props);

  const { remove_button, content } = p.fwd;

  const classes = partializeClasses({
    chip: opt(
      cn('comp-chip clr-bg-input'),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    remove_button: opt(
      cn('comp-chip_remove'),
      remove_button?.class,
      remove_button?.nostyle || p.nostyleAll,
    ),
    content: opt(
      cn('comp-chip_content'),
      content?.class,
      content?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
