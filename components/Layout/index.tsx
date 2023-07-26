import setup, { iLayout } from './setup.ts';
import { ComponentChild } from 'preact';

export default function (props: Partial<iLayout>) {
  const { c, fref, fwd, type, children, ...p } = setup(props);

  return (
    <div ref={fref} {...p} class={c.layout}>
      {Array.isArray(children)
        ? (
          children.map((child: ComponentChild) =>
            child
              ? (
                <div ref={fwd.module?.ref} class={c.module}>
                  {child}
                </div>
              )
              : null
          )
        )
        : children
        ? (
          <div ref={fwd.module?.ref} class={c.module}>
            {children}
          </div>
        )
        : null}
    </div>
  );
}
