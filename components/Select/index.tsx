import setup, { iSelect } from './setup.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import Text from '../Text/index.tsx';

export default function Select(props: Partial<iSelect>) {
  const { c, children, placeholder, options, maxWidth, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <Text noMargins class={c.text}>
          {label}
          {p.required ? (
            <sup title="Required" class={c.required}>
              *
            </sup>
          ) : null}
        </Text>
        <select class={c.input} {...p}>
          {children === null ? (
            <>
              <option value="" selected hidden>
                {placeholder}
              </option>
              {options.map((option) =>
                typeof option === 'string' ? (
                  <option value={option}>{option}</option>
                ) : option.value && option.name ? (
                  <option value={option.value}>{option.name}</option>
                ) : (
                  { option }
                )
              )}
            </>
          ) : (
            children
          )}
        </select>
      </label>
      {error ? (
        <Text noMargins inheritColor type={TEXT_TYPES.SMALL} class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
