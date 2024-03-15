//   ___                _     ___ _        _
//  |_ _|_ _  _ __ _  _| |_  / __| |_ _  _| |___ ___
//   | || ' \| '_ \ || |  _| \__ \  _| || | / -_|_-<
//  |___|_||_| .__/\_,_|\__| |___/\__|\_, |_\___/__/
//           |_|                      |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Style object for the `<Button />` component.
 *
 * @module
 */
import { css } from '../../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const inputStyles = {
  box: css`

input {
  padding: 1px var(--s-half);

  &::placeholder {
    color: var(--clr-txt-base);
    opacity: 0.75;
  }
}

  `,

  date: css`
  
input {
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

.input__label {
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

input {
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

.input__label {
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
}

  `,

  button: css`
  
padding-bottom: var(--s-single);

input {
  padding: var(--s-quarter) var(--s-five-eights);
  border-radius: var(--s-quarter);
  cursor: pointer;

  &[type='image'] {
    height: var(--s-one-and-half);
  }
}

.input__label {
  flex-direction: column;
  width: max-content;
}
  
  `,

  range: css`
  
input {
  width: 100%;
  margin: var(--s-three-eights) 0;
  background-color: transparent;

  &::-webkit-slider-runnable-track {
    background: var(--clr-bg-personality);
    border-radius: var(--s-quarter);
    cursor: pointer;
    height: var(--s-three-quarters);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: calc(-1 * var(--s-eighth));
    width: var(--s-single);
    height: var(--s-single);
    border-radius: var(--s-eighth);
    background: var(--clr-txt-personality);
    transition-property: height, width, margin-top, border-radius;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-runnable-track {
      background: var(--clr-bg-personality-30);
    }

    &::-webkit-slider-thumb {
      margin-top: calc(-1 * var(--s-three-eights));
      width: var(--s-one-and-half);
      height: var(--s-one-and-half);
      border-radius: var(--s-quarter);
    }
  }

  &::-moz-range-track {
    background: var(--clr-bg-personality);
    border-radius: var(--s-quarter);
    cursor: pointer;
    height: var(--s-three-quarters);
  }

  &::-moz-range-thumb {
    appearance: none;
    margin-top: calc(-1 * var(--s-eighth));
    width: var(--s-single);
    height: var(--s-single);
    border-radius: var(--s-eighth);
    background: var(--clr-txt-personality);
    border: 0;
    transition-property: height, width, margin-top, border-radius;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  &:hover,
  &:focus {
    &::-moz-range-track {
      background: var(--clr-bg-personality-30);
    }

    &::-moz-range-thumb {
      margin-top: calc(-1 * var(--s-three-eights));
      width: var(--s-one-and-half);
      height: var(--s-one-and-half);
      border-radius: var(--s-quarter);
    }
  }
}

.input__error-bg {
  &::-webkit-slider-runnable-track {
    background-color: var(--clr-bg-error);
  }

  &::-webkit-slider-thumb {
    background-color: var(--clr-txt-error);
  }

  &::-moz-range-track {
    background-color: var(--clr-bg-error);
  }

  &::-moz-range-thumb {
    background-color: var(--clr-txt-error);
  }

  &:hover,
  &:focus {
    &::-webkit-slider-runnable-track {
      background-color: var(--clr-bg-error-50);
    }

    &::-moz-range-track {
      background-color: var(--clr-bg-error-50);
    }
  }
}

.input__label {
  flex-direction: column;
}

  `,

  color: css`
  
input {
  width: 100%;
  height: var(--s-one-and-half);
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: 0;
    border-radius: var(--s-quarter);
  }
  
  &::-moz-color-swatch {
    border: 0;
    border-radius: var(--s-quarter);
  }
}

.input__label {
  flex-direction: column;
}
  
  `,

  file: css`

.input__label {
  flex-direction: column;
  cursor: pointer;
}

  `,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * This function determines the correct class name variation style for an input component depending on
 * the attribute type. This is a quick rundown of every variation:
 * - `box`: The default box input, this style is shared with the textarea and select components.
 * - `button`: For inputs that have button shape.
 * - `bool`: Boolean input types that includes radio and checkbox.
 * - `date`: Some date/time input types have styles specific to the browser or OS, this class name
 *   standarizes them to look like the `box` variation.
 * - `range`: Specific of the range type.
 * - `color`: Specific of the color type.
 * - `file`: Specific of the file type.
 *
 * @param {string} type
 *  The input type attribute. (`<input type="radio">`)
 *
 * @returns {string}
 *  The corresponding class name of the input variation.
 */
export default (type?: string): string | string[] =>
  type === undefined
    ? ['input--box', inputStyles.box]
    : ['button', 'image', 'reset', 'submit'].includes(type)
    ? inputStyles.button
    : ['radio', 'checkbox'].includes(type)
    ? inputStyles.bool
    : ['datetime-local', 'date', 'month', 'time', 'week'].includes(type)
    ? ['input--box', inputStyles.box, inputStyles.date]
    : type === 'range'
    ? inputStyles.range
    : type === 'color'
    ? inputStyles.color
    : type === 'file'
    ? inputStyles.file
    : ['input--box', inputStyles.box];
