import { css } from '../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const transition = {
  interaction: {
    outline: css`
      outline: 0;
      transition: outline 0.1s ease-in-out 0.4s;

      &:focus,
      &:hover {
        outline: 2px solid var(--clr-txt-base);
        outline-offset: 2px;
      }
    `,
  },
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const animation = {
  spin: css`
    animation: spin 1s ease-in-out infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,

  float: css`
    position: relative;
    top: 0.25rem;
    animation: float 3s infinite;
    
    @keyframes float {
      from {
        top: 0.25rem;
      }
    
      50% {
        top: -0.25rem;
      }
    
      to {
        top: 0.25rem;
      }
    }
  `,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const inputStyles = css`

max-width: 24rem;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;

.input {
  &__abstract {
    border-radius: var(--s-quarter);
    border: 0;
    background-color: var(--clr-bg-personality);

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: var(--clr-bg-personality-30);
    }
  }

  &__label {
    display: grid;
  }

  &__error-bg {
    background-color: var(--clr-bg-error);
    
    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      background-color: var(--clr-bg-error-50);
    }
  }

  &__error-msg {
    position: relative;
    bottom: var(--s-eighth);
    color: var(--clr-txt-error);
  }

  &__required {
    padding-left: var(--s-quarter);
  }

  &--has-icon {
    grid-template-columns: var(--s-one-and-half) 1fr;

    .txt-paragraph {
      grid-column: 2;
    } 
  }
}

&.input {
  &--max-width {
    max-width: 100%;
  }

  &--box {
    input, textarea, select {
      position: relative;
      right: var(--s-half);
      bottom: 1px;
      box-sizing: border-box;
      font: var(--txt-paragraph) var(--font-base);
    }

    .input--has-icon {
      grid-template-columns: var(--s-double) 1fr;
    }
  }
}

`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const globalStyles = {
  cssReset: css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font: inherit;
      position: static;
    }

    html {
      color-scheme: dark light;
    }

    body {
      min-height: 100vh;
      background-color: var(--clr-bg-panel);
    }

    img,
    picture,
    svg,
    video {
      display: block;
      max-width: 100%;
    }

    input {
      all: unset;
    }

    button {
      border: none;
    }
  `,
  fonts: css`
    :root {
      --txt-small: 0.64rem / 1.1rem;
      --txt-paragraph: 1rem / 1.5rem;
      --txt-subheading: 1.5625rem / 3rem;
      --txt-heading: 2.44140625rem / 3rem;
      --txt-title: 3.0517578125rem / 4.5rem;
      --txt-display: 3.8146972656rem / 4.5rem;

      --font-mono: 'Fira Code', ui-monospace, monospace;
      --font-base: 'Figtree', system-ui, ui-sans-serif, sans-serif;
      --font-heading: 'Libre Caslon Text', ui-serif serif;
    }

    .text--small { 
      font: var(--txt-small) var(--font-base);
    }
    .text--paragraph {
      font: var(--txt-paragraph) var(--font-base);
    }
    .text--subheading {
      font: var(--txt-subheading) var(--font-base);
    }
    .text--heading {
      font: var(--txt-heading) var(--font-heading);
    }
    .text--title {
      font: var(--txt-title) var(--font-heading);
    }
    .text--display {
      font: var(--txt-display) var(--font-heading);
    }
  `,
  sizes: css`
    :root {
      --s-eighth: 0.125rem;
      --s-quarter: 0.25rem;
      --s-three-eights: 0.375rem;
      --s-third: 0.3333333333rem;
      --s-half: 0.5rem;
      --s-five-eights: 0.625rem;
      --s-two-thirds: 0.6666666666rem;
      --s-three-quarters: 0.75rem;
      --s-seven-eights: 0.875rem;
      --s-single: 1rem;
      --s-one-and-half: 1.5rem;
      --s-double: 2rem;
      --s-triple: 3rem;
      --s-quadruple: 4rem;
      --s-fifteen: 15rem;
    }
  `,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const themeStyles = {
  newspaper: css`
    :root {
      --clr-personality: #089969;
      --clr-bg-page: #3d3640;
      --clr-bg-panel: #241f26;
      --clr-txt-base: #eee6f2;
      --clr-txt-error: #fa96c8;
      --clr-bg-error: #573c4d;
      --clr-txt-personality: #7dc0af;
      --clr-bg-personality: #344747;
      --clr-bg-error-50: #fa96c880;
      --clr-bg-panel-50: #241f2680;
      --clr-bg-panel-35: #241f2659;
      --clr-bg-panel-15: #241f2626;
      --clr-bg-personality-60: #08996999;
      --clr-bg-personality-45: #08996973;
      --clr-bg-personality-30: #0899694d;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --clr-bg-page: #eee6f2;
        --clr-bg-panel: #ffffff;
        --clr-txt-base: #3d3640;
        --clr-txt-error: #66050d;
        --clr-bg-error: #dbc4c5;
        --clr-txt-personality: #2b584e;
        --clr-bg-personality: #c8d9db;
        --clr-bg-error-50: #66050d80;
        --clr-bg-panel-50: #ffffff80;
        --clr-bg-panel-35: #ffffff59;
        --clr-bg-panel-15: #ffffff26;
        --clr-bg-personality-60: #08996999;
        --clr-bg-personality-45: #08996973;
        --clr-bg-personality-30: #0899694d;
      }
    }
  `,
};
