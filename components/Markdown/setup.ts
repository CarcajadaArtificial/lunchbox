import { applyDefaults, cn, opt, partializeClasses } from 'utils';
import { iComponent } from 'types';
import { RenderOptions } from '../../src/markdown.ts';
import { render } from '../../src/markdown.ts';

export type iMarkdown = iComponent<HTMLDivElement> & {
  markdown_content: string;
  renderOptions: RenderOptions;
};

const defaults: iMarkdown = {
  markdown_content: '',
  renderOptions: {
    allowIframes: true,
    allowMath: true,
    customClasses: {
      paragraph: ['comp-text', 'txt-paragraph'],
      heading: ['comp-text'],
      code: ['comp-code_wrapper'],
      codespan: [
        'comp-code',
        'comp-code_wrapper',
        'clr-bg-panel',
        'clr-txt-personality',
      ],
      link: ['comp-link'],
      hr: ['comp-separator'],
    },
  },
};

export default (props: Partial<iMarkdown>) => {
  const p = applyDefaults<iMarkdown>(defaults, props);

  const classes = partializeClasses({
    markdown: opt(cn('comp-markdown'), p.class, p.nostyle || p.nostyleAll),
  });

  p.markdown_content = render(p.markdown_content, p.renderOptions);

  delete p.class;
  return { c: classes, ...p };
};
