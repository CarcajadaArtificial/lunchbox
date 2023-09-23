import { css } from 'resin';

export const transition = {
  interaction: {
    outline: css`
      outline: 0;
      transition: outline 0.1s ease-in-out;

      &:focus,
      &:hover {
        outline: 2px solid var(--clr-txt-base);
        outline-offset: 2px;
        border-radius: var(--s-quarter);
      }
    `,
  },
};

export const inputStyles = {
  part: {
    input: css`
      border-radius: var(--s-quarter);
      border: 0;
      outline: 0;
      background-color: var(--clr-bg-personality);

      &:hover,
      &:focus,
      &:focus-visible,
      &:focus-within {
        background-color: var(--clr-bg-personality-30);
      }
    `,
    bgError: css`
      background-color: var(--clr-bg-error);
      
      &:hover,
      &:focus,
      &:focus-visible,
      &:focus-within {
        background-color: var(--clr-bg-error-50);
      }
      `,
    container: css`
      max-width: 24rem;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &.lbx-input_maxwidth {
        max-width: 100%;
      }
    `,
    required: css`
      padding-left: var(--s-quarter);
    `,
    error: css`
      position: relative;
      bottom: var(--s-eighth);
      color: var(--clr-txt-error);
    `,
    label: css`
      display: flex;
    `,
  },
  kind: {
    box: css`
      .lbx-input,
      .lbx-textarea,
      .lbx-select {
        position: relative;
        right: var(--s-half);
        bottom: 1px;
        box-sizing: border-box;
        font: var(--txt-paragraph) var(--font-base);
      }

      .lbx-input,
      .lbx-textarea {
        padding: 1px var(--s-half);
    
        &::placeholder {
          color: var(--clr-txt-base);
          opacity: 0.75;
        }
      }
    
      .lbx-select {
        padding: 0 var(--s-half);
        height: var(--s-one-and-half);
        @include appearance-none;
    
        &:disabled {
          opacity: 1;
        }
      }

      .lbx-input-label {
        flex-direction: column;
      }
    `,
    date: css`
      .lbx-input {
        padding: 0 var(--s-half);
        align-items: center;
        height: 26px;
        -webkit-text-fill-color: var(--clr-txt-base);
        position: relative;
        right: var(--s-half);
        bottom: 1px;
        box-sizing: border-box;
        font: var(--txt-paragraph) var(--font-base);
      
        &::-webkit-datetime-edit {
          font: var(--txt-paragraph) var(--font-base);
          padding: 0;
          height: 21px;
        }
      }
      
      .lbx-input-label {
        flex-direction: column;
      }
    `,
    bool: css`
      padding: var(--s-eighth) var(--s-three-eights);
      border-radius: var(--s-quarter);
    
      &:hover {
        background-color: var(--clr-bg-panel-35);
      }

      &:has(.lbx-input[type=checkbox]:focus) {
        background-color: var(--clr-bg-panel-50);
      }

      .lbx-input {
        width: var(--s-single);
        height: var(--s-single);
        margin-right: var(--s-half);
        display: grid;
        place-content: center;
    
        &[type='radio'] {
          border-radius: 50%;
        }
    
        &:checked::before {
          content: '●';
        }
      }
    
      .lbx-input-label {
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        width: max-content;
      }
    `,
    button: css`
      padding-bottom: var(--s-single);

      .lbx-input {
        padding: var(--s-quarter) var(--s-five-eights);
        border-radius: var(--s-quarter);
        cursor: pointer;
    
        &[type='image'] {
          height: var(--s-one-and-half);
        }
      }
    
      .lbx-input-label {
        flex-direction: column;
        width: max-content;
      }
    `,
  },
};
