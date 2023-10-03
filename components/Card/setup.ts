import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from '../../deps.ts';

export type iCard = iComponent<HTMLDivElement> & {
  imageUrl: string;
  fwd: Partial<{
    panel: iFwd<HTMLDivElement>;
    section: iFwd<HTMLDivElement>;
    image: iFwd<HTMLDivElement>;
  }>;
};

const defaults: iCard = {
  imageUrl: '',
  fwd: {},
};

const styles = {
  section: css`
    padding: var(--s-three-quarters);
  `,
  card: css`
    container-type: inline-size;
  `,
  panel: css`
    border-radius: var(--s-quarter);
  `,
  image: css`
    border-radius: var(--s-quarter) var(--s-quarter) 0 0;
    aspect-ratio: 16 / 9;
    background-size: cover;
    background-position: center;
  `,
};

export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const { panel, section, image } = p.fwd;

  const classes = partializeClasses({
    card: opt(cn(styles.card), p.class, p.nostyle || p.nostyleAll),
    panel: opt(
      cn(styles.panel, p.imageUrl === '' ? null : 'lbx-card_panel'),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
    section: opt(
      cn(styles.section, 'lbx-card_section'),
      section?.class,
      section?.nostyle || p.nostyleAll,
    ),
    image: opt(
      cn(styles.image, 'lbx-card_image'),
      image?.class,
      image?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
