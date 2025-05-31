import { render, type RenderOptions } from '@deno/gfm';
import { DOMParser, Element } from '@b-fuze/deno-dom';

interface MarkdownProps {
  content: string;
  focusable?: boolean;
  renderOptions: RenderOptions;
}

export default function (
  props: MarkdownProps,
): { dangerouslySetInnerHTML: { __html: string } } {
  let content = render(props.content, props.renderOptions);

  if (props.focusable) {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    if (doc) {
      const body = doc.body;
      Array.from(body.children).forEach((el) => {
        if (!(el instanceof Element)) return;
        const tag = el.tagName.toLowerCase();
        if (tag === 'details') {
          const summary = el.querySelector('summary');
          if (summary instanceof Element) {
            summary.setAttribute('tabindex', '0');
          }
        } else {
          el.setAttribute('tabindex', '0');
        }
      });
      content = body.innerHTML;
    }
  }

  return {
    dangerouslySetInnerHTML: {
      __html: content,
    },
  };
}
