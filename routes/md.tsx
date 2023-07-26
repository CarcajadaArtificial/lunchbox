import { render } from '../../deno-gfm/mod.ts';

const CONTENT_PATH = new URL('../static/content.md', import.meta.url);
const TEST_PATH = new URL('../static/test.txt', import.meta.url);

export default async function Md() {
  const markdown = await (await fetch(CONTENT_PATH)).text();
  const test = await (await fetch(TEST_PATH)).text();

  const body = render(markdown, {
    allowIframes: true,
    allowMath: true,
    customClasses: {
      // list: ['asdf'],
    },
  });

  console.log(test === body ? 'good' : 'bad');

  // return <div dangerouslySetInnerHTML={{ __html: body }}></div>;
  return <div>{body}</div>;
}
