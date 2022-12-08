import { applyDefaults, cn } from '../../deps.ts';
import { iText } from '../types/props.ts';

export default (props: Partial<iText>) => {
  const defaults: iText = {
    type: 'paragraph',
    inheritColor: false,
    isCompressed: false,
    isLabel: false,
    noMargins: false,
    indent: false,
  };

  const p = applyDefaults<iText>(defaults, props);

  const classes = {
    span: cn(
      'break-word block',
      p.inheritColor
        ? null
        : ['display', 'title', 'heading'].includes(p.type)
        ? 'clr-heading'
        : 'clr-text',
      p.type,
      p.isCompressed ? 'compressed' : null,
      p.isLabel ? 'label' : null,
      p.noMargins ? 'no-margins' : null,
      p.indent ? 'indent' : null,
      p.class
    ),
  };

  return { c: classes, ...p };
};
