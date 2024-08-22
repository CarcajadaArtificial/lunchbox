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
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }

  &--none {
    display: none;
    grid-column: span 12;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }

  &--xl {
    grid-column: span 10;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 5;
    }
  }

  &--lg {
    grid-column: span 8;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 4;
    }
  }

  &--md {
    grid-column: span 6;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 3;
    }
  }

  &--sm {
    grid-column: span 4;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 2;
    }
  }

  &--xs {
    grid-column: span 2;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 1;
    }
  }
}

`;
