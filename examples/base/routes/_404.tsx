import { Head } from "$fresh/runtime.ts";
import Logo from "../components/Logo.tsx";
import { Link, Text } from "../../../mod.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex flex-col items-center justify-center min-h-screen pb-3/1">
        <Logo />
        <Text.Head>404 - Page not found</Text.Head>
        <Text.Base class="mb-1/1">
          The page you were looking for doesn't exist.
        </Text.Base>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}
