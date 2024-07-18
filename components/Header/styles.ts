//   _  _             _           ___ _        _
//  | || |___ __ _ __| |___ _ _  / __| |_ _  _| |___ ___
//  | __ / -_) _` / _` / -_) '_| \__ \  _| || | / -_|_-<
//  |_||_\___\__,_\__,_\___|_|   |___/\__|\_, |_\___/__/
//                                        |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Header />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

&.header__panel--banner {
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  padding: var(--s-triple) 0;
}

`;
