import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Fresh Garlic - Playground</title>
        <link rel='stylesheet' href='/style.css' />
        <link rel='stylesheet' href='/playground.css' />
      </Head>
      <body class='clr-bg-panel clr-txt-base txt-paragraph'>
        <div class='_screen'>
          <Component />
        </div>
      </body>
    </>
  );
}
