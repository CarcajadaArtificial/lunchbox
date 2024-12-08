import type { Signal } from "@preact/signals";
import { Button } from "../../../mod.ts";
import { handleInteraction } from "../../../src/utils.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-one-and-half items-center">
      <Button.Panel
        {...handleInteraction(() => props.count.value -= 1)}
      >
        -1
      </Button.Panel>
      <span class="tabular-nums text-subhead">{props.count}</span>
      <Button.Panel
        {...handleInteraction(() => props.count.value += 1)}
      >
        +1
      </Button.Panel>
    </div>
  );
}
