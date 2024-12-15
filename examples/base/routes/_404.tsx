import { Head } from "$fresh/runtime.ts";
import Logo from "../components/Logo.tsx";
import { Link, Text } from "../../../mod.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex flex-col items-center justify-center min-h-screen pb-triple">
        <Logo />
        <Text.Head>404 - Page not found</Text.Head>
        <Text.Base class="mb-single">
          The page you were looking for doesn't exist.
        </Text.Base>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}
