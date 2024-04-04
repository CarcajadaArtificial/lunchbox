//   ___               _      _        _
//  | _ \__ _ _ _  ___| |  __| |_ _  _| |___ ___
//  |  _/ _` | ' \/ -_) | (_-<  _| || | / -_|_-<
//  |_| \__,_|_||_\___|_| /__/\__|\_, |_\___/__/
//                                |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Button />` component.
 *
 * @module
 */
import { css } from '../../../deps.ts';

export const styles = css`
  background-color: var(--clr-bg-panel);

  .button__style--transparent {
    background-color: var(--clr-bg-panel);
  }

  .button__style--panel {
    background-color: var(--clr-bg-page);
  }
`;
