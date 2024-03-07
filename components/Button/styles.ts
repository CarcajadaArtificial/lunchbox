//   ___      _   _              ___ _        _
//  | _ )_  _| |_| |_ ___ _ _   / __| |_ _  _| |___ ___
//  | _ \ || |  _|  _/ _ \ ' \  \__ \  _| || | / -_|_-<
//  |___/\_,_|\__|\__\___/_||_| |___/\__|\_, |_\___/__/
//                                       |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Button />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  border-bottom-width: var(--s-eighth);
  border-color: transparent;
  border-left-width: 0;
  border-radius: var(--s-quarter);
  border-right-width: 0;
  border-style: solid;
  border-top-width: var(--s-eighth);
  cursor: pointer;
  margin-right: var(--s-eighth);
  max-width: max-content;

  &.button {
    &__padding {
      padding: var(--s-eighth) var(--s-five-eights);

      &--compact {
        border-bottom-width: 1px;
        border-top-width: 1px;
        padding: 0 var(--s-three-eights);
      }

      &--large {
        border-bottom-width: var(--s-quarter);
        border-radius: var(--s-five-eights);
        border-top-width: var(--s-quarter);
        padding: var(--s-quarter) var(--s-one-and-half);
      }
    }

    &__style {
      background-color: var(--clr-bg-personality-45);

      &:hover, &:focus { 
        background-color: var(--clr-bg-personality-60);
        border-bottom-color: var(--clr-bg-panel-35);
      }

      &:active {
        background-color: var(--clr-bg-personality-30);
        border-top-color: var(--clr-personality);
        border-bottom-color: transparent;
      }

      &--disabled {
        background-color: var(--clr-bg-panel);
        cursor: not-allowed;
        filter: opacity(0.4);
      }

      &--error {
        background-color: var(--clr-bg-error);

        &:hover, &:focus { 
          background-color: var(--clr-bg-error-50);
          border-bottom-color: var(--clr-bg-error);
        }

        &:active {
          background-color: var(--clr-bg-error);
          border-top-color: var(--clr-bg-error-50);
          border-bottom-color: transparent;
        }
      }

      &--transparent {
        background-color: var(--clr-bg-page);

        &:hover, &:focus { 
          background-color: var(--clr-bg-panel-35);
        }
        
        &:active {
          background-color: var(--clr-bg-panel-60);
        }
      }

      &--panel {
        background-color: var(--clr-bg-panel);

        &:hover, &:focus { 
          background-color: var(--clr-bg-panel-35);
        }
        
        &:active {
          background-color: var(--clr-bg-page);
        }
      }
    }
  }

  .button__icon {
    display: inline;
    width: var(--s-single);
    position: relative;
    bottom: var(--s-eighth);
  }
`;
