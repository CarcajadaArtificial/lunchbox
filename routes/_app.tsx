import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { Stylesheet } from '../mod.ts';

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Fresh Garlic - Playground</title>
        <Stylesheet />
      </Head>
      <body class='clr-bg-panel clr-txt-base txt-paragraph'>
        <div class='_screen'>
          <Component />
        </div>
      </body>
    </html>
  );
}
