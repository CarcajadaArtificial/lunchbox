import Text from './Text.tsx';
import { iTextArea } from '../src/types/props.ts';
import setup from '../src/setup/TextArea.ts';
import { TEXT_TYPES } from '../mod.ts';

/**
 * @todo [!!] Choose a standard color for placeholders.
 */
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
