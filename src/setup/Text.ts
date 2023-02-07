import { applyDefaults, cn } from '../../deps.ts';
import { TEXT_TYPES } from '../types/enums.ts';
import { iText } from '../types/props.ts';

const defaults: iText = {
  type: TEXT_TYPES.PARAGRAPH,
  inheritColor: false,
  compact: false,
  single: false,
  noMargins: false,
  indent: false,
};

export default (props: Partial<iText>) => {
  const p = applyDefaults<iText>(defaults, props);

  const classes = {
    span: cn(
      p.type,
      p.compact ? 'compact' : null,
      p.single ? 'single' : null,
      p.noMargins ? 'no-margins' : null,
      p.indent ? 'indent' : null,
      p.inheritColor ? 'inherit-color' : null,
      p.class
    ),
  };

  return { c: classes, ...p };
};
