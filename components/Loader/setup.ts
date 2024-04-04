import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from '../../deps.ts';
import { iText } from '../../src/components/atoms/Text/setup.ts';
import { animation } from '../../src/styles.ts';

export type iLoader = iComponent<HTMLDivElement> & {
  fwd: Partial<{
    icon: iFwd<SVGSVGElement>;
    text: Partial<iText>;
  }>;
};

const defaults: iLoader = {
  fwd: {},
};

const style = {
  loader: css`
    padding: var(--s-single);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--s-half);
    border-radius: var(--s-quarter)
  `,
  icon: css`
    height: var(--s-triple);
    width: var(--s-triple);
  `,
  text: css`
  `,
};

export default (props: Partial<iLoader>) => {
  const p = applyDefaults<iLoader>(defaults, props);

  const { icon, text } = p.fwd;

  const classes = partializeClasses({
    loader: opt(
      cn(style.loader),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
    icon: opt(
      cn(style.icon, animation.spin),
      icon?.class,
      icon?.nostyle || p.nostyleAll,
    ),
    text: opt(
      cn(style.text),
      text?.class,
      text?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
