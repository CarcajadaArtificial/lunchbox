//   __  __         _      _       ___ _        _
//  |  \/  |___  __| |_  _| |___  / __| |_ _  _| |___ ___
//  | |\/| / _ \/ _` | || | / -_) \__ \  _| || | / -_|_-<
//  |_|  |_\___/\__,_|\_,_|_\___| |___/\__|\_, |_\___/__/
//                                         |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Module />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`


&.module {
  &--full {
    grid-column: span 12;
  }

  &--none {
    display: none;
    grid-column: span 12;
  }

  &--xl {
    grid-column: span 10;
  }

  &--lg {
    grid-column: span 8;
  }

  &--md {
    grid-column: span 6;
  }

  &--sm {
    grid-column: span 4;
  }

  &--xs {
    grid-column: span 2;
  }

  &__half {
    @media screen and (max-width: 39.9375em) {
      &--full {
        grid-column: span 6;
      }
      &--none {
        display: none;
        grid-column: span 6;
      }
      &--xl {
        grid-column: span 5;
      }
      &--lg {
        grid-column: span 4;
      }
      &--md {
        grid-column: span 3;
      }
      &--sm {
        grid-column: span 2;
      }
      &--xs {
        grid-column: span 1;
      }
    }
  }
}

`;
