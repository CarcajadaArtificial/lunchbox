//    ___             _ _         _     ___ _        _
//   / __|_ _ __ _ __| (_)___ _ _| |_  / __| |_ _  _| |___ ___
//  | (_ | '_/ _` / _` | / -_) ' \  _| \__ \  _| || | / -_|_-<
//   \___|_| \__,_\__,_|_\___|_||_\__| |___/\__|\_, |_\___/__/
//                                              |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Gradient />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';
import { GRADIENT_PATTERNS } from '../../src/enums.ts';

export const styles: {
  gradient: string;
  patterns: Record<GRADIENT_PATTERNS, string>;
} = {
  gradient: css`
    min-height: var(--s-triple);
  `,
  patterns: {
    cloud: css`
      background: linear-gradient(var(--clr-bg-panel) 50%, transparent 0) 0 0,
        radial-gradient(circle closest-side, var(--clr-bg-panel) 53%, transparent 0) 0 0,
        radial-gradient(circle closest-side, var(--clr-bg-panel) 50%, transparent 0) 2.5em 0 var(--clr-bg-page);
      background-size: 5em 5em;
      background-position-y: -2.5em;
      background-repeat: repeat-x;
    `,
    wave: css`
      background: radial-gradient(37.5% 12.5% at 62.5% 100%, transparent 32%, var(--clr-bg-panel) 34% 99%, transparent 101%) 0 -1.5em,
        radial-gradient(37.5% 12.5% at 62.5% 0, transparent 32%, var(--clr-bg-panel) 34% 99%, transparent 101%) 0 1.5em,
        radial-gradient(37.5% 12.5% at 62.5% 100%, transparent 32%, var(--clr-bg-page) 34% 99%, transparent 101%) 1em 1.5em,
        radial-gradient(37.5% 12.5% at 62.5% 0, transparent 32%, var(--clr-bg-page) 34% 99%, transparent 101%) 1em 4.5em,
        radial-gradient(37.5% 12.5% at 62.5% 100%, transparent 32%, var(--clr-bg-panel) 34% 99%, transparent 101%) 2em 4.5em,
        radial-gradient(37.5% 12.5% at 62.5% 0, transparent 32%, var(--clr-bg-panel) 34% 99%, transparent 101%) 2em 7.5em,
        radial-gradient(37.5% 12.5% at 62.5% 100%, transparent 32%, var(--clr-bg-page) 34% 99%, transparent 101%) 3em 7.5em,
        radial-gradient(37.5% 12.5% at 62.5% 0, transparent 32%, var(--clr-bg-page) 34% 99%, transparent 101%) 3em -1.5em,
        linear-gradient(var(--clr-bg-panel) 0 12.5%, var(--clr-bg-page) 0 37.5%, var(--clr-bg-panel) 0 62.5%, var(--clr-bg-page) 0 87.5%, var(--clr-bg-panel) 0 100%);
      background-size: 4em 12em;
    `,
    zigzag: css`
      background: linear-gradient(135deg, var(--clr-bg-panel) 25%, transparent 25%)-1em 0,
        linear-gradient(225deg, var(--clr-bg-panel) 25%, transparent 25%)-1em 0,
        linear-gradient(315deg, var(--clr-bg-panel) 25%, transparent 25%),
        linear-gradient(45deg, var(--clr-bg-panel) 25%, transparent 25%);
      background-size: 2em 2em;
      background-color: var(--clr-bg-page);
    `,
  },
};
