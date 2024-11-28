import type { Signal } from "@preact/signals";
import { s } from "../../../mod.ts";
import { handleInteraction } from "../../../src/utils.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-one-and-half items-center">
      <button
        class={s.btn.panel}
        {...handleInteraction(() => props.count.value -= 1)}
      >
        -1
      </button>
      <span class={`tabular-nums ${s.txt.subhead}`}>{props.count}</span>
      <button
        class={s.btn.panel}
        {...handleInteraction(() => props.count.value += 1)}
      >
        +1
      </button>
    </div>
  );
}
