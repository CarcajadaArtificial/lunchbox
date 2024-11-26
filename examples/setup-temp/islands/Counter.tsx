import type { Signal } from "@preact/signals";
import Button from "../components/Button.tsx";
import { s } from "../../../mod.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class={`tabular-nums ${s.txt.head}`}>{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
