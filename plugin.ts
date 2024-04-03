import { Plugin } from '$fresh/server.ts';
import { ResinCssEmitter } from './deps.ts';

export default function lunchboxPlugin(): Plugin {
  return {
    name: 'lunchbox',
    // islands: {
    //   baseLocation: import.meta.url,
    //   paths: [
    //     "./plugin/MyPluginIsland.tsx",
    //     "./plugin/OtherPluginIsland.tsx",
    //   ],
    // },
    render: (ctx) => {
      ctx.render();

      return {
        styles: [
          {
            id: 'lunchbox-css-reset',
            cssText: `
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
          },
          {
            id: 'lunchbox-sizes',
            cssText: `
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
          },
          {
            id: 'lunchbox-font-families',
            cssText: `              
              @font-face {
                font-family: 'Figtree';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('./Figtree-Regular.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Figtree';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: url('./Figtree-Italic.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Figtree';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('./Figtree-700.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Libre Caslon Text';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('./Libre-Caslon-Text-Regular.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Libre Caslon Text';
                font-style: italic;
                font-weight: 400;
                font-display: swap;
                src: url('./Libre-Caslon-Text-Italic.woff2') format('woff2');
              }
              
              @font-face {
                font-family: 'Libre Caslon Text';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('./Libre-Caslon-Text-700.woff2') format('woff2');
              }
            
              :root {
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
          },
          {
            id: 'lunchbox-font-sizes',
            cssText: `
              :root {
                --txt-small: 0.64rem / 1.1rem;
                --txt-paragraph: 1rem / 1.5rem;
                --txt-subheading: 1.5625rem / 3rem;
                --txt-heading: 2.44140625rem / 3rem;
                --txt-title: 3.0517578125rem / 4.5rem;
                --txt-display: 3.8146972656rem / 4.5rem;
              }
            `,
          },
          {
            id: 'lunchbox-theme',
            cssText: `
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
          },
          {
            id: 'lunchbox-misc-styles',
            cssText: `
              @container (width > 35em) {
                .card__panel {
                  display: grid !important;
                  grid-template-columns: 30% 70% !important;
                }
                .card__image {
                  aspect-ratio: 1 / 0 !important;
                  border-radius: var(--s-quarter) 0 0 var(--s-quarter) !important;
                }
                .card__image + .card__section {
                  padding-left: var(--s-single) !important;
                  grid-column: span 1 !important;
                }
              }
              
              .input--box {
                padding-bottom: calc(var(--s-single) + var(--s-three-eights));
              }
              
              .fieldset,
              .input--box input,
              .input--box textarea,
              .input--box select {
                width: calc(100% + var(--s-half));
              }
              
              .h-min {
                height: min-content;
              }
              .h-inherit {
                height: inherit;
              }
              
              .w-prose {
                max-width: 90ch;
              }
              .aspect-square {
                aspect-ratio: 1 / 1;
              }
              .y-flip {
                transform: scaleY(-1);
              }
              .x-flip {
                transform: scaleX(-1);
              }
              .flip {
                transform: scale(-1);
              }
              .comp-gradient {
                min-height: var(--s-triple);
              }
            `,
          },
          {
            id: 'lunchbox-resin-emitter',
            cssText: ResinCssEmitter({})!.props.children,
          },
        ],
      };
    },
  };
}
