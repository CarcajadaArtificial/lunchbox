import { iAtom, Markdown } from '../atoms.tsx';
import { apDef } from '../utils.ts';
import { render, RenderOptions } from '@deno/gfm';

export type iMarkdown = {
  content: string;
  renderOptions: RenderOptions;
  fwd: iAtom<HTMLDivElement>;
};

const d: iMarkdown = {
  content: '',
  renderOptions: {
    allowIframes: false,
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
