import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import { iComponent } from '../../src/types.ts';
import { css } from 'resin';

export type iText = iComponent<HTMLSpanElement> & {
  type: TEXT_TYPES;
  inheritColor: boolean;
  compact: boolean;
  single: boolean;
  noMargins: boolean;
  indent: boolean;
};

const defaults: iText = {
  type: 'paragraph',
  inheritColor: false,
  compact: false,
  single: false,
  noMargins: false,
  indent: false,
};

const style = {
  text: css`
    display: block;

    &.txt-display,
    &.txt-title,
    &.txt-heading {
      color: var(--clr-txt-personality);
    }

    &.txt-display,
    &.txt-title,
    &.txt-heading,
    &.txt-subheading {
      font-weight: 600;
    }

    &.txt-paragraph + .lbx-separator {
      margin-top: var(--s-one-and-half);
    }

    &:not(.no-margins) {
      &.txt-display,
      &.txt-title,
      &.txt-heading,
      &.txt-subheading {
        margin-bottom: var(--s-one-and-half);
      }

      &.txt-paragraph {
        + .txt-display,
        + .txt-title,
        + .txt-heading,
        + .txt-subheading {
          margin-top: var(--s-triple);
        }

        + .txt-paragraph {
          margin-top: var(--s-one-and-half);
        }
      }

      &.txt-small {
        margin: var(--s-one-and-half) 0;
      }
  `,
};

export default (props: Partial<iText>) => {
  const p = applyDefaults<iText>(defaults, props);

  const classes = partializeClasses({
    span: opt(
      cn(
        style.text,
        `txt-${p.type}`,
        p.compact ? 'compact' : null,
        p.single ? 'single' : null,
        p.noMargins ? 'no-margins' : null,
        p.indent ? 'indent' : null,
        p.inheritColor ? 'inherit-color' : null,
      ),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
