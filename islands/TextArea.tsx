import { JSX } from "preact";
import { applyDefaults, cn } from "../deps.ts";

interface TextArea
  extends JSX.HTMLAttributes<HTMLTextAreaElement>, Partial<ARIAMixin> {
  label?: string;
  error?: string;
}

export default function TextArea(props: Partial<TextArea>) {
  // Prop values
  const { label, error, ...inputProps } = applyDefaults({
    required: false,
    type: "text",
  }, props);
  // Classes
  const c = {
    input: cn(
      "px-2 py-1",
      "border rounded",
      "focus:outline-none focus:border-2",
      error ? "border-red-700 placeholder:text-red-700" : "border-gray-300",
      inputProps.disabled ? "cursor-not-allowed" : null,
      inputProps.type &&
        ["button", "reset", "checkbox", "radio", "image"].includes(
          inputProps.type,
        )
        ? "w-min"
        : "w-full",
    ),
    span: cn("px-2", error ? "text-red-700" : null),
    label: cn(
      "flex",
      inputProps.disabled ? "text-gray-400" : null,
      inputProps.type === "radio" || inputProps.type === "checkbox"
        ? "flex-row-reverse justify-end"
        : "flex-col",
    ),
    error: cn("px-2", "text-xs", "text-red-700"),
    required: cn("text-red-700", "ml-1", "mb-1"),
    container: cn("input"),
  };

  return (
    <div class={c.container}>
      <label class={c.label}>
        <span class={c.span}>
          {label}
          {inputProps.required
            ? <sup title="Required" class={c.required}>*</sup>
            : null}
        </span>
        <textarea class={c.input} {...inputProps} />
      </label>
      {error ? <span class={c.error}>{error}</span> : null}
    </div>
  );
}
