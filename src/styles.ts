import { o } from './utils.ts';
import { css } from '../deps.ts';
import { iMain } from '../components/Main.tsx';
import { iHeader } from '../components/Header.tsx';
import { iLayout } from '../components/Layout.tsx';
import { iModule } from '../components/Module.tsx';

const clr = {
  bg_page: 'bg-page-50 dark:bg-d-page-50',
  bg_panel: 'bg-panel dark:bg-d-panel',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const main = (props: iMain) => {
  props.class = o([
    clr.bg_page,
    'min-h-dvh',
    props.whitespace ? 'py-triple' : null,
  ], { ...props });

  return props;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const header = (props: iHeader) => {
  props.class = o([
    clr.bg_panel,
    'py-triple',
    props.banner ? 'min-h-[90dvh]' : null,
  ], { ...props });

  return props;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const layout = (props: iLayout) => {
  props.class = o(
    [
      'grid',
      'grid-cols-6 md:grid-cols-12 lg:grid-cols-lg',
      'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
      'w-auto lg:w-min',
      'mx-[0.8503100088rem] md:mx-[calc(23.13871222%-134.488008342px)] lg:mx-auto',
    ],
    { ...props },
  );

  return props;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const module = (props: iModule) => {
  props.class = o(
    [
      // deno-fmt-ignore
      props.half === 'none' ? 'hidden'
      : props.half === 'full' ? 'col-span-12'
      : props.half === 'xl' ? 'col-span-10'
      : props.half === 'lg' ? 'col-span-8'
      : props.half === 'md' ? 'col-span-6'
      : props.half === 'sm' ? 'col-span-4'
      : props.half === 'xs' ? 'col-span-2'
      : null,
      // deno-fmt-ignore
      props.size === 'none' ? 'md:hidden'
      : props.size === 'full' ? 'md:col-span-12'
      : props.size === 'xl' ? 'md:col-span-10'
      : props.size === 'lg' ? 'md:col-span-8'
      : props.size === 'md' ? 'md:col-span-6'
      : props.size === 'sm' ? 'md:col-span-4'
      : props.size === 'xs' ? 'md:col-span-2'
      : null,
    ],
    { ...props },
  );

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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const panelStyles = css`

background-color: var(--clr-bg-panel);

&.panel {

  .button__style {
    &--transparent {
      background-color: var(--clr-bg-panel);

      &:hover, &:focus {
        background-color: var(--clr-bg-page-50);
        border-bottom-color: var(--clr-txt-personality-10);
      }

      &:active {
        background-color: var(--clr-txt-personality-10);
        border-top-color: var(--clr-bg-personality-30);
        border-bottom-color: transparent;
      }
    }

    &--panel {
      background-color: var(--clr-bg-page);

      &:hover, &:focus {
        background-color: var(--clr-txt-base-25);
        border-bottom-color: var(--clr-txt-base);
      }

      &:active {
        background-color: var(--clr-bg-page-50);
        border-top-color: var(--clr-bg-personality-30);
        border-bottom-color: transparent;
      }
    }
  }

  .code__wrapper {
    background-color: var(--clr-txt-personality-10);
  }

  .kbd {
    background-color: var(--clr-bg-page);
    border-bottom-color: var(--clr-txt-personality-10);
  }

  .fieldset {
    background-color: var(--clr-txt-base-10);

    &:hover, &:has(:hover), &:has(:focus) {
      background-color: var(--clr-txt-personality-10);
    }
  }
}

`;
