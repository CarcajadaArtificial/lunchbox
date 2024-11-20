import Button from "lunchbox/components/Button/index.tsx";
import { type iButton } from "lunchbox/components/Button/setup.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function (props: Partial<iButton>) {
  const disabled = !IS_BROWSER || props.disabled;
  return (
    <Button
      type={disabled ? "disabled" : "panel"}
      disabled={disabled}
      {...props}
    />
  );
}
