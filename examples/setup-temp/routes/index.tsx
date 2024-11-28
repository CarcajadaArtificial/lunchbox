import { useSignal } from "@preact/signals";
import { Code, s } from "../../../mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <header class={`${s.area} ${s.layout} min-h-banner`}>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class={s.txt.title}>Welcome to Fresh</h1>
          <div>
            <span>Try updating this message in the</span>{" "}
            <Code>./routes/index.tsx</Code> <span>file, and refresh.</span>
          </div>
        </div>
      </header>
      <main class={`${s.main} ${s.layout}`}>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <h2 class={s.txt.head}>Counter</h2>
          <Counter count={count} />
          <hr class={s.separator} />
        </div>
      </main>
      <footer class={`${s.area} ${s.layout}`}>
        <div class="col-h-full md:col-full">
          <a
            class={s.link}
            href="https://github.com/CarcajadaArtificial/lunchbox"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
