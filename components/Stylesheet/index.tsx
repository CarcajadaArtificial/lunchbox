import { css, ResinCssEmitter, ResinCssGlobalStyle } from '../../deps.ts';
import { globalStyles, themeStyles } from '../../src/styles.ts';

export default function () {
  return (
    <>
      <link rel='stylesheet' href='/fonts/fonts.css' />
      <ResinCssGlobalStyle
        css={css`
          ${globalStyles.cssReset}
          ${globalStyles.sizes}
          ${globalStyles.fonts}
          ${themeStyles.newspaper}
        `}
      />
      <ResinCssEmitter />
      <style>
        {`
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
        `}
      </style>
    </>
  );
}
