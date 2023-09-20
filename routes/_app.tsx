import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';
import { ResinCssEmitter } from 'resin';

export default function App({ Component }: AppProps) {
  const testing = false;
  return (
    <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Fresh Garlic - Playground</title>
        <link
          rel='stylesheet'
          href={testing
            ? '/style.css'
            : 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/lunchbox-css@v0.0.30/dist/presets/standard/style.css'}
        />
        <ResinCssEmitter />
      </Head>
      <body class='clr-bg-panel clr-txt-base txt-paragraph'>
        <div class='_screen'>
          <Component />
        </div>
      </body>
    </html>
  );
}
