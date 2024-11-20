import type { Signal } from "@preact/signals";
import Text from "lunchbox/components/Text/index.tsx";
import Button from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function (props: CounterProps) {
  return (
    <div class="flex items-center gap-8">
      <Button
        disabled={props.count.value === 0}
        onClick={() => props.count.value -= 1}
      >
        -1
      </Button>
      <Text type="subheading" noMargins>{props.count}</Text>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
