//   __  __                ___ _        _
//  |  \/  |___ _ _ _  _  / __| |_ _  _| |___ ___
//  | |\/| / -_) ' \ || | \__ \  _| || | / -_|_-<
//  |_|  |_\___|_||_\_,_| |___/\__|\_, |_\___/__/
//                                 |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Menu />` island.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

.menu {
  position: absolute;
  top: var(--s-half);
  
  &__floater {
    position: relative;
  }
}

`;
