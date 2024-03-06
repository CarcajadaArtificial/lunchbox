//    ___             _   ___ _        _
//   / __|__ _ _ _ __| | / __| |_ _  _| |___ ___
//  | (__/ _` | '_/ _` | \__ \  _| || | / -_|_-<
//   \___\__,_|_| \__,_| |___/\__|\_, |_\___/__/
//                                |__/
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
