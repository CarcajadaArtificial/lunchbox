//   _  ___        _   ___ _        _
//  | |/ / |__  __| | / __| |_ _  _| |___ ___
//  | ' <| '_ \/ _` | \__ \  _| || | / -_|_-<
//  |_|\_\_.__/\__,_| |___/\__|\_, |_\___/__/
//                             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Kbd />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  background-color: var(--clr-bg-panel-50);
  padding-top: var(--s-quarter);
  padding-bottom: var(--s-quarter);
  position: relative;
  bottom: var(--s-eighth);
  border-radius: var(--s-eighth);
  border-bottom: var(--s-eighth) solid var(--clr-bg-panel);
  font-size: 75%;
`;
