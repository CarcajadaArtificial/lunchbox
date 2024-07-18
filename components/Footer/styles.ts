//   ___         _             ___ _        _
//  | __|__  ___| |_ ___ _ _  / __| |_ _  _| |___ ___
//  | _/ _ \/ _ \  _/ -_) '_| \__ \  _| || | / -_|_-<
//  |_|\___/\___/\__\___|_|   |___/\__|\_, |_\___/__/
//                                     |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Footer />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.header__panel--banner {
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer {
  padding: var(--s-one-and-half) 0;

  &__fresh-badge {
    margin: var(--s-third) 0;

    &--light {
      @media (prefers-color-scheme: dark) {
        display: none;
      }
    }
    &--dark {
      @media (prefers-color-scheme: light) {
        display: none;
      }
    }
  }
}

`;
