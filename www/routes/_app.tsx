import type { PageProps } from "fresh";
import { Body } from "lunchbox/atoms/Page.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>init</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <Body>
        <Component />
      </Body>
    </html>
  );
}
