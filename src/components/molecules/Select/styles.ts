//   ___      _        _     ___ _        _
//  / __| ___| |___ __| |_  / __| |_ _  _| |___ ___
//  \__ \/ -_) / -_) _|  _| \__ \  _| || | / -_|_-<
//  |___/\___|_\___\__|\__| |___/\__|\_, |_\___/__/
//                                   |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Button />` component.
 *
 * @module
 */
import { css } from '../../../../deps.ts';

export const styles = css`

padding: 0 var(--s-half);
height: var(--s-one-and-half);
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

&:disabled {
  opacity: 1;
}

`;
