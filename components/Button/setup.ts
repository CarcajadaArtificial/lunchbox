import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { BUTTON_TYPES } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
import { transition } from '../../src/styles.ts';
import { css } from '../../deps.ts';

export type iButton = iComponent<HTMLButtonElement> & {
  type: BUTTON_TYPES;
  maxWidth: boolean;
};

const defaults: iButton = {
  maxWidth: false,
  type: 'contrast',
};

const style = {
  button: css`
    padding: var(--s-quarter) var(--s-five-eights);
    max-width: max-content;
    cursor: pointer;
    border-radius: var(--s-quarter);
    margin-right: var(--s-eighth);

    svg {
      display: inline;
      width: var(--s-single);
      position: relative;
      bottom: var(--s-eighth);
    }
  `,

  button_personality: css`
    background-color: var(--clr-bg-personality-45);

    &:hover, &:focus { 
      background-color: var(--clr-bg-personality-60);
    }

    &:active {
      background-color: var(--clr-bg-personality-30);
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
    }

    &:active {
      background-color: var(--clr-bg-error);
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
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
