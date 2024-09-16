//   _____        _        _        _
//  |_   _|____ _| |_   __| |_ _  _| |___ ___
//    | |/ -_) \ /  _| (_-<  _| || | / -_|_-<
//    |_|\___/_\_\\__| /__/\__|\_, |_\___/__/
//                             |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Text />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

export const styles = css`
  display: block;
  line-break: loose;
  
  .code, .link, .kbd {
    line-break: anywhere;
  }

  &.text--display,
  &.text--title,
  &.text--heading {
    color: var(--clr-txt-personality);

    .kbd {
      padding-left: 0.75ch;
      padding-right: 0.75ch;
      border-bottom-width: var(--s-quarter);
    }
  }
  
  &.text--subheading,
  &.text--paragraph {
    .kbd {
      padding-left: 1.25ch;
      padding-right: 1.25ch;
    }
  }

  &.text--small {
    .kbd {
      padding-left: 1.75ch;
      padding-right: 1.75ch;
    }
  }

  &.text--display,
  &.text--title,
  &.text--heading,
  &.text--subheading {
    font-weight: 600;
  }

  &.text--paragraph + .separator {
    margin-top: var(--s-one-and-half);
  }

  &:not(.no-margins) {
    &.text--display,
    &.text--title,
    &.text--heading,
    &.text--subheading {
      margin-bottom: var(--s-one-and-half);
    }

    &.text--paragraph {
      + .text--display,
      + .text--title,
      + .text--heading,
      + .text--subheading {
        margin-top: var(--s-triple);
      }

      + .text--paragraph {
        margin-top: var(--s-one-and-half);
      }
    }

    &.text--small {
      margin: var(--s-one-and-half) 0;
    }
  }
`;
