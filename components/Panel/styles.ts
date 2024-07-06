//   ___               _      _        _
//  | _ \__ _ _ _  ___| |  __| |_ _  _| |___ ___
//  |  _/ _` | ' \/ -_) | (_-<  _| || | / -_|_-<
//  |_| \__,_|_||_\___|_| /__/\__|\_, |_\___/__/
//                                |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Panel />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  background-color: var(--clr-bg-panel);

  &.panel {

    .button__style {
      &--transparent {
        background-color: var(--clr-bg-panel);
        
        &:hover, &:focus { 
          background-color: var(--clr-bg-page-50);
          border-bottom-color: var(--clr-txt-personality-10);
        }
        
        &:active {
          background-color: var(--clr-txt-personality-10);
          border-top-color: var(--clr-bg-personality-30);
          border-bottom-color: transparent;
        }
      }
      
      &--panel {
        background-color: var(--clr-bg-page);
        
        &:hover, &:focus { 
          background-color: var(--clr-txt-base-25);
          border-bottom-color: var(--clr-txt-base);
        }
        
        &:active {
          background-color: var(--clr-bg-page-50);
          border-top-color: var(--clr-bg-personality-30);
          border-bottom-color: transparent;
        }
      }
    }

    .code__wrapper {
      background-color: var(--clr-txt-personality-10);
    }
  
    .kbd {
      background-color: var(--clr-bg-page);
      border-bottom-color: var(--clr-txt-personality-10);
    }
  }

`;
