//   ___ _     _    _         _     ___ _        _
//  | __(_)___| |__| |___ ___| |_  / __| |_ _  _| |___ ___
//  | _|| / -_) / _` (_-</ -_)  _| \__ \  _| || | / -_|_-<
//  |_| |_\___|_\__,_/__/\___|\__| |___/\__|\_, |_\___/__/
//                                          |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Fieldset />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
    position: relative;
    right: var(--s-half);
    background-color: var(--clr-bg-panel-15);
    padding: var(--s-half);
    border-radius: var(--s-quarter);
    max-width: 24rem;

    &:hover, &:has(:hover), &:has(:focus) {
      background-color: var(--clr-bg-panel-50);
    }
  `;
