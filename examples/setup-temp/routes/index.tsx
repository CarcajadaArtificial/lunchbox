import { useSignal } from "@preact/signals";
import { s } from "../../../mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <main class={s.main}>
        <div class={s.layout}>
          <div class="col-h-full md:col-full flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class={s.txt.title}>Welcome to Fresh</h1>
            <p class="my-4">
              Try updating this message in the
              <code class="mx-2">./routes/index.tsx</code> file, and refresh.
            </p>
            <hr />
            <Counter count={count} />
          </div>
        </div>
      </main>
    </>
  );
}
