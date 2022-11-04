import { applyDefaults, cn } from '../../deps.ts';
import { iText } from '../types/props.ts';

export default (props: Partial<iText>) => {
  const defaults: iText = {
    children: undefined,
    type: 'paragraph',
  };

  const p = applyDefaults<iText>(defaults, props);

  const classes = {
    span: cn(
      'text-obsidiana',
      {
        display: 'block text-8xl font-bold',
        title: 'block text-6xl font-bold',
        subtitle: 'block text-4xl',
        heading: 'block text-3xl font-bold',
        subheading: 'block text-2xl',
        paragraph: 'block text-base',
        label: 'text-base',
        small: 'text-sm',
      }[p.type]
    ),
  };

  return { c: classes, ...p };
};
