import { cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import { css } from '../../deps.ts';

export type iLink = iComponent<HTMLAnchorElement>;

const style = {
  link: css`
    text-decoration: underline;
    cursor: pointer;
    color: var(--clr-txt-base);
    transition: color 0.1s ease-in-out;

    &:hover, 
    &:focus {
      color: var(--clr-txt-personality);
    }
  `,
};

export default (props: Partial<iLink>) => {
  const p = props;

  const classes = partializeClasses({
    link: opt(
      cn(style.link, transition.interaction.outline),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
