import { applyDefaults, cn, opt, partializeClasses } from '../../src/utils.ts';
import { iComponent } from '../../src/types.ts';
import { RenderOptions } from '../../src/markdown.ts';
import { render } from '../../src/markdown.ts';
import { css } from 'resin';

export type iMarkdown = iComponent<HTMLDivElement> & {
  markdown_content: string;
  renderOptions: RenderOptions;
};

const styles = {
  markdown: css`
    h1, h2, h3, h4, h5, h6 {
      a {
        display: none;
      }
    }

    h1, h2, h4, h5, h6 {
      color: var(--clr-txt-personality);
    }

    h1 {
      font: 600 var(--txt-title) var(--font-heading);
      margin: var(--s-double) 0 var(--s-single) 0;
    }

    h2 {
      font: 600 var(--txt-heading) var(--font-heading);
      margin: var(--s-double) 0 var(--s-single) 0;
    }

    h2 {
      font: 600 var(--txt-subheading) var(--font-base);
    }

    ul,
    ol {
      list-style: initial;
      display: flex;
      flex-direction: column;
      gap: var(--s-half);
      margin: var(--s-single) 0 var(--s-one-and-half) 0;
    }
  
    blockquote * {
      color: var(--clr-txt-personality);
      font-style: italic;
      margin: var(--s-single) 0;
      text-align: center;
    }
  `,
  syntax: css`
    .keyword,
    .function,
    .property {
      color: var(--clr-txt-personality);
    }

    .class-name,
    .tag,
    .script {
      color: var(--clr-txt-base);
    }

    .punctuation,
    .operator,
    .script-punctuation {
      color: var(--clr-bg-disabled);
    }

    .number,
    .boolean,
    .string,
    .regex,
    .attr-name {
      color: var(--clr-txt-error);
    }

    .regex-delimiter {
      color: var(--clr-bg-error);
    }
  `,
  separator: css`
    margin-top: var(--s-one-and-half);
    height: var(--s-one-and-half);
  `,
  link: css`
    text-decoration: underline;
    cursor: pointer;
    color: var(--clr-txt-personality);
    transition: color 0.1s ease-in-out;

    &:hover, 
    &:focus {
      color: var(--clr-txt-personality);
    }
  `,
  code: css`
    line-break: strict;
    line-height: calc(100% - 1px);
    color: var(--clr-txt-personality);
    display: inline;
    padding: 3px 0.5ch 1px 0.5ch;
    margin: 0 0.5ch;
    background-color: var(--clr-bg-panel);
    border-radius: var(--s-quarter);
  `,
  code_wrapper: css`
    background-color: var(--clr-bg-panel);
    border-radius: var(--s-quarter);
    padding: var(--s-half);
    width: calc(100% - -1rem);
    right: var(--s-half);
    position: relative;
    overflow-x: scroll;
    margin: var(--s-single) 0;
  `,
};

const defaults: iMarkdown = {
  markdown_content: '',
  renderOptions: {
    allowIframes: true,
    allowMath: true,
    customClasses: {
      code: [styles.code_wrapper],
      codespan: [
        styles.code,
      ],
      link: [styles.link],
      hr: [styles.separator],
    },
  },
};

export default (props: Partial<iMarkdown>) => {
  const p = applyDefaults<iMarkdown>(defaults, props);

  const classes = partializeClasses({
    markdown: opt(
      cn(styles.markdown, styles.syntax),
      p.class,
      p.nostyle || p.nostyleAll,
    ),
  });

  p.markdown_content = render(p.markdown_content, p.renderOptions);

  delete p.class;
  return { c: classes, ...p };
};
