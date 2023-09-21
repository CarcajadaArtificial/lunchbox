import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from 'resin';

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

const style = {
  chip: css`
    list-style: none;
    max-width: var(--s-fifteen);
    width: max-content;
    padding-left: var(--s-half);
    display: flex;
    align-items: center;
    border-radius: var(--s-eighth);
    background-color: var(--clr-bg-personality-60);
  `,
  remove: css`
    width: var(--s-one-and-half);
    text-align: center;
    font-size: 140%;
    height: var(--s-one-and-half);
    border-radius: var(--s-eighth);
  `,
  content: css`
    max-width: var(--s-fifteen);
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    &:not(:has(+ .lbx-chip_remove)) {
      padding-right: var(--s-half);
    }
  `,
};

export default (props: Partial<iChip>) => {
  const p = applyDefaults<iChip>(defaults, props);

  const { remove_button, content } = p.fwd;

  const classes = partializeClasses({
    chip: opt(
      cn(style.chip),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    remove_button: opt(
      cn(style.remove, 'lbx-chip_remove'),
      remove_button?.class,
      remove_button?.nostyle || p.nostyleAll,
    ),
    content: opt(
      cn(style.content),
      content?.class,
      content?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
