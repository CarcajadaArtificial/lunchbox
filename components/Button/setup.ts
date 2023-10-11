import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { BUTTON_TYPES } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import { css } from '../../deps.ts';

export type iButton = iComponent<HTMLButtonElement> & {
  type: BUTTON_TYPES;
  maxWidth: boolean;
  compact: boolean;
  large: boolean;
  OnExtendedClick?: () => void;
};

const defaults: iButton = {
  maxWidth: false,
  compact: false,
  large: false,
  type: 'contrast',
};

const style = {
  button: css`
    max-width: max-content;
    cursor: pointer;
    border-radius: var(--s-quarter);
    margin-right: var(--s-eighth);

    border-style: solid;
    border-top-width: var(--s-eighth);
    border-bottom-width: var(--s-eighth);

    border-color: transparent;
    border-left-width: 0;
    border-right-width: 0;
    

    svg {
      display: inline;
      width: var(--s-single);
      position: relative;
      bottom: var(--s-eighth);
    }
  `,

  padding: {
    normal: css`
      padding: var(--s-eighth) var(--s-five-eights);
    `,
    compact: css`
      padding: 0 var(--s-three-eights);
      border-top-width: 1px;
      border-bottom-width: 1px;
    `,
    large: css`
      padding: var(--s-quarter) var(--s-one-and-half);
      border-top-width: var(--s-quarter);
      border-bottom-width: var(--s-quarter);
      border-radius: var(--s-five-eights);
    `,
  },

  button_personality: css`
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
  `,

  button_disabled: css`
    background-color: var(--clr-bg-panel);
    cursor: not-allowed;
    filter: opacity(0.4);
  `,

  button_error: css`
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
  `,

  button_invisible: css`
    background-color: var(--clr-bg-page);

    &:hover, &:focus { 
      background-color: var(--clr-bg-panel-35);
    }
    
    &:active {
      background-color: var(--clr-bg-panel-60);
    }
  `,

  button_panel: css`
    background-color: var(--clr-bg-panel);

    &:hover, &:focus { 
      background-color: var(--clr-bg-panel-35);
    }
    
    &:active {
      background-color: var(--clr-bg-page);
    }
  `,
};

export default (props: Partial<iButton>) => {
  const p = applyDefaults<iButton>(defaults, props);

  const classes = partializeClasses({
    button: opt(
      cn(
        transition.interaction.outline,
        style.button,
        props.type === 'disabled'
          ? style.button_disabled
          : props.type === 'error'
          ? style.button_error
          : props.type === 'invisible'
          ? [style.button_invisible, 'lbx-btn-invisible']
          : props.type === 'panel'
          ? [style.button_panel, 'lbx-btn-panel']
          : props.type === 'contrast'
          ? style.button_personality
          : style.button_personality,
        p.compact
          ? style.padding.compact
          : p.large
          ? style.padding.large
          : style.padding.normal,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
