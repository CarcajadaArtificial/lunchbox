import Text from '../Text/index.tsx';
import setup, { iInput } from './setup.ts';

export default function (props: Partial<iInput>) {
  const { c, nostyle, nostyleAll, fref, fwd, maxWidth, label, error, ...p } =
    setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        {label === ''
          ? null
          : (
            <Text
              nostyleAll={nostyleAll}
              fref={fwd.text?.fref}
              noMargins
              class={c.text}
            >
              <>{label}</>
              {p.required
                ? (
                  <sup
                    ref={fwd.required?.ref}
                    title='Required'
                    class={c.required}
                  >
                    *
                  </sup>
                )
                : null}
            </Text>
          )}
        <input ref={fref} class={c.input} {...p} />
      </label>
      {error
        ? (
          <Text
            fref={fwd.error?.fref}
            noMargins
            type='small'
            inheritColor
            class={c.error}
            nostyleAll={nostyleAll}
          >
            {error}
          </Text>
        )
        : null}
    </div>
  );
}
