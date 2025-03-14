import type { Signal } from '@preact/signals';
import { Button } from 'lunchbox';

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class='flex gap-8 py-3/2 items-center justify-center'>
      <Button.Panel
        onClick={() => props.count.value -= 1}
      >
        -1
      </Button.Panel>
      <span class='tabular-nums text-subhead'>{props.count}</span>
      <Button.Panel
        onClick={() => props.count.value += 1}
      >
        +1
      </Button.Panel>
    </div>
  );
}
