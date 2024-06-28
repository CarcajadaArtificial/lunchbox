//   _                 _
//  | |   ___  __ _ __| |___ _ _
//  | |__/ _ \/ _` / _` / -_) '_|
//  |____\___/\__,_\__,_\___|_|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Loader />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  padding: var(--s-single);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-half);
  border-radius: var(--s-quarter);

  .loader {
    &__icon {
      height: var(--s-triple);
      width: var(--s-triple);
    }
  }
`;
