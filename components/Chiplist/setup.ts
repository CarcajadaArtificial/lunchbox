import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';

export type iChiplist = iComponent<HTMLUListElement> & {
  onRemove?: (ev: Event) => void;
  values: string[];
  fwd: Partial<{
    chip: iFwd<HTMLLIElement>;
    remove_button: iFwd<HTMLButtonElement>;
  }>;
};

const defaults: iChiplist = {
  values: [],
  fwd: {},
};

export default (props: Partial<iChiplist>) => {
  const p = applyDefaults<iChiplist>(defaults, props);

  const { remove_button, chip } = p.fwd;

  const classes = partializeClasses({
    list: opt(cn('comp-chiplist'), p.class, p.nostyle || p.nostyleAll),
    chip: cn(chip?.class),
    remove_button: cn(remove_button?.class),
  });

  delete p.class;
  return { c: classes, ...p };
};
