import type { ComponentChildren } from "preact";
import { applyDefaults, cn } from "../deps.ts";
import Title from "./Title.tsx";

interface Page {
  children: ComponentChildren;
  title: string;
}

export default function Page(props: Partial<Page>) {
  // Prop values
  const { title, children } = applyDefaults({
    children: ["Page Content"],
    title: "Page Title",
  }, props);
  // Classes
  const c = {
    main: cn(""),
    wrapper: cn("page font-mono"),
  };

  return (
    <div class={c.wrapper}>
      <main class={c.main}>
        <Title>{title}</Title>
        {children}
      </main>
    </div>
  );
}
