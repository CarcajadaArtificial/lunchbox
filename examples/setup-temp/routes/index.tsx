import { useSignal } from "@preact/signals";
import { area, Code, Input, layout, s, TextArea } from "../../../mod.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <header class={`${area} ${layout} min-h-banner`}>
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
            <span>The code for this page is located here</span>{" "}
            <Code>./routes/index.tsx</Code>{" "}
            <span>and it is server side rendered.</span>
          </div>
        </div>
      </header>
      <main class={`${s.main} ${layout}`}>
        <div class="col-h-full md:col-full flex flex-col items-center justify-center">
          <h2 class={s.txt.head}>Counter</h2>
          <div class="mt-half">
            <span>The code for this island is located here</span>{" "}
            <Code>./islands/Counter.tsx</Code>{" "}
            <span>it is updated in the client.</span>
          </div>
          <Counter count={count} />
        </div>
        <div class="col-h-full md:col-sm">
          <Input
            label="dfiuasdhfiuhaidlshfuhdslifhilahsduhfilahdslufhdsdfasdfasdfasdfdsa"
            required
          />
          <TextArea label="label" required />
          <Input label="label" error="error" required />
          <Input type="checkbox" label="label" required />
          <Input type="checkbox" label="label" />
        </div>
      </main>
      <footer class={`${area} ${layout}`}>
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
