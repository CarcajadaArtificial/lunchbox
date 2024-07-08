//   ___ _     _    _         _     ___ _        _
//  | __(_)___| |__| |___ ___| |_  / __| |_ _  _| |___ ___
//  | _|| / -_) / _` (_-</ -_)  _| \__ \  _| || | / -_|_-<
//  |_| |_\___|_\__,_/__/\___|\__| |___/\__|\_, |_\___/__/
//                                          |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Fieldset />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.fieldset {
  &__container {
    max-width: 100%;
    width: 24rem;
  }

  &--max-width {
    width: 100%;
    max-width: 100%;
  }
  
}


.fieldset {
  position: relative;
  right: var(--s-half);
  padding: var(--s-half);
  background-color: var(--clr-bg-panel-15);
  border-radius: var(--s-quarter);
  
  &:hover, &:has(:hover), &:has(:focus) {
    background-color: var(--clr-bg-panel-50);
  }

  &__input-container {
    width: 100%;
  }
}

`;
