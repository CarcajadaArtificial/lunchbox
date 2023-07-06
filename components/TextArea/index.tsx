import Text from '../Text/index.tsx';
import { iTextArea } from '../../src/props.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import setup from './setup.ts';

export default function TextArea(props: Partial<iTextArea>) {
  const { c, refTextArea, maxWidth, label, error, ...p } = setup(props);

  return (
    <div class={c.container}>
      <label class={c.label}>
        <Text noMargins class={c.text}>
          {label}
          {p.required ? (
            <sup title="Required" class={c.required}>
              *
            </sup>
          ) : null}
        </Text>
        <textarea ref={refTextArea} class={c.input} {...p} />
      </label>
      {error ? (
        <Text noMargins inheritColor type={TEXT_TYPES.SMALL} class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
