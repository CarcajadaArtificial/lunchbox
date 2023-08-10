import { useState } from 'preact/hooks';
import Chiplist from '../components/Chiplist/index.tsx';
import Input from '../components/Input/index.tsx';

export default function () {
  const [values, setValues] = useState<string[]>([]);

  return (
    <div>
      <Input
        label='New tag'
        onkeyup={(ev) => {
          if (ev.key === 'Enter') {
            setValues([...values, (ev.target as HTMLInputElement).value]);
            (ev.target as HTMLInputElement).value = '';
          }
        }}
      />
      <Chiplist
        onRemove={(ev: Event) => {
          const target = ev.target as HTMLButtonElement;
          const chipValue = (target.previousSibling as HTMLElement).innerHTML;
          setValues(values.filter((value) => value !== chipValue));
        }}
        values={values}
      />
    </div>
  );
}
