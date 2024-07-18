//   _                       _        _        _
//  | |   __ _ _  _ ___ _  _| |_   __| |_ _  _| |___ ___
//  | |__/ _` | || / _ \ || |  _| (_-<  _| || | / -_|_-<
//  |____\__,_|\_, \___/\_,_|\__| /__/\__|\_, |_\___/__/
//             |__/                       |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Layout />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.layout {
  display: grid; 
  grid-column-gap: 1.5rem;
  margin: 0 1.5rem;
  width: auto;
  @media screen and (max-width: 39.9375em) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media screen and (min-width: 40em){
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  &--whitespace {
    display: grid; 
    @media screen and (max-width: 39.9375em) {
      grid-column-gap: 0.8503100088rem;
      width: auto;
      margin: 0 0.8503100088rem;
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    @media screen and (min-width: 40em) and (max-width: 99.9375em) {
      grid-column-gap: 2.1257750221%;
      width: auto;
      margin: 0 calc(23.13871222% - 134.488008342px);
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
    @media screen and (min-width: 100em) {
      grid-column-gap: 1.5rem;
      width: min-content;
      margin: 0 auto;
      grid-template-columns: repeat(12, minmax(4.5rem, 4.5rem));
    }
  }
}

.layout__module {
  &--empty {
    grid-column: span 1;
  }
  &--full {
    grid-column: span 12;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }
  &--center {
    grid-column: 2/span 10;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }
  &--focus {
    grid-column: 3/span 8;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }
  &--halves {
    grid-column: span 6;
  }
  &--thirds {
    grid-column: span 4;
    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
  }
  &--right {
    grid-column: span 4;

    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }

    &:nth-child(even) {
      grid-column: span 8;

      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    }
  }
  &--left {
    grid-column: span 4;

    @media screen and (max-width: 39.9375em) {
      grid-column: span 6;
    }
    
    &:nth-child(odd) {
      grid-column: span 8;

      @media screen and (max-width: 39.9375em) {
        grid-column: span 6;
      }
    }
  }
}

`;
