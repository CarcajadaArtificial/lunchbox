import { Button, type iButton } from "lunchbox";
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
