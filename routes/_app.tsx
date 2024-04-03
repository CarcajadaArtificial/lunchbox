import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Fresh Lunchbox</title>
        <link rel='stylesheet' href='/fonts/fonts.css' />
      </Head>
      <body class='clr-bg-panel clr-txt-base text--paragraph'>
        <Component />
      </body>
    </html>
  );
}
