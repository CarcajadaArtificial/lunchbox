import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ana UI</title>
        <link rel="stylesheet" href="/twind.css" />
      </Head>
      <Component />
    </>
  );
}
