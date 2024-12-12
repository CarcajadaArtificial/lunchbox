import { type PageProps } from "$fresh/server.ts";
import { KatexStyles, Page } from "../../../mod.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>setup-temp</title>
        <link rel="stylesheet" href="/styles.css" />
        <KatexStyles />
      </head>
      <Page.Body>
        <Component />
      </Page.Body>
    </html>
  );
}
