import { type PageProps } from '$fresh/server.ts';
export default function App({ Component }: PageProps) {
  return (
    <html class='lunchbox'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Example Lunchbox Project</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
