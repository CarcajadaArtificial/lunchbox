import { render, type RenderOptions } from '@deno/gfm';

interface MarkdownProps {
  content: string;
  renderOptions?: RenderOptions;
  transform?: (content: string) => string;
}

export default function (
  props: MarkdownProps,
): { dangerouslySetInnerHTML: { __html: string } } {
  const content = render(props.content, props.renderOptions);

  return {
    dangerouslySetInnerHTML: {
      __html: props.transform ? props.transform(content) : content,
    },
  };
}
