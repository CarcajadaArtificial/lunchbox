//   _    _      _        _        _
//  | |  (_)_ _ | |__  __| |_ _  _| |___ ___
//  | |__| | ' \| / / (_-<  _| || | / -_|_-<
//  |____|_|_||_|_\_\ /__/\__|\_, |_\___/__/
//                            |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Link />` component.
 *
 * @module
 */
import { css } from '../../../deps.ts';

export const styles = css`
  text-decoration: underline;
  cursor: pointer;
  color: var(--clr-txt-base);
  border-radius: var(--s-quarter);

  &:hover, 
  &:focus {
    color: var(--clr-txt-personality);
  }
`;
