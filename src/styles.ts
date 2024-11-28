import type { iCode } from '../components/Code.tsx';
import { cn, forward, o } from './utils.ts';

export const clr = {
  neutral: {
    txt: 'text-neutral dark:text-d-neutral',
    txt_10: 'text-neutral-10 dark:text-d-neutral-10',
    txt_25: 'text-neutral-25 dark:text-d-neutral-25',
    bg: 'bg-neutral dark:bg-d-neutral',
    bg_10: 'bg-neutral-10 dark:bg-d-neutral-10',
    bg_25: 'bg-neutral-25 dark:bg-d-neutral-25',
    border: 'border-neutral dark:border-d-neutral',
    border_25: 'border-neutral-25 dark:border-d-neutral-25',
    outline: 'outline-neutral dark:outline-d-neutral',
  },

  brand: {
    txt: 'text-brand-hc dark:text-d-brand-hc',
    txt_25: 'text-brand-hc-25 dark:text-d-brand-hc-25',
    txt_15: 'text-brand-hc-15 dark:text-d-brand-hc-15',
    bg: 'bg-brand-lc dark:bg-d-brand-lc',
    bg_60: 'bg-brand-lc-60 dark:bg-d-brand-lc-60',
    bg_45: 'bg-brand-lc-45 dark:bg-d-brand-lc-45',
    bg_30: 'bg-brand-lc-30 dark:bg-d-brand-lc-30',
  },

  error: {
    txt: 'text-error-hc dark:text-error-d-hc',
    bg: 'bg-error-lc dark:bg-error-d-lc',
    bg_50: 'bg-error-lc-50 dark:bg-error-d-lc-50',
  },

  page: {
    bg: 'bg-page dark:bg-d-page',
    bg_50: 'bg-page-50 dark:bg-d-page-50',
  },

  panel: {
    bg: 'bg-panel dark:bg-d-panel',
    bg_50: 'bg-page-50 dark:bg-d-page-50',
    bg_35: 'bg-page-35 dark:bg-d-page-35',
    bg_15: 'bg-page-15 dark:bg-d-page-15',
  },
};

const focus = cn(
  clr.neutral.outline,
  'outline-0 focus:outline-1',
  'outline-offset-2',
);

const txt = {
  display: cn(
    'font-heading',
    'text-display',
    'font-bold',
    clr.brand.txt,
  ),

  title: cn(
    'font-heading',
    'text-title',
    'font-bold',
    clr.brand.txt,
  ),

  head: cn(
    'font-heading',
    'text-head',
    clr.brand.txt,
  ),

  subhead: 'text-subhead',

  base: 'text-base',

  small: 'text-small',
};

const body = cn(
  'font-base',
  txt.base,
  clr.panel.bg,
  clr.neutral.txt,
);

const main = cn(
  clr.page.bg,
  'py-triple',
  'w-full',
);

const area = cn(
  clr.panel.bg,
  'py-triple',
);

const layout = cn(
  'grid',
  'grid-cols-6 md:grid-cols-12 lg:grid-cols-lg',
  'gap-x-[0.8503100088rem] md:gap-x-[2.1257750221%] lg:gap-x-[1.5rem]',
  'w-auto lg:w-min',
  'px-[0.8503100088rem] md:px-[calc(23.13871222%-134.488008342px)] lg:px-auto',
);

const btn_abstract = cn(
  'px-three-quarters py-quarter',
  'rounded',
);

const btn = {
  brand: cn(
    clr.brand.bg_45,
    'hocus:bg-brand-lc-60 dark:hocus:bg-d-brand-lc-60',
    btn_abstract,
    focus,
  ),

  panel: cn(
    clr.panel.bg,
    'hocus:bg-panel-50 dark:hocus:bg-d-panel-50',
    btn_abstract,
    focus,
  ),

  page: cn(
    clr.page.bg,
    'hocus:bg-panel-35 dark:hocus:bg-d-panel-35',
    btn_abstract,
    focus,
  ),

  error: cn(
    clr.error.bg,
    'hocus:bg-error-lc-50 dark:hocus:bg-d-error-lc-50',
    btn_abstract,
    focus,
  ),

  disabled: cn(
    clr.panel.bg,
    'cursor-not-allowed',
    'opacity-40',
    btn_abstract,
  ),
};

const separator = cn(
  clr.neutral.border,
  'w-full',
  'mt-one-and-half',
  'h-one-and-half',
);

const link = cn(
  clr.neutral.txt,
  'hocus:text-brand-hc dark:hocus:text-d-brand-hc',
  'underline',
  'cursor-pointer',
  'rounded',
  focus,
);

const kbd = cn(
  clr.page.bg_50,
  clr.neutral.border_25,
  txt.small,
  'relative bottom-eighth',
  'py-quarter px-third',
  'border-b-[1px]',
  'rounded',
);

const list = {
  unordered: cn(
    'list-disc',
    'ml-single my-quarter',
  ),
  ordered: cn(
    'list-decimal',
    'ml-single my-quarter',
  ),
};

export const s = {
  area,
  body,
  btn,
  kbd,
  layout,
  link,
  list,
  main,
  separator,
  txt,
};

export function Code(props: iCode) {
  props.class = o([
    clr.brand.txt,
    'leading-[calc(100%-1px)]',
  ], { ...props });
  props.fwd = forward({
    wrapper: [
      clr.neutral.bg_10,
      'inline',
      'pt-[3px] pb-[1px] px-[0.5ch]',
      'rounded',
    ],
  }, props.fwd);
  return props;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const effects = {
//   blur: css`
//     filter: blur(var(--s-three-quarters));
//   `,

//   transparent: css`
//     opacity: 0;
//   `,
// };

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const transition = {
//   interaction: {
//     outline: css`
//       outline: 0;
//       transition: outline 0.1s ease-in-out 0.4s;

//       &:focus,
//       &:hover {
//         outline: 2px solid var(--clr-txt-base);
//         outline-offset: 2px;
//       }
//     `,
//   },
// };

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const animation = {
//   spin: css`
//     animation: spin 1s ease-in-out infinite;
//     -webkit-animation: spin 1s ease-in-out infinite;
//     -moz-animation: spin 1s ease-in-out infinite;
//     -o-animation: spin 1s ease-in-out infinite;
//     -ms-animation: spin 1s ease-in-out infinite;

//     @keyframes spin {
//       0% {
//         transform: rotate(0deg);
//       }
//       100% {
//         transform: rotate(360deg);
//       }
//     }
//   `,

//   float: css`
//     position: relative;
//     top: 0.25rem;
//     animation: float 3s infinite;
//     -webkit-animation: float 3s infinite;
//     -moz-animation: float 3s infinite;
//     -o-animation: float 3s infinite;
//     -ms-animation: float 3s infinite;

//     @keyframes float {
//       from {
//         top: 0.25rem;
//       }

//       50% {
//         top: -0.25rem;
//       }

//       to {
//         top: 0.25rem;
//       }
//     }
//   `,

//   fadein: css`
//     animation: fadeIn ease-in-out 0.2s;
//     -webkit-animation: fadeIn ease-in-out 0.2s;
//     -moz-animation: fadeIn ease-in-out 0.2s;
//     -o-animation: fadeIn ease-in-out 0.2s;
//     -ms-animation: fadeIn ease-in-out 0.2s;

//     @keyframes fadeIn {
//       0% { opacity: 0; }
//       100% { opacity: 1; }
//     }
//   `,
// };

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const inputStyles = css`

// max-width: 100%;
// -webkit-user-select: none;
// -ms-user-select: none;
// user-select: none;
// width: 24rem;

// .input {
//   &__abstract {
//     border-radius: var(--s-quarter);
//     border: 0;
//     background-color: var(--clr-bg-personality);

//     &:hover,
//     &:focus,
//     &:focus-visible,
//     &:focus-within {
//       background-color: var(--clr-bg-personality-30);
//     }
//   }

//   &__label {
//     display: grid;
//   }

//   &__error-bg {
//     background-color: var(--clr-bg-error);

//     &:hover,
//     &:focus,
//     &:focus-visible,
//     &:focus-within {
//       background-color: var(--clr-bg-error-50);
//     }
//   }

//   &__error-msg {
//     position: relative;
//     bottom: var(--s-eighth);
//     color: var(--clr-txt-error);
//   }

//   &__required {
//     padding-left: var(--s-quarter);
//   }

//   &--has-icon {
//     grid-template-columns: var(--s-one-and-half) 1fr;

//     .txt-paragraph {
//       grid-column: 2;
//     }
//   }
// }

// &.input {
//   &--max-width {
//     width: 100%;
//     max-width: 100%;
//   }

//   &--box {
//     input, textarea, select {
//       position: relative;
//       right: var(--s-half);
//       bottom: 1px;
//       box-sizing: border-box;
//       font: var(--txt-paragraph) var(--font-base);
//     }

//     .input--has-icon {
//       grid-template-columns: var(--s-double) 1fr;
//     }
//   }
// }

// `;

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const relativeContainer = css`

// position: relative;
// max-height: 0;

// `;

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// export const panelStyles = css`

// background-color: var(--clr-bg-panel);

// &.panel {

//   .button__style {
//     &--transparent {
//       background-color: var(--clr-bg-panel);

//       &:hover, &:focus {
//         background-color: var(--clr-bg-page-50);
//         border-bottom-color: var(--clr-txt-personality-10);
//       }

//       &:active {
//         background-color: var(--clr-txt-personality-10);
//         border-top-color: var(--clr-bg-personality-30);
//         border-bottom-color: transparent;
//       }
//     }

//     &--panel {
//       background-color: var(--clr-bg-page);

//       &:hover, &:focus {
//         background-color: var(--clr-txt-base-25);
//         border-bottom-color: var(--clr-txt-base);
//       }

//       &:active {
//         background-color: var(--clr-bg-page-50);
//         border-top-color: var(--clr-bg-personality-30);
//         border-bottom-color: transparent;
//       }
//     }
//   }

//   .code__wrapper {
//     background-color: var(--clr-txt-personality-10);
//   }

//   .kbd {
//     background-color: var(--clr-bg-page);
//     border-bottom-color: var(--clr-txt-personality-10);
//   }

//   .fieldset {
//     background-color: var(--clr-txt-base-10);

//     &:hover, &:has(:hover), &:has(:focus) {
//       background-color: var(--clr-txt-personality-10);
//     }
//   }
// }

// `;

// export const textStyles = css`
//   display: block;
//   line-break: loose;

//   .code, .link, .kbd {
//     line-break: anywhere;
//   }

//   &.text--display,
//   &.text--title,
//   &.text--heading {
//     color: var(--clr-txt-personality);

//     .kbd {
//       padding-left: 0.75ch;
//       padding-right: 0.75ch;
//       border-bottom-width: var(--s-quarter);
//     }
//   }

//   &.text--subheading,
//   &.text--paragraph {
//     .kbd {
//       padding-left: 1.25ch;
//       padding-right: 1.25ch;
//     }
//   }

//   &.text--small {
//     .kbd {
//       padding-left: 1.75ch;
//       padding-right: 1.75ch;
//     }
//   }

//   &.text--display,
//   &.text--title,
//   &.text--heading,
//   &.text--subheading {
//     font-weight: 600;
//   }

//   &.text--paragraph + .separator {
//     margin-top: var(--s-one-and-half);
//   }

//   &:not(.no-margins) {
//     &.text--display,
//     &.text--title,
//     &.text--heading,
//     &.text--subheading {
//       margin-bottom: var(--s-one-and-half);
//     }

//     &.text--paragraph {
//       + .text--display,
//       + .text--title,
//       + .text--heading,
//       + .text--subheading {
//         margin-top: var(--s-triple);
//       }

//       + .text--paragraph {
//         margin-top: var(--s-one-and-half);
//       }
//     }

//     &.text--small {
//       margin: var(--s-one-and-half) 0;
//     }
//   }
// `;

// export const ButtonStyles = css`
//   border-bottom-width: var(--s-eighth);
//   border-color: transparent;
//   border-left-width: 0;
//   border-radius: var(--s-quarter);
//   border-right-width: 0;
//   border-style: solid;
//   border-top-width: var(--s-eighth);
//   cursor: pointer;
//   margin-right: var(--s-eighth);
//   max-width: max-content;

//   &.button {
//     &__icon {
//       display: inline;
//       width: var(--s-single);
//       position: relative;
//       bottom: var(--s-eighth);
//     }

//     &__padding {
//       padding: var(--s-eighth) var(--s-five-eights);

//       &--compact {
//         border-bottom-width: 1px;
//         border-top-width: 1px;
//         padding: 0 var(--s-three-eights);
//       }

//       &--large {
//         border-bottom-width: var(--s-quarter);
//         border-top-width: var(--s-quarter);
//         padding: var(--s-quarter) var(--s-one-and-half);
//       }
//     }

//     &__style {
//       background-color: var(--clr-bg-personality-45);

//       &:hover, &:focus {
//         background-color: var(--clr-bg-personality-60);
//         border-bottom-color: var(--clr-bg-panel-35);
//       }

//       &:active {
//         background-color: var(--clr-bg-personality-30);
//         border-top-color: var(--clr-personality);
//         border-bottom-color: transparent;
//       }

//       &--disabled {
//         background-color: var(--clr-bg-panel);
//         cursor: not-allowed;
//         filter: opacity(0.4);
//       }

//       &--error {
//         background-color: var(--clr-bg-error);

//         &:hover, &:focus {
//           background-color: var(--clr-bg-error-50);
//           border-bottom-color: var(--clr-bg-error);
//         }

//         &:active {
//           background-color: var(--clr-bg-error);
//           border-top-color: var(--clr-bg-error-50);
//           border-bottom-color: transparent;
//         }
//       }

//       &--transparent {
//         background-color: var(--clr-bg-page);

//         &:hover, &:focus {
//           background-color: var(--clr-bg-panel-35);
//           border-bottom-color: var(--clr-txt-personality-10);
//         }

//         &:active {
//           background-color: var(--clr-bg-panel-50);
//           border-top-color: var(--clr-bg-panel);
//           border-bottom-color: transparent;
//         }
//       }

//       &--panel {
//         background-color: var(--clr-bg-panel);

//         &:hover, &:focus {
//           background-color: var(--clr-bg-panel-50);
//           border-bottom-color: var(--clr-bg-panel-15);
//         }

//         &:active {
//           background-color: var(--clr-bg-panel);
//           border-bottom-color: transparent;
//         }
//       }
//     }
//   }

//   .icon {
//     margin-bottom: var(--s-quarter);
//   }
// `;
