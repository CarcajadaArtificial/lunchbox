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

  &--activable {
    
  }

  &--removable {

  }

  &--has-icon {

  }
}

.chip {
  &__remove {
    margin-left: var(--s-eighth);
    border-radius: var(--s-quarter);

    &:focus, &:hover {

    }
  }

  &__remove-icon {
    margin: 0 var(--s-eighth);
    min-width: var(--s-three-quarters);
  }

  &__icon {
    min-width: var(--s-three-quarters);
  }

  &__content {
    max-width: var(--s-fifteen);
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    &:not(:has(+ .chip__remove)) {
      padding-right: var(--s-half);
    }
  }
}

`;
