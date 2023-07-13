import { cn } from '../../deps.ts';
import { applyDefaults, partializeClasses } from '../../src/utils.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import { iExtendedElement } from '../../src/types.ts';

export type iText = iExtendedElement<HTMLSpanElement> & {
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

export default (props: Partial<iText>) => {
  const p = applyDefaults<iText>(defaults, props);

  const classes = partializeClasses({
    span: cn(
      'comp-text',
      `txt-${p.type}`,
      ['display', 'title', 'heading'].includes(p.type) ? 'clr-txt-personality' : null,
      p.compact ? 'compact' : null,
      p.single ? 'single' : null,
      p.noMargins ? 'no-margins' : null,
      p.indent ? 'indent' : null,
      p.inheritColor ? 'inherit-color' : null,
      p.class
    ),
  });

  delete p.class;
  return { c: classes, ...p };
};
