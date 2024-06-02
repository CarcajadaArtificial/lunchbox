//     _       _                          _     _         ___ _        _
//    /_\ _  _| |_ ___  __ ___ _ __  _ __| |___| |_ ___  / __| |_ _  _| |___ ___
//   / _ \ || |  _/ _ \/ _/ _ \ '  \| '_ \ / -_)  _/ -_) \__ \  _| || | / -_|_-<
//  /_/ \_\_,_|\__\___/\__\___/_|_|_| .__/_\___|\__\___| |___/\__|\_, |_\___/__/
//                                  |_|                           |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Autocomplete />` island.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

.autocomplete {
  &__menu-wrapper {
    backdrop-filter: blur(var(--s-half));
    background-color: var(--clr-bg-panel-50);
    border-radius: var(--s-quarter);
    left: calc(var(--s-half) * -1);
    top: calc(var(--s-quarter) * -1);
    position: absolute;
    width: 24.5rem;
  }
  
  &__menu-option {
    border-radius: var(--s-quarter);
    padding: var(--s-quarter) var(--s-half);

    &:focus {
      background-color: var(--clr-txt-personality-10);
    }
  }

  &__selections-wrapper {
    display: flex;
    gap: var(--s-quarter);
  }
}

.input--box {
  padding-bottom: var(--s-half);
}

`;
