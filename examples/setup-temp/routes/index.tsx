import { useSignal } from "@preact/signals";
import { Layout, Main, s } from "../../../mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Main whitespace>
        <Layout whitespace>
          <div class="col-h-full md:col-full flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class={s.txt.display}>Welcome to Fresh</h1>
            <p class="my-4">
              Try updating this message in the
              <code class="mx-2">./routes/index.tsx</code> file, and refresh.
            </p>
            <Counter count={count} />
          </div>
        </Layout>
      </Main>
    </>
  );
}
