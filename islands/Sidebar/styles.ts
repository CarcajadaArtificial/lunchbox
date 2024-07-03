//   ___ _    _     _                ___ _        _
//  / __(_)__| |___| |__  __ _ _ _  / __| |_ _  _| |___ ___
//  \__ \ / _` / -_) '_ \/ _` | '_| \__ \  _| || | / -_|_-<
//  |___/_\__,_\___|_.__/\__,_|_|   |___/\__|\_, |_\___/__/
//                                           |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Sidebar />` island.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`

  &.sidebar__container {
    height: 100%;
  }

  .sidebar {
    position: sticky;
    top: var(--s-one-and-half);
  }

`;
