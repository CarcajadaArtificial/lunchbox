import setup, { iMarkdown } from './setup.ts';

export default function (props: Partial<iMarkdown>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    markdown_content,
    renderOptions,
    ...p
  } = setup(props);

  return (
    <div
      class={c.markdown}
      ref={fref}
      dangerouslySetInnerHTML={{ __html: markdown_content }}
      {...p}
    />
  );
}
