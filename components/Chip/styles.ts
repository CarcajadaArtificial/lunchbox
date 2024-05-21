//    ___ _    _           _        _
//   / __| |_ (_)_ __   __| |_ _  _| |___ ___
//  | (__| ' \| | '_ \ (_-<  _| || | / -_|_-<
//   \___|_||_|_| .__/ /__/\__|\_, |_\___/__/
//              |_|            |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Chip />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.chip {
  align-items: center;
  background-color: var(--clr-bg-personality);
  border-radius: var(--s-quarter);
  display: flex;
  list-style: none;
  max-width: var(--s-fifteen);
  padding-left: var(--s-quarter);
  width: max-content;
  
  &--selected {
    background-color: var(--clr-bg-personality-60);
  }

  &--has-interaction {
    user-select: none;
    cursor: pointer;
  }
}

.chip {

  &__content {
    max-width: var(--s-fifteen);
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    &:not(:has(+ .chip__remove)) {
      padding-right: var(--s-quarter);
    }
  }
}

`;
