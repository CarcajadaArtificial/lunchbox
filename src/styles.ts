import { o } from './utils.ts';
import { css } from '../deps.ts';
import { iMain } from '../components/Main/setup.ts';
import { iPanel } from '../components/Panel/setup.ts';

const clr = {
  bg_page: 'bg-page-50 dark:bg-d-page-50',
};

export const main = (props: iMain) => {
  props.class = o([
    clr.bg_page,
    'min-h-dvh',
    props.whitespace ? 'py-triple' : null,
  ], { ...props });
  return props;
};

export const panel = (props: iPanel) => {
  props.class = o('bg-slate-100', { ...props });
  return props;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const effects = {
  blur: css`
    filter: blur(var(--s-three-quarters));
  `,

  transparent: css`
    opacity: 0;
  `,
};

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
    -webkit-animation: spin 1s ease-in-out infinite;
    -moz-animation: spin 1s ease-in-out infinite;
    -o-animation: spin 1s ease-in-out infinite;
    -ms-animation: spin 1s ease-in-out infinite;

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
    -webkit-animation: float 3s infinite;
    -moz-animation: float 3s infinite;
    -o-animation: float 3s infinite;
    -ms-animation: float 3s infinite;

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

  fadein: css`
    animation: fadeIn ease-in-out 0.2s;
    -webkit-animation: fadeIn ease-in-out 0.2s;
    -moz-animation: fadeIn ease-in-out 0.2s;
    -o-animation: fadeIn ease-in-out 0.2s;
    -ms-animation: fadeIn ease-in-out 0.2s;

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const inputStyles = css`

max-width: 100%;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
width: 24rem;

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
    width: 100%;
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
export const relativeContainer = css`

position: relative;
max-height: 0;

`;
