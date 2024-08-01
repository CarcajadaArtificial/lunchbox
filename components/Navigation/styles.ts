//   _  _          _           _   _            ___ _        _
//  | \| |__ ___ _(_)__ _ __ _| |_(_)___ _ _   / __| |_ _  _| |___ ___
//  | .` / _` \ V / / _` / _` |  _| / _ \ ' \  \__ \  _| || | / -_|_-<
//  |_|\_\__,_|\_/|_\__, \__,_|\__|_\___/_||_| |___/\__|\_, |_\___/__/
//                  |___/                               |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Navigation />` island.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.navigation__container {
  position: sticky;
  top: 0;
  z-index: 32;
}

.navigation {
  padding: var(--s-half) 0;
}

`;
