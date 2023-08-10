import { useState } from 'preact/hooks';
import Chiplist from '../components/Chiplist/index.tsx';
import Input from '../components/Input/index.tsx';
import { certainKeyPressed, removeChiplistValue } from 'handlers';

export default function () {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div>
      <Input
        label='New tag'
        onkeyup={(ev) =>
          certainKeyPressed(ev, ['Enter', 'Spacebar', ' '], (ev) => {
            const newValue = (ev.target as HTMLInputElement).value;
            if (newValue.replace(' ', '').length > 0) {
              setValues([...values, newValue]);
            }
            (ev.target as HTMLInputElement).value = '';
          })}
      />
      <Chiplist
        onRemove={(ev: Event) => removeChiplistValue(ev, values, setValues)}
        values={values}
      />
    </div>
  );
}
