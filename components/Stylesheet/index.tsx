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
            .lbx-card_panel {
              display: grid;
              grid-template-columns: 30% 70%;
            }
            .lbx-card_image {
              aspect-ratio: 1 / 1;
              border-radius: var(--s-quarter) 0 0 var(--s-quarter);
            }
            .lbx-card_section {
              padding-left: var(--s-single);
            }
          }
          
          .lbx-input_box {
            padding-bottom: calc(var(--s-single) + var(--s-three-eights));
          }
          
          .lbx-fieldset,
          .lbx-input_box .lbx-input,
          .lbx-input_box .lbx-textarea,
          .lbx-input_box .lbx-select {
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
