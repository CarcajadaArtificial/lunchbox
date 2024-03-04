//    ___             _   ___      _
//   / __|__ _ _ _ __| | / __| ___| |_ _  _ _ __
//  | (__/ _` | '_/ _` | \__ \/ -_)  _| || | '_ \
//   \___\__,_|_| \__,_| |___/\___|\__|\_,_| .__/
//                                         |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Card />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent, iFwd } from '../../src/types.ts';
import { css } from '../../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property type of the `<Card />` component. */
export type iCard = iComponent<HTMLDivElement> & {
  /** An optional URL for the card's header. */
  imageUrl: string;
  /** Secondary elements' configuration props. */
  fwd: Partial<{
    panel: iFwd<HTMLDivElement>;
    section: iFwd<HTMLDivElement>;
    image: iFwd<HTMLDivElement>;
  }>;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** These are the default values of the `<Card />` component's props. */
const defaults: iCard = {
  imageUrl: '',
  fwd: {},
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Style object for the `<Card />` component.
 *
 * @todo Add the `@container` queries when they're added to resin, also remove them on the
 * `<Stylesheet />` component.
 */
const styles = css`
  container-type: inline-size;

  .card {
    &__section {
      padding: var(--s-three-quarters);
      grid-column: span 2;

      /* @container (width > 35em) {
        padding-left: var(--s-single);
      } */
    }

    &__panel {
      border-radius: var(--s-quarter);

      /* @container (width > 35em) {
        display: grid;
        grid-template-columns: 30% 70%;
      } */
    }
    
    &__image {
      border-radius: var(--s-quarter) var(--s-quarter) 0 0;
      aspect-ratio: 16 / 9;
      background-size: cover;
      background-position: center;

      /* @container (width > 35em) {
        aspect-ratio: 1 / 1;
        border-radius: var(--s-quarter) 0 0 var(--s-quarter);
      } */
    }
  }
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Card />` component. */
export default (props: Partial<iCard>) => {
  const p = applyDefaults<iCard>(defaults, props);

  const { panel, section, image } = p.fwd;

  const classes = partializeClasses({
    card: opt(cn(styles), p.class, p.nostyle || p.nostyleAll),
    image: opt(cn('card__image'), image?.class, image?.nostyle || p.nostyleAll),
    panel: opt(
      cn('card__panel'),
      panel?.class,
      panel?.nostyle || p.nostyleAll,
    ),
    section: opt(
      cn('card__section'),
      section?.class,
      section?.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
