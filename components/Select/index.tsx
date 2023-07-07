import setup, { iSelect } from './setup.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import Text from '../Text/index.tsx';

export default function Select(props: Partial<iSelect>) {
  const { c, fref, fwd, children, placeholder, options, maxWidth, label, error, ...p } = setup(props);

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
          {children === null ? (
            <>
              <option ref={fwd.option?.ref} class={c.option} value="" selected hidden>
                {placeholder}
              </option>
              {options.map((option) =>
                typeof option === 'string' ? (
                  <option ref={fwd.option?.ref} class={c.option} value={option}>
                    {option}
                  </option>
                ) : option.value && option.name ? (
                  <option ref={fwd.option?.ref} class={c.option} value={option.value}>
                    {option.name}
                  </option>
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
        <Text fref={fwd.error?.ref} noMargins inheritColor type={TEXT_TYPES.SMALL} class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
