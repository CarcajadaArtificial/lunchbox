import setup, { iTextArea } from './setup.ts';
import Text from '../Text/index.tsx';

export default function TextArea(props: Partial<iTextArea>) {
  const { c, fref, fwd, maxWidth, label, error, ...p } = setup(props);

  return (
    <div ref={fwd.container?.ref} class={c.container}>
      <label ref={fwd.label?.ref} class={c.label}>
        <Text fref={fwd.text?.ref} noMargins class={c.text}>
          {label}
          {p.required ? (
            <sup ref={fwd.text?.ref} title="Required" class={c.required}>
              *
            </sup>
          ) : null}
        </Text>
        <textarea ref={fref} class={c.input} {...p} />
      </label>
      {error ? (
        <Text fref={fwd.error?.ref} noMargins inheritColor type="small" class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
