import { iSelect } from "../src/types/props.ts";
import setup from "../src/setup/Select.ts";

export default function Select(props: Partial<iSelect>) {
  const { c, children, placeholder, options, maxWidth, label, error, ...p } =
    setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <span class={c.span}>
          {label}
          {p.required ? <sup title="Required" class={c.required}>*</sup> : null}
        </span>
        <select class={c.input} {...p}>
          {children === null
            ? (
              <>
                <option value="" selected hidden>{placeholder}</option>
                {options.map((option) =>
                  typeof option === "string"
                    ? <option value={option}>{option}</option>
                    : <option value={option.value}>{option.name}</option>
                )}
              </>
            )
            : children}
        </select>
      </label>
      {error ? <span class={c.error}>{error}</span> : null}
    </div>
  );
}
