import { iAtom, Markdown } from '../atoms.tsx';
import { apDef } from '../../deps.ts';
import { render, RenderOptions } from 'jsr:@deno/gfm@^0.10.0';

export type iMarkdown = {
  content: string;
  renderOptions: RenderOptions;
  fwd: iAtom<HTMLDivElement>;
};

const d: iMarkdown = {
  content: '',
  renderOptions: {
    allowIframes: true,
    allowMath: true,
  },
  fwd: {},
};

function setup(props: Partial<iMarkdown>) {
  const p = apDef<iMarkdown>(d, props);
  p.content = render(p.content, p.renderOptions);
  return p;
}

export default function (props: Partial<iMarkdown>) {
  const p = setup(props);

  return (
    <Markdown
      dangerouslySetInnerHTML={{ __html: p.content }}
      {...p.fwd}
    />
  );
}
