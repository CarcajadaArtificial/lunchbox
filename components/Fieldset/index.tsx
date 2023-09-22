import Input from '../Input/index.tsx';
import setup, { iFieldset } from './setup.ts';

export default function (props: Partial<iFieldset>) {
  const {
    c,
    nostyle,
    nostyleAll,
    fref,
    allowMultiple,
    values,
    selectedValues,
    legend,
    fwd,
    ...p
  } = setup(
    props,
  );

  return (
    <fieldset
      ref={fref}
      name={p.name ? p.name : 'undefined-fieldset'}
      class={c.fieldset}
      {...p}
    >
      {legend === '' ? null : (
        <legend class={c.legend}>
          {legend}
        </legend>
      )}
      {values.map((inputValue) => (
        <Input
          type={allowMultiple ? 'checkbox' : 'radio'}
          label={inputValue}
          name={p.name ? p.name : 'undefined-fieldset'}
          checked={selectedValues.includes(inputValue)}
        />
      ))}
    </fieldset>
  );
}
