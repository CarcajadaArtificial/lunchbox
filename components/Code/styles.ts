//    ___         _       ___ _        _
//   / __|___  __| |___  / __| |_ _  _| |___ ___
//  | (__/ _ \/ _` / -_) \__ \  _| || | / -_|_-<
//   \___\___/\__,_\___| |___/\__|\_, |_\___/__/
//                                |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Code />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  display: inline;
  padding: 3px 0.5ch 1px 0.5ch;
  margin: 0 0.5ch;
  background-color: var(--clr-bg-panel);
  border-radius: var(--s-quarter);

  .code {
    line-break: strict;
    line-height: calc(100% - 1px);
    color: var(--clr-txt-personality);
  }
`;
