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
  z-index: 16;
  box-shadow: 
    1px 2px 3px rgba(0, 0, 0, 0.12),
    2px 9px 14px rgba(0, 0, 0, 0.12),
    8px 32px 64px rgba(0, 0, 0, 0.25);
  
  &__floater {
    position: relative;
  }
}

`;
