//   ___               _      _        _
//  | _ \__ _ _ _  ___| |  __| |_ _  _| |___ ___
//  |  _/ _` | ' \/ -_) | (_-<  _| || | / -_|_-<
//  |_| \__,_|_||_\___|_| /__/\__|\_, |_\___/__/
//                                |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Button />` component.
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
          background-color: var(--clr-bg-error);
        }
        
        &:active {
          background-color: var(--clr-bg-personality-45);
        }
      }

      &--panel {
        background-color: var(--clr-bg-page);

        &:hover, &:focus { 
          background-color: var(--clr-bg-error);
        }
        
        &:active {
          background-color: var(--clr-bg-personality-45);
        }
      }
    }
  
    .kbd {
      background-color: var(--clr-bg-page);
    }
  }

`;
