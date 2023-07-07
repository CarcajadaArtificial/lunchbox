import setup, { iTextArea } from './setup.ts';
import { TEXT_TYPES } from '../../src/enums.ts';
import Text from '../Text/index.tsx';

export default function TextArea(props: Partial<iTextArea>) {
  const { c, maxWidth, label, error, ...p } = setup(props);

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
        <textarea class={c.input} {...p} />
      </label>
      {error ? (
        <Text noMargins inheritColor type={TEXT_TYPES.SMALL} class={c.error}>
          {error}
        </Text>
      ) : null}
    </div>
  );
}
