//   ___      _   _              ___      _
//  | _ )_  _| |_| |_ ___ _ _   / __| ___| |_ _  _ _ __
//  | _ \ || |  _|  _/ _ \ ' \  \__ \/ -_)  _| || | '_ \
//  |___/\_,_|\__|\__\___/_||_| |___/\___|\__|\_,_| .__/
//                                                |_|
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This module contains the prop type, default values, and styles for the `<Button />` component.
 *
 * @module
 */
import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { type ButtonTypes } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import { css } from '../../deps.ts';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Property type of the `<Button />` component. */
export type iButton = iComponent<HTMLButtonElement> & {
  /** If true, expands the width of the button up to its maximum width. */
  maxWidth: boolean;
  /** If true, the button's paddings will be shorter. */
  compact: boolean;
  /** If true, the button's paddings will be larger. */
  large: boolean;
  /**
   * Changes the button's style depending on the property.
   * - **disabled:** Adds `cursor: not-allowed` and makes it look unavailable.
   * - **error:** Makes it the standard red color.
   * - **panel:** Gives a panel background to the button. If placed on top of a `<Panel />` component,
   *    it gives a page background instead, simulating a "hole" in the panel.
   * - **transparent:** Makes the button's background transparent.
   */
  type: ButtonTypes;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** These are the default values of the `<Button />` component's props. */
const defaults: iButton = {
  maxWidth: false,
  compact: false,
  large: false,
  type: 'default',
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Style object for the `<Button />` component. */
const style = css`
  border-bottom-width: var(--s-eighth);
  border-color: transparent;
  border-left-width: 0;
  border-radius: var(--s-quarter);
  border-right-width: 0;
  border-style: solid;
  border-top-width: var(--s-eighth);
  cursor: pointer;
  margin-right: var(--s-eighth);
  max-width: max-content;

  &.button {
    &__padding {
      padding: var(--s-eighth) var(--s-five-eights);

      &--compact {
        border-bottom-width: 1px;
        border-top-width: 1px;
        padding: 0 var(--s-three-eights);
      }

      &--large {
        border-bottom-width: var(--s-quarter);
        border-radius: var(--s-five-eights);
        border-top-width: var(--s-quarter);
        padding: var(--s-quarter) var(--s-one-and-half);
      }
    }

    &__style {
      background-color: var(--clr-bg-personality-45);

      &:hover, &:focus { 
        background-color: var(--clr-bg-personality-60);
        border-bottom-color: var(--clr-bg-panel-35);
      }

      &:active {
        background-color: var(--clr-bg-personality-30);
        border-top-color: var(--clr-personality);
        border-bottom-color: transparent;
      }

      &--disabled {
        background-color: var(--clr-bg-panel);
        cursor: not-allowed;
        filter: opacity(0.4);
      }

      &--error {
        background-color: var(--clr-bg-error);

        &:hover, &:focus { 
          background-color: var(--clr-bg-error-50);
          border-bottom-color: var(--clr-bg-error);
        }

        &:active {
          background-color: var(--clr-bg-error);
          border-top-color: var(--clr-bg-error-50);
          border-bottom-color: transparent;
        }
      }

      &--transparent {
        background-color: var(--clr-bg-page);

        &:hover, &:focus { 
          background-color: var(--clr-bg-panel-35);
        }
        
        &:active {
          background-color: var(--clr-bg-panel-60);
        }
      }

      &--panel {
        background-color: var(--clr-bg-panel);

        &:hover, &:focus { 
          background-color: var(--clr-bg-panel-35);
        }
        
        &:active {
          background-color: var(--clr-bg-page);
        }
      }
    }
  }

  .button__icon {
    display: inline;
    width: var(--s-single);
    position: relative;
    bottom: var(--s-eighth);
  }
`;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** Setup function of the `<Button />` component. */
export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = partializeClasses({
    button: opt(
      cn(
        transition.interaction.outline,
        style,
        p.type === 'default' ? 'button__style' : `button__style--${p.type}`,
        p.compact
          ? 'button__padding--compact'
          : p.large
          ? 'button__padding--large'
          : 'button__padding',
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
