import type { PageProps } from 'fresh';

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>init</title>
        <link rel='stylesheet' href='/styles.css' />
        <link rel='stylesheet' href='/fonts.css' />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
