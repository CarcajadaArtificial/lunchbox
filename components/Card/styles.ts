//    ___             _      _        _
//   / __|__ _ _ _ __| |  __| |_ _  _| |___ ___
//  | (__/ _` | '_/ _` | (_-<  _| || | / -_|_-<
//   \___\__,_|_| \__,_| /__/\__|\_, |_\___/__/
//                               |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Card />` component.
 *
 * @todo Add the `@container` queries when they're added to resin, also remove them on the
 * `<Stylesheet />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.card {
  margin-top: var(--s-double);
}

.card {
  &__image {
    aspect-ratio: 1 / 1;
    background-position: center;
    background-size: cover;
    border-top-left-radius: var(--s-quarter);
    border-top-right-radius: var(--s-quarter);
    width: var(--s-fifteen);
    margin-left: var(--s-half);
    border: var(--s-half) solid var(--clr-bg-panel);
  }

  &__panel {
    border-radius: var(--s-quarter);
    padding: var(--s-single);
    margin-top: calc(var(--s-quarter) * -1);
  }
}

`;
