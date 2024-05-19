// import { Main, Markdown } from '../../../mod.ts';
import 'https://esm.sh/prismjs@1.29.0';
import 'https://esm.sh/prismjs@1.29.0/components/prism-jsx?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-typescript?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-tsx?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-bash?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-powershell?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-json?no-check&pin=v57';
import 'https://esm.sh/prismjs@1.29.0/components/prism-diff?no-check&pin=v57';

export default async function Md() {
  // const markdown =
  //   await (await fetch(new URL('../static/content.md', import.meta.url)))
  //     .text();

  return (
    <div>
      {
        /* <Main layout_type='center'>
        <Markdown markdownContent={markdown} />
      </Main> */
      }
    </div>
  );
}
