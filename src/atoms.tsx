import { s } from './styles.ts';
import { JSX, Ref } from 'preact';

export type iAtom<T extends EventTarget = HTMLElement> =
  & JSX.HTMLAttributes<T>
  & Partial<ARIAMixin>
  & Partial<GlobalEventHandlers>
  & {
    nostyle?: boolean;
    ref?: Ref<T>;
  };

/* deno-fmt-ignore */
export const Text = {
  /** */
  Display:  (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.display} {...p} />,

  /** */
  Title:    (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.title} {...p} />,

  /** */
  Head:     (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.head} {...p} />,

  /** */
  Subhead:  (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.subhead} {...p} />,

  /** */
  Base:     (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.base} {...p} />,

  /** */
  Small:    (p: iAtom<HTMLSpanElement>) =>
              <span class={s.txt.small} {...p} />,
}

/* deno-fmt-ignore */
export const Page = {
  /** */
  Body:   (p: iAtom<HTMLBodyElement>) =>
            <body class={s.body} {...p} />,

  /** */
  Main:   (p: iAtom) =>
            <main class={s.main} {...p} />,

  /** */
  Header: (p: iAtom) =>
            <header class={s.header} {...p} />,

  /** */
  Footer: (p: iAtom) =>
            <footer class={s.footer} {...p} />,
}

/* deno-fmt-ignore */
export const Button = {
  /** */
  Brand:  (p: iAtom<HTMLButtonElement>) =>
            <button class={s.btn.brand} {...p} />,

  /** */
  Page:   (p: iAtom<HTMLButtonElement>) =>
            <button class={s.btn.page} {...p} />,

  /** */
  Panel:  (p: iAtom<HTMLButtonElement>) =>
            <button class={s.btn.panel} {...p} />,

  /** */
  Error:  (p: iAtom<HTMLButtonElement>) =>
            <button class={s.btn.error} {...p} />,
}

/* deno-fmt-ignore */
export const List = {
  /** */
  Unordered:  (p: iAtom<HTMLUListElement>) =>
                <ul class={s.list.unordered} {...p} />,

  /** */
  Ordered:    (p: iAtom<HTMLUListElement>) =>
                <ul class={s.list.ordered} {...p} />,
}

/* deno-fmt-ignore */
export const Code = {
  /** */
  Content:  (p: iAtom) =>
              <code class={s.code.content} {...p} />,

  /** */
  Inline:   (p: iAtom<HTMLDivElement>) =>
              <div class={s.code.inline} {...p} />,

  // Block: (p:  iAtom<HTMLDivElement>) => <div class={s.code.block} {...p} />
};

/* deno-fmt-ignore */
export const Input = {
  // Field:
  // Radio:
  // Check:
  // Container:
  // Label:
  // Error:
  // File:
  // Range:
  // Color:
  // Form:
  // Submit:
  // Fieldset:
  // Select:
  // Textarea:
}

/* deno-fmt-ignore */
/** */
export const Separator =
  (p: iAtom<HTMLHRElement>) =>
    <hr class={s.separator} {...p} />

/* deno-fmt-ignore */
/** */
export const Link =
  (p: iAtom<HTMLAnchorElement>) =>
    <a class={s.link} {...p} />

/* deno-fmt-ignore */
/** */
export const Kbd =
  (p: iAtom) =>
    <kbd class={s.kbd} {...p} />

// export const Pattern =
// export const Sidebar =
