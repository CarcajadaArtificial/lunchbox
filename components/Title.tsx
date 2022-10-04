import type { ComponentChildren, JSX } from "preact";
import { applyDefaults, cn } from "../deps.ts";

interface Title
  extends JSX.HTMLAttributes<HTMLSpanElement>, Partial<ARIAMixin> {
  children: ComponentChildren;
}

export default function Title(props: Partial<Title>) {
  // Prop values
  const { children, ...titleProps } = applyDefaults({
    children: ["Title"],
    role: "heading",
    ariaLevel: "1",
  }, props);
  // Classes
  const c = {
    span: cn("text-7xl", "font-bold"),
  };

  return (
    <span {...titleProps} class={c.span}>
      {children}
    </span>
  );
}
