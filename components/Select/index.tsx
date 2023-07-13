import setup, { iSelect } from './setup.ts';
import Text from '../Text/index.tsx';

export default function Select(props: Partial<iSelect>) {
  const { c, fref, fwd, children, placeholder, options, maxWidth, label, error, ...p } = setup(props);

  const optionPlaceholder = placeholder ? (
    <option value="" selected hidden>
      {placeholder}
    </option>
  ) : null;

  const optionComponents = options.map((option) => {
    return typeof option === 'string' ? (
      <option value={option}>{option}</option>
    ) : option.value && option.name ? (
      <option value={option.value}>{option.name}</option>
    ) : (
      { option }
    );
  });

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        {label === '' ? null : (
          <Text fref={fwd.text?.ref} noMargins class={c.text}>
            {label}
            {p.required ? (
              <sup ref={fwd.required?.ref} title="Required" class={c.required}>
                *
              </sup>
            ) : null}
          </Text>
        )}
        <select ref={fref} class={c.input} {...p}>
          {optionPlaceholder}
          {optionComponents}
          {children}
        </select>
      </label>
      {error ? (
        <Text fref={fwd.error?.ref} noMargins inheritColor type="small" class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
