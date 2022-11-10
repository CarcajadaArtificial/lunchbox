import { applyDefaults, cn } from '../../deps.ts';
import { iText } from '../types/props.ts';

export default (props: Partial<iText>) => {
  const defaults: iText = {
    children: undefined,
    type: 'paragraph',
    inheritColor: false,
  };

  const p = applyDefaults<iText>(defaults, props);

  const classes = {
    span: cn(
      'break-word',
      p.inheritColor ? null : 'text-obsidiana',
      {
        display: 'block text-8xl font-bold mb-4',
        title: 'block text-6xl font-bold mb-4',
        subtitle: 'block text-4xl mb-4',
        heading: 'block text-3xl font-bold mb-4',
        subheading: 'block text-2xl mb-4',
        paragraph: 'block text-base w-prose',
        label: 'text-base',
        small: 'text-sm',
      }[p.type]
    ),
  };

  return { c: classes, ...p };
};
